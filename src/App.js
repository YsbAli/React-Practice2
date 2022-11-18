// import React, { useState } from "react";
// import "./styles.css";

// export default function App() {
//   const [text, setText] = useState("");

//   const handleChange = (e) => {
//     setText(e.target.value);
//   };

//   const handleclear = () => {
//     setText("");
//   };

//   return (
//     <div className="App">
//       <h1> Input Box</h1>
//       <input
//         value={text}
//         onChange={handleChange}
//         placeholder="Write here something"
//       />
//       <button onClick={handleclear}>Clear</button>
//       <h4> Text is: {text} </h4>
//     </div>
//   );
// }

import React, { useState } from "react";
import "./styles.css";

export default function Todo() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClear = () => {
    setText("");
  };

  const AddTodo = () => {
    setTodo([...todo, text]);
    handleClear();
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <input value={text} onChange={handleChange} placeholder="Write here" />
      <button onClick={handleClear}>Clear</button>
      <button onClick={AddTodo}>Add</button>
      <h2> Todo is : {text}</h2>

      <ul>
        {todo.map((x) => (
          <li> {x} </li>
        ))}
      </ul>
    </div>
  );
}
