import SpellEntry from "./SpellEntry";

function Spell({ spell }) {

  // console.log('spell', spell)

  return <>
    <h3>{spell.name}</h3>
    <div>
      {spell.school}
      {' '}
      {spell.level === 0 ? 'cantrip' : `level ${spell.level}`}
    </div>
    <div>
      Casting Time: {JSON.stringify(spell?.time)}
    </div>
    <div>
      Range: {JSON.stringify(spell?.range)}
    </div>
    <div>
      Components: {JSON.stringify(spell?.components)}
    </div>
    <div>
      Duration: {JSON.stringify(spell?.duration)}
    </div>
    <hr />
    {spell.entries?.map((entry, index) => (
      <SpellEntry key={index} entry={entry} />
    ))}
  </>;
}

export default Spell;
