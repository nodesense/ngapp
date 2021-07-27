// spec - specification
// jasmine - library, BDD libray - Behaviour Driven Development
// karma - tool - unit test run time
        // run the test cases on chrome, firefox, etc
        // test runs inside browser, all browser features apis, localStorage..

// jasmine 
    // describe - test suite, collection of test cases
    //  it - actual test case/specification
        // it should add two positive numbers
        // it should add two negative numbers
        // it shoudl add one positive and one negative numbers

    // expect - expectation

//        your code/actual (1 + 1) = expected result (2)

function add(a, b) { return a + b}

fdescribe("Math Tests", () => {
    it ("should add two positive numbers", () => {
        // toBe comparing values/primitive, ref comparion
        expect (add (0, 1)).toBe(1)
        expect (add (1, 3)).toBe(4)
        expect (add (0, 5)).toBe(5)
    })
})



fdescribe("BeforeAndAfter", () => {

    beforeEach(() => {
            // shall be run before running any test case it
            // run fo revery test case
            // test initialization, create object, create test component modules etc
            // reusable test setup for all test cases
            console.log("****beforeEach") 
    })

    afterEach(() => {
        // shall be run after running test case, after it completion
        // cleanup memory, local storage etc resources
        console.log("****afterEach")
    })

    it ("it should add two negative numbers", () => {
        // toBe comparing values/primitive, ref comparion
        console.log("****inside it should add two negative numbers") 
        expect (add (-1, -3)).toBe(-4) 
    })

    it ("it shoudl add one positive and one negative numbers", () => {
        // toBe comparing values/primitive, ref comparion
        console.log("****inside it shoudl add one positive and one negative numbers") 
        expect (add (1, -3)).toBe(-2) 
    })
})

// async test 
// a promise, timer/callbacks

fdescribe("async test", () => {
    console.log("------Async start")
    // callBack is provided by karma, once your test over
    //  you call doneCallback
    it ("add two numbers after 10 seconds", (doneCallback) => {
        console.log("------inside timer")
        setTimeout( () => {
            expect(add(1, 1)).toBe(2)
            // test is actually done here
            doneCallback() // to inform karma that test is officially over
        }, 3500)
    })
    console.log("------Async end") // <-- exit , karmas thinks that test is over
})


// karma is configured 5 second for each test case to max wait
fdescribe("async test delayed executions", () => {
    console.log("------Async start")
    // callBack is provided by karma, once your test over
    //  you call doneCallback
    xit ("add two numbers after 10 seconds", (doneCallback) => {
        console.log("------inside timer")
        setTimeout( () => {
            expect(add(1, 1)).toBe(2)
            // test is actually done here
            doneCallback() // to inform karma that test is officially over
        }, 10000)
    }, 20000) // 20000 is something test case informing karma that i need 20 second to complete
    console.log("------Async end") // <-- exit , karmas thinks that test is over
})

// es6 with async

fdescribe("es7 async keyword", () => {
    console.log("------Async start")
    // callBack is provided by karma, once your test over
    //  you call doneCallback

    function oddOrEven(n) {
        return new Promise( (resolve, reject) => {
                if (n % 2 == 0) return resolve(true)
                else return reject(false)
        })
    }

    it ("should be  even", async () => {
        const result = await oddOrEven(10)
        expect(result).toBe(true)
    }) 

    it ("should be  odd", async () => {
        try {
            const result = await oddOrEven(11)
            expect(result).toBeFalse()
        }catch (error){
            // we expect promise error
            expect(error).toBe(false)
        }
    }) 

    console.log("------Async end") // <-- exit , karmas thinks that test is over
})