function FCambioColor(){
    let vTexto1 = document.getElementById("ejmDOM1")
    vTexto1.textContent= "Texto cambiado por Función FCambioColor";
    vTexto1.style.color="red";
    vTexto1.insertAdjacentHTML("BeforeEnd" ,
                            " <br> Este texto es adicional <br>");  
    vTexto1.style.color="green";
}
    
