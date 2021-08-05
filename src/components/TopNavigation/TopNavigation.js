import React, {Component, Fragment} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import NavLogo from '../../asset/images/navlogo.png'
class TopNavigation extends Component{
	constructor(){
		super()
		this.state = {
			navBarTitle : 'navTitle',
			navBarLogo  : [NavLogo],
			navVariant  : 'dark',
			navBarBack  :  'navBackground',
			navBarItem  : 'navItem',
			imgColor    : '',
			nameColor	: 'text-danger'

		}
	}
	onScroll=()=>{
		if(window.scrollY > 100){
			this.setState({navVariant : 'light', navBarTitle : 'navTitleScroll', navBarLogo : [NavLogo], imgColor: 'text-white', nameColor: 'text-primary', navBarBack : 'navBackgroundScroll', navBarItem : 'navItemScroll'})
		}
		else if(window.scrollY < 100){
			this.setState({navVariant : 'dark', navBarTitle : 'navTitle', navBarLogo : [NavLogo], imgColor: '', nameColor: 'text-danger', navBarBack : 'navBackground', navBarItem : 'navItem'})
		}
	}
	componentDidMount(){
		window.addEventListener('scroll', this.onScroll)
	}
	render(){
		return(
			<Fragment>
				 <title>{this.props.title}</title>
				 <Navbar className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg" variant={this.state.navVariant}>
                    <Navbar.Brand className={this.state.navBarTitle}><NavLink exact to="/"><img className={this.state.imgColor} height="80px" width="80px" src={this.state.navBarLogo}/></NavLink><span className={this.state.nameColor}>Md Anwar Hossain</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link><NavLink exact activeStyle={{color: 'red'}} to="/" className={this.state.navBarItem}>HOME</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color: 'red'}} to="services" className={this.state.navBarItem}>SERVICES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color: 'red'}} to="/courses" className={this.state.navBarItem}>COURSES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color: 'red'}} to="/portfolio" className={this.state.navBarItem} >PORTFOLIO</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color: 'red'}} to="/contact" className={this.state.navBarItem} >CONTACT</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color: 'red'}} to="/about" className={this.state.navBarItem} >ABOUT</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
			</Fragment>
			);
	}

}
export default TopNavigation;