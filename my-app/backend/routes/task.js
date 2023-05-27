import express from "express"
import {newTask,deleteMyTask} from "../controllers/task.js"
import isAuthenticated from "../middlewares/auth.js"
const router = express.Router()
router.post("/new",isAuthenticated, newTask)
router.delete("/delete",)
router.get("/my",isAuthenticated, getMyTask)
router
    .route("/:id")
    .put(isAuthenticated,updateMyTask)
    .delete(isAuthenticated,deleteMyTask)
export default router