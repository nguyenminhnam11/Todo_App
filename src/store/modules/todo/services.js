import { v4 } from "uuid";

function insertTodo(value) {
    return {
        id: v4(),
        value,
        status: false
    }
}

export { insertTodo }

