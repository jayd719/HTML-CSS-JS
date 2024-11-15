let footer = document.createElement("div");

footer.classList.add("text-center", "py-2");
let link = document.createElement("a");
link.classList.add("nav-link");
link.href = "https://jashandeep.co.uk";
link.innerText = `© ${new Date().getFullYear()} jashandeep.co.uk`;
footer.appendChild(link);
document.body.appendChild(footer);
