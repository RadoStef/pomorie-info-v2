import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './pages/Root';
import { Museums } from './pages/Museums';
import { Beaches } from './pages/Beaches';
import { Landmarks } from './pages/Landmarks';
import { Parking } from './pages/Parking';
import { Playgrounds } from './pages/Playgrounds';
import { Attractions } from './pages/Attractions';
import { Sport } from './pages/Sport';
import { Healthcare } from './pages/Healthcare';
import { Mud } from './pages/Mud';
import { WineAndCulture } from './pages/WineAndCulture';
import { Transport } from './pages/Transport';
import { Hotels } from './pages/Hotels';
import { Restaurants } from './pages/Restaurants';
import { BeachOne } from './pages/Places/BeachOne';
import { BeachTwo } from './pages/Places/BeachTwo';
import { BeachAtrium } from './pages/Places/BeachAtrium';
import { BeachCentral } from './pages/Places/BeachCentral';
import { BeachSopharma } from './pages/Places/BeachSopharma';
import { BeachPompata } from './pages/Places/BeachPompata';
import { BeachThree } from './pages/Places/BeachThree';
import { BeautifulPomorie } from './pages/BeautifulPomorie';
import { ParkingBufferLarge } from './pages/Places/ParkingBufferLarge';
import { ParkingBufferKapka } from './pages/Places/ParkingBufferKapka';
import { ParkingBufferRose } from './pages/Places/ParkingBufferRose';
import { ParkingBlueZone } from './pages/Places/ParkingBlueZone';
import { ParkingMunicipality } from './pages/Places/ParkingMunicipality';
import { ParkingTrafficLights } from './pages/Places/ParkingTrafficLights';
import { ParkingPerla } from './pages/Places/ParkingPerla';
import { ParkingTokaliev } from './pages/Places/ParkingTokaliev';
import { ParkingSbr } from './pages/Places/ParkingSbr';
import { ParkingMbal } from './pages/Places/ParkingMbal';
import { ParkingCasino } from './pages/Places/ParkingCasino';
import { ParkingTuthon } from './pages/Places/ParkingTuthon';
import { ParkingGrandLarge } from './pages/Places/ParkingGrandLarge';
import { ParkingGrandSmall } from './pages/Places/ParkingGrandSmall';
import { MuseumHistorical } from './pages/Places/MuseumHistorical';
import { MuseumSalt } from './pages/Places/MuseumSalt';
import { MuseumOrnithology } from './pages/Places/MuseumOrnithology';
import { MuseumThomb } from './pages/Places/MuseumThomb';
import { MuseumGallery } from './pages/Places/MuseumGallery';
import { LandmarkMonastery } from './pages/Places/LandmarkMonastery';
import { LandmarkLake } from './pages/Places/LandmarkLake';
import { LandmarkChurch } from './pages/Places/LandmarkChurch';
import { LandmarkHouses } from './pages/Places/LandmarkHouses';
import { LandmarkMonument } from './pages/Places/LandmarkMonument';
import { LandmarkYavorov } from './pages/Places/LandmarkYavorov';
import { LandmarkBoy } from './pages/Places/LandmarkBoy';
import { LandmarkHarbor } from './pages/Places/LandmarkHarbor';
import { LandmarkLighthouse } from './pages/Places/LandmarkLighthouse';
import { AttractionKuk } from './pages/Places/AttractionKuk';
import { AttractionBlackperl } from './pages/Places/AttractionBlackperl';
import { AttractionNiya } from './pages/Places/AttractionNiya';
import { AttractionOrkinos } from './pages/Places/AttractionOrkinos';
import { AttractionAquapark } from './pages/Places/AttractionAquapark';
import { AttractionTrain } from './pages/Places/AttractionTrain';
import { AttractionLunapark } from './pages/Places/AtractionLunapark';
import { AttractionCinema } from './pages/Places/AttractionCinema';
import { ParkingSopharma } from './pages/Places/ParkingSopharma';
import { BeachSouthOne } from './pages/Places/BeachSouthOne';
import { BeachSouthTwo } from './pages/Places/BeachSouthTwo';
import { AttractionCarriages } from './pages/Places/AttractionsCarriages';
import { PlaygroundCenter } from './pages/Places/PlaygroundCenter';
import { PlaygroundNewTown } from './pages/Places/PlaygroundNewTown';
import { PlaygroundSvoboda13 } from './pages/Places/PlaygroundSvoboda13';
import { PlaygroundSvoboda20 } from './pages/Places/PlaygroundSvoboda20';
import { PlaygroundMuseum } from './pages/Places/PlaygroundMuseum';
import { PlaygroundChaika } from './pages/Places/PlaygroundChaika';
import { ParkingBufferStGeorge } from './pages/Places/ParkingBufferStGeorge';
import { ScrollToTopButton } from './components/UI/ScrollToTopButton';
import NotFound from './components/UI/NotFound';
import './App.css';

const router = createBrowserRouter([
  // menu links
  {path: '/', element: <RootLayout/>, index: true},
  {path: 'museums', element: <Museums/>},
  {path: 'landmarks', element: <Landmarks/>},
  {path: 'beaches', element: <Beaches/>},
  {path: 'parkings', element: <Parking/>},
  {path: 'playgrounds', element: <Playgrounds/>},
  {path: 'attractions', element: <Attractions/>},
  {path: 'sport', element: <Sport/>},
  {path: 'healthcare', element: <Healthcare/>},
  {path: 'mud', element: <Mud/>},
  {path: 'wineandculture', element: <WineAndCulture/>},
  {path: 'transport', element: <Transport/>},
  {path: 'hotels', element: <Hotels/>},
  {path: 'restaurants', element: <Restaurants/>},
  {path: 'beauty-of-pomorie', element: <BeautifulPomorie/>},
  // beaches
  {path: 'beach-one', element: <BeachOne/>},
  {path: 'beach-two', element: <BeachTwo/>},
  {path: 'beach-atrium', element: <BeachAtrium/>},
  {path: 'beach-central', element: <BeachCentral/>},
  {path: 'beach-sopharma', element: <BeachSopharma/>},
  {path: 'beach-pompata', element: <BeachPompata/>},
  {path: 'beach-three', element: <BeachThree/>},
  {path: 'beach-south-one', element: <BeachSouthOne/>},
  {path: 'beach-south-two', element: <BeachSouthTwo/>},
  // parkings
  {path: 'buffer-large', element: <ParkingBufferLarge/>},
  {path: 'buffer-kapka', element: <ParkingBufferKapka/>},
  {path: 'buffer-rose', element: <ParkingBufferRose/>},
  {path: 'parking-zone', element: <ParkingBlueZone/>},
  {path: 'parking-municipality', element: <ParkingMunicipality/>},
  {path: 'parking-trafficlights', element: <ParkingTrafficLights/>},
  {path: 'parking-perla', element: <ParkingPerla/>},
  {path: 'parking-tokaliev', element: <ParkingTokaliev/>},
  {path: 'parking-sbr', element: <ParkingSbr/>},
  {path: 'parking-mbal', element: <ParkingMbal/>},
  {path: 'parking-casino', element: <ParkingCasino/>},
  {path: 'parking-tuthon', element: <ParkingTuthon/>},
  {path: 'parking-grand-large', element: <ParkingGrandLarge/>},
  {path: 'parking-grand-small', element: <ParkingGrandSmall/>},
  {path: 'parking-sopharma', element: <ParkingSopharma/>},
  {path: 'buffer-stgeorge', element: <ParkingBufferStGeorge/>},
  // museums
  {path: 'museum-historical', element: <MuseumHistorical/>},
  {path: 'museum-salt', element: <MuseumSalt/>},
  {path: 'museum-thomb', element: <MuseumThomb/>},
  {path: 'museum-ornithology', element: <MuseumOrnithology/>},
  {path: 'museum-gallery', element: <MuseumGallery/>},
  //landmarks
  {path: 'landmark-monastery', element: <LandmarkMonastery/>},
  {path: 'landmark-lake', element: <LandmarkLake/>},
  {path: 'landmark-church', element: <LandmarkChurch/>},
  {path: 'landmark-houses', element: <LandmarkHouses/>},
  {path: 'landmark-monument', element: <LandmarkMonument/>},
  {path: 'landmark-yavorov', element: <LandmarkYavorov/>},
  {path: 'landmark-boy', element: <LandmarkBoy/>},
  {path: 'landmark-harbor', element: <LandmarkHarbor/>},
  {path: 'landmark-lighthouse', element: <LandmarkLighthouse/>},
  // attractions
  {path: 'attraction-kuk', element: <AttractionKuk/>},
  {path: 'attraction-blackperl', element: <AttractionBlackperl/>},
  {path: 'attraction-niya', element: <AttractionNiya/>},
  {path: 'attraction-orkinos', element: <AttractionOrkinos/>},
  {path: 'attraction-aquapark', element: <AttractionAquapark/>},
  {path: 'attraction-train', element: <AttractionTrain/>},
  {path: 'attraction-lunapark', element: <AttractionLunapark/>},
  {path: 'attraction-cinema', element: <AttractionCinema/>},
  {path: 'attraction-carriages', element: <AttractionCarriages/>},
  // playgrounds
  {path: 'playground-center', element: <PlaygroundCenter/>},
  {path: 'playground-newtown', element: <PlaygroundNewTown/>},
  {path: 'playground-svoboda13', element: <PlaygroundSvoboda13/>},
  {path: 'playground-svoboda20', element: <PlaygroundSvoboda20/>},
  {path: 'playground-museum', element: <PlaygroundMuseum/>},
  {path: 'playground-chaika', element: <PlaygroundChaika/>},
  
  // 404 page
  {path: '*', element: <NotFound/>},
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
      <ScrollToTopButton/>
    </>
  )
};
export default App;
