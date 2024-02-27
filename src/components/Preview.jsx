import React from 'react'
import { PreviewContainer } from './PreviewStyles'

const Preview = ({ previsoes }) => {
    return (
        <PreviewContainer>
            <h4>Previsão para as próximas horas</h4>
            <ul>
                {previsoes.map((preview) => (
                    <li key={preview.dt}>
                        <img
                            src={`http://openweathermap.org/img/wn/${preview.weather[0].icon}.png`}
                            alt={preview.weather[0].description}
                        />
                        <p>
                            {preview.main.temp} °C{' '}
                            {preview.weather[0].description}
                        </p>
                    </li>
                ))}
            </ul>
        </PreviewContainer>
    )
}

export default Preview
