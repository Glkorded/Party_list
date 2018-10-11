import React, {Component} from 'react';

class Filters extends Component {
render() {
        return (
            <div>
                <button className="btn btn-outline-success" onClick={this.props.noFilter}>Все</button>
                <button className="btn btn-outline-success" onClick={this.props.onlySingle}>С парой</button>
                <button className="btn btn-outline-success" onClick={this.props.onlyPair}>Одни</button>
            </div>
        );
    }
}
export default Filters;