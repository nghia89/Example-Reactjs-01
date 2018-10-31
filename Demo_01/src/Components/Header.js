import React,{Component} from 'react';

class Header extends Component{
	
	render(){
		return(
			<nav className="navbar navbar-inverse">
				<div className="container-fluid">
					<a className="navbar-brand" >Home</a>
					<ul className="nav navbar-nav">
						<li className="active">
							<a>Product</a>
						</li>
					</ul>
				</div>
			</nav>
			);
	}
}
export default Header;