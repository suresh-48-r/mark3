"strict"
const { Mark3 } = require("./mark3.js");
button = document.getElementById("button");
button.addEventListener("click", () => {
    const mark3 = new Mark3();
    mark3.run();
});

