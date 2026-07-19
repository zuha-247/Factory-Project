'use client'
import { useSceneStore } from '../../store/useSceneStore'
import Checklist from '../../components/Checklist'

export default function TestChecklist() {
  const setLastClicked = useSceneStore((state) => state.setLastClicked)

return (
  <div style={{ padding: 40 }}>
    <button onClick={() => setLastClicked('cystic-duct')}>Click Cystic Duct</button>
    <br /><br />
    <button onClick={() => setLastClicked('gallbladder')}>Click Gallbladder</button>
    <br /><br />
    <button onClick={() => setLastClicked('liver')}>Click Liver</button>
    <br /><br />
    <Checklist />
  </div>
)
}