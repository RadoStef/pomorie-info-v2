import {useState, createContext, useContext} from 'react';

const GeolocationContext = createContext();

const GeolocationProvider = ({children}) => {
    const [userLocation, setUserLocation] = useState(null);

    const handleGetUserLocation = () => {
        window.confirm('Разрешавате ли на браузъра достъп до локацията ви с цел, да виждате разстоянието от вашето място до всеки от обектите в сайта?');
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ lat: latitude, lng: longitude });
            console.log(position.coords);
          },
          (error) => {
            console.error('Възникна решка при определяне на локацията.', error);
          }
        );
    };

    return (
        <GeolocationContext.Provider value={{ 
            userLocation, 
            handleGetUserLocation
        }}>
            {children}
        </GeolocationContext.Provider>
    )
};

function useLocationData() {
    const context = useContext(GeolocationContext);
    if(context === undefined) throw new Error("Context is used outside of Context provider.")
    return context;
}

export {GeolocationProvider, useLocationData};