import React from 'react';

function Nextbutton({ dispatch, answer}) {

    if(answer === null) return null;

  return (
    <button className='btn btn-btn-ui'
    on onClick={() => dispatch({ type: "nextQuestion" })}>
        Next
    </button>
  )
}

export default Nextbutton
