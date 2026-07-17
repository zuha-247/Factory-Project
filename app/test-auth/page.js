'use client'
import { supabase } from '../../lib/supabaseClient'
import AuthForm from '../../components/AuthForm'

export default function TestAuth() {
  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: 'zuhaq+test1@gmail.com',
      password: 'testpassword123'
    })
    console.log('SIGNUP:', data, error)
  }

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'zuhaq+test1@gmail.com',
      password: 'testpassword123'
    })
    console.log('SIGNIN:', data, error)
  }

  return (
    <div style={styles.page}>
      <div style={styles.section}>
        <h2 style={styles.heading}>Quick Auth Test</h2>
        <p style={styles.subtext}>Uses a fixed test account</p>
        <div style={styles.buttonRow}>
          <button onClick={handleSignUp} style={styles.buttonPrimary}>Test Sign Up</button>
          <button onClick={handleSignIn} style={styles.buttonSecondary}>Test Sign In</button>
        </div>
      </div>

      <hr style={styles.divider} />

      <div style={styles.section}>
        <h2 style={styles.heading}>AuthForm Component Test</h2>
        <AuthForm />
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#0d0d0d',
    padding: '60px 20px',
    fontFamily: 'sans-serif',
  },
  section: {
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 4,
  },
  subtext: {
    color: '#9ca3af',
    fontSize: 13,
    marginBottom: 20,
  },
  buttonRow: {
    display: 'flex',
    gap: 10,
    justifyContent: 'center',
  },
  buttonPrimary: {
    padding: '10px 20px',
    borderRadius: 8,
    border: 'none',
    backgroundColor: '#22c55e',
    color: '#0d0d0d',
    fontWeight: 600,
    cursor: 'pointer',
  },
  buttonSecondary: {
    padding: '10px 20px',
    borderRadius: 8,
    border: '1px solid #22c55e',
    backgroundColor: 'transparent',
    color: '#22c55e',
    fontWeight: 600,
    cursor: 'pointer',
  },
  divider: {
    maxWidth: 400,
    margin: '50px auto',
    border: 'none',
    borderTop: '1px solid #333',
  },
}