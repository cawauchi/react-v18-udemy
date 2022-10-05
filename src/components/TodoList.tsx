import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export const TodoList = () => {
    type Todo = {
        userId: number
        id: number
        title: string
        completed: boolean
    }

    const fetchTodos = async () => {
        const result = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
        return result.data
    }

    const { data } = useQuery<Todo[]>(['todos'], fetchTodos)

    return (
        <div
            style={{
                height: '300px',
                border: '2px solid gray',
                background: 'mistyrose',
                overflowY: 'scroll',
            }}
        >
            <h2>Todo</h2>
            {data?.map((todo) => (
                <p key={todo.id}>{todo.title}</p>
            ))}
        </div>
    )
}
