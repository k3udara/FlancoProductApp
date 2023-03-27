const controls = document.querySelector(".controls");
const container = document.querySelector(".thumb-container");
const allBox = container.children;
const containerWidth = container.offsetWidth;
const margin = 30;
var items = 0;
var totalItems = 0;
var jumpSlidesWidth = 0;
let clickCount = 0;
let prevEle;
let n;

// item setup per slider

responsive = [
  { breakPoint: { width: 0, item: 1, slideVal: 10 } },
  { breakPoint: { width: 600, item: 2, slideVal: 8} },
  { breakPoint: { width: 1000, item: 4, slideVal: 7} },
];

function load() {
  for (let i = 0; i < responsive.length; i++) {
    if (window.innerWidth > responsive[i].breakPoint.width) {
      items = responsive[i].breakPoint.item;
    }
  }
  start();
}
function start() {
   var totalItemsWidth = 0;
  for (let i = 0; i < allBox.length; i++) {
      //width and margin setup
    allBox[i].style.width = (containerWidth/items) - margin +"px";
    allBox[i].style.margin = margin/2 + "px";
    totalItemsWidth += containerWidth/items;
    totalItems++; //Number of items in the array
  }     
  // thumbnail container width set up
  container.style.width = totalItemsWidth + "px"; 
  for (let i = 0; i < responsive.length; i++) {
    if (window.innerWidth > responsive[i].breakPoint.width) {
       n = responsive[i].breakPoint.slideVal;
    }
  }

  //Slide controls setup
//   var allSlides = Math.ceil(totalItems/items); // all slides define how many clicks we can carry out
//   var ul = document.createElement("ul");
//   for (let i = 1; i <= 7; i++) {
//      const li = document.createElement("li");
//      li.id = i;
//      li.innerHTML = i;
//      li.setAttribute("onclick", "controlSlides(this)");
     
//      ul.appendChild(li);
//      if (i === 1 ){
//        li.className = "active";
//      }
  
//   }
//   controls.appendChild(ul);
  controlSlides();
}
// when clicked pass on the next slide
function controlSlides() {
  clickCount = clickCount + 1;
  console.log("clickCount",clickCount);
  console.log("n", n);

  //select controls  ul element.
  // const ul = controls.children;
  //select ul childredn "li". 
  // const li = ul[0].children;
  //find who is now active.
  // var active;
  // for (let i = 0; i < li.length; i++) {
  //   if (li[i].className == 'active') {
  //     active = i;
  //     li[i].className = '';
  //   }
    
  // }
//   ele.className = 'active';
//    var numb = (ele.id-1)-active;
  if (clickCount < n+1){ 
       jumpSlidesWidth = jumpSlidesWidth + (allBox[0].offsetWidth + margin);
        container.style.marginLeft =- jumpSlidesWidth + "px"; 
        if (clickCount == n){
            clickCount = 0;
            jumpSlidesWidth = 0;
            container.style.marginLeft = 0;
        }
    }
//   else { 
//     jumpSlideWidth = 0;
//     container.style.marginLeft ="0px"; 
//     clickCount = 1;
//  }
setTimeout(controlSlides, 2000);
} 
window.onload = load(); 