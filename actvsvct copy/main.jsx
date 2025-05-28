import React, {useState} from "react";
import ReactDom from 'react-dom';

function virtualDOM(){
  const [text, setText] = useState('Virtual Dom');
  return(
    <div>
      <button onClick={()=> setText('Virtual DOM Changed!')}>Click Me</button>
      <p>{text}</p>
    </div>

  );
} 

ReactDom.render(<virtualDOM />, document.getElementById('root'));