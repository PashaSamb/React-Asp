import React from 'react';
import { forecastItemModel } from '../Interfaces';

interface Props {
    forecastItem: forecastItemModel;
}

function ForecastItemCard(props: Props) {

    return (
        <div className='col-md-4 col-6 p-4' >
            <div className="card" style={{ boxShadow: "0 1px 7px 0 rgb(0 0 0 /50%)" }}>
                <div className="card-body pt-2">
                    <div className="row col-10 offset-1 p-4">
                        <h5 className="card-title">Дата: {props.forecastItem.date}</h5>
                        <p className="card-text">Температура: {props.forecastItem.temperatureC}°C / {props.forecastItem.temperatureF}°F</p>
                        <p className="card-text">Описание: {props.forecastItem.summary}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ForecastItemCard;