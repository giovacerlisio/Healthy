


function Calcola() {
    var field1 = document.getElementById("peso").value;
    var field2 = document.getElementById("altezza").value;
    var field3 = document.getElementById("eta").value;
    var field4 = document.getElementById("sesso").value;
    console.log(field4);
    console.log(field1);

    if (field4 === "donna") {
      //var result = 0;
      var result = parseFloat(field1) / (parseFloat(field2) * parseFloat(field2));
    } else if (field4 === "uomo") {
      //var result = 1;
      var result = parseFloat(field1) / (parseFloat(field2) * parseFloat(field2));
    }

    if (!isNaN(result)) {
      document.getElementById("risultato").innerHTML = "Il risultato dell'IMC è " + Math.round(result);
    }
  }