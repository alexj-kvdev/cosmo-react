import React, {Component} from 'react'
import './random-planet.css'

import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

export default class RandomPlanet extends Component {

    swapiService = new SwapiService()

    state = {
        planet:{},
        loading:true,
        error:false
    }

    constructor(){
        super()
        this.updatePlanet()
    }

    onPlanetLoaded = (planet) => {

        this.setState({
            planet,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error:true,
            loading:false
        })
    }

    updatePlanet(){
        const id = Math.floor(Math.random()*10)+1
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)

    }

    render(){
        const {planet, loading, error} = this.state

        const hasData = !(loading || error)

        const errorMessage = error ? <ErrorIndicator/> : null
        const spinner = loading ? <Spinner/> : null
        const content = hasData ? <PlanetView planet={planet} />: null

        return (

            <div className = "container" >
                <div className = "row top-info" >
                    {errorMessage}
                    {spinner}
                    {content}
                </div>

            </div>
        )
    }
}

const PlanetView = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet
    return (
        <React.Fragment>
            <div className = "col-6 col-md-4" >
                <img src = {`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt = "" className = "mb-3" />
            </div>
            <div className="planet-info col-12 col-md-8">
                <ul className="list-group">
                    <li className="list-group-item">Planet name: <span>{name}</span></li>
                    <li className="list-group-item">Population: <span>{population}</span></li>
                    <li className="list-group-item">Rotation period: <span>{rotationPeriod}</span></li>
                    <li className="list-group-item">Diameter: <span>{diameter}</span></li>
                </ul>
            </div>
        </React.Fragment>
    )
}

