import React from 'react'

const Button = ({nextpage, previouspage}) => {
  return (
    <div>
{  previouspage  &&     <button onClick={previouspage}>ButtonPrev</button>
}      {nextpage  &&  <button onClick={nextpage}>ButtonNext</button>
}
        
    </div>
  )
}

export default Button