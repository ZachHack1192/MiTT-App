import React, { Component } from 'react';
import '../styles/home.css'
import { Button, Input, Card, CardBody } from 'mdbreact'
import { Link } from 'react-router-dom'
class Home extends Component {
    render() {
        return (
            <div class="body">
                <h1 className="header">MiTT</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                        </div>
                        <div className="col">
                            <Card>
                                <CardBody className="height">
                                    <h2 className="mb-5">Player Login</h2>
                                    <form>
                                        <p className="h5 text-center mb-4">Sign in</p>
                                        <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                                        <Input label="Type your password" icon="lock" group type="password" validate/>
                                        <div className="text-center">
                                            <Button color="primary">Login</Button>
                                        </div>
                                    </form>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col">
                        </div>
                    </div>
                </div>
                <footer className="foot">
                    <br/>
                    <Link to={'signup'}><h5>Click here to sign up</h5></Link>
                </footer>
            </div>
        )
    }
}

export default Home