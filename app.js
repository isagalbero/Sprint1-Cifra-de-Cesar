
var x = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//var y = x.charCodeAt(0);

//var z = String.fromCharCode(y)

//console.log(y)
//console.log(z)

function decipher(stringEnter) {

  var final = "";

  console.log(stringEnter)
  for (i=0; i<stringEnter.length; i++){

  var charAsc = stringEnter.charCodeAt(i);

  console.log(charAsc);

	var deslocar = 33%26;
  console.log(deslocar);

  var charSaida = charAsc - deslocar;

  if (charSaida < 65){
    charSaida = 91 - (65 - charSaida)
  }

   if (charSaida > 90) {
            charSaida = (charSaida - 90) + 64;
        }

  var str = String.fromCharCode(charSaida);

   final = final + str;

  console.log(final)
  }
}

function cipher(stringEnter) {

  var final = "";

  console.log(stringEnter)
  for (i=0; i<stringEnter.length; i++){

  var charAsc = stringEnter.charCodeAt(i);

  console.log(charAsc);

	var deslocar = 33%26;
  console.log(deslocar);

  var charSaida = charAsc + deslocar;

  if (charSaida < 65){
    charSaida = 91 - (65 - charSaida)
  }

   if (charSaida > 90) {
            charSaida = (charSaida - 90) + 64;
        }

  var str = String.fromCharCode(charSaida);

   final = final + str;

  console.log(final)

  }

}

//console.log(cipher('ABCDEFGHIJKLMNOPQRSTUVWXYZ'))

console.log(decipher('HIJKLMNOPQRSTUVWXYZABCDEFG'))
