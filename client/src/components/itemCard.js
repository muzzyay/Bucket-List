import React from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp as faThumbsDown} from '@fortawesome/free-regular-svg-icons'
import { setCurrentUser } from "./jwt";
if (localStorage.getItem('jwtToken')) {
    var user = setCurrentUser(localStorage.getItem('jwtToken')).payload;
}


class CardBody extends React.Component {
    state = {
        likes: [],
        items: [],
    }
    

    componentWillMount() {
        if (user) {
            this.setState({ likes: this.props.likes});
            axios.get(`/api/user/${user.id}`).then(res=>{
                this.setState({items: res.data.items});
               
            }).catch(err=>console.log(err));

        }


    }





    handleLikeBtn = item => {

        axios.put(`/api/items/likes/${item}`, { id: user.id }).then(res => {
            this.setState({ likes: res.data.likes });

        }).catch(err => console.log(err));
    }

    handleDislikeBtn = item => {

        axios.put(`/api/items/removelikes/${item}`, { id: user.id }).then(res => {
            this.setState({ likes: res.data.likes});

        }).catch(err => console.log(err));
    }

    saveItem = item => {

        axios.put(`/api/user/add/${user.id}`, { id: item }).then(res => {
            this.setState({ items: res.data.items});
        }).catch(err => console.log(err));
    }

    render() {
        return <div className="col-md-3 mt-3">
            <div className="card" style={{ width: "18rem" }}>
                <img src={this.props.image} className="card-img-top" alt={this.props.title} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title} {this.props.user && !this.props.profile ? <button onClick={!this.state.likes.includes(user.id) ? () => this.handleLikeBtn(this.props._id) : () => this.handleDislikeBtn(this.props._id)} className="btn btn-sm btn-primary">{this.state.likes.includes(user.id) ? <FontAwesomeIcon icon={faThumbsUp} /> : <FontAwesomeIcon icon={faThumbsDown}/>} {this.state.likes ? this.state.likes.length : 0}</button> : " "}</h5>
                    {this.props.user && !this.props.profile && !this.state.items.includes(this.props._id) ? <button onClick={() => this.saveItem(this.props._id)} className="btn btn-primary">Add</button> : " "}
                    {this.props.user && this.props.profile ? <button onClick={() => this.props.removeItem(this.props._id)} className="btn btn-outline-danger">Remove</button> : " "}
                    {this.props.user && !this.props.isDone.includes(user.id) && this.props.profile ? <button onClick={() => this.props.itemDone(this.props._id)} className="btn btn-success ml-2">Done</button> : " "}
                    {this.props.user && this.props.profile ? <button onClick={() => this.props.handleDelete(this.props._id)} className="btn btn-danger ml-2">Delete</button> : " "}
                </div>
            </div>

        </div>

    }





}

export default CardBody;