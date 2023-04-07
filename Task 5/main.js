import { opPlus } from "./js/plus.js";
import { opMinus } from "./js/minus.js";
import { opMultiplication } from "./js/multiplication.js";
import { opDivision } from "./js/division.js";
var optPlus = document.getElementById("optionPlus");
var optMinus = document.getElementById("optionMinus");
var optMultiplication = document.getElementById("optionMultiplication");
var optDivision = document.getElementById("optionDivision");

optPlus.addEventListener('click',function() {
    opPlus()
})

optMinus.addEventListener('click',function() {
    opMinus()
})

optMultiplication.addEventListener('click',function() {
    opMultiplication()
})

optDivision.addEventListener('click',function() {
    opDivision()
})


