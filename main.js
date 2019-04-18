

//submission and answers for classification

function check() {

    var b1 = document.dataclass.b1.value;
    var b2 = document.dataclass.b2.value;
    var b3 = document.dataclass.b3.value;
    var b4 = document.dataclass.b4.value;
    var availrisk = "";


    if (b1 == 1 || b2 == 1 || b3 == 1 || b4 == 1) {
        availrisk = "HIGH";
    } else if (b1 == 2 || b2 == 2 || b3 == 2) {
        availrisk = "MEDIUM";
    } else if (b1 == 3 && b2 == 3 && b3 == 3 && b4 == 2) {
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
    } else if (i1 == 3 && i2 == 3 && i3 == 2 && i5 == 1 && i8 == 3) {
        integrisk = "LOW";
    }

    var v1a = document.dataclass.v1a.value;
    var v1b = document.dataclass.v1b.value;
    var v1c = document.dataclass.v1c.value;
    var v1c1 = document.dataclass.v1c1.value;
    var v1d = document.dataclass.v1d.value;
    var v1e = document.dataclass.v1e.value;
    var v1f = document.dataclass.v1f.value;
    var v1g = document.dataclass.v1g.value;
    var v1h = document.dataclass.v1h.value;
    var v1i = document.dataclass.v1i.value;
    var v1j = document.dataclass.v1j.value;
    var v1k = document.dataclass.v1k.value;
    var v1l = document.dataclass.v1l.value;
    var v23a = document.dataclass.v23a.value;
    var v23b = document.dataclass.v23b.value;
    var v23c = document.dataclass.v23c.value;
    var v23c1 = document.dataclass.v23c1.value;
    var v23c2 = document.dataclass.v23c2.value;
    var v23c3 = document.dataclass.v23c3.value;
    var v23c4 = document.dataclass.v23c4.value;
    var v23c5 = document.dataclass.v23c5.value;
    var v23c6 = document.dataclass.v23c6.value;
    var v23c7 = document.dataclass.v23c7.value;
    var v23c8 = document.dataclass.v23c8.value;
    var v23c9 = document.dataclass.v23c9.value;
    var v23c10 = document.dataclass.v23c10.value;
    var v23c11 = document.dataclass.v23c11.value;
    var v23c12 = document.dataclass.v23c12.value;
    var v23c13 = document.dataclass.v23c13.value;
    var v23c14 = document.dataclass.v23c14.value;
    var v23c15 = document.dataclass.v23c15.value;
    var v23c16 = document.dataclass.v23c16.value;
    var v23c17 = document.dataclass.v23c17.value;
    var v23c18 = document.dataclass.v23c18.value;
    var v23c19 = document.dataclass.v23c19.value;
    var v23d = document.dataclass.v23d.value;
    var v23d1 = document.dataclass.v23d1.value;
    var v23d2 = document.dataclass.v23d2.value;
    var v23d3 = document.dataclass.v23d3.value;
    var v23d4 = document.dataclass.v23d4.value;
    var v23d5 = document.dataclass.v23d5.value;
    var v23e = document.dataclass.v23e.value;
    var v23e1 = document.dataclass.v23e1.value;
    var v23e2 = document.dataclass.v23e2.value;
    var v23e3 = document.dataclass.v23e3.value;
    var v23e4 = document.dataclass.v23e4.value;
    var v23e5 = document.dataclass.v23e5.value;
    var v23e6 = document.dataclass.v23e6.value;
    var v23e7 = document.dataclass.v23e7.value;
    var v23f = document.dataclass.v23f.value;
    var v23g = document.dataclass.v23g.value;
    var v23g1 = document.dataclass.v23g1.value;
    var v23g2 = document.dataclass.v23g2.value;
    var v23h = document.dataclass.v23h.value;
    var v23h1 = document.dataclass.v23h1.value;
    var v23h2 = document.dataclass.v23h2.value;
    var v23h3 = document.dataclass.v23h3.value;
    var v23i = document.dataclass.v23i.value;
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

    if (v1c1 == 1 || v1d == 1 || v1e == 1 || v1f == 1 || v1g == 1 || v1h == 1 || v1i == 1 || v1j == 1 ||
        v1k == 1 || v1l == 1) {
        v1total = 2;
    }  else if (v1b == 1) {
        v1total = 1;
    } else if (v1a == 1) {
        v1total = 0;
    }

    if (v23a == 1 || v23b == 1 || v23c1 == 1 || v23c11 == 1 || v23c12 == 1 || v23c13 == 1 || v23c14 == 1 ||
        v23c15 == 1 || v23c16 == 1 || v23c17 == 1 || v23c18 ==1 || v23c19 == 1 || v23d3 == 1 || v23d4 == 1 ||
        v23e3 == 1 || v23e4 == 1 || v23f == 1 | v23g2 == 1 || v23h1 == 1 || v23h2 == 1 || v23i2 == 1) {
            v23total = 2;
    } else if (v23c2 == 1 || v23c3 == 1 || v23c4 == 1 || v23c5 == 1 || v23c5 == 1 || v23c6 == 1 || v23c7 == 1 ||
        v23c8 == 1 || v23c9 == 1 || v23c10 == 1 || v23d1 == 1 || v23d2 == 1 || v23e2 == 1 || v23e5 == 1 ||
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

    if (v1234total >= 6 ) {
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
