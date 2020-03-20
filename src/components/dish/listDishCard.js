import React from 'react'
import { connect } from 'react-redux'
import { deleteDish } from '../../store/actions/dishActions'

import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
  Button,

} from 'reactstrap';

import logo200Image from 'assets/img/logo/logo_200.png';
import {MdDelete, MdEdit} from 'react-icons/md';

import {getImage, getIcon} from '../../store/actions/imageActions'





const listDishCard = ({dish, deleteDish, toggle}) => {
    return (
        <div>
            <Card className="dishCard">
                <CardImg top src={ dish.url ? getImage(dish.url, dish.id) : logo200Image } id={dish.id} alt={dish.title}/>
                <CardBody>
                    <CardTitle className="text-primary d-flex justify-content-center">{dish.title}</CardTitle>
                    <CardText>
                        <p className="small d-flex justify-content-center">{dish.description}</p>
                        {(dish.discount === "" || dish.discount === dish.price)
                        ? <p className="d-flex justify-content-center">{dish.price} €</p>
                        : <div className=""><p className="d-flex justify-content-center"><strike className="mr-2 text-danger small">{dish.price} €</strike>{dish.discount} €</p></div>
                        }
                    </CardText>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            {dish.allergens && dish.allergens.map(allergen =>{
                                if ( allergen.isInTheDish === true){
                                return (<img className="iconAllergies mx-1" id={allergen.name} name={allergen.name}
                                 src={ getIcon(allergen.name + ".png", allergen.name)} alt={allergen.name}></img>)
                            }else{
                                return null;
                            }
                            })}
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Button type="button" color="primary" className="mx-auto" id="updateDish" onClick={() => {toggle(dish)}} >Update <MdEdit></MdEdit></Button>
                        <Button type="button" className="mx-auto" id="deleteDish" onClick={() => {deleteDish(dish)}} >Delete <MdDelete></MdDelete></Button>
                    </Row>
                </CardBody>
            </Card>
        </div>
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        deleteDish: (dish) => dispatch(deleteDish(dish)),
    }
}

export default connect(null, mapDispatchToProps) (listDishCard)