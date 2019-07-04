import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'

import './card-character.css'
import Spinner from '../spinner';



export default class CardCharacter extends Component {

    swapiService = new SwapiService()

    state = {
        charId: 3,
        charData: {},
        loading: true,
        error: false
    }

    componentDidMount() {

        this.swapiService
            .getPerson(this.state.charId)
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
            .getPerson(charId)
            .then(this.onDataLoaded)
            .catch(this.onError)
    }

    render() {

        const { id, name, gender, birthYear, eyeColor, hairColor, height, mass } = this.state.charData

        if (!name) {
            return <Spinner />
        }

        return (
            <React.Fragment>
                <div className="card-item-img" >
                <h4 className="card-title">{name}</h4>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="" className="mb-3" />
                </div>

                <div className="card-item-info">
                    <ul className="item-list list-group">
                        <li className="list-group-item"><span>Name: </span><span>{name}</span></li>
                        <li className="list-group-item"><span>Gender: </span><span>{gender}</span></li>
                        {/* <li className="list-group-item"><span>Homeworld: </span><span>{homeworld}</span></li> */}
                        <li className="list-group-item"><span>BirthYear: </span><span>{birthYear}</span></li>
                        <li className="list-group-item"><span>Eye Color: </span><span>{eyeColor}</span></li>
                        <li className="list-group-item"><span>Hair Color: </span><span>{hairColor}</span></li>
                        <li className="list-group-item"><span>Height: </span><span>{height} cm</span></li>
                        <li className="list-group-item"><span>Mass: </span><span>{mass} kg</span></li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}
