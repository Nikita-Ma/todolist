import React, {Component} from 'react';

import './search-panel.css';
interface SearchPanelProps {
    onSearchChange: (term: string) => void
}
export default class SearchPanel extends Component<SearchPanelProps> {
    state = {
        term: ''
    }
    onSearchChange = (e) => {
        const term = e.target.value
        this.setState({term})
        this.props.onSearchChange(term)
    }
    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="type to search"
            value={this.state.term} onChange={this.onSearchChange}/>
        )
    }
}