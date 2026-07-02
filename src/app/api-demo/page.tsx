"use client"

import { useState, useEffect } from "react"

interface Todo {
  id: number
  text: string
  done: boolean
}

export default function ApiDemoPage() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState("")

  // 从 API route 获取数据
  async function fetchTodos() {
    const res = await fetch("/api/todos")
    setTodos(await res.json())
  }

  useEffect(() => { fetchTodos() }, [])

  async function addTodo() {
    if (!input.trim()) return
    await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    })
    setInput("")
    fetchTodos()
  }

  async function deleteTodo(id: number) {
    await fetch(`/api/todos?id=${id}`, { method: "DELETE" })
    fetchTodos()
  }

  return (
    <div>
      <h1>API Routes</h1>
      <p style={{ color: "#666", fontSize: 13, marginBottom: 16 }}>
        Client component talks to /api/todos (route.ts)
      </p>

      <div style={{ marginBottom: 16 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && addTodo()}
          placeholder="Add a todo..."
          style={{ padding: "6px 10px", marginRight: 8, border: "1px solid #ccc", borderRadius: 4 }}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ display: "flex", alignItems: "center", gap: 8, margin: "6px 0" }}>
            <span style={{ flex: 1 }}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)} style={{ color: "red" }}>×</button>
          </li>
        ))}
      </ul>

      <p style={{ color: "#999", fontSize: 12, marginTop: 16 }}>
        Try: <code>curl http://localhost:3000/api/todos</code>
      </p>
    </div>
  )
}
