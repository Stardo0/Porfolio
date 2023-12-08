document.addEventListener('DOMContentLoaded', () => {
      const baseText = "Hi, I'm Marc. ";
      const dynamicTexts = ["I am a Web Developer", "I am a UI/UX Designer"];
      let currentIndex = 0;
      let charIndex = 0;
      let currentDynamicText = '';
      let isDeleting = false;
  
      function type() {
          currentDynamicText = isDeleting ? dynamicTexts[currentIndex].substring(0, charIndex--) : dynamicTexts[currentIndex].substring(0, charIndex++);
          document.getElementById('animated-text').textContent = baseText + currentDynamicText;
  
          if (!isDeleting && charIndex === dynamicTexts[currentIndex].length) {
              // Pause am Ende des dynamischen Textes
              setTimeout(() => { isDeleting = true; }, 2000);
          } else if (isDeleting && charIndex === 0) {
              isDeleting = false;
              currentIndex = (currentIndex + 1) % dynamicTexts.length; // Zum nächsten Text wechseln
          }
  
          setTimeout(type, isDeleting ? 100 : 200); // Geschwindigkeit des "Tippens"
      }
  
      type(); // Starte die Schreibmaschinen-Funktion
  });
  

  function scrollZuElement() {
      document.getElementById("scroll").scrollIntoView({behavior: 'smooth'});
  }

  function commingsoon() {
    alert("Comming Soon");
  }