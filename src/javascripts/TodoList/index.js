import React, { PureComponent } from 'react';
import moment from 'moment';

class TodoList extends PureComponent {
  constructor() {
    super();

    this.state = {
      value: '',
      list: [],
    };
  }

  handleChange(e) {
    const value = e.target.value

    this.setState({
      value,
    })
  }

  handleSubmit(e) {
    const { list } = this.state;
    const todo = e.target.todo.value;

    e.preventDefault();

    list.push({
      id: list.length + 1,
      name: todo,
      created_at: moment().format('YYYY-MM-DD HH:mm')
    });

    this.setState({
      value: '',
      list,
    });
  }

  render() {
    const { value, list } = this.state;

    return (
      <div className="u-half__width">
        <form className="c-form__container" onSubmit={this.handleSubmit.bind(this)}>
          <input
            className="c-input"
            name="todo"
            onChange={this.handleChange.bind(this)}
            placeholder="Add Todo"
            value={value}
            required
          />

          <button className="c-btn"></button>
        </form>

        <ul className="c-list">
          {list.map(todo =>
            <li key={todo.id}>
              <p className="c-list__name">{todo.name}</p>
              <p className="c-list__date">{todo.created_at}</p>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default TodoList;

