import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateDish } from '../../store/actions/dishActions'
import { Redirect } from 'react-router-dom'
import { Card, CardBody, Col, Form, Row } from 'reactstrap';
import {addImage} from '../../store/actions/imageActions'


//Alérgenos, picante y vegano
import altramuces from '../../assets/img//food/altramuces.png'
import apio from '../../assets/img//food/apio.png'
import cacahuete  from '../../assets/img//food/cacahuete.png'
import crustaceos  from '../../assets/img//food/crustaceos.png'
import sulfitos  from '../../assets/img//food/sulfitos.png'
import frutosCascara  from '../../assets/img//food/frutosCascara.png'
import gluten  from '../../assets/img//food/gluten.png'
import granossesamo  from '../../assets/img//food/granossesamo.png'
import huevos  from '../../assets/img//food/huevos.png'
import moluscos  from '../../assets/img//food/moluscos.png'
import mostaza  from '../../assets/img//food/mostaza.png'
import pescado  from '../../assets/img//food/pescado.png'
import soja  from '../../assets/img//food/soja.png'
import lacteos  from '../../assets/img//food/lacteos.png'

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
        discount: ''
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
                                                <Col className="mx-auto mt-1 col-11">
                                                    <label className="text-secondary" htmlFor="title">Name</label>
                                                    <input type="form-control" className="form-control" id="title" value={this.state.title} onChange={ this.handleChange } />
                                                </Col>
                                                <Col className="mx-auto mt-1 col-11">
                                                    <label className="text-secondary" htmlFor="textarea">Description</label>
                                                    <textarea className="form-control" value={this.state.description} id="description" onChange= {this.handleChange}></textarea>
                                                </Col>                                        
                                            </Row>
                                            <Row>
                                                <Col className="mx-auto mt-1 col-11">
                                                    <label className="text-secondary" htmlFor="price">Price</label>
                                                    <input className="form-control" step="any" type="number" id="price" value={this.state.price} onChange={ this.handleChange } />
                                                    <label className="text-secondary mt-2" htmlFor="discount">Price with discount</label>
                                                    <input className="form-control" step="any" type="number" id="discount" value={this.state.discount} onChange={ this.handleChange } />

                                                    <select className="mx-auto mt-2 d-flex col-12" disabled>
                                                        <option disabled selected>Dish Category</option>
                                                        <option value="0">Entremeses</option>
                                                        <option value="1">Plato Principal</option>
                                                        <option value="2">Postre</option>
                                                        <option value="3">Bebida</option>
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
                                                <button className="btn btn-secondary" disabled>EN</button>
                                                <button className="btn btn-secondary" disabled>SP</button>
                                                <button className="btn btn-secondary" disabled>FR</button>
                                                <button className="btn btn-secondary" disabled>GE</button>
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