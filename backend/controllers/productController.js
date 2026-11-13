import mongoose from "mongoose";
import Product from "../models/Product.js";

const handleError = (res, error) => {
  if (error.name === "ValidationError") {
    const errors = Object.values(error.errors).map((e) => e.message);
    return res.status(400).json({ message: "Invalid product data", errors });
  }
  console.error(error);
  return res.status(500).json({ message: "Server error" });
};

const checkId = (id, res) => {
  if (!mongoose.isValidObjectId(id)) {
    res.status(400).json({ message: "Invalid product ID" });
    return false;
  }
  return true;
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: 1 });
    res.status(200).json(products);
  } catch (error) {
    handleError(res, error);
  }
};

export const getProductById = async (req, res) => {
  try {
    if (!checkId(req.params.id, res)) return;
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    handleError(res, error);
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body || {});
    res.status(201).json(product);
  } catch (error) {
    handleError(res, error);
  }
};

export const updateProduct = async (req, res) => {
  try {
    if (!checkId(req.params.id, res)) return;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body || {},
      { new: true, runValidators: true }
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    handleError(res, error);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    if (!checkId(req.params.id, res)) return;
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    handleError(res, error);
  }
};