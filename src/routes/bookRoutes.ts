import { Router } from "express";
import { getAllBooks, addBook } from "../controllers/bookController";

const router = Router();

router.get("/list", getAllBooks);
router.post("/book", addBook);

export default router;
