 const {toDollar, toYen, toPound} = require('./app.js');
test('1 euro to be 1.07 dollars', () =>{
   expect(toDollar(1)).toBe(1.07);

}) 
test('1 dollar to be 146.26 yen', ()=>{
   expect(toYen(1)).toBe(146.26);

})
test('1 yen to be 0.01 pounds', ()=>{
   
   expect(toPound(1)).toBe(0.01);

})








