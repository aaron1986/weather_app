import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const searchLocation = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3e4c2b57014ce21ddaa0b38da905a3bb`).then((response)=> {
      setData(response.data)
      console.log(response.data)
    })
    .catch(error => {
      console.error(error);
    });
  }

  const handleLocationQueryChange = event => {
    setLocation(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    searchLocation();
  };

  return (
    <>
      <div className='app'>
      <div className='search'>
          <form onSubmit={handleSubmit}>
              <input placeholder="Type City Press Enter" value={location} onChange={handleLocationQueryChange} />
          </form>
      </div> {/* end of search div */}

        <div className='container'>
          <div className='top'>
            <div className='location'>
              <p>{data.name}</p>
            </div> {/* end of location div */}


            <div className='temp'>
              {data.main ? <h1>{data.main.temp}&#8457;</h1> : null}
            </div> {/* end of temp div */}
            <div className='description'>
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div> {/* end of description div */}
          </div> {/* end of top div */}


          <div className='bottom'>
            <div className='humidity'>
              {data.main ? <p>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div> {/* end of humidity div */}
            <div className='wind'>
              {data.wind ? <p>{data.wind.speed} mph</p> : null}
              <p>Wind</p>
            </div> {/* end of wind div */}
          </div> {/* end of botttom div */}



        </div> {/* end of container div */}
      </div> {/* end of app div */}
    </>
  )
}

export default App
