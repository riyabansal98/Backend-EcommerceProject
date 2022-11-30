
//Asynchronous Code
function fetchData(callback) {
    setTimeout( () => {
        callback("Vishwa")
    }, 2000)
}


//To Test: Whether the callback function was actually called
// or not. 

//Jest -> synchronous code

//When writing javascript codes, most of the times we write code
//asynchronously. 
//In the case where you have code that runs asynchronously, 
//Jest will need to know

//Don't do this
// test('callback code', () => {

//     function callback(data) {
//         expect(data).toBe("Vishwa")
//     }
    
//     fetchData(callback)
// })

//done()

test('callback code', done => {

    function callback(data) {
        expect(data).toBe("Vishwa")
        done();
    }

    fetchData(callback)
});


function addAsync(a, b, callback) {
    
    setTimeout(() => {
      const result = a + b;
      callback(result);
    }, 4000)
}

// test('add numbers async', done => {
    
//     function callback(result) {
//         expect(result).toBe(15)
//         done();
//     }

//     addAsync(10, 5, callback);
// })
