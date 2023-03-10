document.addEventListener("DOMContentLoaded", function() {
    const arrows = document.querySelectorAll('.arrow');
    const texts = document.querySelectorAll('.text');
  
    // 初期表示時にすべてのtextを隠す
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
  