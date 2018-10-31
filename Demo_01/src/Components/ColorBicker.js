import React,{Component}from 'react'

class ColorBicker extends Component{

	constructor(props){
		super(props);
		this.state={
			colors:['red','blue','green','#ccc']
		};
	}
	showColor(color){
			return{
				backgroundColor : color,
			};
	}
	setActive(color)
	{
		this.props.onReceiveColor(color);
	}

	render(){
		var elmColors= this.state.colors.map((color,index) => {
			return <span key={index}
			 style={ this.showColor(color) }
			 className={this.props.color===color?'Active':''}
			 onClick={ () => this.setActive(color)}>
			</span>
		});
		return(
			  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                 <div className="panel panel-primary">
                   <div className="panel-heading">
                     <h3>Color Bicker</h3>
                   </div>
                   <div className="panel-body">
                    {elmColors}
                    <hr/>
                   </div>
                 </div>
              </div>
			);
	}
}
export default ColorBicker;