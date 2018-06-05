const Try = require("../dist/Exceptions.cjs").Try;
const Success = require("../dist/Exceptions.cjs").Success;
const Failure = require("../dist/Exceptions.cjs").Failure;

// Suite
describe("Exception", function() {

    it("Try constructor with clean function should be instance of Try and Success and not to be instance of Failure", () => {

        function ok() {
            return "OK";
        }

        const success = Try(ok);

        expect(success instanceof Try ).toBe(true);
        expect(success instanceof Success ).toBe(true);
        expect(success instanceof Failure ).toBe(false);

    });


    it("Try constructor with dirty function should be instance of Try and Failure and not to be instance of Success", () => {

        function fail() {
            throw "fail!!!";
        }

        const success = Try(fail);

        expect(success instanceof Try ).toBe(true);
        expect(success instanceof Failure ).toBe(true);
        expect(success instanceof Success ).toBe(false);

    });


    it("Map of Success should be....", () => {

        function ok() {
            return "OK";
        }

        const success = Try(ok).map((res) => {
            expect(res).toBe("OK");
            return "OK MAPPED";
        });

        expect(success instanceof Success).toBe(true);
        expect(success.value).toBe("OK MAPPED");

    });



});
