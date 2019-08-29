//enable tooltips

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

//display human-related data questions
function humandata() {
  var privacy  = document.dataclass.privacy.value;
  if (privacy == 1) {
      document.getElementById("followuphumans1").style.display = "block";
      document.getElementById("followuphumans2").style.display = "block";
      document.getElementById("followuphumans3").style.display = "block";
      document.getElementById("privacy").style.display = "block";
    }
  else {
    document.getElementById("followuphumans1").style.display = "none";
    document.getElementById("followuphumans2").style.display = "none";
    document.getElementById("followuphumans3").style.display = "none";
    document.getElementById("privacy").style.display = "none";
    }
  }

//submission and answers for classification

function check() {

  var a1 = document.dataclass.a1.value;
  var a2 = document.dataclass.a2.value;
  var a3 = document.dataclass.a3.value;
  var a4 = document.dataclass.a4.value;
  var a5 = document.dataclass.a5.value;
  var a1risk = "";
  var a2risk = "";
  var a3risk = "";
  var a4risk = "";
  var a5risk = "";
  var availrisk = "";

//determine individual levels of risk

  if (a1 == 1) {
    a1risk = "HIGH";
    document.getElementById("a1risk_submit").style.background = "#e60000";
  } else if (a1 == 2) {
    a1risk = "MEDIUM";
    document.getElementById("a1risk_submit").style.background = "#ffd700";
  } else  if (a1 == 3){
    a1risk = "LOW";
    document.getElementById("a1risk_submit").style.background = "#009900";
  } else {
    a1risk = "UNKNOWN";
  }

  if (a2 == 1) {
    a2risk = "HIGH";
    document.getElementById("a2risk_submit").style.background = "#e60000";
  } else if (a2 == 2) {
    a2risk = "MEDIUM";
    document.getElementById("a2risk_submit").style.background = "#ffd700";
  } else  if (a2 == 3 || a2 == 4){
    a2risk = "LOW";
    document.getElementById("a2risk_submit").style.background = "#009900";
  } else {
    a2risk = "UNKNOWN";
  }

  if (a3 == 1) {
    a3risk = "HIGH";
    document.getElementById("a3risk_submit").style.background = "#e60000";
  } else  if (a3 == 2){
    a3risk = "LOW";
    document.getElementById("a3risk_submit").style.background = "#009900";
  } else {
    a3risk = "UNKNOWN";
  }

  if (a4 == 1) {
    a4risk = "HIGH";
    document.getElementById("a4risk_submit").style.background = "#e60000";
  } else if (a4 == 2) {
    a4risk = "MEDIUM";
    document.getElementById("a4risk_submit").style.background = "#ffd700";
  } else  if (a4 == 3){
    a4risk = "LOW";
    document.getElementById("a4risk_submit").style.background = "#009900";
  } else {
    a4risk = "UNKNOWN";
  }

  if (a5 == 3 || a5 == 4) {
    a5risk = "HIGH";
    document.getElementById("a5risk_submit").style.background = "#e60000";
  } else if (a5 == 2) {
    a5risk = "MEDIUM";
    document.getElementById("a5risk_submit").style.background = "#ffd700";
  } else  if (a5 == 1) {
    a5risk = "LOW";
    document.getElementById("a5risk_submit").style.background = "#009900";
  } else {
    a5risk = "UNKNOWN";
  }

//present individual risk scores after submission

document.getElementById("a1risk_submit").style.display = "block";
document.getElementById("a1risk_text").innerHTML = "Risk level: " + a1risk;

document.getElementById("a2risk_submit").style.display = "block";
document.getElementById("a2risk_text").innerHTML = "Risk level: " + a2risk;

document.getElementById("a3risk_submit").style.display = "block";
document.getElementById("a3risk_text").innerHTML = "Risk level: " + a3risk;

document.getElementById("a4risk_submit").style.display = "block";
document.getElementById("a4risk_text").innerHTML = "Risk level: " + a4risk;

document.getElementById("a5risk_submit").style.display = "block";
document.getElementById("a5risk_text").innerHTML = "Risk level: " + a5risk;

//determine overall availability risk (overall score at end of function)

  if (a1risk == "HIGH" || a2risk == "HIGH" || a3risk == "HIGH" ||
  a4risk == "HIGH" || a5risk == "HIGH") {
    availrisk = "HIGH";
  } else if (a1risk == "MEDIUM" || a2risk == "MEDIUM" ||
  a4risk == "MEDIUM" || a5risk == "MEDIUM") {
    availrisk = "MEDIUM";
  } else if (a1risk == "LOW" || a2risk == "LOW" || a3risk == "LOW" ||
  a4risk == "LOW" || a5risk == "LOW") {
    availrisk = "LOW";
  } else {
    availrisk = "UNKNOWN";
  }


//integrity risks


  var i1 = document.dataclass.i1.value;
  var i1a = document.dataclass.i1a.value;
  var i1b = document.dataclass.i1b.value;
  var i2 = document.dataclass.i2.value;
  var i3 = document.dataclass.i3.value;
  var i4 = document.dataclass.i4.value;
  var i1risk = "";
  var i1arisk = "";
  var i1brisk = "";
  var i2risk = "";
  var i3risk = "";
  var i4risk = "";
  var integrisk = "";


  //determine individual levels of risk

    if (i1 == 1) {
      i1risk = "LOW";
      document.getElementById("i1risk_submit").style.background = "#009900";
      document.getElementById("i1risk_submit").style.display = "block";
      document.getElementById("i1risk_text").innerHTML = "Risk level: " + i1risk;
    } else if (i1 == 2) {
      document.getElementById("i1risk_submit").style.background = "#79a6d2";
      document.getElementById("i1risk_submit").style.display = "block";
      document.getElementById("i1risk_text").innerHTML = "FOLLOW-UP QUESTIONS REQUIRED";
    }  else {
      i1risk = "UNKNOWN";
      document.getElementById("i1risk_submit").style.display = "block";
      document.getElementById("i1risk_text").innerHTML = "Risk level: " + i1risk;
    }


    if (i1 == 2 && i1a == 1) {
      i1arisk = "MEDIUM";
      document.getElementById("i1arisk_submit").style.background = "#ffd700";
    } else  if (i1 == 2 && i1a == 2){
      i1arisk = "HIGH";
      document.getElementById("i1arisk_submit").style.background = "#e60000";
    } else {
      i1arisk = "UNKNOWN";
    }

    if (i1 == 2 && i1b == 1) {
      i1brisk = "HIGH";
      document.getElementById("i1brisk_submit").style.background = "#e60000";
    } else  if (i1 == 2 && i1b == 2){
      i1brisk = "MEDIUM";
      document.getElementById("i1brisk_submit").style.background = "#ffd700";
    } else if (i1 == 2 && i1b == 3){
      i1brisk = "LOW";
      document.getElementById("i1brisk_submit").style.background = "#009900";
    } else {
      i1brisk = "UNKNOWN";
    }

    if (i2 == 3) {
      i2risk = "HIGH";
      document.getElementById("i2risk_submit").style.background = "#e60000";
    } else  if (i2 == 2){
      i2risk = "MEDIUM";
      document.getElementById("i2risk_submit").style.background = "#ffd700";
      document.getElementById("i2risk_extratip").style.display = "block";
    } else if (i2 == 1){
      i2risk = "LOW";
      document.getElementById("i2risk_submit").style.background = "#009900";
    } else {
      i2risk = "UNKNOWN";
    }

    if (i3 == 3) {
      i3risk = "HIGH";
      document.getElementById("i3risk_submit").style.background = "#e60000";
    } else  if (i3 == 2){
      i3risk = "MEDIUM";
      document.getElementById("i3risk_submit").style.background = "#ffd700";
    } else if (i3 == 1){
      i3risk = "LOW";
      document.getElementById("i3risk_submit").style.background = "#009900";
    } else {
      i3risk = "UNKNOWN";
    }

    if (i4 == 1) {
      i4risk = "HIGH";
      document.getElementById("i4risk_submit").style.background = "#e60000";
    } else  if (i4 == 2){
      i4risk = "MEDIUM";
      document.getElementById("i4risk_submit").style.background = "#ffd700";
    } else if (i4 == 3){
      i4risk = "LOW";
      document.getElementById("i4risk_submit").style.background = "#009900";
    } else {
      i4risk = "UNKNOWN";
    }

    //present individual risk scores after submission
    //i1risk was dealt with in the if statement because of conditionality

    document.getElementById("i1arisk_submit").style.display = "block";
    document.getElementById("i1arisk_text").innerHTML = "Risk level: " + i1arisk;
    document.getElementById("i1brisk_submit").style.display = "block";
    document.getElementById("i1brisk_text").innerHTML = "Risk level: " + i1brisk;
    document.getElementById("i2risk_submit").style.display = "block";
    document.getElementById("i2risk_text").innerHTML = "Risk level: " + i2risk;
    document.getElementById("i3risk_submit").style.display = "block";
    document.getElementById("i3risk_text").innerHTML = "Risk level: " + i3risk;
    document.getElementById("i4risk_submit").style.display = "block";
    document.getElementById("i4risk_text").innerHTML = "Risk level: " + i4risk;

    //determine overall integrity risk (overall score at end of function)

      if (i1arisk == "HIGH"|| i1brisk == "HIGH" || i2risk == "HIGH" || i3risk == "HIGH" ||
      i4risk == "HIGH" ) {
        integrisk = "HIGH";
      } else if (i1arisk == "MEDIUM"|| i1brisk == "MEDIUM" || i2risk == "MEDIUM" || i3risk == "MEDIUM" ||
      i4risk == "MEDIUM" ) {
        integrisk = "MEDIUM";
      } else if (i1risk =="LOW" || i1arisk == "LOW"|| i1brisk == "LOW" || i2risk == "LOW" || i3risk == "LOW" ||
      i4risk == "LOW" ) {
        integrisk = "LOW";
      } else {
        integrisk = "UNKNOWN";
      }

//determine confidentiality risk

      var c1 = document.dataclass.c1.value;
      var c2 = document.dataclass.c2.value;
      var c1risk = "";
      var c2risk = "";
      var confidrisk = "";

      //determine individual levels of risk

      if (c1 == 1) {
        c1risk = "HIGH";
        document.getElementById("c1risk_submit").style.background = "#e60000";
      } else if (c1 == 2) {
        c1risk = "MEDIUM";
        document.getElementById("c1risk_submit").style.background = "#ffd700";
      } else  if (c1 == 3){
        c1risk = "LOW";
        document.getElementById("c1risk_submit").style.background = "#009900";
      } else {
        c1risk = "UNKNOWN";
      }

      if (c2 == 1) {
        c2risk = "HIGH";
        document.getElementById("c2risk_submit").style.background = "#e60000";
      } else if (c2 == 2) {
        c2risk = "MEDIUM";
        document.getElementById("c2risk_submit").style.background = "#ffd700";
      } else  if (c2 == 3){
        c2risk = "LOW";
        document.getElementById("c2risk_submit").style.background = "#009900";
      } else {
        c2risk = "UNKNOWN";
      }

      document.getElementById("c1risk_submit").style.display = "block";
      document.getElementById("c1risk_text").innerHTML = "Risk level: " + c1risk;
      document.getElementById("c2risk_submit").style.display = "block";
      document.getElementById("c2risk_text").innerHTML = "Risk level: " + c2risk;

      //determine overall confidentiality risk (overall score at end of function)

        if (c1risk == "HIGH" || c2risk == "HIGH") {
          confidrisk = "HIGH";
        } else if (c1risk == "MEDIUM" || c2risk == "MEDIUM") {
          confidrisk = "MEDIUM";
        } else if (c1risk == "LOW" || c2risk == "LOW") {
          confidrisk = "LOW";
        } else {
          confidrisk = "UNKNOWN";
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
  var v23d6 = document.getElementById('v23d6').checked;
  var v23d7 = document.getElementById('v23d7').checked;
  var v23d8 = document.getElementById('v23d8').checked;
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
  var v23g3 = document.dataclass.v23g3.value;
  var v23h1 = document.dataclass.v23h1.value;
  var v23h2 = document.dataclass.v23h2.value;
  var v23h3 = document.dataclass.v23h3.value;
  var v23i1 = document.dataclass.v23i1.value;
  var v23i2 = document.dataclass.v23i2.value;
  var v4 = document.dataclass.v4.value;
  var v5 = document.dataclass.v5.value;
  var v1total = 0;
  var v23total = 0;
  var v4total = 0;
  var v1234total = 0;
  var v1risk = "";
  var v23risk = "";
  var v4risk = "";
  var v5risk = "";
  var privrisk = "";

  if (v1c == 1 || v1d == true || v1e == true || v1f == true || v1g == true || v1h == true || v1i == true || v1j == true
  || v1k == true || v1l == true) {
    v1total = 2;
  } else if (v1b == true || v1c == 2) {
    v1total = 1;
  } else if (v1a == true){
    v1total = 0;
  } else {
    v1total = -1;
  }


  if (v23a == true || v23b == true || v23c11 == true || v23c12 == true || v23c13 == true || v23c14 == true ||
    v23c15 == true || v23c16 == true || v23c17 == true || v23c18 == true || v23c19 == true || v23d3 == true || v23d4 == true ||
    v23d6 == true || v23d7 == true || v23d8 == true || v23e3 == true ||
    v23e6 == true || v23f == true || v23g2 == 1 || v23g3 == 1 || v23h1 == 1 || v23h2 == 1 || v23h3 == 1 || v23i2 == 1) {
    v23total = 2;
  } else if (v23c1 == true || v23c2 == true || v23c3 == true || v23c4 == true || v23c5 == true || v23c6 == true || v23c7 == true ||
    v23c8 == true || v23c9 == true || v23c10 == true || v23d1 == true || v23d2 == true || v23e2 == true ||
    v23e4 == true || v23e5 == true || v23e7 == true || v23g2 == 2 || v23g3 == 2 ||  v23i1 == 1 || v23i2 == 2) {
    v23total = 1;
  } else if (v23d5 == true || v23e1 == true || v23g1 == 1 || v23h1 == 2 || v23h2 == 2 || v23h3 == 2){
    v23total = 0;
  } else {
    v23total = -1;
  }

  if (v4 == 1) {
    v4total = 2;
  } else if (v4 == 2){
    v4total = 0;
  } else {
    v4total = -1;
  }

  //determine individual levels of risk

  if (v1total == 2) {
    v1risk = "HIGH";
    document.getElementById("v1risk_submit").style.background = "#e60000";
  } else if (v1total == 1) {
    v1risk = "MEDIUM";
    document.getElementById("v1risk_submit").style.background = "#ffd700";
  } else  if (v1total == 0){
    v1risk = "LOW";
    document.getElementById("v1risk_submit").style.background = "#009900";
  } else {
    v1risk = "UNKNOWN";
  }

  if (v23total == 2) {
    v23risk = "HIGH";
    document.getElementById("v23risk_submit").style.background = "#e60000";
  } else if (v23total == 1) {
    v23risk = "MEDIUM";
    document.getElementById("v23risk_submit").style.background = "#ffd700";
  } else  if (v23total == 0){
    v23risk = "LOW";
    document.getElementById("v23risk_submit").style.background = "#009900";
  } else {
    v23risk = "UNKNOWN";
  }

  if (v4total == 2) {
    v4risk = "HIGH";
    document.getElementById("v4risk_submit").style.background = "#e60000";
  } else  if (v4total == 0){
    v4risk = "LOW";
    document.getElementById("v4risk_submit").style.background = "#009900";
  } else {
    v4risk = "UNKNOWN";
  }

  if (v5 == 1) {
    v5risk = "HIGH";
    document.getElementById("v5risk_submit").style.background = "#e60000";
  } else  if (v5 == 2){
    v5risk = "LOW";
    document.getElementById("v5risk_submit").style.background = "#009900";
  } else {
    v5risk = "UNKNOWN";
  }

  document.getElementById("v1risk_submit").style.display = "block";
  document.getElementById("v1risk_text").innerHTML = "Risk level: " + v1risk;
  document.getElementById("v23risk_submit").style.display = "block";
  document.getElementById("v23risk_text").innerHTML = "Risk level: " + v23risk;
  document.getElementById("v4risk_submit").style.display = "block";
  document.getElementById("v4risk_text").innerHTML = "Risk level: " + v4risk;
  document.getElementById("v5risk_submit").style.display = "block";
  document.getElementById("v5risk_text").innerHTML = "Risk level: " + v5risk;

  //determine combination of privacy risks regarding participants, data types and sensitivity of data combined

  v1234total = v1total + v23total + v4total


  if (v1234total >= 6) {
    privrisk = "VERY HIGH"
  } else if ((v1234total >= 2 && v1234total < 6) || v5 == 1 ) {
    privrisk = "HIGH"
  } else if (v1234total == 1) {
    privrisk = "MEDIUM"
  } else if (v1234total == 1 || v5 == 2) {
    privrisk = "LOW"
  } else {
    privrisk = "UNKNOWN"
  }



//present overall risk score
  document.getElementById("after_submit").style.display = "block";
  document.getElementById("availability").innerHTML = "Overall availibility risk is " + availrisk;
  document.getElementById("integrity").innerHTML = "Overall integrity risk is " + integrisk;
  document.getElementById("confidentiality").innerHTML = "Overall confidentiality risk is " + confidrisk;
  document.getElementById("privacy").innerHTML = "Overall privacy risk is " + privrisk;
}
