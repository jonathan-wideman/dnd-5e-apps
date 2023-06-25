const romanNumerals = (value) => {
  return [
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX'
  ][value]
}

export default function SpellLevelDividerRow({ level }) {
  return (
    <div className='divider-container'>
      <div className='divider-background'></div>
      <div className='divider-content spell-level-divider row'>
        <div className='spell-level-divider slots'>
          <span className='spell-level-divider box'></span>
          <span className='spell-level-divider box'></span>
          <span className='spell-level-divider box'></span>
          <span className='spell-level-divider box'></span>
        </div>
        {/* <span className='spell-level-divider level'>Level · {romanNumerals(level)}</span> */}
      </div>
      <div className='divider-content spell-level-divider row center'>
        {level === 0 ?
          <span className='spell-level-divider level'>Cantrip</span> :
          <span className='spell-level-divider level'>Level · {romanNumerals(level)}</span>
        }
      </div>
    </div>
  )
}