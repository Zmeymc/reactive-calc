import StateMachine from "./statemachine";
import * as constants from "./constants";
import * as api from "./api";


export default class Calculator {
    constructor(onEvaluatedCallback) {
        this.SM = new StateMachine(constants.calculatorStates);
        this.__state = {state: 0, value: '0'};
        this.onEvaluatedCallback = onEvaluatedCallback;
    }

    onEvaluationRecieved(result){
        this.__state = {state: 0, value: '0'};
        if(result.state === 'OK')
            result.value.split('').forEach((s)=>this.input(s));
        else
            this.__state = {state: 0, value: 'E'};
        this.onEvaluatedCallback({state:result.state,value:this.__state.value});
    }

    input(symbol) {
        let requestState = 'OK';
        try {
            const term = this.parseSymbol(symbol);
            switch (term) {
                case 'clear':
                    this.__state = {state: 0, value: '0'};
                    break;
                case 'evaluate':
                    api.evaluate(this.__state.value,(result) => this.onEvaluationRecieved(result));
                    requestState = 'EVALUATING';
                    break;
                case 'invert':
                    const regex = /([\+\-\*\/]+)([^\+\-\*\/]*)$/;
                    const lastSymbols = this.__state.value.match(regex);
                    if (lastSymbols == null)
                        this.__state.value = '-' + this.__state.value;
                    else if (lastSymbols.index == 0)
                        this.__state.value = this.__state.value.substr(1);
                    else {
                        let termPos = lastSymbols[1].indexOf('-');
                        let arr = this.__state.value.split('');
                        if (termPos < 0) {
                            termPos = lastSymbols[1].indexOf('+');
                            if (termPos < 0)
                                arr.splice(lastSymbols.index + 1, 0, '-');
                            else
                                arr[lastSymbols.index + termPos] = '-';
                        } else if (lastSymbols[1].length === 1)
                            arr[lastSymbols.index + termPos] = '+';
                        else
                            arr[lastSymbols.index + termPos] = '';
                        this.__state.value = arr.join('');
                    }

                    break;
                default:
                    this.__state = this.SM.nextState(this.__state, term);
                    break;
            }
        }
        catch (e) {
            console.log(e);
            requestState = 'ERROR';
        }
        return {
            state:requestState,
            value:this.convertTerms(this.__state.value)
        };
    }


    parseSymbol(symbol) {
        switch (symbol) {
            case '÷':
                return '/';
            case 'x':
                return '*';
            case 'AC':
                return 'clear';
            case '=':
                return 'evaluate';
            case '+/-':
                return 'invert';
        }
        if (Array.apply(null, {length: 10})
            .map(Number.call, Number)
            .map(n => '' + n)
            .concat('+', '-', ',', '%')
            .indexOf(symbol) < 0)
            return undefined;
        return symbol;
    }

    convertTerms(terms) {
        return terms.split('/').join('÷')
            .split('*').join('x')
    }


}