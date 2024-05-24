
let oneEuroIs = { "JPY": 156.5, "USD": 1.07, "GBP": 0.87, };


const toDollar = (euros) => {
   let dollar = euros * 1.07;
   dollar = dollar * 3.5;
   console.log(dollar);
   return dollar 
}

const toYen = (dollar) => {
   let euro = dollar / 1.07;
   let yen = euro * 156.5;
   console.log(yen.toFixed(2));
   return Number( yen.toFixed(2))
}


const toPound = (yen) => {
   let euro = yen / 156.5;
   let pound = euro * 0.87;
   console.log(pound.toFixed(2));
   return Number (pound.toFixed(2))
}
toDollar();
module.exports = {toDollar, toYen, toPound}


