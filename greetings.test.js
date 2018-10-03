// greeting.test.js
const greeting = require('./greeting');
test("returns greeting with custom name", () => {
	expect(greeting("Mei")).toBe("Hello, Mei!");
});
test("returns greeting with custom name", () => {
	expect(greeting("Oli")).toBe("Hello, Oli!");
});

