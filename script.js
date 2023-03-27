let navtogglebtn = document.getElementById('hamburger');
let collapsenavbar = document.getElementById('navbar-collapsible-section');

let state = false;

navtogglebtn.addEventListener('click', toggle);


function toggle(){
    state = !state;
    if(state == true){
        collapsenavbar.style.display = 'block'; 
        console.log('showing');
    }else{
        collapsenavbar.style.display = 'none'; 
        console.log('hidden');
    }
}


const navbar = document.querySelector('.navbar-main');
document.addEventListener('scroll',function(){
    var scroll_position = window.scrollY;
    if (scroll_position > 50) {
    navbar.classList.add('hidden-class');
    }
    else{
        navbar.classList.remove('hidden-class'); 
    }
});

// const circle = document.querySelector('.half-circle-left');
// document.addEventListener('scroll',function(){
//     var scroll_position = window.scrollY;
//     if (scroll_position > 700) {
//         circle.style.bottom = '100px';
//     }
//     else{
      
//     }
// });
