
function PromiseFunc() {

    return new Promise((resolve, reject) => {
        resolve("Vishwa")
    })
}

test("testing promises", () => {
    return PromiseFunc()
    .then((msg) => {
        expect(msg).toBe("Vishwa")
    })
})

