import React from 'react'
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
  CardHeader,
} from 'reactstrap';

import logo200Image from 'assets/img/logo/logo_200.png';
import {getIcon, getImageClass} from '../../store/actions/imageActions'


const dishCard = ({dish}) => {
    console.log(dish)
    return (
        <Card className="dishCard">
            {dish.url ? <CardHeader className="text-primary"><h5 className="">Dish Most Sold</h5></CardHeader> : null}
            <CardImg top name={dish.title} src={ dish.url ? getImageClass(dish.url, dish.title) : logo200Image }  id="output" alt={dish.title}/>
            <CardBody>
                <CardTitle>{dish.title}</CardTitle>
                <CardText>{dish.description}</CardText>
                <Row>
                    <Col>
                    {dish && dish.allergens.map(allergen =>{
                            if ( allergen.isInTheDish === true){
                                return (<img className="iconAllergies mx-1" id={allergen.name} name={allergen.name}
                                 src={ allergen.name ? getIcon(allergen.name + ".png",allergen.name) : logo200Image} alt={allergen.name}></img>)
                            }else{
                                return null;
                            }
                    })}
                    </Col>
                </Row>
            </CardBody>

        </Card>
    )
}

export default  (dishCard)



