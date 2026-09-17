
// ------ PDF modal -----------


const pdfModal = document.getElementById("pdfModal");
const projektButton = document.getElementById("btn_formular_2");


// ------ modal oeffnen --------

projektButton.addEventListener("click", function () {

    pdfModal.style.display = "flex";

});


// ------ modal schliessen mit danebenklick ---------

pdfModal.addEventListener("click", function (event) {

    if (event.target === pdfModal) {

        pdfModal.style.display = "none";

    }

});

// ------- ESC zum schliessen -----------

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        pdfModal.style.display = "none";

    }

});