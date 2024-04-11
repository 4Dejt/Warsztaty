let numerZdjecia = 0;

const wszystkieZdjecia = document.getElementsByClassName("zdj-galeria");

slajder()

function slajder(){
    // Ukrywamy wszystkie dodane zdjęcia w galerii
    for(let i=0; i < wszystkieZdjecia.length; i++){
        wszystkieZdjecia[i].style.display = 'none';
    }

    if(numerZdjecia >= wszystkieZdjecia.length){
        numerZdjecia = 0
    }

    wszystkieZdjecia[numerZdjecia].style.display = 'block';
    numerZdjecia++;
    setTimeout(slajder, 3000);
}