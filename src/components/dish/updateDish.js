import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateDish } from '../../store/actions/dishActions'
import { Redirect } from 'react-router-dom'
import { Card, CardBody, Col, Form, Row } from 'reactstrap';
import {addImage} from '../../store/actions/imageActions'


//Alérgenos, picante y vegano
import altramuces from '../../images&icons/food/altramuces.png'
import apio from '../../images&icons/food/apio.png'
import cacahuete  from '../../images&icons/food/cacahuete.png'
import crustaceos  from '../../images&icons/food/crustaceos.png'
import sulfitos  from '../../images&icons/food/sulfitos.png'
import frutosCascara  from '../../images&icons/food/frutosCascara.png'
import gluten  from '../../images&icons/food/gluten.png'
import granossesamo  from '../../images&icons/food/granossesamo.png'
import huevos  from '../../images&icons/food/huevos.png'
import moluscos  from '../../images&icons/food/moluscos.png'
import mostaza  from '../../images&icons/food/mostaza.png'
import pescado  from '../../images&icons/food/pescado.png'
import soja  from '../../images&icons/food/soja.png'
import lacteos  from '../../images&icons/food/lacteos.png'

//Banderas


class UpdateDish extends Component {
    state = {
        title: this.props.dishId.title,
        description: this.props.dishId.description,
        url: this.props.dishId.url,
        price: this.props.dishId.price,
        allergens: [...this.props.dishId.allergens],
        spicy: this.props.dishId.spicy,
        vegetarian: this.props.dishId.vegetarian,
    }
    
    image = {
        file: '',
    }

    newDish = {
        id: this.props.dishId
    } 

    toggle = (e) => {
        this.setState({
            allergens: this.state.allergens.map(allergen => (
                allergen.name === e.target.name ? {name: allergen.name, isInTheDish: !allergen.isInTheDish} : {name: allergen.name, isInTheDish: allergen.isInTheDish}
                ))
        })            
    }

    handleChange = (e) => {
        if (e.target.id === 'url'){
            this.image.file = e.target.files[0]
            this.setState({url: this.image.file.name.toString()})
        } else {
            this.setState({[e.target.id]: e.target.value})
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.id === "addDish"){

            if (this.image.file !== ''){
                addImage(this.image.file, this.state.url)
            }
            console.log(this.state)
            this.props.updateDish(this.state, this.props.dishId)
        }
    }    
    render() {
        const { auth } = this.props
        if (! auth.uid && auth.isLoaded) return <Redirect to='/login' />
        return (
            <Col className="align-self-center justify-content-center mx-auto">
                    <Card className="formCard">
                        <CardBody>
                            <Form onSubmit={ this.handleSubmit }>
                                    <div className="row flex-wrap d-flex">
                                        <div className="col-7 mx-auto">
                                            <h5 className="text-primary h5">Dish Data</h5>
                                            <Row>
                                                <Col className="mx-auto mt-1">
                                                    <label className="text-secondary" htmlFor="title">Name</label>
                                                    <input type="form-control" id="title" value={this.state.title} onChange={ this.handleChange } />
                                                </Col>
                                                <Col className="mx-auto mt-1">
                                                    <label className="text-secondary" htmlFor="textarea">Description</label>
                                                    <textarea className="materialize-textarea" value={this.state.description} id="description" onChange= {this.handleChange}></textarea>
                                                </Col>                                        
                                            </Row>
                                            <Row>
                                                <Col className="mx-auto mt-1">
                                                    <label className="text-secondary" htmlFor="textarea">Price</label>
                                                    <div>
                                                        <input type="number" id="price" value={this.state.price} onChange={ this.handleChange } />
                                                        <label className="ml-1" htmlFor="price">€</label>
                                                    </div>
                                                    <select className="mx-auto mt-2 d-none">
                                                        <option value="plato" disabled selected>Tipo de plato</option>
                                                        <option value="Entremeses">Entremeses</option>
                                                        <option value="Plato-Principal">Plato Principal</option>
                                                        <option value="Postre">Postre</option>
                                                        <option value="Bebida">Bebida</option>
                                                    </select>
                                                </Col>
                                            </Row>
                                            <Row className="mx-auto mt-4">
                                                <h5 className="text-secondary">Image</h5>
                                                <div className="input-field">
                                                    <div className="btn brown">
                                                        <input type="file" id="url" onChange={this.handleChange}/>
                                                    </div>
                                                </div>
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
                                            <Row className="mt-4">  
                                                <h5 className="text-primary mx-auto">Allergens</h5>
                                                    <div>
                                                        <btn className="btnAllergies" >
                                                            <input className="iconAllergies" name="altramuces" type="image"
                                                             src={altramuces} alt="altramuces" onClick={this.toggle}/>
                                                        </btn>
                                                        <btn className="btnAllergies">
                                                            <input className="iconAllergies" name="apio" type="image" src={apio} alt="apio" onClick={this.toggle}/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" name="cacahuete" type="image" src={cacahuete} alt="cacahuete" onClick={this.toggle}/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" name="crustaceos" type="image" src={crustaceos} alt="crustaceos" onClick={this.toggle}/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" name="sulfitos" type="image" src={sulfitos} alt="sulfitos" onClick={this.toggle}/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" name="frutosCascara" type="image" src={frutosCascara} alt="frutos con cascara" onClick={this.toggle}/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" name="lacteos" type="image" src={lacteos} alt="lacteos" onClick={this.toggle}/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" name="gluten" type="image" src={gluten} alt="gluten" onClick={this.toggle}/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" name="granossesamo" type="image" src={granossesamo} alt="granos de sésamo" onClick={this.toggle}/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" name="huevos" type="image" src={huevos} alt="huevos" onClick={this.toggle}/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" name="moluscos" type="image" src={moluscos} alt="moluscos" onClick={this.toggle}/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" name="mostaza" type="image" src={mostaza} alt="mostaza" onClick={this.toggle}/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" name="pescado" type="image" src={pescado} alt="pescado" onClick={this.toggle}/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" name="soja" type="image" src={soja} alt="soja" onClick={this.toggle}/>
                                                        </btn>                                                  
                                                    </div>
                                            </Row>                                    
                                            <Row className="d-none">
                                                <Col>
                                                    <h5 className="text-primary mx-auto mt-2">Spicy</h5>
                                                        <btn className="btnAllergies">
                                                            <input className="iconAllergies" type="image" src={altramuces} alt="altramuces"/>
                                                        </btn> 
                                                        <btn className="btnAllergies">
                                                            <input className="iconAllergies" type="image" src={altramuces} alt="altramuces"/>
                                                        </btn>                                            
                                                </Col>
                                                <Col>
                                                    <h5 className="text-primary mx-auto mt-2">Vegetarian</h5>
                                                    <btn className="btnAllergies waves-effect waves-dark">
                                                        <input className="iconAllergies" type="image" src={altramuces} alt="altramuces"/>
                                                    </btn> 
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                    <Row className="mt-4">
                                        <button id="addDish" className="btn btn-primary btn-sm btn-block" onClick={this.handleSubmit}>Update dish</button>
                                    </Row>                    
                            </Form>
                        </CardBody>
                    </Card>
                    </Col>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        updateDish: (state, newDish) => dispatch(updateDish(state, newDish.id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateDish)