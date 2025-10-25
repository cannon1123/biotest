import { useState } from 'react'
import { supabase } from './supabaseClient'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  async function handleLogin() {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert('Błąd logowania!')
    else setUser(data.user)
  }

  async function handleGoogleLogin() {
    await supabase.auth.signInWithOAuth({ provider: 'google' })
  }

  return (
    <div style={{ maxWidth: 400, margin: "50px auto" }}>
      {!user ? (
        <div>
          <h2>Logowanie</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: "100%" }}
          />
          <input
            type="password"
            placeholder="Hasło"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: "100%", marginTop: 8 }}
          />
          <button onClick={handleLogin} style={{ width: "100%", marginTop: 12 }}>Zaloguj</button>
          <button onClick={handleGoogleLogin} style={{ width: "100%", marginTop: 8, background: "#4285F4" }}>Google</button>
        </div>
      ) : (
        <div>
          <h2>Witaj {user.email}!</h2>
          <p>Zalogowano poprawnie.</p>
          {/* Tutaj dodamy dashboard i widoki projektów! */}
        </div>
      )}
    </div>
  )
}
