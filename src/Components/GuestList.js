import React from 'react'
import ExtraInfo from './ExtraInfo'
import uuidv4 from 'uuid/v4'; //Сторонняя библиотека, чтобы генерировать уникалльный айди
import EditableName from "./EditableName";
import Filters from "./Filters";

//Конструктор гостя
class GuestList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            filt_list: [],
            guest: '',        //Имя
            twoguests: false, //Один ли гость или с парой
            key: uuidv4(),    //Уникальный айди
            count: 0,         //СЧетчик сколько всего гостей
        };
    };
 /*Создание нового гостя путем добавления объекта в список*/
    createNewGuest = () => {
        this.setState(({list, guest, twoguests, key, count,}) => ({
            list: [
                ...list,
                {
                    guest,
                    key,
                    twoguests,
                }
            ],
            twoguests: false,
            guest: '',
            key: uuidv4(),
            count: this.state.twoguests ? count + 2 : count + 1,
        }));
    };

    handleInput = e => {
        this.setState({
            guest: e.target.value
        });
        console.log(e.target.value)
    };


    handleKeyPress = (e) => {
        if (e.target.value !== '') {
            if (e.key === 'Enter') {
                this.createNewGuest();
            }
        }
    };

    handleCheckBox = () =>
        this.setState({
            twoguests: !this.state.twoguests
        });

    /*Удаление гостя*/
    excludeGuest = keyToDelete => {
        this.setState(({ list }) => ({
            list: list.filter((GuestList, key) => key !== keyToDelete),
            count: this.state.twoguests ? this.state.count - 2 : this.state.count - 1, //TODO Нормально сделать обработчик, чтобы если пришел с парой, то минус 2, а если один то и минус один
        }));
    };

    componentWillMount() {
    localStorage.getItem('list') && this.setState({
        list: JSON.parse(localStorage.getItem('list'))
    })
}
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('list', JSON.stringify(nextState.list));
    }

    render() {
        return (
            <div>
                <div>
                    <div className = "guest_list">
                        {this.state.list.map((person, key) =>
                            <div key = {person.key}>
                                <EditableName
                                    editname = {person.guest}
                                />
                                <ExtraInfo
                                    two_people = {person.twoguests ? ' --- Придет с парой' : ' --- Придет один'}
                                    excludeGuest = {this.excludeGuest.bind(this,key)}
                            />
                            </div>
                        )}
                    </div>
                    <div className="input-group">
                    <div className="input-group-append">
                        <input
                            placeholder="Имя гостя"
                            value={ this.state.guest }
                            onChange={this.handleInput}
                            onKeyPress={this.handleKeyPress}>
                        </input>
                        <div>
                            <div className='input-group-prepend'>
                            <input
                                type="radio"
                                onChange={this.handleCheckBox}
                                checked={this.state.twoguests?true:false}
                            >
                            </input>
                            Придёт с парой
                            </div>
                        </div>
                    </div>
                    </div>
                    <div>
                        Всего гостей будет: {this.state.count}
                    </div>
                </div>
                {/*TODO недоделанные фильтры*/}
                <Filters
                />
            </div>
        )
    }
}
export default GuestList