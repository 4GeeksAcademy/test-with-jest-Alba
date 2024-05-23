//This is my function that sums two numbers
/*const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

module.exports = {sum};*/
let oneEuroIs = { "JPY": 156.5, "USD": 1.07, "GBP": 0.87, };

const toYen = (dollar) => {
    let yen = dollar * 156.5;
       return yen
      }
      


      module.exports = toYen;

const toDollar = (euros) => {
    let dollar = euros * 1.07;
       return dollar
      }
      
      module.exports = toDollar;


const toPound = (yen) => {
        let pound = yen * 0.87;
        return pound
    }
    
    module.exports = toPound;
    

