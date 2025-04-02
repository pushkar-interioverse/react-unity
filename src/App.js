import React from "react";

const App = () => {


  // const openUnityApp = () => {
  //   // Construct the Unity WebGL URL for the new project
  //   const unity2Url = `${window.location.origin}/unity/index.html`;
  //   window.open(unity2Url, "_blank");
  // };

  const openUnity2App = () => {
    const jsonData = {
      name: "Pushkar",
      accessToken: "qwdwkjfgikvjeflinlkdcwoicnw89dkjcsjdc-djvcldyvidcjd",
      refreshToken: "skdbveiyrhv'ew0id-]e=osdv jhbv fdcmslkdcijc0-ew",
    };
  
    // Encode JSON data to Base64 for passing via query parameter
    const encodedData = btoa(JSON.stringify(jsonData));
  
    // Construct the Unity WebGL URL with encoded JSON data
    const unityUrl = `${window.location.origin}/unity2/index.html?jsonData=${encodedData}`;
    window.open(unityUrl, "_blank");
  };

  return (
    <div>
      <h1>Unity WebGL in React</h1>
      <button onClick={openUnity2App}>Open Unity2 App</button>
      <button
        className="unity-explore-design-button"
        onClick={() => window.open(`${window.location.origin}/unity3/index.html`, "_blank")}
      >
        Explore Design Ideas
      </button>
    </div>
    
  );
};

export default App;
