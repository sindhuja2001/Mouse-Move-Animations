document.onmousemove= mouseMoveCircle;
var colors= ['#8E0E00', '#1F1C18', '#512DA8', '#00C9FF', '#005C97', '#e35d5b', '#fc00ff', '#00dbde'];

function mouseMoveCircle(event){
   var circle= document.createElement('div');
   circle.setAttribute('class', 'circle');
   document.body.appendChild(circle);
   
   //To get the coordinate of Circle use ClientX and ClientY
   circle.style.left= event.clientX + 'px';
   circle.style.top= event.clientY + 'px';

   var color= colors[Math.floor(Math.random()* colors.length)];
   circle.style.borderColor= color;
   circle.style.transition= "all 0.5s linear 0s";  // Trans to all/Duration/Speed curve/Delay


   circle.style.left= circle.offsetLeft- 20 + 'px';
   circle.style.top= circle.offsetTop- 20 + 'px';
   circle.style.height= "50px";
   circle.style.width= "50px";
   circle.style.borderWidth= "5px";
   circle.style.opacity= 0;
   circle.style.backgroundColor= '#3d72b4';



}

//Create a class div and append circle with a class and add the coordinates so that it moves and 
//add transition to animate and add further stylings.