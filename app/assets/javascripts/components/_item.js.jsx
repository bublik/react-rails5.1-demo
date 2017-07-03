var Item = React.createClass({
    getInitialState() {
        return {editable: false, name: '', description: ''}
    },
    handleEdit() {
        if (this.state.editable) {
            var name = this.state.name;
            var id = this.props.item.id;
            var description = this.state.description;
            var item = {id: id, name: name, description: description};
            this.props.handleUpdate(item);
        }
        this.setState({editable: !this.state.editable})
    },

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]: value});
    },
    render() {
        var name = this.state.editable ?
            <input type='text' name="name"
                   defaultValue={this.props.item.name}
                   onChange={this.handleChange}/> :
            <h3>{this.props.item.name}</h3>;
        var description = this.state.editable ?
            <input type='text' name="description"
                   defaultValue={this.props.item.description}
                   onChange={this.handleChange}/> :
            <p>{this.props.item.description}</p>;
        return (<div>
            {name}
            {description}
            <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
            <button onClick={this.props.handleDelete}>Delete</button>
        </div> )
    }
});
