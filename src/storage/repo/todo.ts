import { ITodo } from "../../models/todo"

export interface ITodoAllResponse {
    payloads: ITodo[]
    count: number
}

export interface TodoRepo {
    create(payload: ITodo): Promise<ITodo>
    update(id: string, payload: ITodo): Promise<ITodo>
    delete(id: string): Promise<any>
    find(query: Object): Promise<ITodo[]>
    findOne(query: Object): Promise<ITodo>
    findById(id: string): Promise<ITodo>
}
