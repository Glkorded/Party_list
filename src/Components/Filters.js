import React, {Component} from 'react';

class Filters extends Component {

/* TODO Заставить фильтры работать
onlySingle = () => {this.props.list.filter((twornot) => twornot.twoguests !== true)}
onlyPair = () => {this.props.list.filter((twornot) => twornot.twoguests !== false)}
noFilter = () => {this.props.list};
*/
render() {
        return (
            <div>
                <button className="btn btn-outline-success" onClick={this.noFilter}>Все</button>
                <button className="btn btn-outline-success" onClick={this.onlySingle}>С парой</button>
                <button className="btn btn-outline-success" onClick={this.onlyPair}>Одни</button>
            </div>
        );
    }
}

export default Filters;