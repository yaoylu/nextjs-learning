// route.ts — API Route
// 文件名必须叫 route.ts，函数名必须是 HTTP 方法名 (GET, POST, PUT, DELETE)
// 不能和同目录的 page.tsx 共存

import { NextRequest, NextResponse } from "next/server"

// 模拟数据库
const todos: { id: number; text: string; done: boolean }[] = [
  { id: 1, text: "Learn Next.js", done: false },
  { id: 2, text: "Build an app", done: false },
]
let nextId = 3

// GET /api/todos → 返回所有 todos
export async function GET() {
  return NextResponse.json(todos)
}

// POST /api/todos → 添加一个 todo
export async function POST(request: NextRequest) {
  const body = await request.json()
  const todo = { id: nextId++, text: body.text, done: false }
  todos.push(todo)
  return NextResponse.json(todo, { status: 201 })
}

// DELETE /api/todos?id=1 → 删除一个 todo
export async function DELETE(request: NextRequest) {
  const id = Number(request.nextUrl.searchParams.get("id"))
  const index = todos.findIndex(t => t.id === id)
  if (index === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }
  todos.splice(index, 1)
  return NextResponse.json({ success: true })
}
