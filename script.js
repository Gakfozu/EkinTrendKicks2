const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");


const products = [
  {
    id: 1,
    title: "Dunk High",
    price: 129,
    colors: [
      {
        code: "lightblue",
        img: "dh1.png",
      },
      {
        code: "purple",
        img: "dh2.png",
      },
      {
        code: "black",
        img: "dh3.png",
      },
      {
        code: "gray",
        img: "dh4.png",
      },
      {
        code: "#343511",
        img: "dh5.png",
      },
    ],
  },
  {
    id: 2,
    title: "Dunk Low",
    price: 109,
    colors: [
      {
        code: "black",
        img: "dl1.png",
      },
      {
        code: "#38245d",
        img: "dl2.png",
      },
      {
        code: "skyblue",
        img: "dl3.png",
      },
      {
        code: "red",
        img: "dl4.png",
      },
      {
        code: "green",
        img: "dl5.png",
      },
    ],
  },
  {
    id: 3,
    title: "Samba",
    price: 119,
    colors: [
      {
        code: "white",
        img: "s1.png",
      },
      {
        code: "#366a62",
        img: "s2.png",
      },
      {
        code: "#2c4882",
        img: "s3.png",
      },
      {
        code: "black",
        img: "s4.png",
      },
      {
        code: "#cfcbbf",
        img: "s5.png",
      },
    ],
  },
  {
    id: 4,
    title: "New Balance",
    price: 99,
    colors: [
      {
        code: "#c4bcaa",
        img: "nb1.png",
      },
      {
        code: "black",
        img: "nb2.png",
      },
      {
        code: "darkgreen",
        img: "nb3.png",
      },
      {
        code: "red",
        img: "nb4.png",
      },
      {
        code: "skyblue",
        img: "nb5.png",
      },
    ],
  },
  {
    id: 5,
    title: "Yeezy",
    price: 139,
    colors: [
      {
        code: "black",
        img: "y1.png",
      },
      {
        code: "darkgray",
        img: "y2.png",
      },
      {
        code: "#ded7c4",
        img: "y3.png",
      },
      {
        code: "blue",
        img: "y4.png",
      },
      {
        code: "brown",
        img: "y5.png",
      },
    ],
  },
];


let choosenProduct = products[0];


const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;


    //change the choosen product
    choosenProduct = products[index];


    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;


    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});


currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});


currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");


// Function to handle checkout process
function handleCheckout() {
  // Get the input fields for personal information
  const nameInput = document.querySelector('.payInput[name="name"]');
  const phoneInput = document.querySelector('.payInput[name="phone"]');
  const addressInput = document.querySelector('.payInput[name="address"]');


  // Check if all input fields are filled
  if (nameInput.value.trim() === '' || phoneInput.value.trim() === '' || addressInput.value.trim() === '') {
    alert("Please fill out all the required information.");
  } else {
    // Proceed with checkout process
    alert("Thank you for your purchase!");
    payment.style.display = "none"; // Close the payment modal after successful checkout
  }
}


productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});


close.addEventListener("click", () => {
  payment.style.display = "none";
});


// Add event listener to the checkout button
const checkoutButton = document.querySelector(".payButton");
checkoutButton.addEventListener("click", handleCheckout); // Corrected the event listener here


