var btnTranslate = document.querySelector("#btn-translate");
var txtInput= document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output");
var url = "https://api.funtranslations.com/translate/navi.json";


function getTranlasationURL(text){
    return url +"?"+"text="+text

}
function clickEventHandler(){
    var innerText = txtInput.value ;
    fetch(getTranlasationURL(innerText))
    .then(response=>response.json())
    .then(json => { 
        var translatedText = json.contents.translated;
    outputDiv.innerText= translatedText}
       )
    
    
}

btnTranslate.addEventListener("click",clickEventHandler)
