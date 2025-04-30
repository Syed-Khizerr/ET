import React, {useRef} from 'react';

function App(){
  const inputRef = useRef(null);

  return(
    <div>
    <input ref={inputRef}></input>
    <button onClick = {()=>inputRef.curretn.focus()}>Focus</button>
    </div>
  );
}

export defual App;