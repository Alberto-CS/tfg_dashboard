import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Card, CardBody, CardHeader, Col, Form } from 'reactstrap';

class userProfile extends Component {
    render() {
        const { auth, profile } = this.props
        if (! auth.uid && auth.isLoaded) return <Redirect to='/login' />
        console.log(this.props)    
        return (
            <Col className="col-12 d-flex justify-content-center">
                <Card className="formCard">
                    <CardHeader className="text-primary display-4">My Profile</CardHeader>
                        <CardBody>
                            <Form>
                                <input className="btn-block" type="form-control" value={profile.name}  disabled/>
                                <input className="btn-block" type="form-control" value={auth.email}  disabled/>
                                <button className="btn btn-secondary btn-sm btn-block mt-4"> Password Recovery</button>
                            </Form>
                        </CardBody>
                </Card>
            </Col>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
  }


export default connect(mapStateToProps)(userProfile)