let navtogglebtn = document.getElementById('hamburger');
let collapsenavbar = document.getElementById('mobile-navbar');

let state = false;

navtogglebtn.addEventListener('click', toggle);


function toggle(){
    state = !state;

    if(state == true){
        collapsenavbar.classList.remove('mobile-navbar-edit');
        collapsenavbar.classList.remove('animation-class-remove-nav');
        collapsenavbar.classList.add('animation-class-nav');
        
        console.log('showing');
    }else{
        collapsenavbar.classList.add('mobile-navbar-edit');
        collapsenavbar.classList.add('animation-class-remove-nav');
        collapsenavbar.classList.remove('animation-class-nav');
        
        console.log('hidden');
    }
}


