//GLOBAL VARIABLES

const blueColor = "#0c1927";
const mainTextColor = "#eeeeee";
const highlightColor = "#8e7d91";

//BACKGROUND COLOR AND MAIN TEXT COLOR
document.body.style.backgroundColor = blueColor;
document.body.style.color = mainTextColor;


//SET COLOR OF GREETING SPAN TAGS
var highlight = document.getElementsByTagName('span');
for(i = 0; i < highlight.length; i++){
  highlight[i].style.color = highlightColor;
}
