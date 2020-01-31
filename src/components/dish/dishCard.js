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
import {MdFilter1} from 'react-icons/md';

const dishCard = ({dish, deleteDish}) => {
    return (
        <Card className="dishCard">
            <CardImg top src={ logo200Image }  id="output" alt={dish.title}/>
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



