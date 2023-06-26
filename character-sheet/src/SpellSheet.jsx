import FancyBox from './FancyBox'
import SpellClass from './SpellClass'
import SpellLevelDividerRow from './SpellLevelDividerRow'
import SpellList from './SpellList'
import './SpellSheet.css'
import SpellSlots from './SpellSlots'

export default function SpellSheet() {
  return (
    <>
      {/* <FancyBox>Character name</FancyBox> */}

      <SpellClass />

      {/* <SpellSlots /> */}

      <SpellLevelDividerRow level={0} />
      <SpellList count={8} />
      <SpellLevelDividerRow level={1} />
      <SpellList count={18} />
      <SpellLevelDividerRow level={2} />
      <SpellList count={18} />
    </>
  )
}