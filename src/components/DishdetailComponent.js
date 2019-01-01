import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap'

class DishDetail extends Component{

    renderDish(dish){
        if(dish!=null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(<div></div>);
        }
    }


    renderComment(dish){
        if(dish!=null){
            const comments = dish.comments.map((dish) => {
                return (
                    <div key={dish.id}>
                      {dish.comment}
                      <div className="mt-3 mb-3">
                      --{dish.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(dish.date)))}
                      </div>
                    </div>
                );
            });
            return(
                <div>
                    <h3>Comments</h3>
                    {comments}
                </div>
            );
        }
        else{
            return(<div></div>);
        }
    }


    render(){

        return (
            <div className="container">
            <div className="row">
            <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.selectedDish)}
            </div>
            <div className="col-12 col-md-5 m-1">
                {this.renderComment(this.props.selectedDish)}
            </div>
            </div>
            </div>
        );
    }
}

export default DishDetail;