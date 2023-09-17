import {Graph} from "..//Graph/Graph.jsx";
import {useParams} from 'react-router-dom';
import {useEffect, useRef, useState} from "react";
import AirQualityCard  from "../DataCard/AirQualityCard.jsx";

export default function Analysis() {
    const airQualityData9 = {
        date: '2023-09-17',
        aqi: 80,
        co2: 400,
        no2: 10,
        so2: 5,
    };
    const [airQualityData, setAirQualityData] = useState(airQualityData9);
    const [airQualityData1, setAirQualityData1] = useState(airQualityData9);
    const [airQualityData2, setAirQualityData2] = useState(airQualityData9);
    const [airQualityData3, setAirQualityData3] = useState(airQualityData9);
    const [airQualityData4, setAirQualityData4] = useState(airQualityData9);
    const [airQualityData5, setAirQualityData5] = useState(airQualityData9);
    const [Data, setData] = useState( [
        {
            "id": "japan",
            "color": "hsl(272, 70%, 50%)",
            "data": [
                {
                    "x": "alu",
                    "y": 47
                },
                {
                    "x": "helicopter",
                    "y": 50
                },
                {
                    "x": "boat",
                    "y": 148
                },
                {
                    "x": "train",
                    "y": 167
                },
                {
                    "x": "subway",
                    "y": 289
                },
                {
                    "x": "bus",
                    "y": 89
                },
                {
                    "x": "car",
                    "y": 184
                },
                {
                    "x": "moto",
                    "y": 294
                },
                {
                    "x": "bicycle",
                    "y": 65
                },
                {
                    "x": "horse",
                    "y": 174
                },
                {
                    "x": "skateboard",
                    "y": 158
                },
                {
                    "x": "others",
                    "y": 84
                }
            ]
        }
    ]);

    const {state} = useParams();
    const handleSubmit = async (e) => {
        console.log("hello");
        const data=state;
        console.log(data);
        const response = await fetch('http://localhost:5000/aqi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: data
            })
        })
        console.log(response);
        if (response.ok) {
            const data = await response.json();
            console.log(data.bot.list[0].dt);

            setData( [
        {
            "id": "japan",
            "color": "hsl(272, 70%, 50%)",
            "data": [
                {
                    "x": data.bot.list[0].dt,
                    "y": data.bot.list[0].main.aqi
                },
                {
                    "x": data.bot.list[1].dt,
                    "y": data.bot.list[1].main.aqi
                },
                {
                    "x": data.bot.list[2].dt,
                    "y": data.bot.list[2].main.aqi
                },
                {
                    "x": data.bot.list[3].dt,
                    "y": data.bot.list[3].main.aqi
                },
                {
                    "x":data.bot.list[4].dt,
                    "y": data.bot.list[4].main.aqi
                },
                {
                    "x":data.bot.list[5].dt,
                    "y": data.bot.list[5].main.aqi
                },
                {
                    "x": data.bot.list[6].dt,
                    "y": data.bot.list[6].main.aqi
                },
                {
                    "x": data.bot.list[7].dt,
                    "y": data.bot.list[7].main.aqi
                },
                {
                    "x": data.bot.list[8].dt,
                    "y": data.bot.list[8].main.aqi
                },
                {
                    "x": data.bot.list[9].dt,
                    "y": data.bot.list[9].main.aqi
                },
                {
                    "x": data.bot.list[10].dt,
                    "y": data.bot.list[10].main.aqi
                },
                {
                    "x": data.bot.list[11].dt,
                    "y": data.bot.list[11].main.aqi
                }
            ]
        }
    ]);
            setAirQualityData({
                date: data.bot.list[0].dt,
                aqi: data.bot.list[0].main.aqi,
                co2: data.bot.list[0].components.so2,
                no2: data.bot.list[0].components.no2,
                so2: data.bot.list[0].components.so2,
            })
            setAirQualityData1({
                date: data.bot.list[1].dt,
                aqi: data.bot.list[1].main.aqi,
                co2: data.bot.list[1].components.so2,
                no2: data.bot.list[1].components.no2,
                so2: data.bot.list[1].components.so2,
            })
            setAirQualityData2({
                date: data.bot.list[2].dt,
                aqi: data.bot.list[2].main.aqi,
                co2: data.bot.list[2].components.so2,
                no2: data.bot.list[2].components.no2,
                so2: data.bot.list[2].components.so2,
            })
            setAirQualityData3({
                date: data.bot.list[3].dt,
                aqi: data.bot.list[3].main.aqi,
                co2: data.bot.list[3].components.so2,
                no2: data.bot.list[3].components.no2,
                so2: data.bot.list[3].components.so2,
            })
            setAirQualityData4({
                date: data.bot.list[4].dt,
                aqi: data.bot.list[4].main.aqi,
                co2: data.bot.list[4].components.so2,
                no2: data.bot.list[4].components.no2,
                so2: data.bot.list[4].components.so2,
            })
            setAirQualityData5({
                date: data.bot.list[5].dt,
                aqi: data.bot.list[5].main.aqi,
                co2: data.bot.list[5].components.so2,
                no2: data.bot.list[5].components.no2,
                so2: data.bot.list[5].components.so2,
            })

        }
    }

    useEffect(() => {
        handleSubmit();
    },[state]);
    return (
        <>
            <Graph Data ={Data}/>
            <div className="grid grid-cols-3 gap-2 ml-10 justify-center items-center min-h-screen bg-[#e7fdea]">
                <AirQualityCard data={airQualityData}   />
                <AirQualityCard data={airQualityData1}   />
                <AirQualityCard data={airQualityData2}   />
                <AirQualityCard data={airQualityData3}   />
                <AirQualityCard data={airQualityData4}   />
                <AirQualityCard data={airQualityData5}   />

            </div>

        </>
    )
}
// import {Graph} from "..//Graph/Graph.jsx";
// export default function Analysis() {
//     const Data ="aas";
//     return (
//         <>
//             <Graph Data={Data}/>
//         </>
//     )
// }