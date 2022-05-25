import React, {useEffect, useState} from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters"; 
import Pagination from "./components/Pagination";
import Locations from "./components/Locations";
import Episodes from "./components/Episodes";

function App() {

  const [characters, setCharacters] = useState([])

  const [location, setLocation] = useState([])

  const [episode, setEpisode] = useState([])

  const [info, setInfo] = useState({})

  const [locInfo, setLocInfo] = useState({})

  const [epInfo, setEpInfo] = useState({})

  const initialURL = "https://rickandmortyapi.com/api/character"

  const locationURL ="https://rickandmortyapi.com/api/location"

  const episodeURL = "https://rickandmortyapi.com/api/episode"

  const fetchCharacter = (initialURL) => {
    fetch(initialURL)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);   
      })
      .catch(error => console.error(error))
  }

  const fetchLocation = (locationURL) => {
    fetch(locationURL)
      .then(response => response.json())
      .then(data => {
        setLocation(data.results)
        setLocInfo(data.info)
      })
      .catch(error=> console.error(error))
  }

  const fetchEpisode = (episodeURL) => {
    fetch(episodeURL)
      .then(response => response.json())
      .then(data => {
        setEpisode(data.results)
        setEpInfo(data.info)
      })
      .catch(error=> console.error(error))
  }

  const onPrevious = () => {
    fetchCharacter(info.prev);
    fetchLocation(locInfo.prev);
    fetchEpisode(epInfo.prev);    
  }

  const onNext = () => {
    fetchCharacter(info.next);
    fetchLocation(locInfo.next);
    fetchEpisode(epInfo.next);
  }

  useEffect(() => {
    fetchCharacter(initialURL)
    fetchLocation(locationURL)
    fetchEpisode(episodeURL)
  }, [])
  

  return (
    <>
      <Navbar brand="Rick and Morty App" />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div className="container mt-5">
                <Pagination
                  prev={info.prev}
                  next={info.next}
                  onPrevious={onPrevious}
                  onNext={onNext}
                />
                <Characters characters={characters} />
                <Pagination
                  prev={info.prev}
                  next={info.next}
                  onPrevious={onPrevious}
                  onNext={onNext}
                />
              </div>
            }
          />
          <Route
            path="locations"
            element={
              <div className="container mt-5">
                <Locations locations={location} />
                <Pagination
                  prev={locInfo.prev}
                  next={locInfo.next}
                  onPrevious={onPrevious}
                  onNext={onNext}
                />
              </div>
            }
          />
          <Route
            path="episodes"
            element={
              <div className="container mt-5">
                <Episodes episodes={episode} />
                <Pagination
                  prev={epInfo.prev}
                  next={epInfo.next}
                  onPrevious={onPrevious}
                  onNext={onNext}
                />
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
