import React, {useEffect,Component} from 'react';

class Test extends Component {
    state = {
        count :0    
    }
    componentDidMount() {
        console.log('componentDidMount');
        document.title =`You clicked ${this.state.count}`;
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
        document.title = `You clicked ${this.state.count}`;
    }

    render(){
        return(
            <div>
                You clicked {this.state.count} times
                <button onClick={
                    () => {
                        this.setState({count: this.state.count+1})
                    }
                }></button>
            </div>
        )
    }
}

export default Test

