document.addEventListener("DOMContentLoaded", function(){
    const storedData = localStorage.getItem("storedData"); // obtiene el valor almacenado en el localstorage desde el input text y el botón guardar
    document.getElementById("data").textContent  = storedData || "No hay datos almacenados.";
});
