import { Router } from "express"
import { TodoController } from "../controllers/todo"
import { TodoValidator } from "../validators/todo"

const router = Router({ mergeParams: true })
const controller = new TodoController()
const validator = new TodoValidator()

router.route("/").get(controller.getAll).post(validator.create, controller.create)
router
    .route("/:id")
    .get(controller.get)
    .patch(validator.update, controller.update)
    .delete(controller.delete)

export default router
