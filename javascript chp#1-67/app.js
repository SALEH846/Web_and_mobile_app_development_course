// Chapter # 21 - 25
// Task 1
var first_name = prompt("Enter Your first name");
var last_name = prompt("Enter Your last name");
var full_name = first_name + " " + last_name;
document.write(full_name);

// Task 2
var favPhone = prompt("Enter the name of your favourite phone");
document.write("My favourite phone: " + favPhone + "<br>");
document.write("Length of String: " + favPhone.length);

// Task 3
var str = prompt("Enter any string containing letter 'n'");
document.write("String: " + str + "<br>");
document.write("Index of 'n': " + str.indexOf('n'));

// Task 4
var str = "Hello World";
document.write("String: " + str + "<br>");
document.write("Last index of 'l': " + str.lastIndexOf('l'));

// Task 5
var str = "Pakistan";
document.write("String: " + str + "<br>");
document.write("Character at index 3: " + str.charAt(3));

// Task 6
var first_name = prompt("Enter Your first name");
var last_name = prompt("Enter Your last name");
var full_name = first_name.concat(' ' + last_name);
document.write(full_name);

// Task 7
var str = "Hyderabad";
document.write("City: " + str + "<br>");
document.write("After replacement: " + str.replace('Hyder', 'Islam'));

// Task 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write(message.replace(/and/g, "&"));

// Task 9
var value = "472";
document.write("Value: " + value + "<br>");
document.write("Type: " + typeof value + "<br>");
var value = Number(value);
document.write("Value: " + value + "<br>");
document.write("Value: " + typeof value + "<br>");

// Task 10
var userInput = prompt("Enter any string in lowercase");
document.write("User Input: " + userInput + "<br>");
document.write("Upper Case: " + userInput.toUpperCase());

// Task 11
var userInput = prompt("Enter any string in lowercase");
document.write("User Input: " + userInput + "<br>");
var initial = userInput.slice(0,1).toUpperCase();
var final = initial.concat(userInput.slice(1,));
document.write("Upper Case: " + final);

// Task 12
var num = 35.36;
document.write("Number: " + num + "<br>");
var num = num.toString().replace(".", "");
document.write("Result: " + num)

// Task 13
var userName = prompt("Enter your name");
if ((userName.includes("@")) || (userName.includes("!")) || (userName.includes(".")) || (userName.includes(","))) {
    alert("Enter a valid user name!");
}

// Task 14
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter the item you wan to order");
var flag = false;
userInput = userInput.toLowerCase();
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === userInput) {
        alert(userInput + " is available in our bakery!");
        flag = true;
        break;
    }
}
if (flag === true) {

}
else {
    alert("This item is not available in our bakery");
}

// Task 15
var userPassword = prompt("Enter password");
var password = /^\d+$/;
if (!password.test(userPassword.value)) {
    alert("Thanks!");
}
else {
    alert("Please enter a valid password!");
}

// Task 16
var university = "University of Karachi";
var arr = university.split("");
for (var i = 0; i < university.length; i++) {
    document.write(arr[i] + "<br>");
}

// Task 17
var userInput = prompt("Enter any word");
var lngth = userInput.length;
document.write("User input: " + userInput + "<br>");
document.write("Last Character of input: " + userInput[lngth - 1]);

// Task 18
var text = "the quick brown fox jumps over the lazy dog";
var i = (text.match(/the/g).length);
document.write("Text: " + text + "<br>");
document.write("There are " + i + " occurrence(s) of the word 'the'");


                            // Chapter # 26 - 30
// Task 1
var number = prompt("Enter any floating point number");
document.write("Number: " + number + "<br>")
document.write("Round off value: " + Math.round(number) + "<br>")
document.write("Floor value: " + Math.floor(number) + "<br>")
document.write("Ceil value: " + Math.ceil(number))

// Task 2
var number = prompt("Enter any negative floating point number");
document.write("Number: " + number + "<br>");
document.write("Round off value: " + Math.round(number) + "<br>");
document.write("Floor value: " + Math.floor(number) + "<br>");
document.write("Ceil value: " + Math.ceil(number));

// Task 3
var number = prompt("Enter any number");
document.write("The absolute value of " + number + " is " + Math.abs(number));

// Task 4
var randomNumber = Math.floor(((Math.random() * 6) + 1));
document.write("Random dice value: " + randomNumber);

// Task 5
var randomNumber = Math.floor(((Math.random() * 2) + 1));
document.write("Random coin number: " + randomNumber + "<br>");
if (randomNumber === 2) {
    document.write("Random coin value: Heads");
}
else if (randomNumber === 1) {
    document.write("Random coin value: Tails");
}

// Task 6
var randomNumber = Math.floor(((Math.random() * 100) + 1));
document.write("Random Number between 1 and 100: " + randomNumber);

// Task 7
var userWeight = prompt("Enter your weight");
var weightInNUmbers = userWeight.match(/([0-9]+\.[0-9]+)/);
document.write("The weight of user is " + weightInNUmbers + " kilograms.");

// Task 8
var number = Math.floor(((Math.random() * 10) + 1));
console.log(number);
var flag = true;
while (flag === true) {
    var userInput = prompt("Enter your guess between 0 and 10");
    userInput = parseInt(userInput);
    if (userInput === number) {
        alert("Congratulations! Your guess is right.");
        flag = false;
        break;
    }
    else {
        alert("Try again!");
    }
}

                                        // Chapter # 31 - 34
// Task 1
var date = new Date();
document.write(date);

// Task 2
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var date = new Date();
var month = date.getMonth();
document.write("Current month: " + months[month]);

// Task 3
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var date = new Date();
var day = date.getDay();
document.write("Today is " + days[day]);

// Task 4
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var date = new Date();
var day = date.getDay();
var dayDefined = days[day];
if ((dayDefined === "Sun") || (dayDefined === "Sat")) {
    alert("It's a fun day!");
}

// Task 5
var date = new Date();
var onlyDate = date.getDate();
if (onlyDate <= 15) {
    document.write("First fifteen days of month");
}

// Task 6
var date = new Date();
var milliSeconds = date.getTime();
document.write("Current date: " + date + "<br>");
document.write("Elapsed milliseconds since Januarry 1, 1970 : " + milliSeconds + "<br>");
document.write("Elapsed minutes since Januarry 1, 1970 : " + milliSeconds / (1000 * 60 * 60));

// Task 7
var date = new Date();
var hour = date.getHours();
if (hour < 12) { 
    alert("It's A.M");
}
else {
    alert("It's P.M");
}

// Task 8
var date = new Date("December 31, 2020");
document.write("Later date: " + date);

// Task 9
var date = new Date();
var target = new Date("June 18, 2015");
var daysPassed = Math.floor(date.getTime() / (1000 * 60 * 60 * 24)) - Math.floor(target.getTime() / (1000 * 60 * 60 * 24));
document.write(daysPassed + " days passed since 1st Ramadan, 2015");

// Task 10
var date = new Date();
var target = new Date("January 1, 2015");
var secondsPassed = Math.floor(date.getTime() / (1000 * 60)) - Math.floor(target.getTime() / (1000 * 60));
document.write("On reference date " + date +  ", " + secondsPassed + " seconds had passed since begonning of 2015");

// Task 11
var date = new Date();
var date1 = new Date();
date1.setHours(date.getHours() - 1);
document.write("Current date: " + date + " 1 hour ago, it was " + date1);

// Task 12
var date = new Date();
var date1 = new Date();
date1.setFullYear(date.getFullYear() - 100);
document.write("Current date: " + date + " 100 years ago, it was " + date1);

// Task 13
var date = new Date();
var userResponse = prompt("What is your age?");
var dateOfBirth = date.getFullYear() - userResponse;
document.write("Your age is " + userResponse + "<br>");
document.write("Your birth year is " + dateOfBirth + "<br>");

// Task 14
var date = new Date();
var customerName = "Muhammad Saleh";
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var month = date.getMonth();
month = months[month];
var numberOfUnits = 500;
var chargePerUnit = 15;
var latePayment = 350;
var netAmount = numberOfUnits * chargePerUnit;
var grossAmount = netAmount + latePayment;
document.write("Customer name: " + customerName + "<br>");
document.write("Month: " + month + "<br>");
document.write("Number of units: " + numberOfUnits + "<br>");
document.write("Charge per unit: " + chargePerUnit + "<br>" + "<br>" + "<br>");
document.write("Net amount payable (within due date): " + netAmount + "<br>");
document.write("Late amount surcharge: " + latePayment + "<br>");
document.write("Gross amount payable (after due date): " + grossAmount);

                                        // Chapter # 35 - 38
// Task 1
function date() {
    var currentDate = new Date();
    return currentDate;
}
var Date = date();
alert(Date);

// Task 2
function greeting(first_name, last_name) { 
    alert("Hello! " + first_name + " " + last_name);
}
greeting("Muhammad", "Saleh");

// Task 3
function add(num1, num2) {
    var sum = num1 + num2;
    alert("sum = " + sum);
}
add(2, 3);

// Task 4
function calculator(num1, operator, num2) {
    if (operator === "+") {
        var result = num1 + num2;
    }
    if (operator === "-") {
        var result = num1 - num2;
    }
    if (operator === "*") {
        var result = num1 * num2;
    }
    if (operator === "/") {
        var result = num1 / num2;
    }
    document.write("Result: " + result);
}
calculator(3, "*", 10);

// Task 5
function square(num) {
    var result = num * num;
    document.write("Result: " + result);
}
square(4);

// Task 6
function factorial(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result *= i
    }
    document.write("Result: " + result);
}
factorial(5);

// Task 7
function counting(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}
counting(0, 10);

// Task 8
function pythagorus(base, perpendicular) {
    function square(base, perpendicular) {
        baseSquared = base * base;
        perpendicularSquared = perpendicular * perpendicular;
    }
    square(base, perpendicular);
    hypotenuse = baseSquared + perpendicularSquared;
    hypotenuse = Math.sqrt(hypotenuse);
    document.write("Result: " + hypotenuse);  
}
pythagorus(3, 4);

// Task 9
function areaOfRectangle(width, height) {
    var area = width * height;
    document.write("Result: " + area);
}
areaOfRectangle(2, 3);
var width = 5;
var height = 3;
areaOfRectangle(width, height);

// Task 10
function palindrome() {
    var wordToBeChecked = prompt("Enter any word to check whether it is palindrome or not?");
    var compare = "";
    var length = wordToBeChecked.length;
    for (var i = length - 1; i >= 0; i--) {
        compare += wordToBeChecked[i];
    }
    if (wordToBeChecked === compare) {
        alert("The word you enterd is a plaindrome.");
    }
    else {
        alert("The word you enterd is not a plaindrome.");
    }
}
palindrome();

// Task 11
function upperCase(text) {
    var str = text.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
    document.write("Example String: " + text);
    document.write("Expected output: " + str);
}
upperCase('the quick brown fox');

// Task 12
function longestWord(str) {
    var arr = str.split(" ");
    var length = 0;
    var index;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > length) {
            length = arr[i].length;
            index = i
        }
    }
    document.write("Longest word is " + arr[index]);
}
longestWord("Web development tutorial");

// Task 13
function wordCounter(str, letter) {
    str = str.toLowerCase();
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    document.write("The letter " + letter + " is mentioned " + count + " times in the given string.");
}
wordCounter("My name is Muhammad Saleh", "m");

// Task 14
function calcCircumference(radius) {
    circumference = 2 * 3.142 * radius
    return circumference;
}
function calcArea(radius) {
    area = 3.142 * radius * radius;
    return area;
}
circumference = Math.round(calcCircumference(4.5));
document.write("Circumference: " + circumference + "<br>");
area = Math.round(calcArea(4.5));
document.write("Area: " + area);
                                                
                                                //  Chapters 38-42
// Task 1
function power(a, b) {
    var result = Math.pow(a, b);
    return result;
}
var result = power(4, 3);
console.log(result);

// Task 2
var userInput = prompt("Enter any year to check whether it is a leap year or not? ");
userInput = parseInt(userInput);
if (userInput.toString().slice(2, 5) === "00") {
    if ((userInput % 100 === 0) & (userInput % 400 === 0)) {
        console.log("This is a leap year!");
    }
    else {
        console.log("This is not a leap year!");
    }
}
if (userInput.toString().slice(2, 5) != "00") {
    if (userInput % 4 === 0) {
        console.log("This is a leap year!");
    }
    else {
        console.log("This is not a leap year!");
    }
}

// Task 3
function claculateS(a, b, c) {
    var s = (a + b + c) / 2;
    return s;
}
function areaOfTriangle(a, b, c) {
    var s = claculateS(a, b, c);
    var area = s * (s-a) * (s-b) * (s-c);
    return area;
}
var result = areaOfTriangle(2, 3, 4);
console.log(result);

// Task 4
var total = 300;
function average(a, b, c) {
    var avg = (a + b + c) / 3;
    return avg;
}
function percentage(a, b, c) {
    var pctage = ((a + b + c) / total) * 100;
    return pctage;
}
function main(a, b, c) {
    var avg = average(a, b ,c);
    var pctage = percentage(a, b, c);
    console.log("Average: ", avg);
    console.log("Percentage: ", pctage + "%");
}
main(90, 85, 95);

// Task 5
function indexOF(str, chr) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === chr) {
            var result = i;
            break;
        }
    }
    return i;
}
var result = indexOF("Muhammad Saleh", "m");
console.log(result);

// Task 6
var vowels = ["a", "e", "i", "o", "u"];
function deleteVowels(str) {
    var target = str;
    var point;
    for(var i = 0; i < target.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (target[i] === vowels[j]) {
                target = target.replace(target[i], "");
            }
        }
    }
    return target;
}
var result = deleteVowels("the quick brown fox jumps over the lazy dog");
console.log(result);

// Task 7


// Task 8
var userInput = prompt("Enter the distance between two cities in KMs: ");
function meters(userInput) {
    var result = parseInt(userInput) * 1000;
    return result;
}
function inches(userInput) {
    var result = parseInt(userInput) * 39370.1;
    return result;
}
function feets(userInput) {
    var result = parseInt(userInput) * 3280.84;
    return result;
}
function centimeters(userInput) {
    var result = parseInt(userInput) * 100000;
    return result;
}
function main() { 
    console.log("Meters: ", meters(userInput), "meters");
    console.log("Inches: ", inches(userInput), "inches");
    console.log("Feets: ", feets(userInput), "feets");
    console.log("Centi-Meters: ", centimeters(userInput), "centi-meters");
}
main();

// Task 9
var userInput = prompt("How many hours do you worked in this week? "); 
function overTime(hoursWorkedThisWeek) {
    var hoursWorkedOverTime = hoursWorkedThisWeek - 40;
    var salary = (40 * 10) + (hoursWorkedOverTime * 12);
    console.log("Your salary for this week is: Rs-" + salary);
}
overTime(userInput);

// Task 10
var userInput = prompt("Enter the amount you want to withdraw: ");
function currencyNotes(amount) {
    var hundereds = amount.slice(0, 1);
    if (amount.slice(1, 3) === "00") {
        var fifty = 0;
        var ten = 0;
    }
    if (parseInt(amount.slice(1, 3)) >= 50) {
        var fifty = 1;
        var temp = parseInt(amount.slice(1, 3)) - 50;
        temp = temp.toString();
        var ten = temp[0];
    }
    if ((parseInt(amount.slice(1, 3)) < 50) & (parseInt(amount.slice(1, 3)) > 0)) {
        var fifty = 0;
        var ten = amount[1];
    }
    console.log("You will have", hundereds, "hundered notes", fifty, "fifty notes", ten, "ten notes.");
}
currencyNotes(userInput);

                                            //   Chapters 43-48
// Task 1
function greeting() {
    alert("Hello World!");
}

// Task 2
function phone() {
    alert("Thanks for purchasing a phone from us!");
}

// Task 3
function deleteRecord() {
    
}

// Task 4
function change() {
    var target = document.getElementById("changing");
    target.src = "images/mobile-2.jpg";
}
function backToOriginal() {
    var target = document.getElementById("changing");
    target.src = "images/mobile-1.jpg";
}

// Task 5
function add() {
    var target = document.getElementById("counter");
    targeted = parseInt(target.innerHTML);
    targeted += 1;
    target.innerHTML = targeted;
}
function minus() {
    var target = document.getElementById("counter");
    targeted = parseInt(target.innerHTML);
    targeted -= 1;
    target.innerHTML = targeted;
}

                                                //  Chapters 49-52
// Task 1
function displayInformation() {
    var targetName = document.getElementById("Name");
    targetName.innerHTML += document.getElementById("name").value;
    console.log(document.getElementById("name").value);
}
displayInformation()