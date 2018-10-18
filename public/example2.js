class Note extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			tag: 'Donnerstag',
			val: 1
		}

		{/* this.addmore = this.addmore.bind(this); */}
	}

	addmore(){
		this.state.val += 1;
		this.setState(this.state);
	}

	render(){
		return(
			<div>
				<p>Morgen ist {this.props.txt}</p>
				<p>Heute ist {this.state.tag}</p>
				<p>Value is {this.state.val}</p>

				{/* <button onClick={this.addmore} >Add more</button> */}
				
				<button onClick={this.addmore.bind(this)} >Add-more </button>
				
				
			</div>
		);
	}
}

Note.defaultProps = {
	txt: "O_O"
}

ReactDOM.render(
	<div>
		<Note/>
		<hr/>
		<Note txt="Freitag"></Note>
	</div>	
	,document.getElementById('root')
);