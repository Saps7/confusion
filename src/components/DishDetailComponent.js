import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody } from 'reactstrap';


class DishDetail extends Component{
    constructor(props){
        super(props);
    }

 

    renderDish(dish) {
        if (dish != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>
                
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    
    renderComments(dish) {
        if(dish != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <h3>Comments</h3>
                    {dish.comments.map(comment => 
                        <div key={comment.id}>
                            <ul  className= "list-unstyled">
                                <li>
                                    <p>{comment.comment} </p>
                                    <p>--{comment.author}, {new Intl.DateTimeFormat('en-US',
                                                                {year: 'numeric', month: 'short', day: '2-digit'}).format(
                                                                    new Date(Date.parse(comment.date)))} </p>
                                </li>
                            </ul>
                        </div>
                    )};
                </div>
            );
            
            
        }
        else{
            return(
                <div></div>
            );
            
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
            
        );
    }

}

export default DishDetail;

