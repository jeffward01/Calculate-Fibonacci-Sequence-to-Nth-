fib = function (digit) {
  var digit = +document.getElementById("digit").value;
  var seq = [];
  for (i = 0, j = 1, k = 0; k < digit; i = j, j = x, k++) {
    x = i + j;
    seq.push(x);
    document.getElementById("output").innerHTML = "<h4> The " + digit + " of the Fibonacci Sequence is " + x + "</h4>";
  }
  var fibString = seq.join(', ');
  document.getElementById("output1").innerHTML = "<h4> The Fibonacci Sequence of Numers is: " + fibString + "</h4>";
}


reset1 = function () {
  document.getElementById("output").innerText =" ";
  document.getElementById("output1").innerText =" ";
  document.getElementById("digit").value =" ";
}


//
//
////Github:
//$ cat .gitattributes
//  *.rb linguist-language=JavaScript
