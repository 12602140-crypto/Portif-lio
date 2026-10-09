
 
  /* abertura porti */ 
document.addEventListener("DOMContentLoaded", () => {
    const logoBtn = document.getElementById("logoBtn");
    const cursor = document.querySelector(".fake-cursor");
    const introScreen = document.getElementById("spotify-intro");
    const portfolioContent = document.getElementById("portfolio-content");
    const notesContainer = document.getElementById("notes-container");
  
    
    const notes = ["♪", "♫", "♩", "♬", "♭"];
  
    
    function triggerOpening() {
     
      cursor.classList.add("click-effect");
      logoBtn.classList.add("clicked");
  
      
      for (let i = 0; i < 12; i++) {
        setTimeout(() => {
          createNote();
        }, i * 100);
      }
  
     
      setTimeout(() => {
        introScreen.classList.add("fade-out");
        portfolioContent.classList.remove("hidden");
      }, 1800);
    }
  
    function createNote() {
      const note = document.createElement("span");
      note.classList.add("music-note");
      
      
      note.innerText = notes[Math.floor(Math.random() * notes.length)];
  
    
      const randomX = (Math.random() - 0.5) * 100; 
      note.style.setProperty("--x-move", `${randomX}px`);
  
     
      note.style.left = "50%";
      note.style.top = "50%";
  
      notesContainer.appendChild(note);
  
      
      setTimeout(() => {
        note.remove();
      }, 1500);
    }
  
  
    setTimeout(() => {
      triggerOpening();
    }, 2000);
  
   
    logoBtn.addEventListener("click", () => {
      triggerOpening();
    });
  });

//  div direita do index
 function mudarCorDiv(event) {
  const input = event.target; 
  
  const checkboxes = document.querySelectorAll('.selecionarProjetos');
  
  const div = document.querySelector('.direita');
  const div2 = document.querySelector('.direita2');
  const div3 = document.querySelector('.direita3');
  const div4 = document.querySelector('.direita4');
  const div5 = document.querySelector('.direita5');

  const index = Array.from(checkboxes).indexOf(input);

  if (input.checked) {
    
    checkboxes.forEach(cb => {
      if (cb !== input) cb.checked = false;
    });

    
    if (div) div.style.color = 'transparent';

   
    if (div2) div2.style.opacity = index === 0 ? '1' : '0';
    if (div3) div3.style.opacity = index === 1 ? '1' : '0';
    if (div4) div4.style.opacity = index === 2 ? '1' : '0';
    if (div5) div5.style.opacity = index === 3 ? '1' : '0';

  } else {
    
    if (div) {
      div.style.background = '#2C2929';
      div.style.color = '';
    }
    if (div2) div2.style.opacity = '0';
    if (div3) div3.style.opacity = '0';
    if (div4) div4.style.opacity = '0';
    if (div5) div5.style.opacity = '0';
  }
}

// modal form
document.querySelectorAll('.selecionarProjetos').forEach(checkbox => {
  checkbox.addEventListener('change', mudarCorDiv);
});


const formulario = document.getElementById('meuFormulario');
const modal = document.getElementById('modalAviso');
const btnFecharModal = document.getElementById('fecharModal');

formulario.addEventListener('submit', function(event) {
  
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  
  if (nome === '' || email === '' || mensagem === '') {
    
    modal.style.display = 'flex';
  } else {
    
    alert('Formulário preenchido com sucesso!');
   
  }
});

btnFecharModal.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});



