// Seleccionar la galería
const gallery = document.querySelector('#gallery');

// Seleccionar todas las imágenes
const images = gallery.querySelectorAll('.gallery-container');

// Función para mostrar imágenes aleatorias
function showRandomImages() {
  // Generar cuatro números aleatorios entre 0 y el número de imágenes
  const randomIndices = [];
  while (randomIndices.length < 4) {
    const index = Math.floor(Math.random() * images.length);
    if (!randomIndices.includes(index)) {
      randomIndices.push(index);
    }
  }

  // Mostrar las imágenes correspondientes
  for (let i = 0; i < images.length; i++) {
    if (randomIndices.includes(i)) {
      images.item(i).style.display = 'block';
    } else {
      images.item(i).style.display = 'none';
    }
  }
}

// Mostrar imágenes aleatorias al cargar la página
showRandomImages();

// Mostrar imágenes aleatorias cada 5 segundos
setInterval(showRandomImages, 5000);

