import React from "react";

function SearchInput({eventHandler, onSubmit}) {

  return (
    <div>
      <p>This will detect face from pictures...</p>
      <form>
        <input type="text" onChange={eventHandler} />
        <button onClick={onSubmit}>Detect!</button>
      </form>
    </div>
  );
}

export default SearchInput;
