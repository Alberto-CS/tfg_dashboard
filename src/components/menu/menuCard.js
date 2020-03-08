import React from 'react'
import { connect } from 'react-redux'
import { deleteMenu } from '../../store/actions/menuActions'
import MenuDishCard  from './menuDishCard'
import {Link} from 'react-router-dom'

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
                    <CardTitle className="text-secondary h5 d-flex justify-content-center">{menu.title}</CardTitle>
                    <CardText className="col">
                        <Row className="text-primary h6 d-flex justify-content-center ">{menu.description}</Row>
                        <Row className="text-primary h4 d-flex justify-content-center">Price: {menu.price} €</Row>
                    </CardText>
                    <Row>
                        <Col>
                            {menu && menu.dishes.map(dish =>{ return (
                                <MenuDishCard dish={dish} key={dish.id} menu={menu} />
                            )})}
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Link className="mx-auto" to={{pathname: '/menu/update', menu}}><Button type="button" color="primary"  id="updateDish">Update <MdEdit></MdEdit></Button></Link>
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