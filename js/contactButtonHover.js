const contactButton = document.getElementById("contact-button");
const contactSectionDiv = document.getElementById("hover-setion")
let prev = 0;
function randomColor() {
  const colorArray = [
    "#2EC4B6",
    "#E71D36",
    "#FF9F1C",
    "#072AC8",
    "#1E96FC",
    "#5C5D8D",
  ];
  
  let no = Math.floor(Math.random() * colorArray.length);
  while(no ==prev){
    no = Math.floor(Math.random() * colorArray.length);
  }
  prev = no;
  return colorArray[no];
}

contactButton.addEventListener("click",()=>{
  color = randomColor()
  contactSectionDiv.style.backgroundColor=color
})

contactButton.addEventListener("mouseover", () => {
  color = randomColor();
  contactButton.style.backgroundColor = color
  contactButton.style.boxShadow=`"0 2px 5px ${color};"`
  contactButton.style.boxShadow=`box-shadow: 0 0 5px rgb(0, 140, 255), 0 0 25px rgb(0, 140, 255),
  0 0 50px rgb(0, 140, 255), 0 0 100px rgb(0, 140, 255);`
});
contactButton.addEventListener("mouseleave", () => {
  contactButton.style.backgroundColor = "rgb(0, 140, 255)";
  contactButton.style.boxShadow="0 2px 5px #c6ff7d;"
});
