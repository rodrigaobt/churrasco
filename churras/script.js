function calcular(){
    var homem = document.getElementById("HomemAdulto").value;
    var mulher = document.getElementById("MulherAdulto").value;
    var criança = document.getElementById("Crianca").value;
    var output = document.getElementById("message");
    var saida = document.getElementsByClassName("resultado");
    //var saidaCerveja = document.getElementsById("resultadoCerveja");
    var saidaCerveja = document.getElementsByClassName("resultadoCerveja");
    var saidaCerveja600 = document.getElementsByClassName("resultadoCerveja600");
    var saidaRefrigeranteSuco = document.getElementsByClassName("resultadoRefrigeranteSuco");


    var resultado = (((homem*600)+(mulher*500)+(criança*400))/contador); //no mínimo de 450 gramas por pessoa 
    for (var i = 0; i < saida.length; i++){
        saida[i].innerHTML = Math.trunc(resultado)+'g';
    }

    

    var resultadoBebAlc = ((homem*6)+(mulher*4))/contadorCerveja; //média de 5 cervejas LongNecks por pessoas segundo o google
    for (var i = 0; i < saidaCerveja.length; i++){
        saidaCerveja[i].innerHTML = Math.trunc(resultadoBebAlc)+'Und';
    }

    var resultadoBebAlc = (((homem*6)+(mulher*4))/2)/contadorCerveja; 
    for (var i = 0; i < saidaCerveja600.length; i++){
        saidaCerveja600[i].innerHTML = Math.trunc(resultadoBebAlc)+'Und';
    }

    var resultadoRefSuc = (((homem*500)+(mulher*500)+(criança*1000))/1000);
    for (var i = 0; i < saidaRefrigeranteSuco.length; i++){
        saidaRefrigeranteSuco[i].innerHTML = Math.trunc(resultadoRefSuc/2)+'Und';
    }



}

function refresh() {
    
    var clean = document.querySelectorAll("input");
    for (var i = 0; i < clean.length; i++) {
        clean[i].value = "";        
    }
}
var contador = 0;
function myFunction() {
    
    //var carne = document.getElementById("myCheck").value;
    var checkBox = document.getElementById("myCheck");
    var checkBox2 = document.getElementById("myCheck2");
    var checkBox3 = document.getElementById("myCheck3");
    var checkBox4 = document.getElementById("myCheck4");
    var checkBox5 = document.getElementById("myCheck5");
    var checkBox6 = document.getElementById("myCheck6");
    var checkBox7 = document.getElementById("myCheck7");
    var checkBox8 = document.getElementById("myCheck8");
    var checkBox9 = document.getElementById("myCheck9");
    var checkBox10 = document.getElementById("myCheck10");
    var checkBox11 = document.getElementById("myCheck11");
    var checkBox12 = document.getElementById("myCheck12");
    var checkBox13 = document.getElementById("myCheck13");
    var checkBox14 = document.getElementById("myCheck14");
    var checkBox15 = document.getElementById("myCheck15");
    var checkBox16 = document.getElementById("myCheck16");

    var text = document.getElementById("text");
    var text2 = document.getElementById("text2");
    var text3 = document.getElementById("text3");
    var text4 = document.getElementById("text4");
    var text5 = document.getElementById("text5");
    var text6 = document.getElementById("text6");
    var text7 = document.getElementById("text7");
    var text8 = document.getElementById("text8");
    var text9 = document.getElementById("text9");
    var text10 = document.getElementById("text10");
    var text11 = document.getElementById("text11");
    var text12 = document.getElementById("text12");
    var text13 = document.getElementById("text13");
    var text14 = document.getElementById("text14");
    var text15 = document.getElementById("text15");
    var text16 = document.getElementById("text16");

    var resultado1 = document.getElementById("resultado1");
    var resultado2 = document.getElementById("resultado2");
    var resultado3 = document.getElementById("resultado3");
    var resultado4 = document.getElementById("resultado4");
    var resultado5 = document.getElementById("resultado5");
    var resultado6 = document.getElementById("resultado6");
    var resultado7 = document.getElementById("resultado7");
    var resultado8 = document.getElementById("resultado8");
    var resultado9 = document.getElementById("resultado9");
    var resultado10 = document.getElementById("resultado10");
    var resultado11 = document.getElementById("resultado11");
    var resultado12 = document.getElementById("resultado12");
    var resultado13 = document.getElementById("resultado13");
    var resultado14 = document.getElementById("resultado14");
    var resultado15 = document.getElementById("resultado15");
    var resultado16 = document.getElementById("resultado16");

    var contBox1 = 0;
    var contBox2 = 0;
    var contBox3 = 0;
    var contBox4 = 0;
    var contBox5 = 0;
    var contBox6 = 0;
    var contBox7 = 0;
    var contBox8 = 0;
    var contBox9 = 0;
    var contBox10 = 0;
    var contBox11 = 0;
    var contBox12 = 0;
    var contBox13 = 0;
    var contBox14 = 0;

    if (checkBox.checked == true){
        text.style.display = "block";
        resultado1.style.display = "block";
        //text.innerHTML = '<h1>'+carne+'</h1>'; 
        contBox1++;
    } else {
        text.style.display = "none";
        resultado1.style.display = "none";
        if(contBox1>1){contBox1=contBox1-1;}
    }

    if(checkBox2.checked == true){
        text2.style.display = "block";
        resultado2.style.display = "block";
        contBox2++;
    }else{
        text2.style.display = "none";
        resultado2.style.display = "none";
        if(contBox2>1){contBox2=contBox2-1;}
    }

    if(checkBox3.checked == true){
        text3.style.display = "block";
        resultado3.style.display = "block";
        contBox3++;
    }else{
        text3.style.display = "none";
        resultado3.style.display = "none";
        if(contBox3>1){contBox3=contBox3-1;}
    }

    if(checkBox4.checked == true){
        text4.style.display = "block";
        resultado4.style.display = "block";
        contBox4++;
    }else{
        text4.style.display = "none";
        resultado4.style.display = "none";
        if(contBox4>1){contBox4=contBox4-1;}
    }

    if(checkBox5.checked == true){
        text5.style.display = "block";
        resultado5.style.display = "block";
        contBox5++;
    }else{
        text5.style.display = "none";
        resultado5.style.display = "none";
        if(contBox5>1){contBox5=contBox5-1;}
    }

    if(checkBox6.checked == true){
        text6.style.display = "block";
        resultado6.style.display = "block";
        contBox6++;
    }else{
        text6.style.display = "none";
        resultado6.style.display = "none";
        if(contBox6>1){contBox6=contBox6-1;}
    }

    if(checkBox7.checked == true){
        text7.style.display = "block";
        resultado7.style.display = "block";
        contBox7++;
    }else{
        text7.style.display = "none";
        resultado7.style.display = "none";
        if(contBox7>1){contBox7=contBox7-1;}
    }

     if(checkBox8.checked == true){
        text8.style.display = "block";
        resultado8.style.display = "block";
        contBox8++;
    }else{
        text8.style.display = "none";
        resultado8.style.display = "none";
        if(contBox8>1){contBox8=contBox8-1;}
    }

    if(checkBox9.checked == true){
        text9.style.display = "block";
        resultado9.style.display = "block";
        contBox9++;
    }else{
        text9.style.display = "none";
        resultado9.style.display = "none";
        if(contBox9>1){contBox9=contBox9-1;}
    }

    if(checkBox10.checked == true){
        text10.style.display = "block";
        resultado10.style.display = "block";
        contBox10++;
    }else{
        text10.style.display = "none";
        resultado10.style.display = "none";
        if(contBox10>1){contBox10=contBox10-1;}
    }

    if(checkBox11.checked == true){
        text11.style.display = "block";
        resultado11.style.display = "block";
        contBox11++;
    }else{
        text11.style.display = "none";
        resultado11.style.display = "none";
        if(contBox11>1){contBox11=contBox11-1;}
    }

    if(checkBox12.checked == true){
        text12.style.display = "block";
        resultado12.style.display = "block";
        contBox12++;
    }else{
        text12.style.display = "none";
        resultado12.style.display = "none";
        if(contBox12>1){contBox12=contBox12-1;}
    }

    if(checkBox13.checked == true){
        text13.style.display = "block";
        resultado13.style.display = "block";
        contBox13++;
    }else{
        text13.style.display = "none";
        resultado13.style.display = "none";
        if(contBox13>1){contBox13=contBox13-1;}
    }

    if(checkBox14.checked == true){
        text14.style.display = "block";
        resultado14.style.display = "block";
        contBox14++;
    }else{
        text14.style.display = "none";
        resultado14.style.display = "none";
        if(contBox14>1){contBox14=contBox14-1;}
    }

    if(checkBox15.checked == true){
        text15.style.display = "block";
        resultado15.style.display = "block";  
    }else{
        text15.style.display = "none";
        resultado15.style.display = "none";
    }

    if(checkBox16.checked == true){
        text16.style.display = "block";
        resultado16.style.display = "block";  
    }else{
        text16.style.display = "none";
        resultado16.style.display = "none";
    }


    contador = (contBox1+contBox2+contBox3+contBox4+contBox5+contBox6+contBox7+contBox8+contBox9+contBox10+contBox11+contBox12);
    contadorCerveja = (contBox13+contBox14);
}