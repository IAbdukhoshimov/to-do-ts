import { Router } from "express"
import TodoRouter from "./todo"

const router = Router({ mergeParams: true })

router.use("/sample", TodoRouter)

export default router
