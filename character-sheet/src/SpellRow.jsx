import spellListColumns from "./spellListColumns"

export default function SpellRow() {

  return (
    <>
      {spellListColumns.map(column =>
        <span key={column.name} className={`cell ${column.className}`}></span>
      )}
    </>
  )
}