// create your App component here
import { useEffect, useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchDogImage() {
    setLoading(true);

    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    setDogImage(data.message);
    setLoading(false);
  }

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <main className="app">
      <h1>Random Dog Generator</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="Random dog" />
      )}

      <button onClick={fetchDogImage}>Get New Dog</button>
    </main>
  );
}

export default App;