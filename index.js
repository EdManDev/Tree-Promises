// Three Promises
let eatUp = function () {
    return new Promise(function (resolve, reject) {
        resolve('Yes, she ate up her food');
    });
}
let takeWalkies = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + '.' + 'Then, we Went for a walk');
    });
}

let giveTreat = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + '.' + 'Okay, here is the promised yummy treat. ');
    });
}

// To ensure the right order of the three Promises the Promises must be nested as follows

    eatUp().then(function (result){
        return takeWalkies(result);  
    })

    .then(function (result){
        return giveTreat(result);
    })

    .then(function (result) {
        console.log(result +'' + ' Both happy now!');
    });
