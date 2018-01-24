import React from 'react';

const Todo = (props) => (
  <div>{props.text} <button onClick={() => {
    props.bla(props.index);
  }}>Klik Saya</button></div>
);

export default Todo;
