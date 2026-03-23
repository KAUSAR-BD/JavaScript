//QUESTION2:- A company earned $125,000 last month. They spent $78,345 on expenses but received $12,500 from a late payment. How much money do they have now?

const lastMonthEarning = 125000;
const companyExpenses = 78345;

const remainingBalance = lastMonthEarning - companyExpenses;

const latePaymentReceived = 12500;
const totalCompanyBalance = remainingBalance + latePaymentReceived;

console.log(
  "Remaining balance after late payment receivied: $",
  totalCompanyBalance,
);
