/*-----------------
    Problem 1
-------------------*/

var p1_answer = document.getElementById("p1-answer");

function sumOfMultiples() {

  var multiples_target = document.getElementById("p1-target").value;
  multiples_target = Number(multiples_target);

  var sum = 0;
  for (var i = 0; i < multiples_target; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }  

  p1_answer.innerHTML = sum;
}

/*------------------
    Problem 2
------------------*/

var p2_answer = document.getElementById("p2-answer");

function sumOfFibonacci(fst_term, snd_term, limit) {

  var fst_term = document.getElementById("p2-fst-term").value;
  fst_term = Number(fst_term);
  var snd_term = document.getElementById("p2-snd-term").value;
  snd_term = Number(snd_term);
  var limit = document.getElementById("p2-limit").value;
  limit = Number(limit);
  var sum = 0;
  var fib_num;

  do {
    fib_num = fst_term + snd_term;
    if (fib_num % 2 === 0) {
      sum += fib_num;
    }
    fst_term = snd_term;
    snd_term = fib_num;
    
  } while (fib_num < limit);

  p2_answer.innerHTML = sum;

}


/*--------------------
    Problem 3
----------------------*/

var p3_answer = document.getElementById("p3-answer");

function getBiggestPrime() {

  var prime_target = document.getElementById("p3-target").value;
  prime_target = Number(prime_target);

  for(var i = 2; i < prime_target; i++) {
   while (prime_target % i === 0) {
      prime_target /= i;
    }
  }
  
  p3_answer.innerHTML = prime_target;
}


/*---------------------
  Event handlers
----------------------*/

window.onload = function () {
  var p1_button = document.getElementById("p1-button");
  p1_button.addEventListener("click", sumOfMultiples);
  var p2_button = document.getElementById("p2-button");
  p2_button.addEventListener("click", sumOfFibonacci);
  var p3_button = document.getElementById("p3-button");
  p3_button.addEventListener("click", getBiggestPrime);  
}
