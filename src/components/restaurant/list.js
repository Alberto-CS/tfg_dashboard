import React, { Component } from 'react'
import { connect } from 'react-redux'
import RestaurantCard from './restaurantCard'
import { firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Restaurants extends Component {
    

    getRestaurant = (e) => {
    
    } 
    
    render(){
        const { restaurants, auth, profile} = this.props;
        if (! auth.uid && auth.isLoaded) return <Redirect to='/login' />
        return (
            <div>
                <div className="d-flex flex-wrap">
                    {restaurants && restaurants.map(restaurant =>{
                        return (
                        <div className="col-6 mx-auto">
                            <h1>{restaurant.name}</h1>
                        </div>)
                    })}
                </div>                           
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.firestore.ordered.restaurantes,
        auth: state.firebase.auth,
        profile: state.firebase.profile,

    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'platos'},
        {collection: 'restaurantes'},
    ])
)(Restaurants)

