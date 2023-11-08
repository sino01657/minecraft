  // Función para cambiar las imágenes
  function changeImages() {
    // Obtener los elementos del DOM
    var button = document.getElementById("button");
    var piston = document.getElementById("piston");
    // Cambiar el atributo src de cada elemento según el estado actual
    if (button.src.endsWith("palanca1.png")) {
      button.src = "palanca2.png";
      piston.src = "piston_extendido.png";
    } else {
      button.src = "palanca1.png";
      piston.src = "piston_normal.png";
    }
  }