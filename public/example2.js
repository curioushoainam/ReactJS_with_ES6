class Note extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			tag: 'Donnerstag'
		}
	}

	render(){
		return(
			<div>
				<p>Morgen ist {this.props.txt}</p>
				<p>Heute is {this.state.tag}</p>
				<button >Delete</button>
			</div>
		);
	}
}

ReactDOM.render(
	<Note txt="Freitag"></Note>
	,document.getElementById('root')
);