import { useState, useEffect } from "react"

export default function TodoInput(props) {
    const [todo, setTodo] = useState("")

    useEffect(() => {
        console.log("se actualizó el TODO")

        return () => {
            console.log("se desmontó el componente")
        }
    }, [todo])

    return (
        <input
            type="text"
            placeholder="Enter a todo item"
            onChange={(event) => {
                const value = event.target.value
                setTodo(value)
            }}
            value={todo}
        />
    )
}
