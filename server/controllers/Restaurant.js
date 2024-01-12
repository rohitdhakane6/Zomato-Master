import { Router } from "express";
import Restaurant from "../model/Restaurant";

const router = Router();

/** Route: /resturant
 * Description: Get all restaurants by location
 * Params: None
 * Query: city
 * Example: /resturant/?city=ncr
 */
router.get("/", async (req, res) => {
  try {
    const { city } = req.query;
    const restaurants = await Restaurant.find({ location: { $regex: city, $options: "i" } });

    if (restaurants.length === 0) {
      return res.status(400).json({ error: "No Restaurants Found in This Location", status: "Unsuccessful" });
    }

    return res.status(201).json({ restaurants, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/** Route: /resturant/:_id
 * Description: Get a specific restaurant by ID
 * Params: _id (Restaurant ID)
 * Example: /resturant/123456
 */
router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const restaurant = await Restaurant.findById(_id);

    if (!restaurant) {
      return res.status(400).json({ error: "No Restaurant Found with This ID" });
    }

    return res.status(201).json({ restaurant });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});

/** Route: /resturant/search/:searchString
 * Description: Search for restaurants by name
 * Params: searchString (Search keyword)
 * Example: /resturant/search/raj hotal
 */
router.get("/search/:searchString", async (req, res) => {
  try {
    const { searchString } = req.params;
    const restaurants = await Restaurant.find({ name: { $regex: searchString, $options: "i" } });

    if (!restaurants) {
      return res.status(400).json({ error: `No Restaurants Found for ${searchString}` });
    }

    return res.status(201).json({ restaurants });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});

export default router;
