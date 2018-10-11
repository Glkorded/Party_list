import React, {Component} from 'react';

class EditableName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing:false,
            name:'',
        }
    }
    startEdit = () => this.setState ({
        editing: !this.state.editing,
    });

    handleNameChange = e => {
        this.setState({
            name: e.target.value
        });
    };

    componentDidMount() {
        if (this.props.editname) {
                this.setState({
                    name: this.props.editname
                })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editing ?
                <div
                    className='single_guest_name'
                    onDoubleClick={this.startEdit}>
                    <h5>{this.state.name}</h5>
                </div>
                :
                <input
                    className='single_guest_name'
                    value = {this.state.name}
                    onBlur={this.startEdit}
                    onChange = {this.handleNameChange}
                >
                </input>}
            </div>
        );
    }
}

export default EditableName;