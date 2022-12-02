function Calcola() {
    var field1 = document.getElementById("peso").value;
    var field2 = document.getElementById("altezza").value;
    var field3 = document.getElementById("eta").value;
    var field4 = document.getElementById("sesso").value;
    console.log(field4);

    if (field4 === "donna") {
      //var result = 0;
      var result = 655.1 + (9.6 * parseFloat(field1)) + (1.9 * parseFloat(field2)) - (4.7 * parseFloat(field3));
    }
    else if (field4 === "uomo") {
      //var result = 1;
      var result = 66.5 + (13.8 * parseFloat(field1)) + (5 * parseFloat(field2)) - (6.8 * parseFloat(field3));
    }

    if (!isNaN(result)) {
      document.getElementById("risultato").innerHTML = "Il risultato è " + Math.round(result) + "kcal";
    }
  }