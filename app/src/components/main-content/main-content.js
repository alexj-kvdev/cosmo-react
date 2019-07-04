import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import ItemList from '../item-list'
import './main-content.css'

export default class MainContent extends Component {
    
    swapiService = new SwapiService()
 
    state = {
        planets:{},
        loading:true,
        error:false
    }

    componentDidMount() {
        const { getData } = this.props


        this.swapiService
            .getAllPlanets()
            .then(this.onPlanetsLoaded)
            .catch(this.onError)
    }

    onPlanetsLoaded = (planets) => {
        this.setState({
            planets,
            loading:true
        })

    }

    onError = (err) => {
        this.setState({
            error:true,
            loading:false
        })
    }

    onItemClick = (id) => {
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="card border-primary mb-3 mt-3">
                            <div className="card-header">Universe Card</div>
                            <div className="card-body">
                                <h4 className="card-title">Famous Planets</h4>
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                <ItemList getData={this.swapiService.getAllPlanets} onItemClick={this.onItemClick}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card border-primary mb-3 mt-3">
                            <div className="card-header">Universe Card</div>
                            <div className="card-body">
                                <h4 className="card-title">Famous Starships</h4>
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                <ItemList getData={this.swapiService.getAllStarships} onItemClick={this.onItemClick}/>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        )
    }

}