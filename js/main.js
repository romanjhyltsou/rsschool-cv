const btnLan = document.querySelector('.btn-lan');

btnLan.addEventListener('click', ()=> {
    if(btnLan.innerHTML === 'EN'){
        btnLan.innerHTML = 'RU';
    }else{
        btnLan.innerHTML = 'EN';
    }
    
});