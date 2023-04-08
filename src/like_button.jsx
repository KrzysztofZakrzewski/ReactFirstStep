'use strict';

const nameX = 'Grzegorz';
const element = <h1>Witaj, {nameX}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Witaj, świecie!</h1>);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(element);

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  
  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
    
    return (
      <button onClick={() => this.setState({ liked: true }) }>
        Like
      </button>
    );
  }
}


let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);

