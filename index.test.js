// import {divide} from "./index";

import {textToCode} from "./index";
import {it, expect} from "@jest/globals";

it ("translate letter A to morse code .-",() => {
    const result = textToCode("A");
    expect(result).toBe(".-");
});

it ("translate letter A to morse code .-",() => {
    const result = textToCode("a");
    expect(result).toBe(".-");
});

it ("translate word 'SOS' to morse code ...---...",() => {
    const result = textToCode("SOS");
    expect(result).toBe("...---...");
});

it ("translate greeting 'Hi ya!' to morse code ....../-.--.-#",() => {
    const result = textToCode("Hi ya!");
    expect(result).toBe("....../-.--.-#");
});

// it("multiply throws an error is numbers aren't used", () => {
//     const error = new Error("both parameters must be numbers");
//     expect(() => multiply("number one",32)).toThrow(error);
// });