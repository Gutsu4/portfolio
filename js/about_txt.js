document.addEventListener("DOMContentLoaded", function() {
    const arrows = document.querySelectorAll('.arrow');
    const texts = document.querySelectorAll('.text');
  
    // ‰Šú•\¦‚É‚·‚×‚Ä‚Ìtext‚ğ‰B‚·
    texts.forEach(function(text) {
      text.classList.add('hidden');
    });
  
    arrows.forEach(function(arrow) {
      arrow.addEventListener('click', function() {
        const text = arrow.nextElementSibling;
        if (text.classList.contains('hidden')) {
          text.classList.remove('hidden');
          arrow.innerHTML = '&#x25B2;';
        } else {
          text.classList.add('hidden');
          arrow.innerHTML = '&#x25BC;';
        }
      });
    });
  });
  