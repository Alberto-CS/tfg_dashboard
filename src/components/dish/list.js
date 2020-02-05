import React, { Component } from 'react'
import { connect } from 'react-redux'
import DishCard from './listDishCard'
import { firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import UpdateDish from './updateDish'

class List extends Component {
    state = {
        modal: false,
        dish: '',
    };
    //TODO: Vincular update al plato
    toggle = (dish) => {
        if (dish != null) this.setState({dishId: dish})
        return this.setState({ modal: !this.state.modal, });
    };    
           
    render(){
        const { dishes, auth} = this.props;
        if (! auth.uid && auth.isLoaded) return <Redirect to='/login' />
        return (
            <div>
                <div className="d-flex flex-wrap">
                    {dishes && dishes.map(dish =>{
                        if (dish.restaurantId === auth.uid){
                        return (
                        <div className="col-3 mx-auto">
                            <DishCard className="dishcard" dish={dish} key={dish.id} toggle = {this.toggle} />                                                                            
                        </div>)
                        }else{
                            return null;
                        }
                    })}
                </div>
                <Modal
                  isOpen={this.state.modal}
                  toggle={() => {this.toggle()}}
                  className="mx-auto modal-lg" dish={this.state.dish}>
                  <ModalHeader toggle={() => {this.toggle()}} className="text-primary">Update Dish</ModalHeader>
                  <ModalBody>
                        <UpdateDish dishId={this.state.dishId}></UpdateDish>                        
                  </ModalBody>
                </Modal>                           
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dishes: state.firestore.ordered.platos,
        auth: state.firebase.auth,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'platos'}
    ])
)(List)

