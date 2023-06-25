import SpellClass from './SpellClass'
import SpellLevelDividerRow from './SpellLevelDividerRow'
import SpellList from './SpellList'
import './SpellSheet.css'
import SpellSlots from './SpellSlots'

export default function SpellSheet() {
  return (
    <>
      <div>
        Character name
      </div>

      <SpellClass />

      {/* <SpellSlots /> */}

      <SpellLevelDividerRow level={1} />
      <SpellList count={20}/>

      <SpellLevelDividerRow level={2} />
      <SpellList count={20}/>
    </>
  )
}