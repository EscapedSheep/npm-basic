import {transform} from "../src/romanizer";

describe("romanizer", () => {
    it("should return X when input a number", () => {
        const transformed = transform(10);
        expect(transformed).toEqual("X");
    })
})