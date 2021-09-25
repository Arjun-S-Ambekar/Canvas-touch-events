canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


var last_position_of_x, last_position_of_y;

color = "black";
width = 2;

var width_of_screen = screen.width;
new_width = screen.width - 70;
var height_of_screen = screen.height;
new_height = screen.height - 300;

if (width_of_screen < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}



canvas.addEventListener("touchstart", my_touch_start);

function my_touch_start(e) {
    
    console.log("my touch start");
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop; 
}

canvas.addEventListener("touchmove", my_touch_move);

function my_touch_move(e) {
    console.log("my touch move event has started");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokestyle = color;
        ctx.lineWidth = width;
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();


last_position_of_x = current_position_of_touch_x;
last_position_of_y = current_position_of_touch_y;
}


function clr() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}