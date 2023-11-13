import React from 'react';

function Nextbutton({ dispatch, answer, index, numQuestion }) {

  if(answer === null) return null;

  if(index < numQuestion -1) return (
    <button className='btn btn-btn-ui'
    onClick={() => dispatch({ type: "nextQuestion" })}>
        Next
    </button>
  )

  if(index === numQuestion -1) return (
    <button
      className="btn btn-btn-ui"
      onClick={() => dispatch({ type: "finish" })}
    >
      Finish
    </button>
  );
}

export default Nextbutton
