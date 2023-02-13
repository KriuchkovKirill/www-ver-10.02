
const select = document.querySelector('select');
const allLang = ['en', 'ru',];
const newimg = ["./img/svg/logoeng.svg","./img/logo-block-rus-white1.png","./img/svg/mobile_logoeng.svg","./img/svg/logo3.svg"];



function changeLanguage() {
    
    let hash ="ru"
    var userLang = navigator.language || navigator.userLanguage;
    
    if (userLang == "en-US"){
        hash="en"
        
    }
    if(hash == "en"){                
        document.getElementById("images").src = newimg[0]; 
        document.getElementById("logomobile").src = newimg[2];     
        } else {
            document.getElementById("images").src = newimg[1];
            document.getElementById("logomobile").src = newimg[3];   
        }
        
    document.querySelector('title').innerHTML = langArr['unit'][hash];
    console.log(hash);
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}

changeLanguage();

