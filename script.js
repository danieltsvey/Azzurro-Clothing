let openbtn = document.querySelector("#openbtn");

openbtn.addEventListener("click", openNav);

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
    const links = document.querySelectorAll("#mySidepanel a");

    links.forEach(link => {
        link.style.opacity = "1";
    })
}

let closebtn = document.querySelector("#closebtn")

closebtn.addEventListener("click", closeNav);

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0px";
    const links = document.querySelectorAll("#mySidepanel a");

    links.forEach(link => {
        link.style.opacity = "0";
    })
}

// logo Text ändern abhängig von Scroll Distanz

window.addEventListener("scroll", scrollChange);

function scrollChange() {
    const logo = document.getElementById("logo-text");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                switch (id) {
                    case "hero":
                        logo.textContent = "BE SOMEONE";
                        break;
                    case "our-shirts":
                        logo.textContent = "AZZURRO";
                        break;
                }
            }
        });
    }, {
        threshold: 0.8 // Erst wenn 80% der Section im Viewport sind
    });

    document.querySelectorAll("section").forEach(section => {
        observer.observe(section);
    });
}

// --------------- T-shirts als Liste in dem product-container ausgeben --------------- //

// Array with product data (later fetched from API etc.)
const products = [
    { name: "Amalfi", price: 45, imgFront: "resources/images/product_pictures/Amalfi_Front.png", imgBack: "resources/images/product_pictures/Amalfi_Back.png"},
    { name: "Calculated", price: 45, imgFront: "resources/images/product_pictures/Calculated_Front.png", imgBack: "resources/images/product_pictures/Calculated_Back.png"},
    { name: "Concorde", price: 45, imgFront: "resources/images/product_pictures/Concorde Black_Front.png", imgBack: "resources/images/product_pictures/Concorde Black_Back.png"},
    { name: "Amalfi Black", price: 45, imgFront: "resources/images/product_pictures/Dream Big_Front.png", imgBack: "resources/images/product_pictures/Dream Big_Back.png"}
];

// get container element
const container = document.getElementById("productContainer");

// create a card for each product
products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
            <div class="image-wrapper">
                <img src="${product.imgFront}" alt="${product.name}-Front" class="product-img-front">
                <img src="${product.imgBack}" alt="${product.name}-Back" class="product-img-back">
            </div>
            <p class="product-title">${product.name}</p>
            <p class="product-price">$${product.price}</p>
    `;

    container.appendChild(card);
});

