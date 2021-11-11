//Palindrome
function verificarPalindrome() {
  var cadenapal = document.getElementById("palindrome").value;
  const newcadenapal = cadenapal.replace(/[\W_]/g, "").toLowerCase();
  const cadenapalreverse = newcadenapal.split("").reverse().join("");
  if (cadenapal == "") {
    alert("No has digitado la cadena");
  } else {
    if (newcadenapal === cadenapalreverse) {
      alert("la cadena " + cadenapal + " Es Palindrome");
    } else {
      alert("La Cadena " + cadenapal + " No Es Palindrome");
    }
  }
  document.getElementById("formpalindromo").reset();
}

function numeroMayor() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  if (num1 == "" || num2 == "") {
    alert("No has digitado valores o falta alguno");
  } else {
    if (!isNaN(num1) && !isNaN(num2)) {
      if (parseInt(num1) === parseInt(num2)) {
        alert("El Número " + num1 + " es igual que " + num2);
      } else if (parseInt(num1) > parseInt(num2)) {
        alert("El Número " + num1 + " es mayor que " + num2);
      } else {
        alert("El Número " + num2 + " es mayor que " + num1);
      }
    } else {
      alert("Debes digitar solo números");
    }
  }
  document.getElementById("nummayor").reset();
}

function contarvocales() {
  var cadena = document.getElementById("contVocales").value;
  if (cadena == "") {
    alert("No has digitado la cadena");
  } else {
    var suma = cadena.match(/[aeiou]/gi);
    if (suma === null) {
      alert("La frase digitada no tiene vocales");
    } else {
      var sumaaux = suma.length;
      alert(sumaaux);
    }
    document.getElementById("contarvocales").reset();
  }
}

function contvocal() {
  var frase = document.getElementById("contcadavocal").value;
  var sumavoc = frase.match(/[aeiou]/gi);
  if (frase == "") {
    alert("No has digitado la cadena");
  } else {
    if (sumavoc === null) {
      alert("La frase digitada no tiene vocales");
    } else {
      var a = frase.match(/[a]/gi);
      var e = frase.match(/[e]/gi);
      var i = frase.match(/[i]/gi);
      var o = frase.match(/[o]/gi);
      var u = frase.match(/[u]/gi);
      if (a != null) {
        var conta = a.length;
      } else {
        var conta = 0;
      }
      if (e != null) {
        var conte = e.length;
      } else {
        var conte = 0;
      }
      if (i != null) {
        var conti = i.length;
      } else {
        var conti = 0;
      }
      if (o != null) {
        var conto = o.length;
      } else {
        var conto = 0;
      }
      if (u != null) {
        var contu = u.length;
      } else {
        var contu = 0;
      }
      alert(
        "La letra 'a' se encuentra " +
          conta +
          " veces " +
          "- La letra 'e' se encuentra " +
          conte +
          " veces " +
          "- La letra 'i' se encuentra " +
          conti +
          " veces " +
          "- La letra 'o' se encuentra " +
          conto +
          " veces " +
          "- La letra 'u' se encuentra " +
          contu +
          " veces "
      );
    }
  }
  document.getElementById("cadavocal").reset();
}
