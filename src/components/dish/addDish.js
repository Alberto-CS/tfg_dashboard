import React, { Component } from 'react'
import DishCard from './dishCard'
import { connect } from 'react-redux'
import { createDish } from '../../store/actions/dishActions'
import { Redirect } from 'react-router-dom'
import { Card, CardBody, CardHeader, Col, Form, Row } from 'reactstrap';
import {addImage, getLocalImage} from '../../store/actions/imageActions'

//Alérgenos, picante y vegano
import altramuces from '../../images&icons/food/altramuces.png'
import apio from '../../images&icons/food/apio.png'
import cacahuete  from '../../images&icons/food/cacahuete.png'
import crustaceos  from '../../images&icons/food/crustaceos.png'
import sulfitos  from '../../images&icons/food/sulfitos.png'
import frutosCascara  from '../../images&icons/food/frutosCascara.png'
import gluten  from '../../images&icons/food/gluten.png'
import granosSesamo  from '../../images&icons/food/granos-sesamo.png'
import huevos  from '../../images&icons/food/huevos.png'
import moluscos  from '../../images&icons/food/moluscos.png'
import mostaza  from '../../images&icons/food/mostaza.png'
import pescado  from '../../images&icons/food/pescado.png'
import soja  from '../../images&icons/food/soja.png'
import lacteos  from '../../images&icons/food/lacteos.png'

//Banderas


class CreateDish extends Component {
    state = {
        title: 'Nombre del plato',
        description: 'Descripción del plato',
        url: '',
        price: '',
    }
    
    image = {
        file: '',
    }

    handleChange = (e) => {
        if (e.target.id === 'url'){
            this.image.file = e.target.files[0]
            this.setState({url: this.image.file.name.toString()})
            getLocalImage(this.image.file)
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
            this.props.createDish(this.state)
        }
    }    
    render() {
        const { auth } = this.props
        if (! auth.uid && auth.isLoaded) return <Redirect to='/login' />
        return (
            <div>
                <Row className="d-flex flex-wrap">
                    <div className="align-self-center col-5 justify-content-center mx-auto"><DishCard dish={this.state} /></div>
                    <Col className="align-self-center col-6 justify-content-center mx-auto">
                    <Card className="formCard">
                    <CardHeader className="text-primary display-4">New Dish</CardHeader>
                        <CardBody>
                            <Form onSubmit={ this.handleSubmit }>
                                    <div className="row flex-wrap d-flex">
                                        <div className="col-6 mx-auto">
                                            <h5 className="text-primary h5">Dish Data</h5>
                                            <Row>
                                                <Col className="mx-auto mt-1">
                                                    <label className="text-secondary" htmlFor="title">Name</label>
                                                    <input type="form-control" id="title" onChange={ this.handleChange } />
                                                </Col>
                                                <Col className="mx-auto mt-1">
                                                    <label className="text-secondary" htmlFor="textarea">Description</label>
                                                    <textarea className="materialize-textarea" id="description" onChange= {this.handleChange}></textarea>
                                                </Col>                                        
                                            </Row>
                                            <Row>
                                                <Col className="mx-auto mt-1">
                                                    <label className="text-secondary" htmlFor="textarea">Price</label>
                                                    <div className="">
                                                        <input type="number" id="price" onChange={ this.handleChange } />
                                                        <label className="ml-1" htmlFor="price">€</label>

                                                    </div>
                                                    <select className="mx-auto mt-2">
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
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" type="image" src={altramuces} alt="altramuces"/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" type="image" src={apio} alt="apio"/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" type="image" src={cacahuete} alt="cacahuete"/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" type="image" src={crustaceos} alt="crustaceos"/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" type="image" src={sulfitos} alt="sulfitos"/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" type="image" src={frutosCascara} alt="frutos con cascara"/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" type="image" src={lacteos} alt="lacteos"/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" type="image" src={gluten} alt="gluten"/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" type="image" src={granosSesamo} alt="sésamo"/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" type="image" src={huevos} alt="huevos"/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" type="image" src={moluscos} alt="moluscos"/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" type="image" src={mostaza} alt="mostaza"/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" type="image" src={pescado} alt="pescado"/>
                                                        </btn>
                                                        <btn className="btnAllergies waves-effect waves-dark">
                                                            <input className="iconAllergies" type="image" src={soja} alt="soja"/>
                                                        </btn>                                                  
                                                    </div>
                                            </Row>                                    
                                            <Row>
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
                                        <button id="addDish" className="btn btn-primary btn-sm btn-block" onClick={this.handleSubmit}>Añadir plato</button>
                                    </Row>                    
                            </Form>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
            </div>
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
        createDish: (dish) => dispatch(createDish(dish)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDish)