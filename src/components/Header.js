import React, {Component} from "react";
import {healthCheckRequestRegister} from "../actions";
import Button from 'react-button-component';
import axios from "axios/index";
import {configuration} from "../configurations/Configuration";
import green from '../img/green.png';
import red from '../img/red.png';

class Header extends Component {

    constructor( props ) {
        super(props);
        console.log(props);
        this.dispatcher = props.dispatcher;
        this.store = props.store;
        this.state = this.emptyState();
    }

    emptyState = () => {
        return { requestCount: 0, failedRequestCount: 0 };
    };

    componentDidMount() {

    }

    healthCheck = () => {
        const successCallback = (localResponse) => {
            console.log(localResponse.status);
            console.log(localResponse.data);
            this.dispatcher.dispatch(
                healthCheckRequestRegister(
                    this.state.requestCount + 1,
                    this.state.failedRequestCount,
                    localResponse.data.message,
                    green ) );
            this.setState({ requestCount : this.store.requestCount });
        };
        const failCallback = (error) => {
            console.log('FUCK');
            console.log(error.message);
            this.dispatcher.dispatch(
                healthCheckRequestRegister(
                    this.state.requestCount,
                    this.state.failedRequestCount + 1,
                    error.message,
                    red ) );
            this.setState({ failedRequestCount : this.store.failedRequestCount });
        };

        axios.get( configuration.URI.host + '/health-check' )
            .then(successCallback)
            .catch(failCallback);
    };

    render() {
        console.log(this.store);
        return ( <div>
            <table>
                <tr>
                    <td><strong>Health check requests success count:</strong> { this.store.requestCount}</td>
                    <td>|</td>
                    <td>
                        <Button onClick={ e => {
                            e.preventDefault();
                            this.healthCheck();
                        }}>
                            Health check
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td><strong>Health check requests failure count:</strong> { this.store.failedRequestCount}</td>
                    <td>|</td>
                    <td>
                        :)
                    </td>
                </tr>
            </table>
        </div> );
    }
}

export default Header;