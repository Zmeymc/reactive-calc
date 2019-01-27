import StateMachine from "./statemachine";
import * as constants from "./constants";
import historyManager from "./historyManager";


export default class Calculator {
    constructor(store) {
        this.SM = new StateMachine(constants.calculatorStates);
        this.store = store;
        this.__state = {state: 0, value: '0'};
        this.HM = new historyManager(store);
        this.HM.getHistory();
    }


    async input(symbol) {
        const prevValue = this.__state.value;
        let requestState = 'OK';
        try {
            const term = this.parseSymbol(symbol);
            switch (term) {
                case 'clear':
                    this.clear();
                    break;
                case 'evaluate':
                    const expression = this.__state.value;
                    requestState = this.evaluate();
                    this.HM.pushHistory(`${expression}=${this.__state.value}`);
                    break;
                case 'invert':
                    this.invert();
                    break;
                default:
                    this.__state = this.SM.nextState(this.__state, term);
                    break;
            }
        }
        catch (e) {
            requestState = 'ERROR';
        }
        if(requestState ==='ERROR')
            this.__state = {state: -1, value: 'Error'};

        this.updateExpression({
            prevValue: prevValue,
            state:requestState,
            value:requestState==="OK"?
                this.convertTerms(this.__state.value):
                this.__state.value
        });
    }

    updateExpression(expression){
        this.store.dispatch({type:'UPDATE_EXPRESSION',value:expression});
    }

    parseSymbol(symbol) {
        switch (symbol) {
            case '÷':
                return '/';
            case 'x':
                return '*';
            case ',':
                return'.';
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
            .split('.').join(',')
    }


    clear(){
        this.__state = {state: 0, value: '0'};
    }


    evaluate(){
        const result = eval(this.__state.value.split('%').join('*0.01'));
        if(isFinite(result)) {
            this.__state = {state: result ? 1 : 0, value: result.toString()};
            return 'OK';
        }
        else {
            this.__state = {state: -1, value: 'Error'};
            return 'ERROR';
        }
    }

    invert(){
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

    }

}