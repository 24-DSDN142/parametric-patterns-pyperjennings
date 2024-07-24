//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(247, 244, 210); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  fill(207, 200, 198)
  triangle(60, 100, 
    135, 100, 
     60, 50);
triangle(100, 70, 
      140, 100, 
       140, 50);
fill(207, 200, 198)
ellipse(100, 100, 80, 80);
fill(123, 175, 179)
ellipse(80, 100, 10, 10);
ellipse(120, 100, 10, 10);
line(70, 110, 45, 95);
line(70, 110, 45, 105);
line(70, 110, 45, 115);
line(130, 110, 155, 115);
line(130, 110, 155, 105);
line(130, 110, 155, 95);
fill(250, 175, 241)
triangle(100, 100, 
        105, 110, 
         95, 110);
}
