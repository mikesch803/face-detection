import "./App.css";
import { useState } from "react";
import Clarifai from "clarifai";
import BackgroundTheme from "./components/BackgroundTheme";
import Logo from "./components/Logo";
import SearchInput from "./components/SearchInput";
import Output from "./components/Output";

function App() {
  const app = new Clarifai.App({
    apiKey: "15e1c8955696420eb4065b2ed7accbb2",
  });

  const [input, setInput] = useState("");
  const [url, setUrl] = useState("");
  const [box, setBox] = useState({});

  const calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log("width ", width, "height ", height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  const displayFaceBox = (box) => {
    setBox(box);
  };

  const eventHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  
  var a;
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("click");
    setUrl(input);
    console.log(input);
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then((response) => {
        displayFaceBox(calculateFaceLocation(response));
        console.log(response);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };
  return (
    <div className="App">
      <BackgroundTheme />
      <Logo />
      <SearchInput eventHandler={eventHandler} onSubmit={onSubmit} />
      <Output url={url} box={box} />
    </div>
  );
}

export default App;
