import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import './App.css';
import acidSplash from './data/spells/acidSplash.json';
import Spell from './Spell';
import { useEffect, useState } from 'react';

const queryClient = new QueryClient()

function App() {

  const spell = acidSplash;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Example />
        {/* <Spell spell={spell} /> */}
      </QueryClientProvider>
    </>
  );
}

export default App;




function Example() {
  const [spell, setSepll] = useState()
  const { isLoading, error, data } = useQuery({
    queryKey: ['spells'],
    queryFn: () =>
      fetch('http://localhost:5375/spells').then(
        (res) => res.json(),
      ),
  })
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ['repoData'],
  //   queryFn: () =>
  //     fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
  //       (res) => res.json(),
  //     ),
  // })
  // useEffect(() => { console.log('spell', spell) }, [spell])

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  const spells = data.spell


  return (
    <>
      <div style={{ maxHeight: "25em", overflowY: "scroll" }}>
        {spells.map(spell =>
          <div key={spell.name} onClick={() => setSepll(spell)}>
            {/* {spell.name} */}
            {spell != null ? <Spell spell={spell} /> : null}
          </div>
        )}
      </div>
      {/* {spell != null ? <Spell spell={spell} /> : null} */}
    </>
  )
}
