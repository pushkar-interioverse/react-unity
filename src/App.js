import React from "react";

const App = () => {
  const openUnityApp = () => {
    const jsonData = {
      name: "Pushkar",
      accessToken: "qwdwkjfgikvjeflinlkdcwoicnw89dkjcsjdc-djvcldyvidcjd",
      refreshToken: "skdbveiyrhv'ew0id-]e=osdv jhbv fdcmslkdcijc0-ew",
    };

    // Encode JSON data to Base64 for passing via query parameter
    const encodedData = btoa(JSON.stringify(jsonData));

    // Construct the Unity WebGL URL with encoded JSON data
    const unityUrl = `${window.location.origin}/unity?jsonData=${encodedData}`;
    window.open(unityUrl, "_blank");
  };


  const openUnity3App = () => {
    // Construct the Unity WebGL URL for the new project
    const unity2Url = `${window.location.origin}/unity3/index.html`;
    window.open(unity2Url, "_blank");
  };

  return (
    <div>
      <h1>Unity WebGL in React</h1>
      <button onClick={openUnityApp}>Open Unity App</button>
      <button onClick={openUnity3App}>Open Unity3 App</button>
    </div>
  );
};

export default App;
