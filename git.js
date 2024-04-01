
function unir(){

    let texto1 = document.getElementById("texto1").value;
    let texto2 = document.getElementById("texto2").value;
    let contenido= document.getElementById("contenido");
    contenido.style.display = "block";
    contenido.value = texto1 +" "+texto2;
}