const mongoose = require("mongoose");

const mongoURI = process.env.DB_URI;

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a mongoose schema for the Product
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
});

// Create a Mongoose model for the Product
const Product = mongoose.model("Product", productSchema);

// Creates a new product in MongoDB
async function createProduct(product) {
  try {
    const newProduct = new Product(product);
    await newProduct.save();
    console.log("Product created successfully!");
  } catch (error) {
    console.error("Error creating product:", error);
  }
}

// Retrieves all products from MongoDB
async function getAllProducts() {
  try {
    const products = await Product.find();
    console.log(products);
  } catch (error) {
    console.error("Error retrieving products:", error);
  }
}

// Example usage
async function main() {
  await connectToMongo();

  const newProduct = {
    name: "Laptop",
    price: 1000,
    quantity: 5,
  };

  await createProduct(newProduct);

  await getAllProducts();

  process.exit(0);
}

main();
