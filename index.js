let icon= document.querySelector('.theme')


if(localStorage.getItem('theme')==null){
    localStorage.setItem('theme', 'light');
    icon.src= "icons/moon.png";
}

let localDB= localStorage.getItem('theme');

if(localDB=='light'){
    icon.src= "icons/moon.png";
    document.body.classList.remove('dark-theme');
}else if(localDB=='dark'){
    icon.src="icons/sun.png"
    document.body.classList.add('dark-theme');
}

icon.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.src ="icons/moon.png";
        localStorage.setItem('theme', 'dark')
        window.location.reload()
    }else{
        icon.src= "icons/sun.png"
        localStorage.setItem('theme', 'light')
        window.location.reload()

    }
})