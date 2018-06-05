// !!! Caution !!! Classes Exception and InvalidArgumentException must be in one file becouse of circular dependency

function Exception(message, code) {

    if (typeof message !== "string") {
        throw InvalidArgumentException("Expected `message` parameter to be a string");
    }

    if (Number.isInteger(code) === false) {
        throw InvalidArgumentException("Expected `code` parameter to be an integer");
    }

    return Object.freeze(Object.create(Exception.prototype, /** @lends Exception.prototype */ {
        message: {
            value: message
        },
        code: {
            value: code
        }
    }));
}

Exception.prototype = Object.freeze(Object.create(Error.prototype));

function InvalidArgumentException(message) {

    return Object.freeze(Object.create(InvalidArgumentException.prototype,{
        message: {
            value: message
        }
    }));

}

InvalidArgumentException.prototype = Object.freeze(Object.create(Exception.prototype,{}));

export { InvalidArgumentException };
export { Exception };
