import React, {Component} from "react";
import HistoryBlock from './HistoryBlock'
import Button from 'react-button-component';
import {toogleHistoryVisiable} from "../actions";

class ResponseHistoryList extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.store = props.store;
        this.dispatcher = props.dispatcher;
    }

    toggleHistoryHandler = () => {
        this.dispatcher.dispatch(toogleHistoryVisiable(!this.store.isDisplayHistory));
    };

    render() {
        console.log(this.store);
        const divStyle = {
            textAlign: 'center'
        };
        return (
            <div style={divStyle}>
                <h3>Response history</h3>
                <Button onClick={ e => {
                    e.preventDefault();
                    this.toggleHistoryHandler();
                }}>
                    Toggle history
                </Button>
                {
                    this.store.isDisplayHistory
                    ? this.store.history.slice(0).reverse().map((h) => {
                        return (
                            <HistoryBlock
                                date={h.date}
                                message={h.message}
                                img={h.img}
                            />
                        );
                    }) : null
                }
            </div>

        );
    }
}

export default ResponseHistoryList;