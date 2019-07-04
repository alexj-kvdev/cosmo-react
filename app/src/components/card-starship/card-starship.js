import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'

import './card-starship.css'
import Spinner from '../spinner';



export default class CardStarship extends Component {

    swapiService = new SwapiService()

    state = {
        charId: 5,
        charData: {},
        loading: true,
        error: false
    }

    componentDidMount() {

        this.swapiService
            .getStarship(this.state.charId)
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
            .getStarship(charId)
            .then(this.onDataLoaded)
            .catch(this.onError)
    }

    render() {
        const { id, name, model, manufacturer, costInCredits, length, crew, passengers, cargoCapacity,
                consumables, created, edited, hyperdriveRating, maxAtmospheringSpeed } = this.state.charData

        if (!name) {
            return <Spinner />
        }

        return (
            <React.Fragment>
                <div className="card-item-img" >
                <h4 className="card-title">{name}</h4>
                    <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt="" className="mb-3" />
                </div>

                <div className="card-item-info">
                    <ul className="item-list list-group">
                        <li className="list-group-item"><span>Name: </span><span>{name}</span></li>
                        <li className="list-group-item"><span>Model: </span><span>{model}</span></li>
                        <li className="list-group-item"><span>CargoCapacity: </span><span>{cargoCapacity} t</span></li>
                        <li className="list-group-item"><span>Manufacturer: </span><span>{manufacturer}</span></li>
                        <li className="list-group-item"><span>CostInCredits: </span><span>{costInCredits}</span></li>
                        <li className="list-group-item"><span>Length: </span><span>{length} m</span></li>
                        <li className="list-group-item"><span>Crew: </span><span>{crew}</span></li>
                        <li className="list-group-item"><span>Passengers: </span><span>{passengers}</span></li>
                        <li className="list-group-item"><span>Сonsumables: </span><span>{consumables}</span></li>
                        <li className="list-group-item"><span>Created: </span><span>{created}</span></li>
                        <li className="list-group-item"><span>Edited: </span><span>{edited}</span></li>
                        <li className="list-group-item"><span>HyperdriveRating: </span><span>{hyperdriveRating}</span></li>
                        <li className="list-group-item"><span>MaxAtmospheringSpeed: </span><span>{maxAtmospheringSpeed}</span></li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}
