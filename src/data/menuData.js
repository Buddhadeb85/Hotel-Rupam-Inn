const menuData = [
  {
    id: 1,
    images: ["/images/pasta.jpg", "/images/snacks.jpg", "/images/snacks1.jpg", "/images/snacks2.jpg"],
    name: "Creamy Alfredo Pasta",
    description: "Rich creamy sauce with parmesan and herbs.",
    price: 299,
    category: "Snacks",
    type: "Veg"
  },
  {
    id: 2,
    images: ["/images/snacks3.jpg", "/images/snacks4.jpeg"], 
    name: "Classic Chicken Burger",
    description: "Grilled chicken with cheese and fresh veggies.",
    price: 249,
    category: "Snacks",
    type: "Non-Veg"
  },
  {
    id: 3,
    // FIXED: Added missing quotes around vegthali1.jpg
    images: ["/images/vegthali.jpg", "/images/vegthali1.jpg", "/images/vegthali2.jpg", "/images/vegthali3.jpg"],
    name: "Special Veg Thali",
    description: "Paneer butter masala, dal, rice, and roti.",
    price: 350,
    category: "Lunch",
    type: "Veg"
  },
  {
    id: 4,
    images: ["/images/drink.jpg", "/images/drink1.jpg", "/images/drink2.jpg", "/images/drink3.jpg"],
    name: "Fresh Mojito",
    description: "Refreshing mint and lemon cooler.",
    price: 149,
    category: "Beverages",
    type: "Veg"
  },
  {
    id: 5,
    name: "Paneer Masala",
    images: ["/images/dinner.jpg", "/images/dinner1.jpg","/images/dinner2.jpg"], 
    description: "Cottage cheese cooked in rich tomato gravy.",
    price: 170,
    category: "Dinner",
    type: "Veg"
  },
  {
    id: 6,
    name: "Mutton Thali",
    images: ["/images/nonvegthali.jpeg", "/images/nonvegthali1.jpg", "/images/nonvegthali2.jpg"],
    description: "Rassa Wati, Rassa Plate, Rice, and Bhakri.",
    price: 270,
    category: "Lunch",
    type: "Non-Veg"
  }
];

export default menuData;
