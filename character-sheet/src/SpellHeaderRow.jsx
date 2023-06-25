import spellListColumns from "./spellListColumns";

export default function SpellHeaderRow() {
  return (
    // <>
    //   <span className="cell spell-header-row">Prep</span>
    //   <span className="cell spell-header-row">Spell</span>
    //   <span className="cell spell-header-row">Description</span>
    //   <span className="cell spell-header-row">Save</span>
    //   <span className="cell spell-header-row">School</span>
    //   <span className="cell spell-header-row">Time</span>
    //   <span className="cell spell-header-row">Range</span>
    //   <span className="cell spell-header-row">Components</span>
    //   <span className="cell spell-header-row">Duration</span>
    //   <span className="cell spell-header-row">Conc</span>
    //   <span className="cell spell-header-row">Reference</span>
    // </>
    <>
      {spellListColumns.map(column =>
        <span key={column.name} className="cell spell-header-row">{column.name}</span>
      )}
    </>
  )
}