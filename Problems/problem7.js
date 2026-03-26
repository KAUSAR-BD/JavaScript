//QUESTION7:- A shop sells pens at 12 taka each. If a customer has 200 taka, determine how many pens they can buy and how much money will remain. Use division and modulo, and print a message if they cannot buy at least one pen.

const customerMoney = 200;
const sellPrice = 12;

const canGetPen = Math.floor(customerMoney / sellPrice);
const moneyRemain = customerMoney % sellPrice;

if (canGetPen < 1) {
  console.log("you can't buy even one pen");
} else {
  console.log("Pens:", canGetPen);
  console.log("Remaining Money:", moneyRemain);
}
