import React from "react";

class postItem extends React.Component {

    state = {
        title: "",
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    
    render() {
        return <>
        <div className="modal" id="postItemBtn" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <h4 className="text-center"><i class="far fa-plus-square"></i> Post an Item</h4>
                        <hr />
                        <form>
                            <div class="form-group">
                                <label for="name">Title</label>
                                <input
                                    value={this.state.title}
                                    name="title"
                                    onChange={this.handleInputChange}
                                    type="text" class="form-control" id="title" aria-describedby="title" placeholder="Enter a Bucketlist Item" />
                            </div>

                            
                        </form>

                        <button onClick={()=>{this.props.handleFormSubmit(this.state.title);
                        this.setState({title: ""});
                        }} data-dismiss="modal" class="btn btn-primary col-12"><i class="far fa-plus-square"></i> Post</button>

                    </div>
                </div>
            </div>
        </div></>


    }

}

export default postItem;