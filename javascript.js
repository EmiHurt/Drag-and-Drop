//PAIS ARGENTINA
var id;
var src;
var elem_origen;
var elem_destino;

function comenzar(){
    elem_origen = document.getElementById("imagen");
    elem_origen.addEventListener("dragstart", comenzamos_arrastrar,false);
    elem_destino = document.getElementById("zonadestino");

    elem_destino.addEventListener("dragenter", function(e){
        e.preventDefault();}, false);

    elem_destino.addEventListener("dragover", function(e){
        e.preventDefault();}, false);

    elem_destino.addEventListener("drop", soltado, false);
    elem_origen.addEventListener("dragend",terminado,false);
    
    
}

function comenzamos_arrastrar(e) {
    var codigo = e.target;
    e.dataTransfer.setData("text",  codigo.getAttribute("id"));    
}

function soltado(e){
    e.preventDefault();
    var id = e.dataTransfer.getData("Text");
    var src=document.getElementById(id).src;
    elem_destino.innerHTML="<img src='" + src + "'>";
    if(id=="imagen"){
      document.getElementById("resultado").innerHTML = "correcto";
    }else{document.getElementById("resultado1").innerHTML ="incorrecto";
    
    

    }
  
    

}

function terminado(e){
    var elemento=e.target;
    elemento.style.visibility="hidden";
    

}
console.log (comenzar)


window.addEventListener("load", comenzar, false)



 
 
  
 




















//pais brasil
var id1;
var src1;
var elem_origen1;
var elem_destino1;
function comenzar1(){
    elem_origen1 = document.getElementById("imagen1");
    elem_origen1.addEventListener("dragstart", comenzamos_arrastrar1,false);
    elem_destino1 = document.getElementById("zonadestino1");

    elem_destino1.addEventListener("dragenter", function(a){
        a.preventDefault();}, false);

    elem_destino1.addEventListener("dragover", function(a){
        a.preventDefault();}, false);

    elem_destino1.addEventListener("drop", soltado1, false);
    elem_origen1.addEventListener("dragend",terminado1,false);
    
}

function comenzamos_arrastrar1(a) {
    var codigo1 = a.target;
    a.dataTransfer.setData("text",  codigo1.getAttribute("id"));    
}

function soltado1(a){
    a.preventDefault();
    var id1 = a.dataTransfer.getData("Text");
    var src1=document.getElementById(id1).src;
    elem_destino1.innerHTML="<img src='" + src1 + "'>";
    if(id1=="imagen1"){
      document.getElementById("resultado2").innerHTML = "correcto";
    }else{document.getElementById("resultado3").innerHTML ="incorrecto";

    }
    resultado ++;

}

function terminado1(a){
    var elemento1=a.target;
    elemento1.style.visibility="hidden";

}
window.addEventListener("load", comenzar1, false)


///PAIS ESTADOS UNIDOS
var id2;
var src2;
var elem_origen2;
var elem_destino2;
function comenzar2(){
    elem_origen2 = document.getElementById("imagen2");
    elem_origen2.addEventListener("dragstart", comenzamos_arrastrar2,false);
    elem_destino2 = document.getElementById("zonadestino2");

    elem_destino2.addEventListener("dragenter", function(b){
        b.preventDefault();}, false);

    elem_destino2.addEventListener("dragover", function(b){
        b.preventDefault();}, false);

    elem_destino2.addEventListener("drop", soltado2, false);
    elem_origen2.addEventListener("dragend",terminado2,false);
    

}

function comenzamos_arrastrar2(b) {
    var codigo2 = b.target;
    b.dataTransfer.setData("text",  codigo2.getAttribute("id"));    
}

function soltado2(b){
    b.preventDefault();
    var id2 = b.dataTransfer.getData("Text");
    var src2=document.getElementById(id2).src;
    elem_destino2.innerHTML="<img src='" + src2 + "'>";
    if(id2=="imagen2"){
      document.getElementById("resultado4").innerHTML = "correcto";
    }else{document.getElementById("resultado5").innerHTML ="incorrecto";

    }
    resultado ++;

}

function terminado2(b){
    var elemento2=b.target;
    elemento2.style.visibility="hidden";

}
window.addEventListener("load", comenzar2, false)

///PAIS FRANCIA
var id3;
var src3;
var elem_origen3;
var elem_destino3;
function comenzar3(){
    elem_origen3 = document.getElementById("imagen3");
    elem_origen3.addEventListener("dragstart", comenzamos_arrastrar3,false);
    elem_destino3 = document.getElementById("zonadestino3");

    elem_destino3.addEventListener("dragenter", function(c){
        c.preventDefault();}, false);

    elem_destino3.addEventListener("dragover", function(c){
        c.preventDefault();}, false);

    elem_destino3.addEventListener("drop", soltado3, false);
    elem_origen3.addEventListener("dragend",terminado3,false);
   

}

function comenzamos_arrastrar3(c) {
    var codigo3 = c.target;
    c.dataTransfer.setData("text",  codigo3.getAttribute("id"));    
}

function soltado3(c){
    c.preventDefault();
    var id3 = c.dataTransfer.getData("Text");
    var src3=document.getElementById(id3).src;
    elem_destino3.innerHTML="<img src='" + src3 + "'>";
    if(id3=="imagen3"){
      document.getElementById("resultado6").innerHTML = "correcto";
    }else{document.getElementById("resultado7").innerHTML ="incorrecto";

    }
    resultado ++;

}

function terminado3(c){
    var elemento3=c.target;
    elemento3.style.visibility="hidden";

}
window.addEventListener("load", comenzar3, false)
//PAIS ESPAÑA

var id4;
var src4;
var elem_origen4;
var elem_destino4;
function comenzar4(){
    elem_origen4 = document.getElementById("imagen4");
    elem_origen4.addEventListener("dragstart", comenzamos_arrastrar4,false);
    elem_destino4 = document.getElementById("zonadestino4");

    elem_destino4.addEventListener("dragenter", function(d){
        d.preventDefault();}, false);

    elem_destino4.addEventListener("dragover", function(d){
        d.preventDefault();}, false);

    elem_destino4.addEventListener("drop", soltado4, false);
    elem_origen4.addEventListener("dragend",terminado4,false);
    

}

function comenzamos_arrastrar4(d) {
    var codigo4 = d.target;
    d.dataTransfer.setData("text",  codigo4.getAttribute("id"));    
}

function soltado4(d){
    d.preventDefault();
    var id4 = d.dataTransfer.getData("Text");
    var src4=document.getElementById(id4).src;
    elem_destino4.innerHTML="<img src='" + src4 + "'>";
    if(id4=="imagen4"){
      document.getElementById("resultado8").innerHTML = "correcto";
    }else{document.getElementById("resultado9").innerHTML ="incorrecto";

    }
    resultado ++;

}

function terminado4(d){
    var elemento4=d.target;
    elemento4.style.visibility="hidden";

}
window.addEventListener("load", comenzar4, false)

/// ITALIA

var id5;
var src5;
var elem_origen5;
var elem_destino5;
function comenzar5(){
    elem_origen5 = document.getElementById("imagen5");
    elem_origen5.addEventListener("dragstart", comenzamos_arrastrar5,false);
    elem_destino5 = document.getElementById("zonadestino5");

    elem_destino5.addEventListener("dragenter", function(f){
        f.preventDefault();}, false);

    elem_destino5.addEventListener("dragover", function(f){
        f.preventDefault();}, false);

    elem_destino5.addEventListener("drop", soltado5, false);
    elem_origen5.addEventListener("dragend",terminado5,false);
    

}

function comenzamos_arrastrar5(f) {
    var codigo5 = f.target;
    f.dataTransfer.setData("text",  codigo5.getAttribute("id"));    
}

function soltado5(f){
    f.preventDefault();
    var id5 = f.dataTransfer.getData("Text");
    var src5=document.getElementById(id5).src;
    elem_destino5.innerHTML="<img src='" + src5 + "'>";
    if(id5=="imagen5"){
      document.getElementById("resultado10").innerHTML = "correcto";
    }else{document.getElementById("resultado11").innerHTML ="incorrecto";

    }
    resultado ++;

}

function terminado5(f){
    var elemento5=f.target;
    elemento5.style.visibility="hidden";

}
window.addEventListener("load", comenzar5, false)

//mexico

var id6;
var src6;
var elem_origen6;
var elem_destino6;
function comenzar6(){
    elem_origen6 = document.getElementById("imagen6");
    elem_origen6.addEventListener("dragstart", comenzamos_arrastrar6,false);
    elem_destino6 = document.getElementById("zonadestino6");

    elem_destino.addEventListener("dragenter", function(g){
        g.preventDefault();}, false);

    elem_destino6.addEventListener("dragover", function(g){
        g.preventDefault();}, false);

    elem_destino6.addEventListener("drop", soltado6, false);
    elem_origen6.addEventListener("dragend",terminado6,false);
    

}

function comenzamos_arrastrar6(g) {
    var codigo6 = g.target;
    g.dataTransfer.setData("text",  codigo6.getAttribute("id"));    
}

function soltado6(g){
    g.preventDefault();
    var id6 = g.dataTransfer.getData("Text");
    var src6=document.getElementById(id6).src;
    elem_destino6.innerHTML="<img src='" + src6 + "'>";
    if(id6=="imagen6"){
      document.getElementById("resultado12").innerHTML = "correcto";
    }else{document.getElementById("resultado13").innerHTML ="incorrecto";

    }
    resultado ++;

}

function terminado6(g){
    var elemento6=g.target;
    elemento6.style.visibility="hidden";

}
window.addEventListener("load", comenzar6, false)

//bolivia
var id7;
var src7;
var elem_origen7;
var elem_destino7;
function comenzar7(){
    elem_origen7 = document.getElementById("imagen7");
    elem_origen7.addEventListener("dragstart", comenzamos_arrastrar7,false);
    elem_destino7 = document.getElementById("zonadestino7");

    elem_destino7.addEventListener("dragenter", function(h){
        h.preventDefault();}, false);

    elem_destino7.addEventListener("dragover", function(h){
        h.preventDefault();}, false);

    elem_destino7.addEventListener("drop", soltado7, false);
    elem_origen7.addEventListener("dragend",terminado7,false);
    

}

function comenzamos_arrastrar7(h) {
    var codigo7 = h.target;
    h.dataTransfer.setData("text",  codigo7.getAttribute("id"));    
}

function soltado7(h){
    h.preventDefault();
    var id7 = h.dataTransfer.getData("Text");
    var src7=document.getElementById(id7).src;
    elem_destino7.innerHTML="<img src='" + src7 + "'>";
    if(id7=="imagen7"){
      document.getElementById("resultado14").innerHTML = "correcto";
    }else{document.getElementById("resultado15").innerHTML ="incorrecto";

    }
    resultado ++;

}

function terminado7(h){
    var elemento7=h.target;
    elemento7.style.visibility="hidden";

}
window.addEventListener("load", comenzar7, false)

//venezuela
var id8;
var src8;
var elem_origen8;
var elem_destino8;
function comenzar8(){
    elem_origen8 = document.getElementById("imagen8");
    elem_origen8.addEventListener("dragstart", comenzamos_arrastrar8,false);
    elem_destino8 = document.getElementById("zonadestino8");

    elem_destino8.addEventListener("dragenter", function(i){
        i.preventDefault();}, false);

    elem_destino8.addEventListener("dragover", function(i){
        i.preventDefault();}, false);

    elem_destino8.addEventListener("drop", soltado8, false);
    elem_origen8.addEventListener("dragend",terminado8,false);
    

}

function comenzamos_arrastrar8(i) {
    var codigo8 = i.target;
    i.dataTransfer.setData("text",  codigo8.getAttribute("id"));    
}

function soltado8(i){
    i.preventDefault();
    var id8 = i.dataTransfer.getData("Text");
    var src8=document.getElementById(id8).src;
    elem_destino8.innerHTML="<img src='" + src8 + "'>";
    if(id8=="imagen8"){
      document.getElementById("resultado16").innerHTML = "correcto";
    }else{document.getElementById("resultado17").innerHTML ="incorrecto";

    }
    resultado ++;

}

function terminado8(i){
    var elemento8=i.target;
    elemento8.style.visibility="hidden";

}
window.addEventListener("load", comenzar8, false)

//CHILE
var id9;
var src9;
var elem_origen9;
var elem_destino9;
function comenzar9(){
    elem_origen9 = document.getElementById("imagen9");
    elem_origen9.addEventListener("dragstart", comenzamos_arrastrar9,false);
    elem_destino9 = document.getElementById("zonadestino9");

    elem_destino9.addEventListener("dragenter", function(j){
        j.preventDefault();}, false);

    elem_destino9.addEventListener("dragover", function(j){
        j.preventDefault();}, false);

    elem_destino9.addEventListener("drop", soltado9, false);
    elem_origen9.addEventListener("dragend",terminado9,false);
    

}

function comenzamos_arrastrar9(j) {
    var codigo9 = j.target;
    j.dataTransfer.setData("text",  codigo9.getAttribute("id"));    
}

function soltado9(j){
    j.preventDefault();
    var id9 = j.dataTransfer.getData("Text");
    var src9=document.getElementById(id9).src;
    elem_destino9.innerHTML="<img src='" + src9 + "'>";
    if(id9=="imagen9"){
      document.getElementById("resultado18").innerHTML = "correcto";
    }else{document.getElementById("resultado19").innerHTML ="incorrecto";

    }
    resultado ++;

}

function terminado9(j){
    var elemento9=j.target;
    elemento9.style.visibility="hidden";

}
window.addEventListener("load", comenzar9, false)



