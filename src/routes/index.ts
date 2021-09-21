import { Router } from "express"
import TodoRouter from "./todo"

const router = Router({ mergeParams: true })

router.use("/Mirbobojon", TodoRouter)

export default router
