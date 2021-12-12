import React from 'react';

class Comp1 extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0,
            comment: [],
        }
        this.myRef = React.createRef();
    }

    handler = () => {
        let currentCount = this.state.count;
        currentCount++;
        this.setState({count: currentCount});
    }

    addComment = () => {
        let comment = this.myRef.current.value;
        let comments = this.state.comment;
        comments.push(comment);
        this.setState({comment: comments});
        this.myRef.current.value = '';
    }

    render() {
        return (
            <div>
                <h1>State</h1>
                <div>
                    <button onClick={this.handler}>This button change state</button>
                </div>
                <div>
                    {this.state.count % 2 === 0 ? 'even' : 'odd'}
                </div>
                <div>
                    {this.state.count}
                </div>
                <div>
                    <textarea ref={this.myRef}  name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button onClick={this.addComment}>Add comment</button>
                </div>
                <div>
                    <ul>
                        {this.state.comment.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            </div>
        );
    }

}

export default Comp1;