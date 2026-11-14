import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import Product from "./models/Product.js";

const products = [
  {
    name: "The Starry Night",
    description: "Swirling night sky over a quiet village, painted from memory in 1889.",
    price: 4500,
    category: "Van Gogh",
    imageUrl: "/images/starry-night.jpeg",
    stock: 10,
    artist: "Vincent van Gogh",
    year: 1889,
  },
  {
    name: "Sunflowers",
    description: "A vase of sunflowers in thick yellow brushstrokes.",
    price: 3900,
    category: "Van Gogh",
    imageUrl: "/images/sunflowers.jpeg",
    stock: 8,
    artist: "Vincent van Gogh",
    year: 1888,
  },
  {
    name: "Café Terrace at Night",
    description: "A lively cafe terrace lit by gas lamps under a starry sky.",
    price: 3600,
    category: "Van Gogh",
    imageUrl: "/images/cafe-terrace.jpeg",
    stock: 6,
    artist: "Vincent van Gogh",
    year: 1888,
  },
  {
    name: "Water Lilies",
    description: "A calm pond covered with water lilies and soft reflections.",
    price: 4200,
    category: "Monet",
    imageUrl: "/images/water-lilies.jpeg",
    stock: 7,
    artist: "Claude Monet",
    year: 1906,
  },
  {
    name: "Impression, Sunrise",
    description: "A misty harbour at dawn that gave Impressionism its name.",
    price: 4000,
    category: "Monet",
    imageUrl: "/images/impression-sunrise.jpeg",
    stock: 5,
    artist: "Claude Monet",
    year: 1872,
  },
  {
    name: "Woman with a Parasol",
    description: "A woman and her child standing in a windy, sunlit field.",
    price: 3500,
    category: "Monet",
    imageUrl: "/images/woman-parasol.jpeg",
    stock: 9,
    artist: "Claude Monet",
    year: 1875,
  },
  {
    name: "The Great Wave off Kanagawa",
    description: "A huge wave about to crash over fishing boats, with Mount Fuji behind.",
    price: 3800,
    category: "Others",
    imageUrl: "/images/great-wave.jpeg",
    stock: 12,
    artist: "Katsushika Hokusai",
    year: 1831,
  },
  {
    name: "Girl with a Pearl Earring",
    description: "A portrait of a girl in a blue turban, looking over her shoulder.",
    price: 4800,
    category: "Others",
    imageUrl: "/images/pearl-earring.jpeg",
    stock: 4,
    artist: "Johannes Vermeer",
    year: 1665,
  },
];

const seed = async () => {
  await connectDB();
  await Product.deleteMany();
  const created = await Product.insertMany(products);
  console.log(`Seeded ${created.length} products`);
  await mongoose.disconnect();
};

seed();
