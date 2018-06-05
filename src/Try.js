function Try(fnc) {

    const result = (function () {

        try {
            return Success(fnc());
        } catch (e) {
            return Failure(e);
        }

    })();

    // Return instance of Success or Failure depending on computation result
    return Object.freeze(Object.create( result instanceof Success ? Success.prototype : Failure.prototype, {
        map: {
            value: function (fnc) {
                // TODO: Co robi map?
                if (result instanceof Success) {
                    return Success(fnc(result.value));
                } else {
                    return result;
                }
            }
        }
    }));

}

Try.prototype = Object.freeze(Object.create(null));

function Success(val) {

    return Object.freeze(Object.create(Success.prototype, {

        value: {
            get: () => val
        }

    }));
}
Success.prototype = Object.freeze(Object.create(Try.prototype));

function Failure(exception) {

    return Object.freeze(Object.create(Failure.prototype, {

        exception: {
            get: () => exception
        }

    }));
}

Failure.prototype = Object.freeze(Object.create(Try.prototype));

export { Try };
export { Success };
export { Failure };
