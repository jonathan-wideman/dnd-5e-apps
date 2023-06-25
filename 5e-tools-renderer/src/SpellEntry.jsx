import { Fragment } from "react";

function parseMacros(text) {
  const macroRegex = /({@.*?})/g;
  // const matches = [...text.matchAll(macroRegex)];
  // console.log('text', text)
  const matches = text.split(macroRegex);
  // console.log(matches);
  return matches.map((match, index) =>
    <Fragment key={index}>{parseMacro(match)}</Fragment>
  );
}

function parseMacro(text) {
  const macroRegex = /{@(.*?) (.*)}/g;
  const matches = [...text.matchAll(macroRegex)];
  // console.log(matches);
  const [match, macro, params] = [...(matches?.[0] ?? [])];
  // const match = [text.match(macroRegex)];
  // console.log(match);

  return match != null ? runMacro(macro, params) : text;
  // return matches.length > 0 ? <b>{matches[0][2]}</b> : text;
  // return text;
}

function runMacro(macro, params) {
  if (
    macro === 'action' ||
    macro === 'book' ||
    macro === 'chance' ||
    macro === 'condition' ||
    macro === 'creature' ||
    macro === 'd20' ||
    macro === 'damage' ||
    macro === 'dice' ||
    macro === 'filter' ||
    macro === 'item' ||
    macro === 'note' ||
    macro === 'sense' ||
    macro === 'skill' ||
    macro === 'spell' ||
    macro === 'status' ||
    macro === 'quickref'
  ) {
    // return <b style={{ color: 'cornflowerblue' }}>{params}</b>;
    const output = `⚠${macro}, ${params}`
    return <b style={{ color: 'orange' }}>{output}</b>;
  }
  const output = `⚠${macro}, ${params}`
  console.log('unknown macro:', output)
  return <b style={{ color: 'orangered' }}>{output}</b>;
}

function SpellEntry({ entry }) {
  return <p>
    {typeof entry === 'string' ?
      parseMacros(entry) :
      <span style={{ color: 'orangered' }}>{JSON.stringify(entry)}</span>}
  </p>;
}

export default SpellEntry;
