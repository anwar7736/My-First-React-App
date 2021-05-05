import React, {Component, Fragment} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import whiteLogo from '../../asset/images/navlogo.svg'
import blueLogo from '../../asset/images/navlogoScroll.svg'
class TopNavigation extends Component{
	constructor(){
		super()
		this.state = {
			navBarTitle : 'navTitle',
			navBarLogo  : [whiteLogo],
			navVariant  : 'dark',
			navBarBack  :  'navBackground',
			navBarItem  : 'navItem',

		}
	}
	onScroll=()=>{
		if(window.scrollY > 100){
			this.setState({navVariant : 'light', navBarTitle : 'navTitleScroll', navBarLogo : [blueLogo], navBarBack : 'navBackgroundScroll', navBarItem : 'navItemScroll'})
		}
		else if(window.scrollY < 100){
			this.setState({navVariant : 'dark', navBarTitle : 'navTitle', navBarLogo : [whiteLogo], navBarBack : 'navBackground', navBarItem : 'navItem'})
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
                    <Navbar.Brand className={this.state.navBarTitle}><NavLink exact to="/"><img src={this.state.navBarLogo}/></NavLink> Anwar Hossain</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link><NavLink exact activeStyle={{color: '#0073E6'}} to="/" className={this.state.navBarItem}>HOME</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color: '#0073E6'}} to="services" className={this.state.navBarItem}>SERVICES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color: '#0073E6'}} to="/courses" className={this.state.navBarItem}>COURSES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color: '#0073E6'}} to="/portfolio" className={this.state.navBarItem} >PORTFOLIO</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color: '#0073E6'}} to="/contact" className={this.state.navBarItem} >CONTACT</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color: '#0073E6'}} to="/about" className={this.state.navBarItem} >ABOUT</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
			</Fragment>
			);
	}

}
export default TopNavigation;