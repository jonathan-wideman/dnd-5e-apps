import FancyBox from "./FancyBox";

export default function SpellClass() {
  return (
    <div className='divider-container spell-class-row'>
      <div className='divider-background lg'></div>
      <div className='divider-content spell-class'>
        <div className="spell-class-values grow">
          <span className="spell-class-name">Class</span>
          <span className="spell-class-box short grow simple"></span>
          <div className="spell-class-box sm">
            <span className="spell-class-box-label">Ability</span>
          </div>
          <div className="spell-class-box sm">
            <span className="spell-class-box-label">Prepare</span>
          </div>
        </div>
        <div className="spell-class-values">
          <FancyBox><span className="spell-class-box-label">Attack</span></FancyBox>
          <FancyBox><span className="spell-class-box-label">Save DC</span></FancyBox>
          {/* <FancyBox><span className="spell-class-box-label">Ability</span></FancyBox> */}
          {/* <FancyBox><span className="spell-class-box-label">Prepare</span></FancyBox> */}
        </div>
      </div>
    </div>
  )
}