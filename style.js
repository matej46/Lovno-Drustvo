var numberOfButtons=document.querySelectorAll(".drum").length;
for (var i=0; i<numberOfButtons ; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case "Mile":
                var tom1 = new Audio("sounds/karabin.mp3")
                tom1.play();
                break;
            case "Arso":
                var tom2 = new Audio("sounds/ak47.mp3")
                tom2.play();
                break;
            case "Stivi":
                var tom3 = new Audio("sounds/revolver.mp3")
                tom3.play();
                break;
            case "Petar":
                var tom4 = new Audio("sounds/satgan.mp3")
                tom4.play();
                break;
            case "Matej":
                var snare = new Audio("sounds/lovna.mp3")
                snare.play();
                break;
            case "Mario":
                var crash = new Audio("sounds/mario.m4a")
                crash.play();
                break;


        }
    })
}





