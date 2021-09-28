/* Advanced Exercise
Create a circle and center it on the page. 

When you hover on the circle, you will see a message under it : "you are in the circle".

When the mouse leaves the circle you will see the message under it : "you are outside of the circle".

When you click on the circle, the background will change to gray.

When you double-click on the circle, the background will change to blue.  
*/

let circle = document.getElementById("circleID");
let messageTag = document.getElementById("messageID");

circle.addEventListener("mouseover", function(){
    messageTag.innerText = "you are in the circle";
    messageTag.style.color = "green";
});

circle.addEventListener("mouseout", function(){
    messageTag.innerText = "you are outside of the circle";
    messageTag.style.color = "red";
    circle.style.backgroundColor = "rgb(78, 78, 216)";
});

circle.addEventListener("click", function(){
    circle.style.backgroundColor = "grey";
});

circle.addEventListener("dblclick", function(){
    circle.style.backgroundColor = "blue";
});



