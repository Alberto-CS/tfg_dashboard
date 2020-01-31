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
import {MdFilter1, MdDelete, MdEdit} from 'react-icons/md';

import {getImage} from '../../store/actions/imageActions'



const listDishCard = ({dish, deleteDish}) => {
    return (
        <Card className="dishCard">
            <CardImg top src={ dish.url ? getImage(dish.url, dish.id) : logo200Image } id={dish.id} alt={dish.title}/>
            <CardBody>
                <CardTitle>{dish.title}</CardTitle>
                <CardText>{dish.description}</CardText>
                <Row>
                    <Col>
                            <MdFilter1></MdFilter1>
                            <MdFilter1></MdFilter1>
                            <MdFilter1></MdFilter1>
                            <MdFilter1></MdFilter1>
                    </Col>
                    <Col>
                        <MdEdit id="updateDish" onClick={() => {console.log("try to edit this dish")}}></MdEdit>
                        <MdDelete id="deleteDish" onClick={() => {deleteDish(dish)}}></MdDelete>                    
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

export default connect(null, mapDispatchToProps) (listDishCard)



