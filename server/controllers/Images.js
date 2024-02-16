import { Router } from "express";
import multer from 'multer';
const router = Router();

// Model
import images from "../model/Images";

// Multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Utility function
import { s3upload } from "../utility/s3";

router.post("/", upload.single("file"), async (req, res) => {
    try {
        const file = req.file;
        //s3 bucket options
        const bucketOptions = {
            Bucket: "zomato-master-2004",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            // ACL: "public-read"
        }
        const uplodImage = await s3upload(bucketOptions);
        const AddToDatabase= await images.create({url:[uplodImage.Location]});

        return res.status(200).json({ AddToDatabase });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
})

router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const image = await images.findById(_id);

        if (!image) {
            return res.status(404).json({ error: "No Image Found with This ID" });
        }

        return res.status(200).json({ image });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});
export default router;
