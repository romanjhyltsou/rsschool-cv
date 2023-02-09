const nav = () => {
    const navMenuBurger = document.querySelector('.nav__menu-burger'),
          navMenuMob = document.querySelector('.nav__menu-mob');
          
    
    navMenuBurger.addEventListener('click', ()=> {
        navMenuMob.classList.toggle('nav__menu-mob-active');
    });
};
  
export default nav;

