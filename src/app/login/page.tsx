export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <p>You were redirected here because you don't have an auth-token cookie.</p>
      <p style={{ color: "#666", fontSize: 13, marginTop: 12 }}>
        To bypass: open DevTools → Application → Cookies → add "auth-token" with any value, then visit /protected again.
      </p>
    </div>
  )
}
