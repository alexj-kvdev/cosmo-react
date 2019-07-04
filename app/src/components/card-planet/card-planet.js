import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'

import './card-planet.css'
import Spinner from '../spinner';



export default class CardPlanet extends Component {

    swapiService = new SwapiService()

    state = {
        charId: 5,
        charData: {},
        loading: true,
        error: false
    }

    componentDidMount() {

        this.swapiService
            .getPlanet(this.state.charId)
            .then(this.onDataLoaded)
            .catch(this.onError)
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateCharacter()
        }
    }

    onDataLoaded = (charData) => {
        this.setState({
            charData,
            loading: true
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateCharacter = () => {
        const { charId } = this.props
        if (!charId) {
            return
        }

        this.swapiService
            .getPlanet(charId)
            .then(this.onDataLoaded)
            .catch(this.onError)
    }

    render() {
        const { id, name, created, population, rotationPeriod, diameter, gravity, orbitalPeriod, surfaceWater, terrain } = this.state.charData

        if (!name) {
            return <Spinner />
        }

        return (
            <React.Fragment>
                <div className="card-item-img" >
                <h4 className="card-title">{name}</h4>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" className="mb-3" />
                </div>

                <div className="card-item-info">
                    <ul className="item-list list-group">
                        <li className="list-group-item"><span>Name: </span><span>{name}</span></li>
                        <li className="list-group-item"><span>Created: </span><span>{created}</span></li>
                        <li className="list-group-item"><span>SurfaceWater: </span><span>{surfaceWater}%</span></li>
                        <li className="list-group-item"><span>Terrain: </span><span>{terrain}</span></li>
                        <li className="list-group-item"><span>Gravity: </span><span>{gravity}</span></li>
                        <li className="list-group-item"><span>Population: </span><span>{population}</span></li>
                        <li className="list-group-item"><span>RotationPeriod: </span><span>{rotationPeriod}d</span></li>
                        <li className="list-group-item"><span>OrbitalPeriod: </span><span>{orbitalPeriod}d</span></li>
                        <li className="list-group-item"><span>Diameter: </span><span>{diameter} km</span></li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}
