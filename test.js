/*const {fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');
test('1 euro to be 3.745 dollars', () =>{
   expect(fromEuroToDollar(1)).toBe(3.745);

}) 
test('1 dollar to be 146.26 yen', ()=>{
   expect(fromDollarToYen(1)).toBe(146.26);

})
test('1 yen to be 0.01 pounds', ()=>{
   
   expect(fromYenToPound(1)).toBe(0.01);

})*/
test("One euro should be 1.07 dollars", function() {
  
   const { fromEuroToDollar } = require('./app.js');
   const valueDollar = 3.5 
   
   const dollars = fromEuroToDollar(valueDollar);

   
   const expected = valueDollar * 1.07;

  
   expect(dollars).toBe(expected); 
})



test("One dollar should be 156.5 yenes", function() {
  
   const { fromDollarToYen  } = require('./app.js');

   
   const yenes = fromDollarToYen (1);

   
   const expected = 146.26;

  
   expect(yenes).toBe(expected); 
})


test("One yen should be 0.006 pound", function() {
  
   const { fromYenToPound } = require('./app.js');

   
   const pounds = fromYenToPound (1);

   
   const expected = 0.006;

  
   expect(pounds).toBe(expected); 
})