import React, {useState} from "react";

function Planeteer({planeteer}) {
  const[isBio, setIsBio]=useState(true)
  const handleChangeBioQuotes =()=>{
    setIsBio(!isBio)
  }
  let date = new Date()
  let age = date.getFullYear() - parseInt(planeteer.born)
  

  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={planeteer.pictureUrl}
          alt={planeteer.name}
          className="card__image"
          onClick={handleChangeBioQuotes}
        />
        <div className="card__content">
          <div className="card__title">{planeteer.name}</div>
          <p className="card__text">{isBio ? planeteer.bio : planeteer.quote}</p>
          <div className="card__detail">
            <p>{planeteer.twitter}</p>
            <p>{age}</p>
            <p>
              { planeteer.fromUSA ? "USA-based" : "Working overseas"
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;


// id": 8,
// "name": "Alexandria Villaseñor",
// "fromUSA": true,
// "born": 2005,
// "bio": "At 14 years old, Alexandria Villaseñor has already made a name for herself as a teenage environmentalist. Dedicated to climate activism, the teen is best known for her individual protests outside the U.N. on Fridays, when she skips school to sit on a park bench outside the building. Her strike began as a sign of solidarity with Greta Thunberg’s call for school strikes in Europe. Villaseñor is also involved with the U.S. Youth Climate Strike and is the founder of Earth Uprising, an organization dedicated to fighting climate change.",
// "quote": "Two years ago I began to research the connection between climate change and wildfires and learned that wildfires are burning longer and hotter because of climate change. I also saw Greta’s COP24 speech, and I thought that world leaders would take action to reduce greenhouse gas emissions. When they didn't, I was upset, and it was on the last day of COP24, December 14, that I began my strike at the U.N.",
// "pictureUrl": "https://www.abc.net.au/news/image/11556402-3x2-940x627.jpg",
// "twitter": "@Alexan

