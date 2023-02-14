import langArr from "../langOb.js";
const lang = () => {
    const btnLan = document.querySelector('.btn-lan'),
          navMenuLink = document.querySelectorAll('.nav__menu-link'),
          navMenuLinkMob = document.querySelectorAll('.nav__menu-link-mob'),
          name = document.querySelector('.main__title'),
          mainTitleProfession  = document.querySelector('.main__title-profession'),
          contactsAddressHome  = document.querySelector('.contacts__address-home a'),
          profileTitle = document.querySelector('.profile__title'),
          profileText = document.querySelector('.profile__text'),
          experienceTitle = document.querySelector('.experience__title'),
          experienceManag = document.querySelectorAll('.experience__manag'),
          experienceTextManag = document.querySelectorAll('.experience__text-manager'),
          experienceTeacher = document.querySelectorAll('.experience__teacher'),
          experienceTextTeacher = document.querySelectorAll('.experience__text-teacher'),
          projectTitle = document.querySelector('.project__title'),
          educationTitle = document.querySelector('.education__title'),
          languageTitle = document.querySelector('.language__title'),
          skillsTitle = document.querySelector('.skills__title'),
          educationDiscrItem = document.querySelectorAll('.education__discr-item'),
          languageItem = document.querySelectorAll('.language__item-span');
               
          
location.hash  = 'en';

btnLan.addEventListener('click', ()=> {
    let lanArrText = [];
    let btnLanText = btnLan.innerHTML.trim();
    if(btnLanText === 'EN'){
        btnLan.innerHTML = 'RU';
        location.hash = 'ru';
        lanTranslation(lanArrText, btnLanText, location.hash.substring(1));
    }else{
        btnLan.innerHTML = 'EN';
        location.hash = 'en';
        lanTranslation(lanArrText, btnLanText, location.hash.substring(1));
    }
    
});

function experienceArr(arr, text){
    arr.forEach((item, i) => {
        item.innerHTML = text[i];
    });
}

function lanTranslation(lanArrText, btnLanText, lanLetLow){
    for(let key in langArr){
        btnLanText === 'EN' ? lanArrText.push(langArr[key][lanLetLow]) 
        : lanArrText.push(langArr[key][lanLetLow]);
    }

    function navNodeList(navNodeList){
        navNodeList.forEach((item, i) => {
            item.textContent = lanArrText[i];
        });
    }
    navNodeList(navMenuLink);
    navNodeList(navMenuLinkMob);

    if(btnLanText === 'EN'){
        name.innerHTML = `${langArr.name[lanLetLow]} <span>${langArr.surname[lanLetLow]}</span>`;
        mainTitleProfession.textContent = langArr.web[lanLetLow];
        contactsAddressHome.textContent = langArr.city[lanLetLow];
        profileTitle.textContent = langArr.profile[lanLetLow];
        profileText.innerHTML = langArr.aboutmetext[lanLetLow] +
        `<b >${langArr.aboutmetextgoal[lanLetLow]}</b>`;
        experienceTitle.textContent = langArr.experience[lanLetLow];
        experienceArr(experienceManag, langArr.experiencemanager[lanLetLow]);
        experienceArr(experienceTextManag, langArr.experiencemanagertext[lanLetLow]);
        experienceArr(experienceTeacher, langArr.experienceteacher[lanLetLow]);
        experienceArr(experienceTextTeacher, langArr.experienceteachertext[lanLetLow]);
        projectTitle.textContent = langArr.projectTitle[lanLetLow];
        educationTitle.textContent = langArr.education[lanLetLow];
        languageTitle.textContent = langArr.language[lanLetLow];
        skillsTitle.textContent = langArr.skills[lanLetLow];
        experienceArr(educationDiscrItem, langArr.educationarr[lanLetLow]);
        experienceArr(languageItem, langArr.languageitemarr[lanLetLow]);
        
    }else{
        name.innerHTML = `${langArr.name[lanLetLow]} <span>${langArr.surname[lanLetLow]}</span>`;
        mainTitleProfession.textContent = langArr.web[lanLetLow];
        contactsAddressHome.textContent = langArr.city[lanLetLow];
        profileTitle.textContent = langArr.profile[lanLetLow];
        profileText.innerHTML = langArr.aboutmetext[lanLetLow] +
        `<b >${langArr.aboutmetextgoal[lanLetLow]}</b>`;
        experienceTitle.textContent = langArr.experience[lanLetLow];
        experienceArr(experienceManag, langArr.experiencemanager[lanLetLow]);
        experienceArr(experienceTextManag, langArr.experiencemanagertext[lanLetLow]);
        experienceArr(experienceTeacher, langArr.experienceteacher[lanLetLow]);
        experienceArr(experienceTextTeacher, langArr.experienceteachertext[lanLetLow]);
        projectTitle.textContent = langArr.projectTitle[lanLetLow];
        educationTitle.textContent = langArr.education[lanLetLow];
        languageTitle.textContent = langArr.language[lanLetLow];
        skillsTitle.textContent = langArr.skills[lanLetLow];
        experienceArr(educationDiscrItem, langArr.educationarr[lanLetLow]);
        experienceArr(languageItem, langArr.languageitemarr[lanLetLow]);
    }

}

};
  
export default lang;

