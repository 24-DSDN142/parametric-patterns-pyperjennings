//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


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
  background(255, 255, 181); //light honeydew green colour
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
arc(100, 100, 80, 80, 280, 35, CHORD);
arc(100, 100, 80, 80, 125, 260, CHORD);
// outside of eyes
fill(255, 255, 181); //greeny yellow
ellipse(82, 100, 15, 15);
ellipse(120, 100, 15, 15);
//inside of eyes
fill(0, 0, 0); //black
ellipse(82, 100, 9, 9);
ellipse(120, 100, 9, 9);
// nose
strokeWeight(1);
line(100, 110, 
  100, 118);
line(100, 118, 
   105, 120);
line(100, 118, 
   95, 120);
fill(250, 175, 241) //pink
ellipse(100, 108, 12, 6);


// whiskers 
strokeWeight(1);
line(70, 110, 45, 95);
line(70, 110, 45, 105);
line(70, 110, 45, 115);
line(130, 110, 155, 115);
line(130, 110, 155, 105);
line(130, 110, 155, 95);
fill(0)

}


