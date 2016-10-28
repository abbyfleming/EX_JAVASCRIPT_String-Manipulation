
var submit = document.getElementById("submit");
var output = document.getElementById("output");

function reversal(input) {
	var reversedString =  input.split("").reverse().join("");
	output.innerHTML += "<p>" + "Reversed: " + reversedString + "</p>";
}

function alphabits(input) {
	var alphabitsString = input.split("").sort().join("");
	output.innerHTML += "<p>" + "Alphabits: " + alphabitsString + "</p>";
}

function palindrome(input) {
//console.log("palindrome");
	var palindromeString = input.split("").reverse().join("");

	if (palindromeString === input) {
		output.innerHTML += "<p>" + "Well that's fun. Your string is a palidrome." + "</p>";
	} else {
		output.innerHTML += "<p>" + "Your string is sadly not palidrome." + "</p>";
	};
}

function getInput () {
	var testString = document.getElementById("input").value;
	console.log(input);

	if (input) {
		reversal(testString);
		alphabits(testString);
		palindrome(testString);
	}

	else {
		alert("Please enter a phrase.");

	}
}

/* ----- EVENT LISTENERS ----- */
submit.addEventListener("click", getInput);

input.addEventListener("keypress", function(enter) {
	if (enter.keyCode === 13) {
			getInput();
		}

	});	