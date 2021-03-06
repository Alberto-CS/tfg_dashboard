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
import {getIcon, getLocalImage} from '../../store/actions/imageActions'


const dishCard = ({dish, image}) => {
    return (
        <Card className="dishCard">
            {dish.url ? <CardHeader className="text-primary d-flex justify-content-center"></CardHeader> : null}
            <CardImg top name={dish.title} src={ dish.url ? getLocalImage(image) : logo200Image }  id="output" alt={dish.title}/>
            <CardBody>
                <CardTitle className="text-secondary d-flex justify-content-center">{dish.title}</CardTitle>
                <CardText>
                    <p className="small d-flex justify-content-center">{dish.description}</p>
                    <p className="small d-flex justify-content-center">{dish.price} €</p>                    
                </CardText>
                <Row>
                    <Col className="d-flex justify-content-center">
                    {dish && dish.allergens.map(allergen =>{
                            if ( allergen.isInTheDish === true){
                                return (<img key={allergen.id} className="iconAllergies mx-1" id={allergen.name} name={allergen.name}
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



