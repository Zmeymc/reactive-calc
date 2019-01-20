
export default class StateMachine {
    constructor(states){
        this._states = states;
    }

    nextState(prevState,symbol){
        const next = this._states[prevState.state][symbol];
        if (next){
            const newState = {
                state: next.toState,
                value: next.apply(prevState.value,symbol)
            };
            return newState;
        }
        return prevState;
    };

}





