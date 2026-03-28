// Question10:-  A student scored marks in three subjects: 65, 70, and 80. Calculate the average using `+` and `/`. If the average is above 75, print "Excellent"; otherwise, print "Keep trying".

const subject1 = 65;
const subject2 = 70;
const subject3 = 80;

const averageMarks = (subject1 + subject2 + subject3) / 3;

if (averageMarks < 75) {

 console.log("Excellent") ;

} else {

  console.log("Keep trying");

}
