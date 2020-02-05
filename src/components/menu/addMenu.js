import  React, {Component } from 'react'
import DishCard  from './dishCard'
import { connect } from 'react-redux'
import { createMenu } from '../../store/actions/menuActions'
import { Redirect } from 'react-router-dom'
import { Card, CardBody, CardHeader, Col, Form, Row, CardFooter } from 'reactstrap';
import { firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'


class CreateMenu extends Component {
    state = {
        title: 'Title',
        dishes: [],
        showSpicy: false,
        showVegetarian: false,
        showAllergens: false,
        showPrice: false,
        showCategory: false,
        showImage: false,
    }
    
    image = {
        file: '',
    }

    show = (e) => {
        //TODO: toggle para mostrar o no ciertas cosas           
    }

    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.id === "addMenu"){
            this.props.createMenu(this.state)
        }
    }

    addDishToState = (dish) => {
        this.setState()
    }

    removeDishToState = (dish) => {
        this.setState()
    }

    render() {
        const { dishes, auth} = this.props;
        if (! auth.uid && auth.isLoaded) return <Redirect to='/login' />
        return (
            <div>
                <Row className="d-flex flex-wrap ">
                    <div className="align-self-center col-5 justify-content-center mx-auto ">
                        {dishes && dishes.map(dish =>{
                            if (dish.restaurantId === auth.uid){
                            return (
                            <div className="mx-auto">
                                <DishCard dish={dish} key={dish.id} />
                            </div>)
                            }else{
                                return null;
                            }
                        })}
                    </div>
                    <Col className=" col-6 justify-content-center mx-auto overflow-h">
                    <Card className="formCard position-st">
                    <CardHeader className="text-primary display-4">{this.state.title}</CardHeader>
                        <CardBody>
                            <Form onSubmit={ this.handleSubmit }>
                                    <div className="row flex-wrap d-flex">
                                        <div className="col-6 mx-auto">
                                            <Row>
                                                <Col className="mx-auto mt-1">
                                                    <label className="text-secondary h5" htmlFor="title">Title</label>
                                                    <input type="form-control" id="title" onChange={ this.handleChange } />
                                                </Col>                                       
                                            </Row>

                                        </div>
                                        <div className="col-4 mx-auto">                                            
                                            <Row className="mt-2">
                                            <h5 className="text-primary mx-auto">Additional languages:</h5>
                                            <div className="btn-group mx-auto">
                                                <button className="btn btn-secondary">EN</button>
                                                <button className="btn btn-secondary">SP</button>
                                                <button className="btn btn-secondary">FR</button>
                                                <button className="btn btn-secondary">GE</button>
                                            </div>
                                            </Row>                                
                                        </div>
                                    </div>
                                    <Row className="mt-4">
                                        <button id="addMenu" className="btn btn-primary btn-sm btn-block" onClick={this.handleSubmit}>Add menu</button>
                                    </Row>                    
                            </Form>
                        </CardBody>
                        <CardFooter>
                            {this.state.dishes && this.state.dishes.map(dish =>{
                                return (
                                <div className="mx-auto">
                                    <DishCard dish={dish} key={dish.id} />                                                                            
                                </div>)
                            })}
                        </CardFooter>
                    </Card>
                    </Col>
                </Row>
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

const mapDispatchToProps = (dispatch) => {
    return {
        createMenu: (menu) => dispatch(createMenu(menu)),
    }
}




const enhance = compose(
    firestoreConnect([{collection: 'platos'}]),
    connect(mapStateToProps, mapDispatchToProps),)

export default enhance(CreateMenu);

