import React from 'react'

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
import { MdEdit} from 'react-icons/md';

import {getImage, getIcon} from '../../store/actions/imageActions'


const DishCard = ({dish, addDishToState}) => {
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
                                return (<img className="iconAllergies mx-1" key={allergen.name} id={allergen.name} name={allergen.name}
                                 src={ getIcon(allergen.name + ".png", allergen.name)} alt={allergen.name}></img>)
                            }else{
                                return null;
                            }
                            })}
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Button type="button" color="primary" className="mx-auto" id="updateDish" onClick={() => {addDishToState(dish)}} >Add to menu <MdEdit></MdEdit></Button>
                    </Row>
                </CardBody>
            </Card>
        </div>
    )
}


export default (DishCard)