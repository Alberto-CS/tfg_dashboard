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

import {getImageClass, getIcon} from '../../store/actions/imageActions'


const menuDishCard = ({dish, removeDishFromState, positionOfDish}) => {
    if (dish === null) return null
    return (
        <div>
            <Card className="dishCard flex-row">
                <CardImg style={{ width: 300, height: 200 }}  className="card-img-left" name={dish.title} src={ dish.url ? getImageClass(dish.url, dish.title) : logo200Image } id={dish.id} alt={dish.title}/>
                <CardBody>
                    <CardTitle>{dish.title}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    <Row>
                        <Col>
                            {dish && dish.allergens.map(allergen =>{
                                if ( allergen.isInTheDish === true){
                                return (<img className="iconAllergies mx-1 iconMenuAllergenCard" key={allergen.name}  id={allergen.name} name={allergen.name}
                                 src={ getIcon(allergen.name + ".png", allergen.name)} alt={allergen.name}></img>)
                                }else{
                                    return null;
                                }
                            })}
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Button type="button" color="secondary" className="mx-auto" id="updateDish" onClick={() => {removeDishFromState(positionOfDish)}} >Remove from menu <MdEdit></MdEdit></Button>
                    </Row>
                </CardBody>
            </Card>
        </div>
    )
}


export default (menuDishCard)