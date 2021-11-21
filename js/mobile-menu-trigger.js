(() => {
  const menuBtn = document.querySelector('[data-menu-button]');
    
menuBtn.addEventListener('click', () => {
             menuBtn.classList.toggle('is-open');
        
        }); 
})();