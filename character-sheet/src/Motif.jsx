import './Motif.css'
import dragonMotif from './assets/dragon-motif.svg'

export default function Motif({ url }) {
  return (
    <img src={dragonMotif} className="motif" alt="Dragon motif" />
  )
}