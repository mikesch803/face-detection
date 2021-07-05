import { useState } from 'react'
import Clarifai, { FACE_DETECT_MODEL } from "clarifai";

function useFunc() {

    const app = new Clarifai.App({
        apiKey: "15e1c8955696420eb4065b2ed7accbb2",
      });

    const [input, setInput] = useState("");
  
    const eventHandler = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
      }
    
      const onSubmit = (e) => {
        e.preventDefault();
        console.log("click");
        console.log(input)
        app.models.predict(FACE_DETECT_MODEL, input).then(
          function (response) {
            console.log(response);
          },
          function (err) {
            console.log(err, "error");
          }
        );
      }
    return {input, eventHandler, onSubmit}
}

export default useFunc
