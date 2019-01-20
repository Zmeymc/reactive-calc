export const getCalculationDataSkeleton = () =>{
    return{
        value: '0',
        currentNumber: '0',
        currentOperation:''
    }
};


export const input = (calcData,input,evaluate) => {
    calcData = calcData || getCalculationDataSkeleton();
    const element = parse(input);
    switch(element.type){
        case 'number':
            return addNumber(calcData,element.value);
        case 'operation':
            return applyOperation(calcData,element.value,evaluate);
    }

};


const parse = (element) => {
        return {
            type:(0<=element && element<=9)?'number':'operation',
            value: element
        }
};

const addNumber = (calcData,number) => {
    if(calcData.currentOperation.length===0 && calcData.currentNumber.length===0)
        return calcData;

    if(calcData.currentNumber !== '0')
        return {
            value: calcData.value + number,
            currentNumber: calcData.currentNumber + number,
            currentOperation:''
        };

    return {
        value: number,
        currentNumber:  number,
        currentOperation:''
    };
};

const applyOperation = (calcData, operation,evaluate) => {
    switch (operation) {
        case 'clear':
            return getCalculationDataSkeleton();

        case 'invert':
            if(calcData.value == 0) //== because includes 0|0.|0.000 etc
                return calcData;
            return {
                value: calcData.value[0]==='-'
                    ? calcData.value.substr(1)
                    : '-' + calcData.value,
                currentNumber: calcData.currentNumber,
                currentOperation:calcData.currentOperation
            };

        case 'evaluate':
            evaluate(calcData);
            return calcData;
        case '-':
            if(calcData.currentOperation.includes('-'))
                return calcData;

            calcData.currentNumber = '';
            if(calcData.currentOperation === '+'){
                calcData.currentOperation = operation;
                calcData.value = calcData.value.replace(endingRegex(calcData.currentOperation.length) ,operation);
            }
            else
            {
                calcData.currentOperation = calcData.currentOperation + operation;
                calcData.value = calcData.value + operation;
            }
            return calcData;



        case '+':
        case 'x':
        case '÷':
        case '%':
            calcData.currentNumber = '';
            if(calcData.currentOperation.length > 0)
                calcData.value = calcData.value.replace(endingRegex(calcData.currentOperation.length),operation);
            else
                calcData.value = calcData.value + operation;
            calcData.currentOperation = operation==='%'?'':operation;
            return calcData;

        default:
            return calcData;
    }
};

const endingRegex = (n)=> new RegExp(".{"+n+","+n+"}$",'g');


