import React from 'react';

const AirQualityCard = (props) => {
    console.log(props);
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 w-full md:w-96">
            <h2 className="text-lg font-semibold mb-2">{props.data.date}</h2>
            <div className="mb-2">
                <p>AQI: {props.data.aqi}</p>
            </div>
            <div className="mb-2">
                <p>CO2 Concentration: {props.data.co2}</p>
            </div>
            <div className="mb-2">
                <p>NO2 Concentration: {props.data.no2}</p>
            </div>
            <div className="mb-2">
                <p>SO2 Concentration: {props.data.so2}</p>
            </div>
        </div>
    );
};

export default AirQualityCard;
