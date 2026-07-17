'use client'
import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function AuthForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) setMessage(error.message)
    else setMessage('Signed up! Check console for session.')
    console.log(data, error)
  }

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setMessage(error.message)
    else setMessage('Signed in!')
    console.log(data, error)
  }

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Sign In / Sign Up</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      <div style={styles.buttonRow}>
        <button onClick={handleSignUp} style={styles.buttonPrimary}>Sign Up</button>
        <button onClick={handleSignIn} style={styles.buttonSecondary}>Sign In</button>
      </div>

      {message && <p style={styles.message}>{message}</p>}
    </div>
  )
}

const styles = {
  card: {
    maxWidth: 360,
    margin: '40px auto',
    padding: 24,
    borderRadius: 12,
    backgroundColor: '#1a1a1a',
    border: '1px solid #333',
    fontFamily: 'sans-serif',
  },
  title: {
    color: '#fff',
    marginBottom: 16,
    fontSize: 20,
    textAlign: 'center',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px 12px',
    marginBottom: 12,
    borderRadius: 8,
    border: '1px solid #444',
    backgroundColor: '#0d0d0d',
    color: '#fff',
    fontSize: 14,
    boxSizing: 'border-box',
  },
  buttonRow: {
    display: 'flex',
    gap: 10,
    marginTop: 8,
  },
  buttonPrimary: {
    flex: 1,
    padding: '10px 0',
    borderRadius: 8,
    border: 'none',
    backgroundColor: '#22c55e',
    color: '#0d0d0d',
    fontWeight: 600,
    cursor: 'pointer',
  },
  buttonSecondary: {
    flex: 1,
    padding: '10px 0',
    borderRadius: 8,
    border: '1px solid #22c55e',
    backgroundColor: 'transparent',
    color: '#22c55e',
    fontWeight: 600,
    cursor: 'pointer',
  },
  message: {
    marginTop: 12,
    color: '#9ca3af',
    fontSize: 13,
    textAlign: 'center',
  },
}