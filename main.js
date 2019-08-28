//display human-related data questions
function humandata() {
  var privacy  = document.dataclass.privacy.value;
  if (privacy == 1) {
      document.getElementById("followuphumans1").style.display = "block";
      document.getElementById("followuphumans2").style.display = "block";
      document.getElementById("followuphumans3").style.display = "block";
    }
  else {
    document.getElementById("followuphumans1").style.display = "block";
    document.getElementById("followuphumans2").style.display = "block";
    document.getElementById("followuphumans3").style.display = "block";
    }
  }

//submission and answers for classification

function check() {

  var a1 = document.dataclass.a1.value;
  var a2 = document.dataclass.a2.value;
  var a3 = document.dataclass.a3.value;
  var a4 = document.dataclass.a4.value;
  var a5 = document.dataclass.a5.value;
  var availrisk = "";


//determine overall availability risk

  if (a1 == 1 || a2 == 1 || a3 == 1 || a4 == 1 || a5 == 3 || a5 ==4) {
    availrisk = "HIGH";
  } else if (a1 == 2 || a2 == 2 || a4 == 2 || a5 == 2) {
    availrisk = "MEDIUM";
  } else {
    availrisk = "LOW";
  }

  var i1 = document.dataclass.i1.value;
  var i2 = document.dataclass.i2.value;
  var i3 = document.dataclass.i3.value;
  var i5 = document.dataclass.i5.value;
  var i8 = document.dataclass.i8.value;
  var integrisk = "";

  if (i1 == 1 || i2 == 1 || i3 == 1 || i5 == 3 || i5 == 4 || i8 == 1) {
    integrisk = "HIGH";
  } else if (i1 == 2 || i2 == 2 || i5 == 2 || i8 == 2) {
    integrisk = "MEDIUM";
  } else {
    integrisk = "LOW";
  }

  var v1a = document.getElementById('v1a').checked;
  var v1b = document.getElementById('v1b').checked;
  var v1c = document.dataclass.v1c.value;
  var v1d = document.getElementById('v1d').checked;
  var v1e = document.getElementById('v1e').checked;
  var v1f = document.getElementById('v1f').checked;
  var v1g = document.getElementById('v1g').checked;
  var v1h = document.getElementById('v1h').checked;
  var v1i = document.getElementById('v1i').checked;
  var v1j = document.getElementById('v1j').checked;
  var v1k = document.getElementById('v1k').checked;
  var v1l = document.getElementById('v1l').checked;
  var v23a = document.getElementById('v23a').checked;
  var v23b = document.getElementById('v23b').checked;
  var v23c1 = document.getElementById('v23c1').checked;
  var v23c2 = document.getElementById('v23c2').checked;
  var v23c3 = document.getElementById('v23c3').checked;
  var v23c4 = document.getElementById('v23c4').checked;
  var v23c5 = document.getElementById('v23c5').checked;
  var v23c6 = document.getElementById('v23c6').checked;
  var v23c7 = document.getElementById('v23c7').checked;
  var v23c8 = document.getElementById('v23c8').checked;
  var v23c9 = document.getElementById('v23c9').checked;
  var v23c10 = document.getElementById('v23c10').checked;
  var v23c11 = document.getElementById('v23c11').checked;
  var v23c12 = document.getElementById('v23c12').checked;
  var v23c13 = document.getElementById('v23c13').checked;
  var v23c14 = document.getElementById('v23c14').checked;
  var v23c15 = document.getElementById('v23c15').checked;
  var v23c16 = document.getElementById('v23c16').checked;
  var v23c17 = document.getElementById('v23c17').checked;
  var v23c18 = document.getElementById('v23c18').checked;
  var v23c19 = document.getElementById('v23c19').checked;
  var v23d1 = document.getElementById('v23d1').checked;
  var v23d2 = document.getElementById('v23d2').checked;
  var v23d3 = document.getElementById('v23d3').checked;
  var v23d4 = document.getElementById('v23d4').checked;
  var v23d5 = document.getElementById('v23d5').checked;
  var v23e1 = document.getElementById('v23e1').checked;
  var v23e2 = document.getElementById('v23e2').checked;
  var v23e3 = document.getElementById('v23e3').checked;
  var v23e4 = document.getElementById('v23e4').checked;
  var v23e5 = document.getElementById('v23e5').checked;
  var v23e6 = document.getElementById('v23e6').checked;
  var v23e7 = document.getElementById('v23e7').checked;
  var v23f = document.getElementById('v23f').checked;
  var v23g1 = document.dataclass.v23g1.value;
  var v23g2 = document.dataclass.v23g2.value;
  var v23h1 = document.dataclass.v23h1.value;
  var v23h2 = document.dataclass.v23h2.value;
  var v23h3 = document.dataclass.v23h3.value;
  var v23i1 = document.dataclass.v23i1.value;
  var v23i2 = document.dataclass.v23i2.value;
  var v4 = document.dataclass.v4.value;
  var v5 = document.dataclass.v5.value;
  var v6 = document.dataclass.v6.value;
  var v7 = document.dataclass.v7.value;
  var v8 = document.dataclass.v8.value;
  var v1total = 0;
  var v23total = 0;
  var v4total = 0;
  var v1234total = 0;
  var confidrisk = "";

  if (v1c == 1 || v1d == true || v1e == true || v1f == true || v1g == true || v1h == true || v1i == true || v1j == true
  || v1k == true || v1l == true) {
    v1total = 2;
  } else if (v1b == true || v1c == 2) {
    v1total = 1;
  } else {
    v1total = 0;
  }


  if (v23a == true || v23b == true || v23c1 == true || v23c11 == true || v23c12 == true || v23c13 == true || v23c14 == true ||
    v23c15 == true || v23c16 == true || v23c17 == true || v23c18 == true || v23c19 == true || v23d3 == true || v23d4 == true ||
    v23e3 == true || v23e4 == true || v23f == true | v23g2 == 1 || v23h1 == 1 || v23h2 == 1 || v23i2 == 1) {
    v23total = 2;
  } else if (v23c2 == true || v23c3 == true || v23c4 == true || v23c5 == true || v23c5 == true || v23c6 == true || v23c7 == true ||
    v23c8 == true || v23c9 == true || v23c10 == true || v23d1 == true || v23d2 == true || v23e2 == true || v23e5 == true ||
    v23g2 == 2 || v23h3 == 1 || v23i1 == 1 || v23i2 == 2) {
    v23total = 1;
  } else {
    v23total = 0;
  }

  if (v4 == 1) {
    v4total = 2;
  } else {
    v4total = 0;
  }

  v1234total = v1total + v23total + v4total

  if (v1234total >= 6) {
    confidrisk = "VERY HIGH"
  } else if ((v1234total >= 2 && v1234total < 6) || v5 == 1 || v6 == 1 || v7 == 1 || v8 == 1) {
    confidrisk = "HIGH"
  } else if (v1234total == 1) {
    confidrisk = "MEDIUM"
  } else {
    confidrisk = "LOW"
  }

  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("availability").innerHTML = "Availibility risk is " + availrisk;
  document.getElementById("integrity").innerHTML = "Integrity risk is " + integrisk;
  document.getElementById("confidentiality").innerHTML = "Confidentiality risk is " + confidrisk;
}
