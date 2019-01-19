import React, {Component} from "react";

class ResponseStatusBar extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.store = props.store;
    }

    render() {
        console.log(this.store);
        return ( <div>
            <table>
                <tr>
                    <td><strong>Response data:</strong> { this.store.responseText}</td>
                    <td>|</td>
                    <td>
                        <img src={this.store.img} />
                    </td>
                </tr>
            </table>
        </div> );
    }
}

export default ResponseStatusBar;