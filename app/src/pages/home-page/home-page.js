import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
// import Spinner from '../../components/spinner'
import { Link } from 'react-router-dom'
import './home-page.css'

export default class HomePage extends Component {

    swapiService = new SwapiService()

    state = {
        data: {},
        loading: true,
        error: false
    }

    componentDidMount() {

        this.swapiService
            .getAllPeople()
            .then(this.onDataLoaded)
            .catch(this.onError)
    }

    onDataLoaded = (data) => {
        this.setState({
            data,
            loading: true
        })

    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    onItemClick = (id) => {
        this.setState({
            charId: id
        })
    }

    render() {

        // if(!this.state.data){
        //     return <Spinner/>
        // }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card border-primary mb-3 mt-3">
                            <div className="card-body home-card">
                                <img className="yoda-img" src="img/yoda.jpeg" alt="" />
                                <span>What are you looking for? Select this from..</span>
                                <div className="row text-center items">
                                    <Link className="nav-link  col-lg-3 col-md-8 col-sm-12 mb-3 mt-3 mr-3" to="/characters">
                                        <div className="card border-primary">
                                            <div className="card-header">Characters</div>
                                            <div className="card-body">
                                                <img src="img/lea_vader.jpeg" alt="" />
                                            </div>
                                        </div>
                                    </Link>

                                    <Link className="nav-link  col-lg-3 col-md-8 col-sm-12 mb-3 mt-3 mr-3" to="/starships">
                                        <div className="card border-primary">
                                            <div className="card-header">Starships</div>
                                            <div className="card-body">
                                                <img src="img/starship.jpeg" alt="" />
                                            </div>
                                        </div>
                                    </Link>
                                    <Link className="nav-link  col-lg-3 col-md-8 col-sm-12 mb-3 mt-3 mr-3" to="/planets">
                                        <div className="card border-primary">
                                            <div className="card-header">Planets</div>
                                            <div className="card-body">
                                                <img src="img/planet.jpeg" alt="" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}