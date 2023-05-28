import "./basic.css";

export default function WeatherReport({ report }) {
  return (
    <div className="form_content">
      <h1> WEATHER REPORT </h1>
      <p>
        <b>City </b>: {report.location.city}
      </p>
      <p>
        <b>Temperature (C°)</b> :{" "}
        {report.current_observation.condition.temperature}
      </p>
      <p>
        <b>Condition</b> : {report.current_observation.condition.text}
      </p>
      <p>
        <b>Humidity</b>: {report.current_observation.atmosphere.humidity}
      </p>
      <p>
        <b>Visibility</b>: {report.current_observation.atmosphere.visibility}
      </p>
      <p>
        <b>Pressure</b>: {report.current_observation.atmosphere.pressure}
      </p>
      <p>
        <b>Sunrise</b>: {report.current_observation.astronomy.sunrise}
      </p>
      <p>
        {" "}
        <b>Sunset</b>: {report.current_observation.astronomy.sunset}
      </p>
    </div>
  );
}
