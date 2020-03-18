import Page from 'components/_helpers/Page';
import {  NumberWidget } from 'components/_helpers/Widget';
import { chartjs } from 'demos/dashboardPage';
import React from 'react';
import {  Line } from 'react-chartjs-2';

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
} from 'reactstrap';
import { Redirect } from 'react-router-dom'
import { connect} from 'react-redux'
import DishCard from '../components/dish/dishCard'
import { firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'



class DashboardPage extends React.Component {

  render() {
    const { auth, dishes } = this.props
    if (! auth.uid && auth.isLoaded) return <Redirect to='/login' />
    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}>
        <Row>
          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Dishes viewed"
              subtitle="This month"
              number="5,400"
              color="secondary"
              progress={{
                value: 45,
                label: 'Last month',
              }}
            />
          </Col>
          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Dishes shared"
              subtitle="This month"
              number="236"
              color="secondary"
              progress={{
                value: 70,
                label: 'Last month',
              }}
            />
          </Col>
          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Total Profit expected"
              subtitle="This month"
              number="2.300€"
              color="secondary"
              progress={{
                value: 75,
                label: 'Last month',
              }}
            />
          </Col>          
          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="New clients"
              subtitle="This month"
              number="120"
              color="secondary"
              progress={{
                value: 90,
                label: 'Last month',
              }}
            />
          </Col>

        </Row>

        <Row>
        
        {dishes && dishes.map(dish =>{
                        if (dish.id === "mux6l2JbSayp0Dqshsxy"){
                        return (
                        <div className="col-4">
                          <DishCard dish={dish} key={dish.id} />                                                                            
                        </div>)
                        }else{
                            return null;
                        }
          })}
          <Col className="col-8 mt-3">
            <Card>
              <CardHeader className="text-primary">
                The Competence vs{' '}
                <small className="text-muted text-capitalize">Your restaurant</small>
              </CardHeader>
              <CardBody>
                <Line data={chartjs.line.data} options={chartjs.line.options} />
              </CardBody>
            </Card>
          </Col>
        </Row>

</Page>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      auth: state.firebase.auth,
      menues: state.firestore.ordered.menu,
      dishes: state.firestore.ordered.platos,
    }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      {collection: 'platos'}
  ])
) (DashboardPage);
