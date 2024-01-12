import { Router } from "express";
import Food from "../model/Food";

const router = Router();

/** Route: /r/:_id
 * Description: Get all food by restaurant id
 * Params: None
 * Query: city
 * Example: /r/1234
 */
router.get("/r/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const food = await Food.find({ restaurant: _id });

    if (food.length === 0) {
      return res.status(400).json({ error: "No Food Found" });
    }

    return res.status(201).json({ food, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/** Route: /c/:category
 * Description: Get food by category
 * Params: category (Food category)
 * Example: /c/pizza
 */
router.get("/c/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const food = await Food.find({
      category: { $regex: category, $options: "i" },
    });

    return res.status(201).json({ food });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});

/** Route: /search/:searchString
 * Description: Search for food by name
 * Params: searchString (Search keyword)
 * Example: /resturant/search/pizza
 */
router.get("/search/:searchString", async (req, res) => {
  try {
    const { searchString } = req.params;
    const food = await Food.find({
      name: { $regex: searchString, $options: "i" },
    });

    if (!food || food.length === 0) {
      return res.status(400).json({ error: `No food Found for ${searchString}` });
    }

    return res.status(201).json({ food });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});

export default router;
