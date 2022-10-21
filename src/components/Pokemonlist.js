import React from 'react'

const Pokemonlist = ({pokemen}) => {
  return (
    <div>
{
    pokemen.map((p)=><div key={p}>
        {p}
    </div>)
}

    </div>
  )
}

export default Pokemonlist