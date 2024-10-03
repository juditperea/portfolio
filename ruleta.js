function calcularPremio() {
    var quantitat = parseFloat(document.getElementById('quantitat').value);
    var tipus = document.getElementById('tipusaposta').value.toLowerCase();
    var numero = document.getElementById('numero').value.toLowerCase();
    var win_number = Math.floor(Math.random() * 4); 
    var numerosrojos = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
    var prize = 0;
    var mensaje = "";

    // SENZILLA
    if (tipus === "single" && numero == win_number) {
        prize = quantitat * 35;
    }
    // FALTA/PASSA
    else if ((tipus === "falta" && numero === "falta" && win_number >= 0 && win_number <= 18) ||
             (tipus === "passa" && numero === "passa" && win_number >= 19 && win_number <= 36)) {
        prize = quantitat;
    }
    // PARELL/SENAR
    else if ((tipus === "parell" && numero === "parell" && win_number % 2 == 0) ||
             (tipus === "senar" && numero === "senar" && win_number % 2 != 0)) {
        prize = quantitat;
    }
    // VERMELL/NEGRE
    else if ((tipus === "color" && numero === "vermell" && numerosrojos.includes(win_number)) ||
             (tipus === "color" && numero === "negre" && win_number !== 0 && !numerosrojos.includes(win_number))) {
        prize = quantitat;
    }
    // DOTZENA
    else if (tipus === "12") {
        switch (numero) {
            case "1-12":
                if (win_number >= 1 && win_number <= 12) {
                    prize = quantitat * 2;
                }
                break;
            case "13-24":
                if (win_number >= 13 && win_number <= 24) {
                    prize = quantitat * 2;
                }
                break;
            case "25-36":
                if (win_number >= 25 && win_number <= 36) {
                    prize = quantitat * 2;
                }
                break;
        }
    }
    // SISENA
    else if (tipus === "6") {
        switch (numero) {
            case "1-6":
                if (win_number >= 1 && win_number <= 6) {
                    prize = quantitat * 5;
                }
                break;
            case "7-12":
                if (win_number >= 7 && win_number <= 12) {
                    prize = quantitat * 5;
                }
                break;
        }
    }

    if (prize > 0) {
        mensaje =  "Quantitat apostada: " + quantitat + " €" + " " +
        "Número guanyador: " + win_number +" " + "Has ganado " + prize + " €" ;
    } else {
        prize = -quantitat / 2;
        mensaje =  "Quantitat apostada: " + quantitat + " €" + " " +
        "Número guanyador: " + win_number +" " + "Has perdido, tienes " + prize + " €";
    }

    alert(mensaje);
}
