document.addEventListener("DOMContentLoaded", function () {
    var palabras = ['"Empresas"', '"Marcas"', '"Emprendedores"', '"Artistas "', '"Soñadores"'];
    var indicePalabra = 0;
    var indiceLetra = 0;
    var palabraCambiante = document.getElementById('palabra-cambiante');
  
    function cambiarPalabra() {
      var palabraActual = palabras[indicePalabra];
      palabraCambiante.textContent = palabraActual.substring(0, indiceLetra);
      indiceLetra++;
  
      if (indiceLetra <= palabraActual.length) {
        setTimeout(cambiarPalabra, 100); // Agrega un retraso de 100ms entre cada letra
      } else {
        // Comienza el proceso de borrado después de escribir la palabra
        setTimeout(borrarPalabra, 1000); // Espera 1 segundo antes de comenzar el borrado
      }
    }
  
    function borrarPalabra() {
      var palabraActual = palabras[indicePalabra];
      palabraCambiante.textContent = palabraActual.substring(0, indiceLetra);
      indiceLetra--;
  
      if (indiceLetra >= 0) {
        setTimeout(borrarPalabra, 100); // Agrega un retraso de 100ms entre cada letra al borrar
      } else {
        // Cambia a la siguiente palabra después de borrar
        indicePalabra = (indicePalabra + 1) % palabras.length;
        setTimeout(cambiarPalabra, 1000); // Espera 1 segundo antes de comenzar la siguiente palabra
      }
    }
  
    cambiarPalabra(); // Inicia el proceso de escritura
  
    // Resto del código...
    
    function fadeIn(el) {
      el.style.opacity = 0;
  
      var last = +new Date();
      var tick = function () {
        el.style.opacity = +el.style.opacity + (new Date() - last) / 1800;
        last = +new Date();
  
        if (+el.style.opacity < 1) {
          (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
            setTimeout(tick, 16);
        }
      };
  
      tick();
    }
  
    var body = document.body;
    var header = document.getElementById("header");
    var branding = document.getElementById("branding");
    var content = document.getElementById("content");
  
    // Seleccionar párrafo agregado
    var p = document.querySelector(".addedText");
  
    fadeIn(body);
    fadeIn(header);
    fadeIn(branding);
    fadeIn(p); // Animar párrafo
  
    var image = document.querySelector(".blur-image");
    var initialOffset = image.offsetTop;
  
    // Función para manejar el evento de scroll
    function handleScroll() {
      var scrollY = window.scrollY;
      var offset = initialOffset - scrollY;
  
      // Calcula el factor de brillo basado en el desplazamiento
      var brightnessFactor = 1 + offset / 500;
  
      // Establece el filtro de brillo en la imagen
      image.style.filter = "brightness(" + brightnessFactor + ")";
    }
  
    // Agrega un listener para el evento de scroll
    window.addEventListener("scroll", handleScroll);
  
    // Utiliza anime.js para realizar animaciones al desplazarte hacia abajo
    const scrollAnimation = anime({
      targets: '.content-container, #branding, .contai, .serch, .service-section, .contact-container',
      translateY: [-100, 0], // Animación de desplazamiento vertical desde -100 a 0
      opacity: [0, 1], // Animación de opacidad desde 0 a 1
      easing: 'easeInOutQuad', // Función de temporización de la animación
      duration: 800, // Duración de la animación en milisegundos
      delay: anime.stagger(200), // Retraso escalonado para los elementos
      autoplay: false, // No inicie automáticamente la animación
    });
  
    // Agrega un controlador de eventos para activar la animación al desplazarte hacia abajo
    window.addEventListener('scroll', function () {
      // Obtén la posición del scroll vertical
      const scrollPosition = window.scrollY;
  
      // Define la posición en la que quieres activar la animación (ajusta según sea necesario)
      const triggerPosition = window.innerHeight * 0.7;
  
      // Activa la animación si la posición del scroll supera el umbral
      if (scrollPosition > triggerPosition) {
        scrollAnimation.play(); // Inicia la animación
      }
    });
  
    // Inicia la animación al cargar la página (para animar los elementos visibles al principio)
    scrollAnimation.play();
  });
  