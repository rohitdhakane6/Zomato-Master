// Libraries
import express from "express";

// Database modal
import { Menu } from '../model/Menu'

const Router = express.Router();

/**
 * Route        /list
 * Des          GET all list of menu based on restaurant id
 * Params       _id
 * Access       Public
 * Method       GET
 */
Router.get("/list/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menus = await Menu.findById(_id);

    if (!menus) {
      return res.status(404).json({ error: "No menu present for this restaurant" });
    }

    return res.json( menus );
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});



export default Router;