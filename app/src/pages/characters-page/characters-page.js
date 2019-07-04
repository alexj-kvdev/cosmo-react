import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import ItemList from '../../components/item-list'
// import Spinner from '../../components/spinner'
import CardCharacter from '../../components/card-character'


export default class Characters extends Component {

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
                <div className="col-6">
                        <div className="card border-primary mb-3 mt-3">
                            <div className="card-header">Universe Card</div>
                            <div className="card-body">
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                <CardCharacter charId={this.state.charId}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card border-primary mb-3 mt-3">
                            <div className="card-header">Universe Card</div>
                            <div className="card-body">
                                <h4 className="list-title">Select Character</h4>
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                <ItemList objList={this.state.data} onItemClick={this.onItemClick} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}