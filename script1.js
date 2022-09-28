var btnInput = document.querySelector("#btn-input");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/yoda.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
    var inputText = txtInput.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText; // output
           })
        .catch(errorHandler)
};

btnInput.addEventListener("click", clickHandler)