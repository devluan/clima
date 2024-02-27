import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CurrentWeather from './components/CurrentWeather'
import Preview from './components/Preview'
import Search from './components/Search'
import { ClimaContainer, Title } from './AppStyles'

function App() {
    const [city, setCity] = useState('')
    const [clima, setClima] = useState(null)
    const [preview, setPreview] = useState([])

    const apiKey = import.meta.env.VITE_API_KEY || ' '

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude
            const lon = position.coords.longitude

            const resposta = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
            )
            setCity(resposta.data)
            setClima(resposta.data)
        })
    }, [apiKey])

    const searchClima = async () => {
        try {
            const respostaClima = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
            )

            const respostaPreview = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
            )

            setClima(respostaClima.data)

            setPreview(respostaPreview.data.list.slice(0, 5))
        } catch (error) {
            console.log('Erro ao buscar clima', error)
        }
    }

    console.log(clima)

    return (
        <ClimaContainer>
            <Title>Condições Climáticas</Title>
            <Search city={city} setCity={setCity} searchClima={searchClima} />
            {clima && <CurrentWeather clima={clima} />}
            {preview.length > 0 && <Preview previsoes={preview} />}
        </ClimaContainer>
    )
}

export default App
