import React from "react";
import './Main.css';

const Main = ({forecast}) => {
  
  let content;
  if (!forecast) {
    content = <h1>Preencha uma data ao lado para buscar a previsão...</h1>
  } else {
    content = <div>{forecast}</div>
  }

  return (
    <>
    <main>
      {content}
    </main>
    </>
  );
  
}

export default Main;