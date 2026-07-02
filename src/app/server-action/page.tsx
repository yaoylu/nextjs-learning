// Server Action — 在服务器上执行的函数
// 不需要写 API route，直接在表单提交时调用服务端代码

// 模拟数据库
const messages: { id: number; text: string; createdAt: string }[] = []
let nextId = 1

// "use server" 标记这个函数在服务器上执行
// 客户端表单提交时，Next.js 自动发请求到服务器调用这个函数
async function addMessage(formData: FormData) {
  "use server"

  const text = formData.get("message") as string
  if (!text?.trim()) return

  messages.push({
    id: nextId++,
    text: text.trim(),
    createdAt: new Date().toLocaleTimeString(),
  })
}

async function deleteMessage(formData: FormData) {
  "use server"

  const id = Number(formData.get("id"))
  const index = messages.findIndex(m => m.id === id)
  if (index !== -1) messages.splice(index, 1)
}

export default function ServerActionPage() {
  return (
    <div>
      <h1>Server Actions</h1>
      <p style={{ color: "#666", fontSize: 13, marginBottom: 16 }}>
        Form submits call server functions directly — no API route needed.
      </p>

      {/* action={serverFunction} — 表单提交时调用服务端函数 */}
      <form action={addMessage} style={{ marginBottom: 16 }}>
        <input
          name="message"
          placeholder="Type a message..."
          required
          style={{ padding: "6px 10px", marginRight: 8, border: "1px solid #ccc", borderRadius: 4 }}
        />
        <button type="submit">Send</button>
      </form>

      {/* 消息列表 */}
      {messages.length === 0 ? (
        <p style={{ color: "#999" }}>No messages yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {messages.map(msg => (
            <li key={msg.id} style={{ display: "flex", alignItems: "center", gap: 8, margin: "6px 0" }}>
              <span style={{ flex: 1 }}>{msg.text}</span>
              <span style={{ color: "#999", fontSize: 12 }}>{msg.createdAt}</span>
              {/* 每个删除按钮也是一个 form + server action */}
              <form action={deleteMessage} style={{ display: "inline" }}>
                <input type="hidden" name="id" value={msg.id} />
                <button type="submit" style={{ color: "red", border: "none", background: "none", cursor: "pointer" }}>×</button>
              </form>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
