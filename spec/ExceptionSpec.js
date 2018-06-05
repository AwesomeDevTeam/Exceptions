const Exception = require("../dist/Exceptions.cjs").Exception;
const InvalidArgumentException = require("../dist/Exceptions.cjs").InvalidArgumentException;

// Suite
describe("Exception", function() {

    it("Exception constructor with invalid msg should throw Error", () => {


        expect(function() {

                Exception(1);

        }).toThrowError(InvalidArgumentException, "Expected `message` parameter to be a string");

    });


    it("Exception constructor with proper params should be an instance of Exception and Error", () => {

        const msg = "An exception",
            code = 1,
        ex = Exception(msg, code);

        expect(ex instanceof Exception).toBe(true);
        expect(ex instanceof Error).toBe(true);
        expect(ex.message).toEqual(msg);
        expect(ex.code).toEqual(code);

    });


    it("InvalidArgumentException constructor with proper params should be an instance of InvalidArgumentException and Exception and Error", () => {

        const msg = "An exception",
            ex = InvalidArgumentException(msg);

        expect(ex instanceof InvalidArgumentException).toBe(true);
        expect(ex instanceof Exception).toBe(true);
        expect(ex instanceof Error).toBe(true);
        expect(ex.message).toEqual(msg);

    });

});
