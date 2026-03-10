// Get the current year
const currentYear = new Date().getFullYear();

// Insert the year into the span
document.getElementById("currentyear").textContent = currentYear;

// Insert the last modified date
document.getElementById("lastModified").innerHTML = document.lastModified;