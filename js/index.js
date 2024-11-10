document.getElementById("buttonText").addEventListener("click", function(){
    const inputText = document.getElementById("inputText").value;
    localStorage.setItem("storedData", inputText); //guardar valor en el localstorage
});