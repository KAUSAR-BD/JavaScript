//QUESTION1:- A factory produced 12,450 widgets this month. They shipped 7,835 widgets to clients but received 1,250 defective widgets back from a client. How many widgets are currently in the factory?

const productionWidgets = 12450;
const shippedWidgets = 7835;

const remainingWidgets = productionWidgets - shippedWidgets;

const defectiveWidgets = 1250;
const totalRemainingWidgets = remainingWidgets + defectiveWidgets;

console.log("Total remaining in factory with defective:", totalRemainingWidgets);
