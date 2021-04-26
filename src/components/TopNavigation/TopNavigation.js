import React, {Component, Fragment} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
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
			navBarItem  : 'navItem'

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
				 <Navbar className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg" variant={this.state.navVariant}>
                    <Navbar.Brand className={this.state.navBarTitle}><img src={this.state.navBarLogo}/> Anwar Hossain</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link className={this.state.navBarItem} href="#deets">HOME</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">SERVICES</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">COURSES</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">PORTFOLIO</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">CONTACT</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">ABOUT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
			</Fragment>
			);
	}

}
export default TopNavigation;