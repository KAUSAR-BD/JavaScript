//QUESTION6:- You have 45 apples and you want to divide them equally among 6 friends. After giving each friend the same number of apples, how many apples will be left? Write a program to calculate both the number each friend gets and the remainder using %.

const totalApples = 45;
const totalFriends = 6;

const eachFriendsGets = Math.floor(totalApples / totalFriends);
const RemainingApples = totalApples % totalFriends;

console.log("Each friend gets apples:", eachFriendsGets);
console.log("Remaining apples:", RemainingApples);