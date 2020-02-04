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
} from 'reactstrap';

import logo200Image from 'assets/img/logo/logo_200.png';
import {getIcon} from '../../store/actions/imageActions'


const dishCard = ({dish, deleteDish}) => {
    return (
        <Card className="dishCard">
            <CardImg top src={ logo200Image }  id="output" alt={dish.title}/>
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


const mapDispatchToProps = (dispatch) => {
    return {
        deleteDish: (dish) => dispatch(deleteDish(dish))
    }
}


export default connect(null, mapDispatchToProps) (dishCard)



