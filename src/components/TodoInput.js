import { SettingsContext } from "@/contexts/settingsContext"
import { useState, useEffect, useCallback, useMemo, useContext } from "react"

export default function TodoInput(props) {
    const [todo, setTodo] = useState("")
    const [isChecked, setIsChecked] = useState(false)
    const { darkMode } = useContext(SettingsContext)
    console.log({ darkMode })

    console.log("se renderizó el TODO")
    const handleChange = useCallback((event) => {
        const value = event.target.value
        setTodo(value)
    }, [])
    const addTodo = useCallback(() => {
        console.log(todo)
        fetch("http://localhost:3000/api/todos", {
            method: "POST",
            body: JSON.stringify({ todo }),
        })
    }, [todo])

    const upperCaseTodo = useMemo(() => {
        console.log("upperCaseTodo")
        return todo.toUpperCase()
    }, [todo])

    return (
        <>
            <input
                type="text"
                placeholder="Enter a todo item"
                onChange={handleChange}
                value={todo}
                style={{
                    backgroundColor: darkMode ? "black" : "white",
                    color: darkMode ? "white" : "black",
                }}
            />
        </>
    )
}
