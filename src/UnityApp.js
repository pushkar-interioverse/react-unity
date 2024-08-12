import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const UnityApp = () => {
  const { unityProvider, sendMessage, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "unity/Build/Build.loader.js",
    dataUrl: "unity/Build/Build.data",
    frameworkUrl: "unity/Build/Build.framework.js",
    codeUrl: "unity/Build/Build.wasm",
  });

  useEffect(() => {
    // Retrieve JSON data from query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const encodedData = urlParams.get('jsonData');
    const jsonData = JSON.parse(atob(encodedData));

    // Example usage of jsonData
    console.log('Received JSON Data:', jsonData);

    // Pass the username to Unity
    sendMessage('GameController', 'ReceiveUsername', JSON.stringify(jsonData));
  }, [sendMessage]);

  return (
    <div>
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity unityProvider={unityProvider} style={{ visibility: isLoaded ? "visible" : "hidden", width: "960px", height: "600px" }} />
    </div>
  );
};

export default UnityApp;
