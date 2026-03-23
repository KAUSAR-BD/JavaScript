//QUESTION4:- A bookstore had 15,678 books. 9,345 books were sold, and 2,000 new books were delivered. How many books are in the store now?

const totalBooks = 15678;
const soldBooks = 9345;

const totalSold = totalBooks - soldBooks;

const newDelivered = 2000;

const remainingBooks = totalSold + newDelivered;

console.log("Total remaining books in store:", remainingBooks);