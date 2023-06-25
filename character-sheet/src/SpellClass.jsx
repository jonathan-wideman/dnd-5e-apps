export default function SpellClass() {
  return (
    <div className='divider-container spell-class-row'>
      <div className='divider-background lg'></div>
      <div className='divider-content spell-class'>
        <span className="spell-class-name">Class</span>
        <div className="spell-class-values">
          <span className="spell-class-box">Save DC</span>
          <span className="spell-class-box">Attack Mod</span>
          <span className="spell-class-box">Ability</span>
          <span className="spell-class-box">Prepare</span>
        </div>
      </div>
    </div>
  )
}