import React from 'react';
import {Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';

const RenderDish = ({dish}) => {
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


const RenderComments = ({comments}) => {
    if(comments != null) {
        return(
            <div className="col-12 col-md-5 m-1">
                <h3>Comments</h3>
                {comments.map(comment => 
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

const DishDetail = (props) => {
    if (props.dish != null)
        return(
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
        );
    else{
        return(
            <div></div>
        )
    }
}



export default DishDetail;

