// ------ ELEMENTE ------

const textBereich1 = document.getElementById("text_bereich1");
const text1 = document.getElementById("text1");

const textBereich2 = document.getElementById("text_bereich2");
const text2 = document.getElementById("text2");


    // Stations-Dropdown
const stationDropdown = document.querySelector(".dropdown_standards");
const stationButton = stationDropdown.querySelector(".btn_dropdown");
const stationOptionen = stationDropdown.querySelectorAll(".dropdown_inhalt a");


    // Krankheitsbild-Dropdown
const krankheitDropdown = document.querySelector(".dropdown_kb");
const krankheitButton = krankheitDropdown.querySelector(".btn_dropdown");
const krankheitMenu = krankheitDropdown.querySelector(".dropdown_inhalt");

const ausgabe_satz = document.getElementById("ausgabe_satz");


// ------- DATEN -------

const stationen = {

    "keine Auswahl": {
        name: "Text 1:",
        arzt: "Auto-Eintragungen hier",

        krankheiten: []
    },

    "Urologie": {
        name: "Urologie",
        arzt: "Dr. Müller",

        krankheiten: [
            {
                name: "Prostata",
                symptom: "Blutbild anfertigen"
            },
            {
                name: "Harndrang",
                symptom: "Wasserlassen schicken"
            },
            {
                name: "Entzündung",
                symptom: "Antibiotika nehmen"
            }
        ]
    },

    "ZNA": {
        name: "ZNA",
        arzt: "Dr. Med. Schneider",

        krankheiten: [
            {
                name: "Sepsis",
                symptom: "Transfusion"
            },
            {
                name: "Verletzung",
                symptom: "Blutung stillen"
            },
            {
                name: "Schmerzen",
                symptom: "Tablette A, 3x tgl."
            }
        ]
    },

    "KH-Standard": {
        name: "KH-Std.",
        arzt: "Hr. Schurig",

        krankheiten: [
            {
                name: "1 x 1",
                symptom: "Blutbild, Vitalwerte, 24 stdl."
            },
            {
                name: "2 x 2",
                symptom: "Blutbild, Vitalwerte, 12 stdl."
            },
            {
                name: "3 x 3",
                symptom: "Blutbild, Vitalwerte, 8 stdl."
            }
        ]
    }
};

// ------ STATIONEN AUSWAEHLEN -------
ausgabe_satz.style.display = "none";

stationOptionen.forEach(option => {

    option.addEventListener("click", function () {

        const ausgStation = this.textContent.trim();

        const station = stationen[ausgStation];


        // Falls keine auswahl

        if (ausgStation === "keine Auswahl") {

            stationButton.textContent = "Stationsauswahl";

            textBereich1.textContent = "Text 1:";
            text1.textContent = "Auto-Eintragungen hier";

            textBereich2.textContent = "Text 2:";
            text2.textContent = "Auto-Eintragungen hier";

            krankheitButton.textContent = "Krankheitsbild";

            krankheitMenu.innerHTML = "";

            ausgabe_satz.textContent = "";

            ausgabe_satz.style.display = "none";

            return;
        }


        // textbereich1 aendern

        stationButton.textContent = ausgStation;

        textBereich1.textContent = station.name;

        text1.textContent = station.arzt;


        // textbereich2 zuruecksetzen

        textBereich2.textContent = "Text 2:";
        text2.textContent = "Auto-Eintragungen hier";
        ausgabe_satz.style.opacity = "1";
        ausgabe_satz.textContent = text1.textContent + " verordnet " + "[noch wählen].";


        // krankheitendropdown leeren

        krankheitMenu.innerHTML = "";

        krankheitButton.textContent = "Krankheitsbild";


        // krankheiten erstellen

        station.krankheiten.forEach((krankheit, index) => {

            const link = document.createElement("a");

            link.textContent = krankheit.name;

            krankheitMenu.appendChild(link);


            // krankheit auswaehlen

            link.addEventListener("click", function () {

                krankheitButton.textContent = krankheit.name;

                // textbereich2
                textBereich2.textContent = krankheit.name;

                // ausgabe
                text2.textContent = krankheit.symptom;
                ausgabe_satz.style.display = "";
                ausgabe_satz.style.opacity = "1";
                ausgabe_satz.textContent = text1.textContent + " verordnet " + text2.textContent + ".";

            });

        });

    });

});