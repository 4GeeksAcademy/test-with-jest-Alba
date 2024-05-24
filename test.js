const {toDollar, toYen, toPound} = require('./app.js');
test('1 euro to be 3.745 dollars', () =>{
   expect(toDollar(1)).toBe(3.745);

}) 
test('1 dollar to be 146.26 yen', ()=>{
   expect(toYen(1)).toBe(146.26);

})
test('1 yen to be 0.01 pounds', ()=>{
   
   expect(toPound(1)).toBe(0.01);

})
