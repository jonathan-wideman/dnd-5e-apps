import './FancyBox.css'

export default function FancyBox({ children }) {
  return (
    <div className="fancy-box-container">
      <div className="fancy-box-cell fancy-box-cell-left fancy-box-cell-end"></div>
      <div className="fancy-box-cell fancy-box-cell-middle">{children}</div>
      <div className="fancy-box-cell fancy-box-cell-right fancy-box-cell-end"></div>
    </div>
  )
}