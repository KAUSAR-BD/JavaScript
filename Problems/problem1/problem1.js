//QUESTION1:- A factory produced 12,450 widgets this month. They shipped 7,835 widgets to clients but received 1,250 defective widgets back from a client. How many widgets are currently in the factory?

const productionWidgets = 12450;
const shippedWidgets = 7835;

const remainingWidgets = productionWidgets - shippedWidgets;

const defectiveWidgets = 1250;
const totalRemainingWidgets = remainingWidgets + defectiveWidgets;
// console.log("Total remaining in factory with defective:", totalRemainingWidgets);

//QUESTION2:- A company earned $125,000 last month. They spent $78,345 on expenses but received $12,500 from a late payment. How much money do they have now?

const lastMonthEarning = 125000;
const companyExpenses = 78345;

const remainingBalance = lastMonthEarning - companyExpenses;

const latePaymentReceived = 12500;
const totalCompanyBalance = remainingBalance + latePaymentReceived;
// console.log(
//   "Remaining balance after late payment receivied: $",
//   totalCompanyBalance,
// );

//QUESTION3:-  A bus can carry 80 people. 57 people are already on the bus. At the next stop, 12 more people get on. How many seats are still empty?

const totalBusSeats = 80;
const totalPeople = 57;
const nextStopPeople = 12;

const seatUses = totalPeople + nextStopPeople;

const remainingSeats = totalBusSeats - seatUses;

// console.log("Total Remaining Seats:", remainingSeats);
