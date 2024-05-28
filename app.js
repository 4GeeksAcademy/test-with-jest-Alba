
let oneEuroIs = { "JPY": 156.5, "USD": 1.07, "GBP": 0.87, };

const fromEuroToDollar = (euros) => {
   let dollar = euros * oneEuroIs.USD;
   
   console.log(dollar);
   return dollar 
}

const fromDollarToYen = (dollar) => {
   let euro = dollar / oneEuroIs.USD;
   let yen = euro * oneEuroIs.JPY;
   console.log(yen);
   return parseFloat(yen.toFixed(2))
}


const fromYenToPound = (yen) => {
   let euro = yen / oneEuroIs.JPY;
   let pound = euro * oneEuroIs.GBP;
   console.log(pound);
   return parseFloat(pound.toFixed(3))
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound}


