import { TodoStorage } from "./mongodb/todo"

interface IStorage {
    sample: TodoStorage
}

export let storage: IStorage = {
    sample: new TodoStorage()
}