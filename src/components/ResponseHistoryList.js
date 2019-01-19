import React, {Component} from "react";
import HistoryBlock from './HistoryBlock'

class ResponseHistoryList extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.store = props.store;
    }

    render() {
        console.log(this.store);
        const divStyle = {
            textAlign: 'center'
        };
        return (
            <div style={divStyle}>
                <h3>Response history</h3>
                { this.store.history.slice(0).reverse().map((h) => {
                    return (
                        <HistoryBlock
                            date={h.date}
                            message={h.message}
                            img={h.img}
                        />
                    );
                })}
            </div>

        );
    }
}

export default ResponseHistoryList;