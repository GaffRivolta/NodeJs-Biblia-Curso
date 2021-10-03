function greet(name){
    console.log('Hello ' + name)
}

// module.exports = greet; // Manera 1
module.exports = {
    greet,
    number: 77,
}