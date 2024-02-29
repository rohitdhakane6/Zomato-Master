// Libraties
import express from "express";

// Database modal
import {Food} from "../model/Food";



const Router = express.Router();

/**
 * Route        /:_id
 * Des          GET food based on id
 * Params       _id
 * Access       Public
 * Method       GET
 */
Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const foods = await Food.findById(_id);
    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route        /r/:_id
 * Des          GET all food based on particular restaurant
 * Params       none
 * Access       Public
 * Method       GET
 */
Router.get("/r/:_id", async (req, res) => {
  try {
    // await validateId(req.params);
    const { _id } = req.params;
    const foods = await Food.find({ restaurant: _id });

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route        /c/:category
 * Des          GET all food based on particular category
 * Params       none
 * Access       Public
 * Method       GET
 */
Router.get("/c/:category", async (req, res) => {
  try {
    // validateCategory(req.params);
    const { category } = req.params;
    const foods = await Food.find({
      category: { $regex: category, $options: "i" },
    });

    if (!foods)
      return res
        .status(404)
        .json({ error: `No food matched with ${category}` });

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;