console.log("JS file is connected")

// Variables
const allIcons = document.querySelectorAll("#icon-container svg");
console.log(allIcons);

// Functions
function logId() {
    console.log(this.id);
}

// EventListener

allIcons.forEach(icon => {icon.addEventListener("click", logId);
})