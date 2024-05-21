import { useState } from 'react';
import './Home.css';

function Home () {
  const [Lat, setLat] = useState();
  const [Lon, setLon] = useState();
  const [Weather, setWeather] = useState([]);



  const api =  async() => {
    let apiresult = await fetch(`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${Lon}/lat/${Lat}/data.json`)
    console.log(apiresult)

    const apiJson = await apiresult.json()

    let Day = []
    for (let i = 0; i < apiJson.timeSeries.length; i++) {
      let day = apiJson.timeSeries[i].validTime.slice(8, 10);
      let time = apiJson.timeSeries[i].validTime.slice(11, 16);
      let celsius = apiJson.timeSeries[i].parameters[10].values[0];

      let o = i + 1
      let test = {"day":day ,"time": time, "celsius": celsius}
      Day.push(test)

      if (Number(day) != Number(apiJson.timeSeries[o].validTime.slice(8, 10))) {
        break
      }
    }

    setWeather(Day)
    console.log(Day);

  }

  return (
    <div>

    <button onClick={api}>button</button>

    <textarea onChange={event => setLat(event.target.value)}></textarea>
    <textarea onChange={event => setLon(event.target.value)}></textarea>

    {/* <div>
      {Object.keys(Weather).map(day => {
        return(
        <div>
        <div>{day.time}</div>
        <div>{day.celsius}</div>
        </div>
        )
      })}
    </div> */}

    <div>
      {Weather.map(day => (
        <div key={day.day}>

        <div>{day.time} o'clock ------------- {day.celsius} °C</div>
        </div>


      ))}
    </div>

    </div>
  )
}

export default Home