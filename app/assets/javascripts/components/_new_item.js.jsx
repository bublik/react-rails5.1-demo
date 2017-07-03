var NewItem = React.createClass({
    getInitialState(){
        this.state = {'name': '', 'description': ''};
        return this.state;
    },
    handleClick() {
        var name = this.state.name;
        var description = this.state.description;
        var data = {item: {name: name, description: description}};
        console.log(data);
        $.ajax({
            url: '/api/v1/items',
            type: 'POST',
            data: data,
            success: (item) => {
                this.props.handleSubmit(item);
            }
        });
    },
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]: value});
    },
    render() {
        return (<div>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder='name'/>
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange}
                   placeholder='description'/>
            <button onClick={this.handleClick}>Submit</button>
        </div> )

    }
});