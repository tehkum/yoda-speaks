var btnInput = document.querySelector("#btn-input");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

let apiUrl= "https://api.funtranslations.com/translate/yoda.json"
    
    function getUrlText(text){
        return apiUrl + "?" + "text=" + text
    }

    function errorHandler(error){
        console.error("server down", error);
        alert("something went wrong");
    }


    function clickHandler() {
        var innerText = txtInput.value;
        
        fetch(getUrlText(innerText))
        .then(response => response.json())
        .then(json => { 
            var translateHandler = json.contents.translated;
            txtOutput.innerText = translateHandler;
        })
        .catch(errorHandler)
    };

    txtOutput.addEventListener("click", clickHandler)
