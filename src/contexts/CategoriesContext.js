import React, { useState, useEffect, createContext, useContext } from 'react';

const CategoriesContext = createContext();
const MAIN_URL = `https://pomorie-info.com/api/`;

function CategoriesProvider({ children }) {
  const [attractionsData, setAttractionsData] = useState([]);
  const [beachesData, setBeachesData] = useState([]);
  const [parkingsData, setParkingsData] = useState([]);
  const [landmarksData, setLandmarksData] = useState([]);
  const [mudData, setMudData] = useState([]);
  const [cultureData, setCultureData] = useState([]);
  const [playgroundsData, setPlaygroundsData] = useState([]);
  const [museumsData, setMuseumsData] = useState([]);
  const [hotelsData, setHotelsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchAttractionsData() {
    setLoading(true)
    await fetch(`${MAIN_URL}attractions.json`)
    .then(res => res.json())
    .then(data => setAttractionsData(data.attractions))
    .catch(error => setError(error))
    setLoading(false)
  }

  async function fetchBeachesData() {
    setLoading(true)
    await fetch(`${MAIN_URL}beaches.json`)
    .then(res => res.json())
    .then(data => setBeachesData(data.beaches))
    .catch(error => setError(error))
    setLoading(false)
  }

  async function fetchParkingsData() {
    setLoading(true)
    await fetch(`${MAIN_URL}parkings.json`)
    .then(res => res.json())
    .then(data => setParkingsData(data.parkings))
    .catch(error => setError(error))
    setLoading(false)
  }

  async function fetchLandmarksData() {
    setLoading(true)
    await fetch(`${MAIN_URL}landmarks.json`)
    .then(res => res.json())
    .then(data => setLandmarksData(data.landmarks))
    .catch(error => setError(error))
    setLoading(false)
  }

  async function fetchMudData() {
    setLoading(true)
    await fetch(`${MAIN_URL}mud.json`)
    .then(res => res.json())
    .then(data => setMudData(data.mud))
    .catch(error => setError(error))
    setLoading(false)
  }

  async function fetchCultureData() {
    setLoading(true)
    await fetch(`${MAIN_URL}culture.json`)
    .then(res => res.json())
    .then(data => setCultureData(data.culture))
    .catch(error => setError(error))
    setLoading(false)
  }

  async function fetchPlaygroundsData() {
    setLoading(true)
    await fetch(`${MAIN_URL}playgrounds.json`)
    .then(res => res.json())
    .then(data => setPlaygroundsData(data.playgrounds))
    .catch(error => setError(error))
    setLoading(false)
  }

  async function fetchMuseumsData() {
    setLoading(true)
    await fetch(`${MAIN_URL}museums.json`)
    .then(res => res.json())
    .then(data => setMuseumsData(data.museums))
    .catch(error => setError(error))
    setLoading(false)
  }

  async function fetchHotelsData() {
    setLoading(true)
    await fetch(`${MAIN_URL}hotels.json`)
    .then(res => res.json())
    .then(data => setHotelsData(data.hotels))
    .catch(error => setError(error))
    setLoading(false)
  }

  useEffect(() => {
    fetchAttractionsData()
    fetchBeachesData()
    fetchParkingsData()
    fetchLandmarksData()
    fetchMudData()
    fetchCultureData()
    fetchPlaygroundsData()
    fetchMuseumsData()
    fetchHotelsData()
  }, []);

  return (
    <CategoriesContext.Provider
      value={{
        attractionsData,
        beachesData,
        parkingsData,
        landmarksData,
        mudData,
        cultureData,
        playgroundsData,
        museumsData,
        hotelsData,
        loading,
        error
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}

function useCategoryData() {
  const context = useContext(CategoriesContext);
  if (context === undefined) throw new Error("Context is used outside of Context provider.");
  return context;
}

export { CategoriesProvider, useCategoryData };