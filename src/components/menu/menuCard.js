import React from 'react'
import { connect } from 'react-redux'
import { deleteMenu } from '../../store/actions/menuActions'

import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Row,
  Button,

} from 'reactstrap';

import {MdDelete, MdEdit} from 'react-icons/md';

const menuCard = ({menu, deleteMenu}) => {
    return (
        <div>
            <Card className="dishCard">
                <CardBody>
                    <CardTitle>{menu.title}</CardTitle>
                    <CardText>{menu.description}</CardText>
                    <Row>
                        <Col>
                            {menu && menu.dishes.map(dish =>{ return (<p>{dish.title}</p>)})}
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Button type="button" color="primary" className="mx-auto" id="updateDish" onClick={() => {console.log("intento hacer update")}} >Update <MdEdit></MdEdit></Button>
                        <Button type="button" className="mx-auto" id="deleteDish" onClick={() => {deleteMenu(menu)}} >Delete <MdDelete></MdDelete></Button>
                    </Row>
                </CardBody>
            </Card>
        </div>
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        deleteMenu: (menu) => dispatch(deleteMenu(menu)),
    }
}

export default connect(null, mapDispatchToProps) (menuCard)