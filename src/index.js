import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>
                        Warning!
                    </h4>
                    Are you Sure you want to do this?
                </div>
            </ApprovalCard>


            <ApprovalCard>
                <CommentDetail 
                    avatarImage= {faker.image.image()} 
                    author= "Sam" 
                    timeAgo="Today at 4:45PM" 
                    commentText= "Holy moly!" 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    avatarImage= {faker.image.image()} 
                    author= "Alex" 
                    timeAgo="Today at 2:00AM" 
                    commentText= "ZOMG" 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    avatarImage= {faker.image.image()} 
                    author= "Jane" 
                    timeAgo="Yesterday at 5:00PM" 
                    commentText= "That's nuts, dude!" 
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))

