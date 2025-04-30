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
}
    
