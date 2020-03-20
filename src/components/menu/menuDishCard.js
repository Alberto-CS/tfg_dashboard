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


const menuDishCard = ({dish, removeDishFromState, positionOfDish, btn, menu}) => {
    if (dish === null) return null
    return (
        <div>
            <Card className="dishCard flex-row">
                {menu.showImage ? <CardImg style={{ width: 300, height: 200 }}  className="card-img-left col-6" name={dish.title} src={ dish.url ? getImageClass(dish.url, dish.title) : logo200Image } id={dish.id} alt={dish.title}/> : null}
                <CardBody className="col-6">
                    <CardTitle className="text-primary h5">{dish.title}</CardTitle>
                    <CardText>
                        <span className="small">{dish.description}</span>
                        {menu.showPrice 
                        ?   <div>{(dish.discount === "" || dish.discount === dish.price)
                                ? <p>{dish.price} €</p>
                                : <div><p><strike className="mr-2 text-danger small">{dish.price} €</strike>{dish.discount} €</p></div>}
                            </div> 
                        : null}
                    </CardText>
                    <Row>
                        <Col>
                            {dish && dish.allergens.map(allergen =>{
                                if ( allergen.isInTheDish === true && menu.showAllergens){
                                return (<img className="iconAllergies mx-1 iconMenuAllergenCard" key={allergen.name}  id={allergen.name} name={allergen.name}
                                 src={ getIcon(allergen.name + ".png", allergen.name)} alt={allergen.name}></img>)
                                }else{
                                    return null;
                                }
                            })}
                        </Col>
                    </Row>
                    {btn === true ? 
                    <Row className="mt-4">
                        <Button type="button" color="secondary" className="mx-auto" id="updateDish" onClick={() => {removeDishFromState(positionOfDish)}} >Remove from menu <MdEdit></MdEdit></Button>
                    </Row>
                    : null}
                </CardBody>
            </Card>
        </div>
    )
}


export default (menuDishCard)