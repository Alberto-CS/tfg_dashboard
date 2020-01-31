import React, { Component } from 'react'
import { connect } from 'react-redux'
import DishCard from './listDishCard'
import { firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


class List extends Component {



    render(){
        const { dishes, auth} = this.props;
        console.log(dishes)
        if (! auth.uid && auth.isLoaded) return <Redirect to='/login' />
        return (
            <div className="d-flex flex-wrap">
                {dishes && dishes.map(dish =>{
                    if (dish.restaurantId === auth.uid){
                        return (<div className="col-3 mx-auto"><DishCard dish={dish} key={dish.id} /></div>)
                    }else{
                        return null;
                    }
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dishes: state.firestore.ordered.platos,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'platos'}
    ])
)(List)

