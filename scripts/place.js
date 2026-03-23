// FOOTER
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// STATIC WEATHER VALUES
const temp = 28;
const windSpeed = 10;

// FUNCTION (ONE LINE RETURN ✅)
function calculateWindChill(t, v) {
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(2);
}

// DISPLAY WIND CHILL
const windChill = document.getElementById("windChill");

if (temp <= 10 && windSpeed > 4.8) {
    windChill.textContent = calculateWindChill(temp, windSpeed) + " °C";
} else {
    windChill.textContent = "N/A";
}