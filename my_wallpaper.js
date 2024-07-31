//your parameter variables go here!
// let rect_width  = 20;//var 1
// let rect_height = 20; //var 2
//var 3
//var 4
let facePattern = 1; //var 5


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(246, 213, 247); //light honeydew green colour
  angleMode(DEGREES);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

// ears
  fill(0, 0, 0); //black 
  triangle(60, 100, 
    135, 90, 
     60, 50);
triangle(100, 70, 
      140, 100, 
       140, 50);
fill(255, 255, 255); //white 
triangle(65, 100, 
         115, 90, 
         60, 50);
triangle(110, 70, 
         135, 100, 
         140, 50);
// head
fill(255, 255, 255); //white
ellipse(100, 100, 80, 80);
// black part of face
fill(0) //black
arc(100, 100, 80, 80, 272, 35, CHORD);//
// arc(100, 100, 80, 80, 125, 270, CHORD);

arc(100, 100, 80, 80, 142, 267, CHORD);//
// arc(100, 100, 80, 80, 25, 270, CHORD);

arc(142, 77, 85, 90, 105, 202, CHORD);

arc(58, 77, 85, 90, -22, 73, CHORD);

// fill(255, 0, 0);
// ellipse(142, 77, 20, 20);
fill(255);
// outside of eyes
fill(255, 255, 181); //greeny yellow
ellipse(82, 100, 15, 15);
ellipse(120, 100, 15, 15);
//inside of eyes
fill(0, 0, 0); //black
ellipse(82, 100, 5, 13);
ellipse(120, 100, 5, 13);
// nose
strokeWeight(1);
line(100, 110, 
  100, 118);
line(100, 118, 
   105, 120);
line(100, 118, 
   95, 120);
fill(246, 213, 247) //pink
ellipse(100, 108, 12, 6);
// whiskers 
strokeWeight(1);
line(70, 110, 45, 95);
line(70, 110, 45, 105);
line(70, 110, 45, 115);
line(130, 110, 155, 115);
line(130, 110, 155, 105);
line(130, 110, 155, 95);

//paw top 
fill(0)
ellipse(40, 40, 22, 22);
ellipse(23, 33, 10, 10);
ellipse(32, 23, 10, 10);
ellipse(47, 23, 10, 10);
ellipse(57, 33, 10, 10);
//paw bottom
ellipse(160, 170, 22, 22);
ellipse(143, 163, 10, 10);
ellipse(177, 163, 10, 10);
ellipse(152, 152, 10, 10);
ellipse(167, 152, 10, 10);


}


