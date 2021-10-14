// Your code here
// const mondayWork = function (input){
//     switch (typeof input) {
//         case 'string':
//             return `This Monday, I will ${input}.`
//         default:
//             return 'This Monday, I will go to the office.'
//     }
// }

function saturdayFun(action = "roller-skate"){
    return `This Saturday, I want to ${action}!`
}

const mondayWork = function(action = "go to the office"){
    return `This Monday, I will ${action}.`
}

function wrapAdjective(flair = "*"){
    return function(quality = "special"){
        return `You are ${flair}${quality}${flair}!`
    }
}