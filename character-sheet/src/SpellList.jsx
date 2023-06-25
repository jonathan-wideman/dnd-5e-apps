import SpellHeaderRow from './SpellHeaderRow'
import SpellRow from './SpellRow'
import spellListColumns from './spellListColumns'

export default function SpellList({ header = true, count }) {
  return (
    <div className='spell-list' style={{
      gridTemplateColumns: spellListColumns.map(column => column.width).join(" ")
    }}>
      {header ? <SpellHeaderRow /> : null}

      {[...Array(count)].map((item, index) =>
        <SpellRow key={index} />
      )}
    </div>
  )
}