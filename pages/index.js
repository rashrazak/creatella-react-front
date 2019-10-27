import React, {useContext, useState, useEffect} from 'react'
import ApiContext from '../context/ApiContext'
import Router from 'next/router';
import Headx from '../components/Head'
import '../css/index.css'
import {
    Row,
    Col,
    Container,
    Spinner
} from 'reactstrap'
import List from '../components/List';
function index() {
    const [theList, settheList] = useState([])
    const {list} = useContext(ApiContext)

    useEffect(() => {
        if (list) {
            settheList(list)
        }
        
    }, [list])

    return (
        <Headx title={'Welcome'}>
                
                        {
                            theList && list ?
                                <div id="getScroll" className="get-list" style={{background:'#ffffff',bottom:'30px',position:'relative',top:'100px',height:'100%',padding:'10px 10px', paddingBottom:'60px'}}>
                                    <Container>
                                        
                                        <List />
                                    </Container>
                                </div>
                                    
                            :<Spinner color="danger" />
                        }
                        
        </Headx>
            
    )
}

export default index
