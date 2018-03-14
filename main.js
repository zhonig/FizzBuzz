//Task 1

/*
function fizzbuzz(limit) {
  for (let counter = 1; counter <= limit; counter++) {
    let isMultipleOf3 = (counter % 3 === 0);
    let isMultipleOf5 = (counter % 5 === 0);
    
    if(isMultipleOf3 && !isMultipleOf5) {
      console.log("Fizz");
    }
    else if (isMultipleOf5 && !isMultipleOf3) {
      console.log("Buzz");
    }
    else if (isMultipleOf3 && isMultipleOf5) {
      console.log("FizzBuzz");
    }
    else {
      console.log(counter);
    }
  }
}

fizzbuzz(16);

*/

//Task 2
let dictionary = {
    3: "Fizz",
    5: "Buzz",
	2: "Capital",
	7: "One"
};

function fizzbuzz(limit) {
	for(let counter = 1; counter <= limit; counter++) {
		let output = [];
		for (let multiple in dictionary) {
			if(counter % multiple === 0) {
				output.push(dictionary[multiple]);
			}
		}
		console.log(output.length > 0 ? output.join("") : counter);
	}
}

fizzbuzz(16);

//Task 2 - Alternative
/*
let dictionary = {
	3: "Fizz",
	5: "Buzz",
	2: "Capital",
	7: "One"
};

let fbuzz = i => Object.keys(dictionary).reduce((s, n) => s + (i % n ? '' : dictionary[n]), '') || i;

function fizzbuzz(limit) {
	for (let counter = 1; counter <= limit; counter++) {
		console.log(fbuzz(counter));
	}
}

fizzbuzz(16);
*/