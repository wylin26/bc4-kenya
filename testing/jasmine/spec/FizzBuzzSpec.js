//describe bloke is a way of structuring the test

describe("FizzBuzz test", function () {

it("fizz_buzz(3n)", function () {

	expect(fizz_buzz(3)).toBe("fizz");
	expect(fizz_buzz(33)).toBe("fizz");
	expect(fizz_buzz(66)).toBe("fizz");
	});

it("fizz_buzz(5n)", function () {
	expect(fizz_buzz(5)).toBe("buzz");
	expect(fizz_buzz(-25)).toBe("buzz");
	expect(fizz_buzz(3700)).toBe("buzz");
	});

it("fizz_buzz(15n)", function () {
	expect(fizz_buzz(15)).toBe("FizzBuzz");
	expect(fizz_buzz(90)).toBe("FizzBuzz");
	expect(fizz_buzz(-150)).toBe("FizzBuzz");
	});

it("Non multiples of 3 and/or 5", function () {
	expect(fizz_buzz(29)).toBe(29);
	expect(fizz_buzz(46)).toBe(46);
	expect(fizz_buzz(38)).toBe(38);
	});
it("For non-numbers", function () {
	expect(fizz_buzz("be")).toBe(false);
	expect(fizz_buzz("wayua")).toBe(false);
});

});
 