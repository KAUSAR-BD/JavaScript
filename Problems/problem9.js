// Question9:- You have a temperature value is 48 in Celsius. If the temperature is above 30, increase it by 5; if it is below 10, decrease it by 3; otherwise, keep it unchanged. Write a conditional program for this.

let temperature = 48;

if (temperature > 30) {

  temperature = temperature + 5;
  
} else if (temperature < 10) {

  temperature = temperature - 3;
}

console.log(temperature);
