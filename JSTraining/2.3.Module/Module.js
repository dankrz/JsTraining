var MODULE = (function () {
	var my = {},
		privateVariable = 1;

	function privateMethod() {
		// ...
	}

	return {moduleProperty: 1,
            moduleMethod: function () {
            // ...
        }
    };
}());