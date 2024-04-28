import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).json({
    message: "Ping successfully",
    documentation: "",
  });
});
import authRoute from "../controllers/Auth.js"
import imageRoute from "../controllers/Images.js";
import restaurantRoute from "../controllers/Restaurant.js";
import foodRoute from "../controllers/Food.js";
import MenuRoute from "../controllers/Menu.js";
import ReviewRoute from "../controllers/Review.js";
import UserRoute from "../controllers/User.js";

router.use("/auth", authRoute);
router.use("/image", imageRoute);
router.use("/restaurant", restaurantRoute);
router.use("/food", foodRoute);
router.use("/menu", MenuRoute);
router.use("/reviews", ReviewRoute);
router.use("/user", UserRoute);

export default router;
