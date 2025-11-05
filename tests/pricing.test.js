"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pricing_1 = require("../src/pricing");
test('empty basket is zero', () => {
    expect((0, pricing_1.calculateTotal)([])).toBe(0);
});
test('single apple costs 35p', () => {
    expect((0, pricing_1.calculateTotal)(['Apple'])).toBe(35);
});
test('two apples and a banana', () => {
    expect((0, pricing_1.calculateTotal)(['Apple', 'Apple', 'Banana'])).toBe(35 * 2 + 20);
});
test('melons are buy one get one free', () => {
    expect((0, pricing_1.calculateTotal)(['Melon'])).toBe(50);
    expect((0, pricing_1.calculateTotal)(['Melon', 'Melon'])).toBe(50);
    expect((0, pricing_1.calculateTotal)(['Melon', 'Melon', 'Melon'])).toBe(100); // ceil(3/2)=2 paid => 2*50
    expect((0, pricing_1.calculateTotal)(['Melon', 'Melon', 'Melon', 'Melon'])).toBe(100); // 4 -> pay 2
});
test('limes are three for two', () => {
    expect((0, pricing_1.calculateTotal)(['Lime'])).toBe(15);
    expect((0, pricing_1.calculateTotal)(['Lime', 'Lime', 'Lime'])).toBe(30); // 3 for 2 -> pay 2*15
    expect((0, pricing_1.calculateTotal)(['Lime', 'Lime', 'Lime', 'Lime'])).toBe(45); // 4 -> 3 group => pay 3*15
    expect((0, pricing_1.calculateTotal)(['Lime', 'Lime', 'Lime', 'Lime', 'Lime', 'Lime'])).toBe(60); // 6 -> two groups -> pay 4*15
});
test('combination basket', () => {
    const items = ['Apple', 'Apple', 'Banana', 'Melon', 'Melon', 'Lime', 'Lime', 'Lime'];
    // apples 2*35=70, banana 20, melons 2-> pay 1*50, limes 3-> pay 2*15=30 => total=70+20+50+30=170
    expect((0, pricing_1.calculateTotal)(items)).toBe(170);
    expect((0, pricing_1.formatPenceAsGBP)(170)).toBe('£1.70');
});
test('unknown items are ignored', () => {
    expect((0, pricing_1.calculateTotal)(['Apple', 'Dragonfruit', 'Banana'])).toBe(35 + 20);
});
