const toDollar = require('./fromEuroToDollar');
test('1 euro to be 1.07 dollars', () => {

   
   expect(toDollar(3.5)).toBe(3.745);
});
