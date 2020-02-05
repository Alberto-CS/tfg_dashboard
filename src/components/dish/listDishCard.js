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
                    <CardTitle>{dish.title}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    <Row>
                        <Col>
                            {dish && dish.allergens.map(allergen =>{
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