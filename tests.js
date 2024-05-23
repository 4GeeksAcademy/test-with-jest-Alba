 const {toDollar, toYen, toPound} = require('./app.js');
test('1 euro to be 1.07 dollars', '1 dollar to be 156.5 yen', '1 yen to be 0.87 pounds', () => {

   
   expect(toDollar(1)).toBe(1.07);
   expect(toYen(1)).toBe(156.5);
   expect(toPound(1)).toBe(0.87);


});




