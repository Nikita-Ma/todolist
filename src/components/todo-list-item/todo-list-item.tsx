import React, {Component} from 'react';

import './todo-list-item.css';

interface listItemsProps {
    label: string,
    onDeleted: (event: React.MouseEvent<HTMLButtonElement>) => void,
    onToggleDone: (event: React.MouseEvent<HTMLButtonElement>) => void,
    onToggleImportant: (event: React.MouseEvent<HTMLButtonElement>) => void,
    important: boolean,
    done: boolean
}

class TodoListItem extends Component<listItemsProps> {

    render() {
        const {label, onDeleted, onToggleDone, onToggleImportant, important, done} = this.props

        let classNames = 'todo-list-item'
        if (done) {
            classNames += ' done'
        }
        if (important) {
            classNames += ' important'
     }
        return (
            <span className={classNames}>
      <span
          className="todo-list-item-label"
          onClick={onToggleDone}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={onToggleImportant}>
        <i className="fa fa-exclamation"/>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right" onClick={onDeleted}>
        <i className="fa fa-trash-o"/>
      </button>
    </span>
        );
    };
}

export default TodoListItem;
