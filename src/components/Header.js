import React, {Component} from "react";
import {healthCheckRequestRegister, setHealthCheckHistory} from "../actions";
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
        return { requestCount: 0, failedRequestCount: 0, history: [] };
    };

    updateHistoryList = (newHistoryBlock) => {
        this.setState({
            history: [...this.state.history, newHistoryBlock]
        });
        console.log(this.state.history);
        this.dispatcher.dispatch(
            setHealthCheckHistory(this.state.history)
        );
    };

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
            this.updateHistoryList( { date : new Date().toLocaleTimeString(), message : localResponse.data.message, img : green } );
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
            this.updateHistoryList( { date : new Date().toLocaleTimeString(), message : error.message, img : red } );
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