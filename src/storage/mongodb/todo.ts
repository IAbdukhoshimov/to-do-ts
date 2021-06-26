import { TodoRepo, ITodoAllResponse } from "../repo/todo"
import Todo, { ITodo } from "../../models/todo"
import { logger } from "../../config/logger"
import AppError from "../../utils/appError"

export class TodoStorage implements TodoRepo {
    private scope = "storage.sample"

    async find(query: Object): Promise<ITodo[]> {
        try {
            let dbObj = await Todo.find({ ...query })

            return dbObj
        } catch (error) {
            logger.error(`${this.scope}.find: finished with error: ${error.message}`)
            throw error
        }
    }

    async findOne(query: Object): Promise<ITodo> {
        try {
            let dbObj = await Todo.findOne({ ...query })

            if (!dbObj) {
                logger.warn(`${this.scope}.get failed to findOne`)
                throw new AppError(404, "Db object is not found")
            }

            return dbObj
        } catch (error) {
            logger.error(`${this.scope}.findOne: finished with error: ${error.message}`)
            throw error
        }
    }

    async findById(id: string): Promise<ITodo> {
        try {
            let dbObj = await Todo.findById(id)

            if (!dbObj) {
                logger.warn(`${this.scope}.get failed to findOne`)
                throw new AppError(404, "Db object is not found")
            }

            return dbObj
        } catch (error) {
            logger.error(`${this.scope}.findOne: finished with error: ${error.message}`)
            throw error
        }
    }

    async create(payload: ITodo): Promise<ITodo> {
        try {
            let dbObj = await Todo.create(payload)

            return dbObj
        } catch (error) {
            logger.error(`${this.scope}.create: finished with error: ${error.message}`)
            throw error
        }
    }

    async update(id: string, payload: ITodo): Promise<ITodo> {
        try {
            let dbObj = await Todo.findByIdAndUpdate(id, payload, {
                new: true
            })

            if (!dbObj) {
                logger.warn(`${this.scope}.update failed to findByIdAndUpdate`)
                throw new AppError(404, "Db object is not found")
            }

            return dbObj
        } catch (error) {
            logger.error(`${this.scope}.update: finished with error: ${error.message}`)
            throw error
        }
    }

    async delete(id: string): Promise<any> {
        try {
            let dbObj = await Todo.findByIdAndDelete(id)

            if (!dbObj) {
                logger.warn(`${this.scope}.delete failed to findByIdAndDelete`)
                throw new AppError(404, "Db object is not found")
            }

            return dbObj
        } catch (error) {
            logger.error(`${this.scope}.delete: finished with error: ${error.message}`)
            throw error
        }
    }
}
