import React, { Component } from 'react'

class ExtraInfo extends Component {
    render() {
        return (
                <div className='input-group mb-3'>
                    <div className = 'input-group-prepend'>
                        {this.props.two_people}
                    </div>
                    <div className='input-group-append'>
                        <button className='btn btn-success btn-sm'/*Исключаем гсстя по необходимости*/
                            onClick = {this.props.excludeGuest}>
                            Убрать
                        </button>
                    </div>
                </div>
        )
    }
}

export default ExtraInfo