'use client'
import { useEffect, useState } from 'react'
import { useSceneStore, selectLastClicked, ANATOMY_IDS } from '../store/useSceneStore'

// The 3 items your checklist is tracking (from onboarding plan: "3-checklist widget")
const CHECKLIST_ITEMS = ['cystic-duct', 'gallbladder', 'liver']

export default function Checklist() {
  const lastClicked = useSceneStore(selectLastClicked)
  const [checkedItems, setCheckedItems] = useState([])

  useEffect(() => {
    if (lastClicked && !checkedItems.includes(lastClicked)) {
      setCheckedItems((prev) => [...prev, lastClicked])
    }
  }, [lastClicked])

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Checklist</h3>
      {CHECKLIST_ITEMS.map((item) => (
        <label key={item} style={styles.item}>
          <input type="checkbox" checked={checkedItems.includes(item)} readOnly />
          <span style={styles.label}>{item.replace(/-/g, ' ')}</span>
        </label>
      ))}
    </div>
  )
}

const styles = {
  card: {
    maxWidth: 300,
    margin: '20px auto',
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#1a1a1a',
    border: '1px solid #333',
    fontFamily: 'sans-serif',
  },
  title: { color: '#fff', marginBottom: 12 },
  item: { display: 'flex', alignItems: 'center', gap: 8, color: '#fff', marginBottom: 8 },
  label: { textTransform: 'capitalize' },
}