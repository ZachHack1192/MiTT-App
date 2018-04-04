import React, { Component } from 'react'
import '../styles/home.css'
import '../styles/new-user.css'
import { Button, Input, Card, CardBody } from 'mdbreact'

class SignUp extends Component {
    render() {
        return (
            <div className="body">
                <h1 className="header">MiTT</h1>
                <br/>
                <h2 className="subhead">New Player Registration</h2>
                <br/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <Card>
                                <CardBody>
                                    <h3 className="mb-5 text-center">Sign Up</h3>
                                    <form>
                                        <p className="h5 text-center text-dark mb-4">*All Fields Required</p>
                                        <Input label="Your Name" icon="user" group type="email" validate error="wrong" success="right"/>
                                        <Input label="Your Email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                                        <Input label="Your Password" icon="lock" group type="password" validate/>
                                        <Input label="Re-Enter Password" icon="lock" group type="password" validate/>
                                        <div className="text-center">
                                            <Button color="primary">Sign up</Button>
                                        </div>
                                    </form>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
                <footer className="bottom"></footer>
            </div>
        )
    }
}

export default SignUp