import React, { Component } from 'react'
import { connect } from 'react-redux'
import RestaurantCard from './restaurantCard'
import { firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import {selectRestaurant} from '../../store/actions/restaurantActions'
import { getRestaurant } from '../../store/reducers/rootReducer'


class Restaurants extends Component {

    selectRestaurant = (restaurantSelected) => {
        console.log(restaurantSelected)
        this.props.selectRestaurant(restaurantSelected, "8q8NCKAS7CQhtrPBuTMeWWCyN6t1")
        console.log("he cambiado el estado " + this.props.profile.restaurant)
    }
    
    render(){
        const { restaurants, auth, profile} = this.props;
        if (! auth.uid && auth.isLoaded) return <Redirect to='/login' />
        return (
            <div>
                <div className="d-flex flex-wrap">
                    {restaurants && restaurants.map(restaurant => {
                        if (typeof profile.own !== "undefined"){
                            if ( profile.own.includes(restaurant.name) ){
                                return (
                                <div className="col-3 mx-auto">
                                    <RestaurantCard restaurant={restaurant} profile={profile.restaurant} selectRestaurant={this.selectRestaurant} ></RestaurantCard>
                                </div>)
                            } else {
                                return null
                            } 
                        } else {
                            return null
                        }
                    })}
                </div>                           
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //restaurants: state.firestore.ordered.restaurantes,
        restaurants: getRestaurant(state.firestore.ordered.restaurantes, state.search.search),
        auth: state.firebase.auth,
        profile: state.firebase.profile,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectRestaurant: (restaurant, id) => dispatch(selectRestaurant(restaurant, id)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'platos'},
        {collection: 'restaurantes'},
    ])
)(Restaurants)

