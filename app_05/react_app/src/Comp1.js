import React from 'react';

class Comp1 extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }

    handler = () => {
        let currentCount = this.state.count;
        currentCount++;
        this.setState({count: currentCount});
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
            </div>
        );
    }

}

export default Comp1;