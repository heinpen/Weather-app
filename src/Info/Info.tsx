import './info.css';

interface Weather {
  main?: {
    temp: number;
  };
  message?: string;
  sys?: {
    country: string;
  };
  weather?: [
    {
      description?: string;
    }
  ];
  name?: string;
}

function Info(props: { weather: Weather }): JSX.Element {
  const { weather } = props;
  let output;
  // 1. Show ... when nothing typed yet.
  // 2. Show error message when no city was found.
  // 3. Else show content.
  if (typeof weather.main === 'undefined') {
    output = weather.message;
  } else {
    output = (
      <>
        <div className="info__location">
          {/* @ts-expect-error: if weather.main === 'undefined' then weather.sys is too */}
          {weather.name}, {weather.sys.country}
        </div>
        <div className="info__temperature">
          {Math.round(weather.main.temp)}°c
        </div>
        {/* @ts-expect-error: if weather.main === 'undefined' then weather.weather[0] is too */}
        <div className="info__clouds">{weather.weather[0].description}</div>
      </>
    );
  }
  return <div className="info">{output}</div>;
}

export default Info;
