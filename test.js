const toDollar = require('./fromEuroToDollar');
test('1 euro to be 1.07 dollars', () => {

   
   expect(toDollar(3.5)).toBe(3.745);
});

const toYen = require('./fromDollarToYen');
test('1 dollar to be 156.5 yen', () => {

   expect(toYen(1)).toBe(156.5);
})

const toPound = require('./fromYenToPound');
test('1 yen to be 0.87 pounds', () => {
   
   expect(toPound(1)).toBe(0.87);
})
