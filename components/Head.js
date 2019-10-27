import React, {useState} from 'react'
import Head from 'next/head'
import '../css/bootstrap.min.css'
import '../css/index.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col,
    ListGroup,
    ListGroupItem, Container
} from 'reactstrap'
function Headx({title, children}) {
    const [collapsed, setCollapsed] = useState(false)
    const routerx = useRouter();

    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <Navbar color="light" light expand="xl" fixed="top" style={{'boxShadow': '0px 3px 6px #00000029'}}>
                <Container>
                <NavbarBrand href="/"><span style={{paddingTop:'10px',margin:'8px 7px',color:'#d80d0d',fontSize:'20px',fontWeight:'900'}}>CoolAsciFaces</span></NavbarBrand>
                <NavbarToggler onClick={ () => setCollapsed(!collapsed)} />
                <Collapse isOpen={collapsed} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                       <NavLink style={{fontWeight:'700'}} href="/categories" className={routerx.pathname.includes('categories') ? 'active':''}> Categories</NavLink>
                    </NavItem>
                    <NavItem>
                       <NavLink style={{fontWeight:'700'}} href="/notification" className={routerx.pathname == '/notification' ? 'active':''}> Notification</NavLink>
                    </NavItem>
                    <NavItem>
                       <NavLink style={{fontWeight:'700'}} href="/login" className={routerx.pathname == '/login' ? 'active':''}> Login/SignUp</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{fontWeight:'700'}} href="/help" className={routerx.pathname == '/help' ? 'active':''}> Help</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
                </Container>
            </Navbar>
            
                    {children}         
        </React.Fragment>

    )
}

export default Headx
