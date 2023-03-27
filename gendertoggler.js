let women = document.getElementById('women');
let men = document.getElementById('men');
// let state = false;

women.addEventListener('click', toggle);
men.addEventListener('click', toggle);

function toggle(event) {
    if (event.target.id == 'women') {
        // women.style.backgroundColor = 'red';
        // men.style.backgroundColor = 'white';
        console.log('Women');
    }
    if (event.target.id == 'men') {
        // women.style.backgroundColor = 'white';
        // men.style.backgroundColor = 'red';
        console.log('Men');
    }
}
