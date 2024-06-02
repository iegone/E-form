const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

let photo = document.getElementById("photo");
let inputPhoto = document.getElementById("inputPhoto");

inputPhoto.onchange = function () {
  photo.src = URL.createObjectURL(inputPhoto.files[0]);
};

let Educational = document.getElementById("Educational");
let inputEducational = document.getElementById("inputEducational");

inputEducational.onchange = function () {
  Educational.src = URL.createObjectURL(inputEducational.files[0]);
};

let Passport = document.getElementById("Passport");
let inputPassport = document.getElementById("inputPassport");

inputPassport.onchange = function () {
  Passport.src = URL.createObjectURL(inputPassport.files[0]);
};

window.onload = function () {
  document.getElementById("downloadPdf").addEventListener("click", () => {
    const body = document.getElementById("body");
    console.log(body);
    console.log(window);
    html2pdf().form(body).save();
  });
};

// External script links
const scriptLinks = [
  "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",
];

scriptLinks.forEach((link) => {
  const script = document.createElement("script");
  script.src = link;
  document.head.appendChild(script);
});


