import React, {Component} from 'react';
import './item-add-form.css'

interface AddFormInterface {
    onItemAdded: (string) => void
}
export default class ItemAddForm extends Component<AddFormInterface> {
    state = {
        label: ''
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.onItemAdded(this.state.label)
        this.setState({
            label:''
        })
    }

    render() {
        return (
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>

                <input type="text" className="form-control" onChange={this.onLabelChange}
                       placeholder="Add task on list.." value={this.state.label}/>
                <button className="btn btn-warning">Add item
                </button>
            </form>
        )
    }
}