const products = [
    { id: "p1", name: "Smartphone" },
    { id: "p2", name: "Laptop" },
    { id: "p3", name: "Tablet" },
    { id: "p4", name: "Smart TV" },
    { id: "p5", name: "Headphones" }
];

// Populate dropdown
const productSelect = document.getElementById("product");

if (productSelect) {
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// Review counter
if (window.location.pathname.includes("review.html")) {
    let count = localStorage.getItem("reviewCount") || 0;
    count++;
    localStorage.setItem("reviewCount", count);

    document.getElementById("counter").textContent = count;
}