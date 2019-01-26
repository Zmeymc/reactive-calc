import * as api from "./api";
import * as sessions from "./sessions";

export default class HistoryManager {
    constructor(store){
        this.store = store;
        this.identifier = sessions.getCookie('id');
    }


    async pushHistory(expression){
        const response = await api.pushHistory(await this.getIdentifier(),expression);
        this.store.dispatch({type:'SET_HISTORY',value:response})
    }

    async getHistory(){
        const response = await api.getHistory(this.getIdentifier());
        this.store.dispatch({type:'SET_HISTORY',value:response})
    }


    async createHistory(){
        const response = await api.createHistory();
        this.identifier = JSON.parse(response)._id;
        sessions.putCookie('id', this.identifier);
    }

    async getIdentifier() {
        if (!this.identifier)
            await this.createHistory();
        return this.identifier
    }

}