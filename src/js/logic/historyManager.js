import * as api from "./api";
import * as sessions from "./sessions";
import {Errors} from "./constants";

export default class HistoryManager {
    constructor(store){
        this.store = store;
        this.identifier = sessions.getCookie('id');
    }

    setLoading(method,value){
        this.store.dispatch({type:value?'START_LOADING':'STOP_LOADING',value:method});
    }

    pushError(msg, description){
        this.store.dispatch({type: 'ADD_ERROR', value: msg});
        if(description)
            console.log(description);
    }


    async pushHistory(expression){
        await this.setLoading('pushHistory',true);
        try {

            const id = await this.getIdentifier();
            let error;
            await api.pushHistory(id, expression)
                .catch((e) => { error = e; });
            if(error!==undefined){
                this.pushError(Errors.PushHistory);
                return;
            }
            this.store.dispatch({type: 'ADD_HISTORY', value: expression})
        }
        catch (e) {
            this.pushError(Errors.Unknown, e);
        }
        finally {
            this.setLoading('pushHistory',false);
        }
    }


    async getHistory(){
        await this.setLoading('getHistory',true);
        try {
            let error;
            const id = await this.getIdentifier();
            const response = await api.getHistory(id)
                .catch((e) => { error = e; });
            if(error!==undefined){
                this.pushError(Errors.GetHistory);
                return;
            }
            const values = JSON.parse(response)._source.values;
            this.store.dispatch({type: 'UPDATE_HISTORY', value: values});
        }
        catch (e) {
            this.pushError(Errors.Unknown, e);
        }
        finally {
            this.setLoading('getHistory',false);
        }
    }


    async createHistory(){
        await this.setLoading('createHistory',true);
        try {
            let error;
            const response = await api.createHistory()
                .catch((e) => { error = e; });
            if (error!==undefined) {
                this.pushError(Errors.GetIdentifier);
                return;
            }
            this.identifier = JSON.parse(response)._id;
            sessions.putCookie('id', this.identifier);
        }
        catch (e) {
            this.pushError(Errors.Unknown,e);
        }
        finally {
            this.setLoading('createHistory',false);
        }
    }


    async getIdentifier() {
        if (!this.identifier)
            await this.createHistory();
        return this.identifier
    }

}