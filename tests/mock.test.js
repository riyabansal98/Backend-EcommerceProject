
//This function is basically iterating over the entire array items
//and passing all of array items as an arguement to callback function. 

function forEach(items, callback) {
    
    for(let i = 0; i < items.length; i++) {
        callback(items[i])
    }

    //callback(0)
    //callback(1)

}

/**
 * In order to test the above function, we need to mock the callback function
 * to test it
*/

const mockCallback = jest.fn(x => x + 7)

//function mockCallback(x) {
//     return x + 7
// }

forEach([0, 1], mockCallback)


test("testing the mock function", () => {

    //mockCallback.mock.calls -> Mockcallback function is called with which arguements
    //mockCallback.mock.calls -> [arg1, agr2] -> [0, 1]
    expect(mockCallback.mock.calls.length).toBe(2)
    expect(mockCallback.mock.results[0].value).toBe(7)
    expect(mockCallback.mock.results[1].value).toBe(8)

})
