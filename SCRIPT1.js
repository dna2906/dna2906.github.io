let VarGlobal1="texto de variable global";

function FCambioColor(){
    let varTemporal= "texto temporal";
    let vTexto1 = document.getElementById("ejmDOM1");
    vTexto1.textContent= "Texto cambiado por Función FCambioColor";
    vTexto1.style.color="red";
    vTexto1.insertAdjacentHTML("BeforeEnd" ,
                            " <br> Este texto es adicional <br>");  
    vTexto1.style.backgroundColor="green";


    vTexto1.insertAdjacentHTML("BeforeEnd" , VarGlobal1);
    //la variable global se puede utilizar dentro de cualquier función//

}
vTexto1= "Texto fuera de funcion"; //vTexto1 no es la variable de la funcion//
console.log(vTexto1);
console.log(varTemporal); //varTemporal no esta definido afuera de funcion//

function FCambioClase1() {
    let vTexto2=document.getElementsByClassName("classDOM1");
    vTexto2[1].innerText="Elemento [1] del arreglo \n de clase classDOM1";
    vTexto2[1].style.color="white";
    console.log("Tamaño  del array=", vTexto2.length);
    console.log("Tipo de variable de vTexto2",typeof vTexto2[1]);
    // se coloca el indice 1 por ser el 2do elemento de la clase classDOM1 de la pag web
    
}

function FCambioTag1() {
    let vTexto3 = document.getElementsByTagName("h2");
    vTexto3[0].innerHTML = "Elemento h2 cambiado por TagDOM1";
    // se coloca el índice 0 por ser el 1er elemento h2 de la pag web index.html
    vTexto3[13].innerHTML="Elemento último h2 cambiado por TagDom1";
    vTexto3[13].style.color="magenta";
    console.log("Tamaño de array=" ,vTexto3.length);
    vTexto3[13].insertAdjacentHTML("beforeEnd", "<br>tamaño de h2 =" + vTexto3.length);
    let totalh2=vTexto3.length;
    console.log("Valor de totalh2=", totalh2);
    console.log("tipo de variable totalh2=", typeof totalh2);
}

window.vTexto1="";

function FAgregarTextoPermanente(){
    let textoAdicional ="Texto adicional para concatenar";
    vTexto1=vTexto1 + textoAdicional;
    console.log(vTexto1.innerHTML);
}


function FcreateH1()
{
var elemento =document.getElementById("idCrearH1");
var nuevoH1 =document.createElement("h1");
var texto =document.createTextNode("Texto colocado en linea");
nuevoH1.appendChild(texto);
elemento.appendChild(nuevoH1);

}

function FCapturarNombre(){

    const vTexto1 = document.getElementById("nombre");
    const vTexto2 = document.querySelectorAll("input.datosPersonales");
   // usar input para clases relacioandas a cajas de texto, etc
    vTexto1.style.color="red";
    
    var valor1 =vTexto1.value; // value obtiene el contenido de la caja de texto nombre
    var valor2 ="";
    vTexto3.value=valor1;

    document.getElementById("observacion").value = valor1;//textarea ya captura el nombre
   //foreach recorre todo el contenido del array de la clase datosPersonales
    vTexto2.forEach(input => {
        valor2 =valor2 + `${input.name}: ${input.value}\n`;
      });

    document.getElementById('observacion').value = valor2;
    console.log('El valor del nombre es:', valor1);
}
    
