import React, { useState } from 'react';
import Modal from "./Modal.js";

export default function Paper({title, description}) {

  const [active, setActive] = useState(false);
  return (
    <>
      <div className="note-block" onClick={() => {setActive(true)}}>
        <h2>{title}</h2>
      </div>

      <Modal active={active} setActive={setActive} title={title} description={description}/>
    </>
  );
}