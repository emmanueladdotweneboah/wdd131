const temples = [
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah",
        dedicated: "1893",
        area: 253000,
        image: "https://picsum.photos/400/250?random=1"
    },
    {
        name: "Laie Hawaii Temple",
        location: "Laie, Hawaii",
        dedicated: "1919",
        area: 42100,
        image: "https://picsum.photos/400/250?random=2"
    },
    {
        name: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004",
        area: 17500,
        image: "https://picsum.photos/400/250?random=3"
    },
    {
        name: "Paris France Temple",
        location: "Paris, France",
        dedicated: "2017",
        area: 44000,
        image: "https://picsum.photos/400/250?random=4"
    },
    {
        name: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019",
        area: 41000,
        image: "https://picsum.photos/400/250?random=5"
    },
    {
        name: "Logan Utah Temple",
        location: "Logan, Utah",
        dedicated: "1884",
        area: 119619,
        image: "https://picsum.photos/400/250?random=6"
    },
    {
        name: "Manti Utah Temple",
        location: "Manti, Utah",
        dedicated: "1888",
        area: 74792,
        image: "https://picsum.photos/400/250?random=7"
    },
    {
        name: "Brigham City Utah Temple",
        location: "Brigham City, Utah",
        dedicated: "2012",
        area: 36000,
        image: "https://picsum.photos/400/250?random=8"
    },
    {
        name: "Freiberg Germany Temple",
        location: "Freiberg, Germany",
        dedicated: "1985",
        area: 10000,
        image: "https://picsum.photos/400/250?random=9"
    }
];

const container = document.getElementById("temple-container");

function displayTemples(filteredTemples) {
    container.innerHTML = "";

    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        card.innerHTML = `
      <h3>${temple.name}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.image}" alt="${temple.name}" loading="lazy">
    `;

        container.appendChild(card);
    });
}

function filterTemples(type) {
    let filtered = [];

    switch (type) {
        case "old":
            filtered = temples.filter(t => parseInt(t.dedicated) < 1900);
            break;

        case "new":
            filtered = temples.filter(t => parseInt(t.dedicated) > 2000);
            break;

        case "large":
            filtered = temples.filter(t => t.area > 90000);
            break;

        case "small":
            filtered = temples.filter(t => t.area < 10000);
            break;

        default:
            filtered = temples;
    }

    displayTemples(filtered);
}

document.getElementById("copyright").textContent =
    `© ${new Date().getFullYear()} Emmanuel Tweneboah`;

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

displayTemples(temples);