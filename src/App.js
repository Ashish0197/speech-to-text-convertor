import React, { useState } from "react";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

const App = () => {
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const [textcopy, Setcopy] = useState();
  const [isCopied, setCopied] = useClipboard(textcopy);

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  };


  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className="Main">
        <div className="container">
          <div className="heading">
            <h1
              style={{
                color: "black",
              }}
            >
              SPEECH TO TEXT CONVERTOR
            </h1>
          </div>
          <br />
          <br />
          <div className="Typo"></div>
          <div className="para">
            {transcript}
          </div>
        </div>
      </div>
      <div className="btn-Content">
        <div className="card">
          <button onClick={setCopied}>
            {isCopied ? "Copied👍" : "PRESS TO COPY!"}
          </button>
          <button className="card" onClick={startListening}>
            START LISTENING
          </button>
          <button
            className="card"
            onClick={() => {
              SpeechRecognition.stopListening();
              Setcopy(transcript);
            }}
          >
            STOP LISTENING
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
