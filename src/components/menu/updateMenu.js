import  React, {Component } from 'react'
import DishCard  from './addMenuDishCard'
import MenuDishCard  from './menuDishCard'
import { connect } from 'react-redux'
import { updateMenu } from '../../store/actions/menuActions'
import { Redirect } from 'react-router-dom'
import { Card, CardBody, CardHeader, Col, Form, Row, CardFooter } from 'reactstrap';
import { firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'


class UpdateMenu extends Component {
    state = {
        title: this.props.location.menu.title,
        dishes: this.props.location.menu.dishes,
        showSpicy: this.props.location.menu.showSpicy,
        showVegetarian: this.props.location.menu.showVegetarian,
        showAllergens: this.props.location.menu.showAllergens,
        showPrice: this.props.location.menu.showPrice,
        showCategory: this.props.location.menu.showCategory,
        showImage: this.props.location.menu.showImage,
        description: this.props.location.menu.description,
        price: this.props.location.menu.price,
    }
    
    index = {
        id: [],
    }

    show = (e) => {
        //TODO: toggle para mostrar o no ciertas cosas
        switch (e){
            case "showAllergens":
                this.setState({showAllergens: !this.state.showAllergens})
                break
            case "showCategory":
                this.setState({showCategory: !this.state.showCategory})
                break
            case "showImage":
                this.setState({showImage: !this.state.showImage})
                break
            case "showPrice":
                this.setState({showPrice: !this.state.showPrice})
                break
            case "showSpicy":
                this.setState({showSpicy: !this.state.showSpicy})
                break
            case "showVegetarian":
                this.setState({showVegetarian: !this.state.showVegetarian})
                break
            default:
                console.log("Caso por defecto Switch")
        }
    }



    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.id === "addMenu"){
            this.props.updateMenu(this.state, this.props.location.menu.id)
        }        
    }

    addDishToState = (dish) => {
        this.setState({ dishes: [...this.state.dishes, dish] })        
    }

    removeDishFromState = (i) => {
        const array = this.state.dishes
        array.splice(i, 1)
        this.setState({ dishes: array })
    }

    render() {
        const { dishes, auth, profile} = this.props;
        if (! auth.uid && auth.isLoaded) return <Redirect to='/login' />
        return (
            <div>
                <Row className="d-flex flex-wrap ">
                    <div className="align-self-center col-5 justify-content-center mx-auto ">
                        {dishes && dishes.map(dish =>{
                            if (dish.restaurantId === profile.restaurant){
                            return (
                            <div className="mx-auto" key={dish.id}>
                                <DishCard dish={dish} key={dish.id} addDishToState={this.addDishToState}/>
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
                                    <Row>
                                        <Col className="col-8 mx-auto mt-1">
                                            <Row className="col-11">
                                                <h5 className="text-secondary h5" htmlFor="title">Title</h5>
                                                <input className="form-control" type="form-control" id="title" onChange={ this.handleChange }  value={this.state.title}/>
                                            </Row>
                                            <Row className="col-11 mt-2">
                                                <label className="text-secondary h5">Price</label>
                                                <input className="form-control" type="form-control" placeholder="€" id="price" onChange={ this.handleChange } value={this.state.price} />
                                            </Row>
                                            
                                        </Col>
                                        <Col className="mt-2 col-4 mx-auto">
                                            <h5 className="text-primary mx-auto">Additional languages:</h5>
                                            <div className="btn-group mx-auto">
                                                <button className="btn btn-secondary" disabled>EN</button>
                                                <button className="btn btn-secondary" disabled>SP</button>
                                                <button className="btn btn-secondary" disabled>FR</button>
                                                <button className="btn btn-secondary" disabled>GE</button>
                                            </div>
                                        </Col>                                
                                    </Row>
                                    <div className="container mt-4 mx-auto">
                                            <Row>
                                                <h5 className="mt-4 text-secondary h5">Description</h5>
                                            </Row>
                                            <Row>                                                
                                                <textarea className="form-control" id="description" onChange= {this.handleChange} value={this.state.description}></textarea>
                                            </Row>
                                        </div>
                                    <div className="container mx-auto">
                                    <Row>
                                        <h5 className="mt-4 text-secondary h5">Show</h5>
                                    </Row>
                                    <Row className="mt-2">
                                        <span className="col-4 custom-switch ">
                                            <input type="checkbox" className="custom-control-input" id="Switch1" onChange={() => (this.show("showAllergens"))} checked={this.state.showAllergens}/>
                                            <label className="custom-control-label" for="Switch1"> Allergens</label>
                                        </span>
                                        <span className="col-4 custom-switch">                                            
                                            <input disabled type="checkbox" className="custom-control-input" id="Switch2" onChange={() => (this.show("showCategory"))} checked={this.state.showCategory}/> 
                                            <label className="custom-control-label" for="Switch2"> Category</label>
                                        </span>
                                        <span className="col-4 custom-switch">                                            
                                            <input type="checkbox" className="custom-control-input" id="Switch3" onChange={() => (this.show("showImage"))} checked={this.state.showImage}/> 
                                            <label className="custom-control-label" for="Switch3"> Image</label>
                                        </span>
                                    </Row>
                                    <Row className="mt-2">
                                        <span className="col-4 custom-switch">                                            
                                            <input type="checkbox" className="custom-control-input" id="Switch4" onChange={() => (this.show("showPrice"))} checked={this.state.showPrice}/> 
                                            <label className="custom-control-label" for="Switch4"> Price</label>
                                        </span>
                                        <span className="col-4 custom-switch">                                            
                                            <input disabled type="checkbox" className="custom-control-input" id="Switch5" onChange={() => (this.show("showSpicy"))} checked={this.state.showSpicy}/> 
                                            <label className="custom-control-label" for="Switch5"> Spicy</label>
                                        </span>
                                        <span className="col-4 custom-switch">                                            
                                            <input disabled type="checkbox" className="custom-control-input" id="Switch6" onChange={() => (this.show("showVegetarian"))} checked={this.state.showVegetarian}/> 
                                            <label className="custom-control-label" for="Switch6"> Vegetarian</label>
                                        </span>                                                                                                                        
                                    </Row>
                                    </div>                                     
                                    <Row className="mt-4">
                                        <button id="addMenu" className="btn btn-primary btn-sm btn-block" onClick={this.handleSubmit}>Add menu</button>
                                    </Row>                    
                            </Form>
                        </CardBody>
                        <CardFooter>
                        {this.state.dishes && this.state.dishes.map((dish, index) =>{
                                return (
                                <div className="mx-auto" key={index}>
                                    <MenuDishCard dish={dish} key={index} positionOfDish={index} removeDishFromState={this.removeDishFromState} btn={true} menu={this.state}/>
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
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        updateMenu: (menu, id) => dispatch(updateMenu(menu, id)),
    }
}




const enhance = compose(
    firestoreConnect([{collection: 'platos'}]),
    connect(mapStateToProps, mapDispatchToProps),)

export default enhance(UpdateMenu);

