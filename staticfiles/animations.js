let TIMES = [300, 500, 700, 1000];
let tiles = document.querySelector(".grid.grid-cols-1").childNodes;

let text =
  "My name is JD, a junior-year computer science student. Explore my educational background, skills, and projects";

let x = 0;
let outputObject1 = document.getElementById("outputObject1");

outputObject1.className =
  "mt-4 text-4xl text-zinc-500 dark:text-zinc-400 font-light";

setTimeout(() => {
  myInterval = setInterval(() => {
    outputObject1.innerText = text.substring(0, x);
    x++;
  }, 60);
}, 1000);

setTimeout(() => {
  HEADER.classList.add("transition", "duration-1000");
  HEADER.classList.remove("translate-y-[-100%]");
}, 9000);

setTimeout(() => {
  clearInterval(myInterval);
}, 10000);


