var AllItems = React.createClass({
    handleDelete(id) {
        this.props.handleDelete(id);
    },
    handleUpdate(item) {
        this.props.handleUpdate(item);
    },

    render() {
        var items = this.props.items.map((item) => {
            return (
                <div key={item.id}>
                    <Item item={item}
                          handleDelete={this.handleDelete.bind(this, item.id)}
                          handleUpdate={this.handleUpdate}/>
                </div> )
        });
        return ( <div> {items} </div> )
    }

});
