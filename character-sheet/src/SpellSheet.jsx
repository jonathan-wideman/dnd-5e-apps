import SpellHeaderRow from './SpellHeaderRow'
import SpellRow from './SpellRow'
import './SpellSheet.css'
import spellListColumns from './spellListColumns'

export default function SpellSheet() {
  return (
    <>
      <div>
        Character name
      </div>

      <div className='spell-class-row'>
        <div className='spell-class'>
          <span className="spell-class-box">Class Name</span>
          <span className="spell-class-box">Casting Ability</span>
          <span className="spell-class-box">Attack Mod</span>
          <span className="spell-class-box">Save DC</span>
          <span className="spell-class-box">Prepare</span>
        </div>
      </div>

      {/* <div className='spell-slots-row'>
        <div className='spell-slots'>
          <span className="spell-slot">1st Level</span>
          <span className="spell-slot">2nd Level</span>
          <span className="spell-slot">3rd Level</span>
          <span className="spell-slot">4th Level</span>
          <span className="spell-slot">5th Level</span>
          <span className="spell-slot">6th Level</span>
          <span className="spell-slot">7th Level</span>
          <span className="spell-slot">8th Level</span>
          <span className="spell-slot">9th Level</span>
        </div>
        <div className='spell-slots-label'>Spell Slots</div>
      </div> */}

      <div className='spell-level-divider row'>
        <div className='spell-level-divider slots'>
          <span className='spell-level-divider box'></span>
          <span className='spell-level-divider box'></span>
          <span className='spell-level-divider box'></span>
          <span className='spell-level-divider box'></span>
        </div>
        <span className='spell-level-divider level'>Level ~ I</span>
      </div>

      <div className='spell-list' style={{
        gridTemplateColumns: spellListColumns.map(column => column.width).join(" ")
      }}>
        <SpellHeaderRow />

        {[...Array(20)].map((item, index) =>
          <SpellRow key={index} />
        )}
      </div>

      <div className='spell-level-divider row'>
        <div className='spell-level-divider slots'>
          <span className='spell-level-divider box'></span>
          <span className='spell-level-divider box'></span>
          <span className='spell-level-divider box'></span>
          <span className='spell-level-divider box'></span>
        </div>
        <span className='spell-level-divider level'>Level ~ II</span>
      </div>

      <div className='spell-list' style={{
        gridTemplateColumns: spellListColumns.map(column => column.width).join(" ")
      }}>
        <SpellHeaderRow />

        {[...Array(20)].map((item, index) =>
          <SpellRow key={index} />
        )}
      </div>
    </>
  )
}