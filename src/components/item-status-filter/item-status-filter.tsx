import React, {Component} from 'react';

import './item-status-filter.css';

interface StatusFilterProps {
    onFilterChange: (name: string) => void
    filter: string
}

class ItemStatusFilter extends Component<StatusFilterProps> {
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ]

    render() {
        const {filter, onFilterChange} = this.props
        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name
            const clazz = isActive?'btn-info':'btn-outline-secondary'
            return (
                <button type="button"
                        key={name}
                        className={`btn ${clazz}`}
                        onClick={()=> onFilterChange(name)}>
                    {label}
                </button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    };
}

export default ItemStatusFilter;
