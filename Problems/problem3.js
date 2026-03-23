//QUESTION3:-  A bus can carry 80 people. 57 people are already on the bus. At the next stop, 12 more people get on. How many seats are still empty?

const totalBusSeats = 80;
const totalPeople = 57;
const nextStopPeople = 12;

const seatUses = totalPeople + nextStopPeople;

const remainingSeats = totalBusSeats - seatUses;

console.log("Total Remaining Seats:", remainingSeats);
