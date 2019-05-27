var borrar = false;
function saludar(saludo) {
    alert(saludo)
}
function deletecarac() {
    var caja2 = document.f1.txtcaja2.value;
    if (caja2 == "" || caja2 == "0" || caja2.length == 1 && blocdel != true) {
        document.f1.txtcaja2.value = "0";
    }
    else if (blocdel != true) {
        var res = caja2.substring(0, caja2.length - 1);
        document.f1.txtcaja2.value = res;
    }
}
function escribir(n) {
    var caja2 = document.f1.txtcaja2.value;
    if (borrar) {
        //alert("se borro");
        document.f1.txtcaja2.value = "";
        borrar = false;
        document.f1.txtcaja2.value = n;
    }
    else if (caja2 == "0" && n != ".") {
        cajao = caja2.replace("0", "")
        document.f1.txtcaja2.value = cajao + n;
    }
    else {
        document.f1.txtcaja2.value = caja2 + n;
    }
}
function raiz() {
    var caja1 = document.f1.txtcaja1.value;
    var caja2 = document.f1.txtcaja2.value;
    var sbrt = "Math.sqrt(" + caja2 + caja1 + ")"
    //var sbrt2 = sbrt.substr(9)
    document.f1.txtcaja1.value = sbrt;
    
    document.f1.txtcaja2.value = "";
}
function arit(o) {
    var caja1 = document.f1.txtcaja1.value;
    var caja2 = document.f1.txtcaja2.value;
    var unum = caja1.substring(caja1.length - 1);
    calcular()
    if (unum == "+" || unum == "-" || unum == "*" || unum == "/") {
        unum = unum.replace(unum, o);
        console.log('1.1if')
        var res = caja1.substring(0, caja1.length - 1);
        console.log('1.2if')
        document.f1.txtcaja1.value = res + unum;
        console.log('1.3if')
    }
    if (caja1 == "" && caja2 != "") {
        console.log('2if')
        document.f1.txtcaja1.value = caja2 + o;
    }
    else {
        console.log('3if')
        document.f1.txtcaja1.value = caja1 + caja2 + o;
    }
    borrar = true;
}

function porcentaje() {
    var caja1 = document.f1.txtcaja1.value;
    var caja2 = document.f1.txtcaja2.value;
    var por = eval(caja1 + caja2)
    document.f1.txtcaja2.value = por/100;
    document.f1.txtcaja1.value = caja1 + caja2 + "%";
    borrar = true;
    blocdel = true;
} 

function calcular() {
    var caja1 = document.f1.txtcaja1.value;
    var caja2 = document.f1.txtcaja2.value;
    document.f1.txtcaja2.value = eval(caja1 + caja2);
    document.f1.txtcaja1.value = caja1 + caja2;
    borrar = true;
    blocdel = true;
}
function masmenos() {
    var caja2 = document.f1.txtcaja2.value;
    if (caja2 > 0) {
        document.f1.txtcaja2.value = "(-" + caja2 + ")";
    }
    else {
        cajaplus = caja2.replace(/[-|(|)]/g, "");
        document.f1.txtcaja2.value = cajaplus;
    }
}
function backSpace() {
    var caja2 = document.f1.txtcaja2.value;
    var len = caja2.length - 1;
    var newNumber = caja2.substring( 0, len );
    document.f1.txtcaja2.value = newNumber;
  } 
  function inversa(){
      var caja2 = Number(document.f1.txtcaja2.value);
      var inv = (1/caja2);
      document.f1.txtcaja1.value = inv;
  } 