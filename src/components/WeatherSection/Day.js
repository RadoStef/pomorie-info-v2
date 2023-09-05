
export const Day = ({ date, max, min, code, isToday }) => {
  function getWeatherIcon(wmoCode) {
    const icons = new Map([
      [[0], '☀️'],
      [[1], '🌤'],
      [[2], '⛅️'],
      [[3], '☁️'],
      [[45, 48], '🌫'],
      [[51, 56, 61, 66, 80], '🌧'],
      [[53, 55, 63, 65, 57, 67, 81, 82], '🌧'],
      [[71, 73, 75, 77, 85, 86], '🌨'],
      [[95], '🌩'],
      [[96, 99], '⛈'],
    ]);
    const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
    if (!arr) return 'NOT FOUND';
    return icons.get(arr);
  }

  function formatDay(dateStr) {
    return new Intl.DateTimeFormat("bg", {
      weekday: "long",
    }).format(new Date(dateStr));
  }

  return (
    <li className='day'>
      <p>{isToday ? <span style={{color: 'red', padding: '0'}}>днес</span> : formatDay(date)}</p>
      <span style={{padding: '0 10px'}}>{getWeatherIcon(code)}</span>
      <p>
         {Math.floor(min)}&deg; &mdash;  <b>{Math.ceil(max)}</b>&deg;
      </p>
    </li>
  );
};
