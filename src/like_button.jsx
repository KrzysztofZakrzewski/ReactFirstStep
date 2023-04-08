'use strict';

const nameX = 'Grzegorz';
const element = <h1>Witaj, {nameX}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Witaj, świecie!</h1>);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(element);

const link = <a href='https://www.reactjs.org'> Go to www.reactjs.org </a>;

let linkElement = ReactDOM.createRoot(document.getElementById('link'));
linkElement.render(link);

function formatName(user) {
  return `${user.firstname} ${user.lastname}`;
}

const user = {
	firstname: 'Gorge',
	lastname: 'Bettlenosie',
	// avatarUrl: URL('/public/images/Frame1000003602.png'),
};

const prevUser = <h1>Witaj, {formatName(user)}</h1>;

const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(prevUser);

class LikeButton extends React.Component {
  constructor(props) {
		super(props);
		this.state = { liked: false };
	}
  
	render() {
		if (this.state.liked) {
			return 'You liked this.';
		}

		return <button onClick={() => this.setState({ liked: true })}>Like</button>;
	}
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);

const asd = <p>jkhskjhsd</p>

const userPic = './img/Frame1000003602.png';

const userPicture = <img src={userPic}></img>;

let img = ReactDOM.createRoot(document.getElementById('img'));
img.render(userPicture);
