export const ButtonDefinitions= [
    [
        {
            style:'c-operation',
            value:'AC'
        },
        {
            style:'c-operation',
            value:'+/-'
        },
        {
            style:'c-operation',
            value:'%'
        },
        {
            style:'b-operation',
            value:'÷'
        }
    ],
    [
        {
            style:'number',
            value:'7'
        },
        {
            style:'number',
            value:'8'
        },
        {
            style:'number',
            value:'9'
        },
        {
            style:'b-operation',
            value:'x'
        }
    ],
    [
        {
            style:'number',
            value:'4'
        },
        {
            style:'number',
            value:'5'
        },
        {
            style:'number',
            value:'6'
        },
        {
            style:'b-operation',
            value:'-'
        }
    ],
    [
        {
            style:'number',
            value:'1'
        },
        {
            style:'number',
            value:'2'
        },
        {
            style:'number',
            value:'3'
        },
        {
            style:'b-operation',
            value:'+'
        }
    ],
    [
        {
            style:'number double-width',
            value:'0'
        },
        {
            style:'number',
            value:','
        },
        {
            style:'b-operation',
            value:'='
        }
    ]
];


const endingRegex = (n)=> new RegExp(".{"+n+","+n+"}$",'g');
const append = (value,sym) => value + sym;
const replace = (value,sym) => value.replace(endingRegex(1) ,sym);
const replace2sym = (value,sym) => value.replace(endingRegex(2) ,sym);
const appendAfterZero = (value,sym) => value + '0' + sym;
export const calculatorStates = {
    0:{
        '1':{toState:1, apply:replace},
        '2':{toState:1, apply:replace},
        '3':{toState:1, apply:replace},
        '4':{toState:1, apply:replace},
        '5':{toState:1, apply:replace},
        '6':{toState:1, apply:replace},
        '7':{toState:1, apply:replace},
        '8':{toState:1, apply:replace},
        '9':{toState:1, apply:replace},
        '.':{toState:2, apply:append},
        '+':{toState:5, apply:append},
        '-':{toState:6, apply:append},
        '*':{toState:7, apply:append},
        '/':{toState:7, apply:append}
    },
    1:{
        '0':{toState:1, apply:append},
        '1':{toState:1, apply:append},
        '2':{toState:1, apply:append},
        '3':{toState:1, apply:append},
        '4':{toState:1, apply:append},
        '5':{toState:1, apply:append},
        '6':{toState:1, apply:append},
        '7':{toState:1, apply:append},
        '8':{toState:1, apply:append},
        '9':{toState:1, apply:append},
        '.':{toState:2, apply:append},
        '+':{toState:5, apply:append},
        '-':{toState:6, apply:append},
        '*':{toState:7, apply:append},
        '/':{toState:7, apply:append},
        '%':{toState:4, apply:append}
    },
    2:{
        '0':{toState:3, apply:append},
        '1':{toState:3, apply:append},
        '2':{toState:3, apply:append},
        '3':{toState:3, apply:append},
        '4':{toState:3, apply:append},
        '5':{toState:3, apply:append},
        '6':{toState:3, apply:append},
        '7':{toState:3, apply:append},
        '8':{toState:3, apply:append},
        '9':{toState:3, apply:append},
        '+':{toState:5, apply:replace},
        '-':{toState:6, apply:replace},
        '*':{toState:7, apply:replace},
        '/':{toState:7, apply:replace},
        '%':{toState:4, apply:replace}
    },
    3:{
        '0':{toState:3, apply:append},
        '1':{toState:3, apply:append},
        '2':{toState:3, apply:append},
        '3':{toState:3, apply:append},
        '4':{toState:3, apply:append},
        '5':{toState:3, apply:append},
        '6':{toState:3, apply:append},
        '7':{toState:3, apply:append},
        '8':{toState:3, apply:append},
        '9':{toState:3, apply:append},
        '+':{toState:5, apply:append},
        '-':{toState:6, apply:append},
        '*':{toState:7, apply:append},
        '/':{toState:7, apply:append},
        '%':{toState:4, apply:append}
    },
    4:{
        '+':{toState:5, apply:append},
        '-':{toState:6, apply:append},
        '*':{toState:7, apply:append},
        '/':{toState:7, apply:append},
        '%':{toState:4, apply:append}
    },
    5:{
        '0':{toState:0, apply:append},
        '1':{toState:1, apply:append},
        '2':{toState:1, apply:append},
        '3':{toState:1, apply:append},
        '4':{toState:1, apply:append},
        '5':{toState:1, apply:append},
        '6':{toState:1, apply:append},
        '7':{toState:1, apply:append},
        '8':{toState:1, apply:append},
        '9':{toState:1, apply:append},
        '.':{toState:2, apply:appendAfterZero},
        '-':{toState:6, apply:replace},
        '*':{toState:7, apply:replace},
        '/':{toState:7, apply:replace},
    },
    6:{
        '0':{toState:0, apply:append},
        '1':{toState:1, apply:append},
        '2':{toState:1, apply:append},
        '3':{toState:1, apply:append},
        '4':{toState:1, apply:append},
        '5':{toState:1, apply:append},
        '6':{toState:1, apply:append},
        '7':{toState:1, apply:append},
        '8':{toState:1, apply:append},
        '9':{toState:1, apply:append},
        '.':{toState:2, apply:appendAfterZero},
        '+':{toState:5, apply:replace},
        '*':{toState:7, apply:replace},
        '/':{toState:7, apply:replace},
    },
    7:{
        '0':{toState:0, apply:append},
        '1':{toState:1, apply:append},
        '2':{toState:1, apply:append},
        '3':{toState:1, apply:append},
        '4':{toState:1, apply:append},
        '5':{toState:1, apply:append},
        '6':{toState:1, apply:append},
        '7':{toState:1, apply:append},
        '8':{toState:1, apply:append},
        '9':{toState:1, apply:append},
        '.':{toState:2, apply:appendAfterZero},
        '+':{toState:5, apply:replace},
        '-':{toState:8, apply:append},
        '*':{toState:7, apply:replace},
        '/':{toState:7, apply:replace},
    },
    8:{
        '0':{toState:0, apply:append},
        '1':{toState:1, apply:append},
        '2':{toState:1, apply:append},
        '3':{toState:1, apply:append},
        '4':{toState:1, apply:append},
        '5':{toState:1, apply:append},
        '6':{toState:1, apply:append},
        '7':{toState:1, apply:append},
        '8':{toState:1, apply:append},
        '9':{toState:1, apply:append},
        '.':{toState:2, apply:appendAfterZero},
        '+':{toState:5, apply:replace2sym},
        '*':{toState:7, apply:replace2sym},
        '/':{toState:7, apply:replace2sym},
    }

};
