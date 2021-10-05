import './info.css';

function Info(props) {
  const { weather } = props;

  return (
    <div className="info">
      {
        // 1. Show ... when nothing typed yet.
        // 2. Show error message when no city was found.
        // 3. Else show content.

        // eslint-disable-next-line no-nested-ternary
        typeof weather.main === 'undefined' ? (
          weather.message ? (
            weather.message
          ) : (
            '...'
          )
        ) : (
          <>
            <div className="info__location">
              {weather.name}, {weather.sys.country}
            </div>
            <div className="info__temperature">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="info__clouds">{weather.weather[0].description}</div>
          </>
        )

      }
    </div>
  );
}

export default Info;
