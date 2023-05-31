import TodoForm from "@/components/TodoForm"
import { SettingsContext } from "@/contexts/settingsContext"

import { createContext, useEffect, useState } from "react"

const EditContext = createContext({ isEditMode: false })

export default function Home() {
    const [darkMode, setDarkMode] = useState(true)
    const [isEditMode, setIsEditMode] = useState(true)

    return (
        <SettingsContext.Provider value={{ darkMode }}>
            <EditContext.Provider value={{ isEditMode }}>
                <div>
                    <div>
                        <h1>ToDo App</h1>

                        <button onClick={() => setIsEditMode(!isEditMode)}>
                            Toggle Edit Mode
                        </button>

                        <button onClick={() => setDarkMode(!darkMode)}>
                            Dark Mode
                        </button>

                        <div>
                            {isEditMode && <TodoForm />}

                            <div>
                                <ul>
                                    <li>Task 1</li>
                                    <li>Task 2</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </EditContext.Provider>
        </SettingsContext.Provider>
    )
}
