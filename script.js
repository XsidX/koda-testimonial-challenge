const testimonies = [
    {
        image: "images/users/user1.png",
        name: "Victor Nyarongi",
        testimony: "This was well articulated. I am more than impressed. I would not mind using this on a daily basis, both at work and while at home."
    },
    {
        image: "images/users/user2.png",
        name: "Felix Designer",
        testimony: "10/10 on this. This would increase my productivity immensely."
    },
    {
        image: "images/users/user3.png",
        name: "Laura Kiano",
        testimony: "The release date was just perfect. I intend to use the application this summer and I am confident it will improve my productivity levels. This is really amazing and big up to the team."
    },
    {
        image: "images/users/user4.png",
        name: "Faith Wanbua",
        testimony: "I really loved the product. It gives an exemplary experience and I would recommend to to friends & family."
    },
    {
        image: "images/users/user5.png",
        name: "Stacy Ashley",
        testimony: "Aaaw. This is an amazing work to the team that made this. I love the web app. I recommend 10/10."
    },
    {
        image: "images/users/user6.png",
        name: "Hellena Chantelle",
        testimony: "This is going to be my favourite software this year. I have used it and I love every bit of it. There are no bugs and I would recommend to friends & family."
    },
    {
        image: "images/users/user7.png",
        name: "Ndlovu Mogaka",
        testimony: "I have already shared this with friends and family. The system updates are definitely going to come in handy in boosting my productivity."
    },
    {
        image: "images/users/user8.png",
        name: "Zakayo Holland",
        testimony: "I am so proud of the product release. looking forward to the amazing features. Good job!"
    },
    {
        image: "images/users/user9.png",
        name: "Derrick Victor",
        testimony: "I love this honestly. It is an amazing release. Great work on this."
    },
    {
        image: "images/users/user10.png",
        name: "Fatuma Boyani",
        testimony: "This is awesome. Good job team."
    }
    
];

const testimonialsGrid = document.querySelector(".testimonials-grid");
const overlay = document.getElementById("overlay");
const modalImage = document.getElementById("modal-image");
const modalName = document.getElementById("modal-name");
const modalTestimony = document.getElementById("modal-testimony");

testimonies.forEach((testimonial, index) => {
    let rowClass;
    if (index < 3) {
        rowClass = "top";
    } else if (index > 5) {
        rowClass = "bottom";
    } else {
        rowClass = "middle";
    }
  const testimonialItem = document.createElement("div");
  testimonialItem.classList.add("testimonial-item", rowClass);
  testimonialItem.innerHTML = `
    <img src="${testimonial.image}" alt="${testimonial.name}">
  `;
  testimonialItem.addEventListener("click", () => openModal(index));
  testimonialsGrid.appendChild(testimonialItem);
});

function openModal(index) {
  const { image, name, testimony } = testimonies[index];
  modalImage.src = image;
  modalName.textContent = name;
  modalTestimony.textContent = testimony;
  overlay.style.display = "flex";
}

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});