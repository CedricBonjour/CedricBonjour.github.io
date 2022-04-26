

slideshow_dict = [
["img_001", "A cheval à la caillotière  (en Anjou)"],
["img_002", "Claire dans sont moment de l'année préféré : Noël"],
["img_003", ""],
["img_004", ""],
["img_005", ""],
["img_006", ""],
["img_007", ""],
["img_008", ""],
["img_009", ""],
["img_010", ""],
["img_011", ""],
["img_012", ""],
["img_013", ""],
["img_014", ""],
["img_016", ""],
["img_017", ""],
["img_018", ""],
["img_019", ""],
["img_020", ""],
["img_021", ""],
["img_022", ""],
["img_023", ""],
["img_024", ""],
["img_025", ""],
["img_026", ""],
["img_027", ""],
["img_028", ""],
["img_029", ""],
["img_030", ""],
["img_031", ""],
["img_032", ""],
["img_033", ""],
["img_034", ""],
["img_035", ""],
["img_036", ""],
["img_037", ""],
["img_038", ""],
["img_039", ""],
["img_040", ""],
["img_041", ""],
["img_043", ""],
["img_044", ""],
["img_045", ""],
["img_046", ""],
["img_047", ""],
["img_048", ""],
["img_049", ""],
["img_050", ""],
["img_051", ""],
["img_052", ""],
["img_053", ""],
["img_054", ""],
["img_055", ""],
["img_056", ""],
["img_057", ""],
["img_058", ""],
["img_059", ""],
["img_060", ""],
["img_061", ""],
["img_062", ""],

]

var simg =  document.getElementById('slideshow_img')


function slideLeft (){
   var i = simg.getAttribute("idx");
  i--;
  if (i <0 ) i = slideshow_dict.length -1
  console.log(i)
  setImg(i)
}


function slideRight (){
  var i = simg.getAttribute("idx");
  i++;
  if (i >= slideshow_dict.length) i = 0
  setImg(i)


}


function setImg(i){

  simg.style.backgroundImage =  "url('./img/slideshow/"+slideshow_dict[i][0]+".jpg')";
  simg.setAttribute("idx", i);
  document.getElementById('slideshow_comment').innerText = slideshow_dict[i][1]

}



document.getElementById('slideshow_L').addEventListener("click", slideLeft)
document.getElementById('slideshow_R').addEventListener("click", slideRight)


setImg(0)
