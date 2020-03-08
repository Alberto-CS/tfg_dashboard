import React from 'react'
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from 'reactstrap';

import logo200Image from 'assets/img/logo/logo_200.png';
import { getImageClass} from '../../store/actions/imageActions'


const restaurantCard = ({restaurant, profile, selectRestaurant}) => {
    return (
        <Card className="dishCard">
            <CardTitle className="h3 text-primary d-flex justify-content-center">{restaurant.name}</CardTitle>
            <CardImg top name={restaurant.name} src={ restaurant.url ? getImageClass(restaurant.url, restaurant.name) : logo200Image }  id="output" alt={restaurant.name}/>
            <CardBody>
                <CardText className="d-flex justify-content-center">{restaurant.description}</CardText>
            </CardBody>
            {(restaurant.name === profile)
            ? <button className="btn btn-secondary btn-sm btn-block" disabled> Selected Restaurant</button>
            : <button className="btn btn-primary btn-sm btn-block" name={restaurant.name} onClick={ () => selectRestaurant(restaurant.name, profile.id)}> Select Restaurant</button>            
            }
        </Card>
    )
}

export default  (restaurantCard)



