let borrar = false;
let blocdel = false;

function deletecarac(){
    let caja2 = document.f1.txtcaja2.value;
    if(caja2 == '' || caja2 =='0' || caja2.length == 1 && blocdel != true){
        document.f1.txtcaja2.value = "0";
    }else if(blocdel != true){
        let res = caja2.substring(0, caja2.length-1);
        document.f1.txtcaja2.value = res;
    }
}

function escribir(n){
    let caja2 = document.f1.txtcaja2.value;
    if (borrar) {
        document.f1.txtcaja2.value = "";
        borrar = false;
        document.f1.txtcaja2.value = n;
    }else if (caja2 == 0 && n != "."){
        cajao = caja2.replace("0","");
        document.f1.txtcaja2.value = cajao + n;
    }else{
        document.f1.txtcaja2.value = caja2 + n;
    }   
}

function delet(){
    document.f1.txtcaja1.value = '';
    document.f1.txtcaja2.value = '0';        
    }

function arit(o){
    let caja1 = document.f1.txtcaja1.value;
    let caja2 = document.f1.txtcaja2.value;
    let ulnum = caja1.substring(caja1.length-1);
    calcular();

    if(ulnum =='+'||ulnum=='-'||ulnum=='*'||ulnum=='/'||ulnum=='%'){
        ulnum = ulnum.replace(ulnum,o);
        let res = caja1.substring(0,caja1.length-1);
        document.f1.txtcaja1.value = res+ulnum;      
    }
    if(caja1=="" && caja2 != ""){
        document.f1.txtcaja1.value = caja2 + o;
    }else{
        document.f1.caja1.value = caja1 + caja2 + o;
    }
    borrar = true;
}    

function calcular(){
    let caja1 = document.f1.txtcaja1.value;
    let caja2 = document.f1.txtcaja2.value;
    document.f1.txtcaja2.value = eval(caja1+caja2);
    document.f1.txtcaja1.value = caja1+caja2+'=';
    borrar = true;
    blocdel = true;
}

function porc(){
    let caja1 = document.f1.txtcaja1.value;
    let caja2 = document.f1.txtcaja2.value;
    let p = 0.0
    let b = caja2
    document.f1.txtcaja1.value = caja1+0.0+caja2;
    document.f1.txtcaja2.value = p+b
}

function cero(){       
    document.f1.txtcaja2.value = '0';
}