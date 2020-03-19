import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import MenuCard from './menuCard'
import { getDishes } from '../../store/reducers/rootReducer'


class List extends Component {
    state = {
        modal: false,
        dish: '',
    };
    toggle = (dish) => {
        if (dish != null) this.setState({dishId: dish})
        return this.setState({ modal: !this.state.modal, });
    };    
           
    render(){
        const { menues, auth, profile} = this.props;
        if (! auth.uid && auth.isLoaded) return <Redirect to='/login' />
        return (
            <div>
                <div className="d-flex flex-wrap">
                    {menues && menues.map(menu =>{
                        if (menu.restaurantId === profile.restaurant){
                        return (
                        <div className="col-6 mx-auto">
                            <MenuCard menu={menu} btn={false}></MenuCard>
                        </div>)
                        }else{
                            return null;
                        }
                    })}
                </div>                         
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menues: getDishes(state.firestore.ordered.menu, state.search.search),
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'menu'}
    ])
)(List)

