import React from "react";

function SearchInput({eventHandler, onSubmit}) {

  return (
    <div>
      <p style={{fontSize:"1.5rem"}}>This will detect face from pictures...</p>
      <form >
         <input type="text" onChange={eventHandler} placeholder="enter the link.." style={{fontSize:"1rem", padding:"0.5rem"}}/>
        <button onClick={onSubmit}>Detect!</button>
      
      </form>
    </div>
  );
}

export default SearchInput;
