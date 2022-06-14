const smothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');
smothScrollElems.forEach(link => {
    link.addEventListener('click', (event)=> {
        event.preventDefault();
        
        const id = link.getAttribute('href').substring(1);
        const blockScroll = document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        });
       
    });
});