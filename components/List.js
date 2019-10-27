import React, {useContext, useState, useEffect} from 'react'
import ApiContext from '../context/ApiContext'
import {
    Row,
    Col,
    Card, CardText, CardBody,
    CardTitle,
    FormGroup,CardImg, Input, Pagination, PaginationItem, PaginationLink
} from 'reactstrap'

function List() {
    const {list, setlist} = useContext(ApiContext)
    const [listing, setlisting] = useState([]);
    const [fetchData, setfetchData] = useState(false);
    const [limit, setlimit] = useState(1)
    const [stopscroll, setstopscroll] = useState(false)
    const [page, setpage] = useState(1)
    const [type, settype] = useState(null)
    const [randomNumber, setrandomNumber] = useState(Math.floor(Math.random()*1000))

    useEffect(() => {
        if (list) {
            let x = list;
            x = x.slice(0,20)
            setlisting(x)
        }
    }, [list])

    useEffect(() => {
        if (!fetchData) return;
        console.log(listing)
        let x = Math.floor(Math.random()*1000)
        if (x != randomNumber) {
            setrandomNumber(x)
        }else{
            setrandomNumber(Math.floor(Math.random()*1000))
        }
        fetchMoreListItems(20);
    }, [fetchData]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop >= 100 + document.documentElement.offsetHeight || fetchData){ //set top 100px
            setfetchData(true);
        }
    }

    const fetchMoreListItems = (q) => {
        setTimeout(() => {
            console.log(limit)
            let l = listing.length;
            let x = list;
            let y = q 
            let z = limit * 20
            x = x.slice(z,z + 20)
            let ads = [{
                random:randomNumber
            }]
            if (x.length == 0){
                setstopscroll(true)
            }else{
                setlisting(prevState => [...prevState,...ads,...x]);
                setfetchData(false);
                setlimit((x) => x+1)
            };
            
        }, 2000);
    }
    
    useEffect(() => {
        setlisting([])
        setlist(type, page);
    }, [page])

    const clickType = (typex) =>{
        let type = typex;
        settype(type)
        setlisting([])
        setlist(type, page);
    }
    return (
        <Row>
            <Col sm="12" xs="12" md="12">
            <div style={{float:'left', marginBottom:'10px'}}>
                <FormGroup>
                    <Input type="select" id="selectSort" onChange={(e)=>clickType(e.target.value)}>
                    <option value={null}>Select Sort</option>
                    <option value={'size'}>Sort Size</option>
                    <option value={'price'}>Sort Price</option>
                    <option value={'date'}>Sort Date</option>
                    </Input>
                </FormGroup>
            </div>
            <div style={{float:'right', marginBottom:'10px'}}>
                <Pagination aria-label="Paging">
                    {
                        Array.apply(null, Array(9)).map((v,i) => {
                            let x = i + 1
                            return(
                                <PaginationItem key={i} className={page == x ? 'active':''}>
                                    <PaginationLink  onClick={()=>setpage(x)}>
                                    {x}
                                    </PaginationLink>
                                </PaginationItem>
                            )
                        })
                    }
                    
                </Pagination>
            </div>
            </Col>
        {   
            listing.map((v,i) => {
                let size = `${v.size}px`;
                let cents = v.price / 100
                cents = `$ ${cents.toFixed(2)}`
                let finalDate = null
                let oldDate = new Date(v.date);
                let today = new Date()
                let weekAgo = new Date()
                let week = today.getDate() - 7 ;
                weekAgo.setDate(week)
               
                if (oldDate.getTime() > weekAgo.getTime() && oldDate.getTime() < today.getTime() ) {
                    let diff = ( today.getTime() - oldDate.getTime() ) / (1000 * 3600 * 24);
                    diff = Math.round(diff)
                    finalDate = `${diff} days ago`
                }else{
                    let day = oldDate.getDate();
                    let month = oldDate.getMonth() + 1;
                    let year = oldDate.getFullYear();

                    finalDate = `${day}/${month}/${year}`
                }

                

                return(
                        <Col sm="6" xs="6" md="3" key={i} style={{cursor:'pointer'}} >
                        {
                                
                            i % 21 == 20 ?
                                <React.Fragment>
                                    <Card style={{height:'200px'}} >
                                        <CardBody style={{padding:'10px'}}>
                                            <CardImg top width="100%" height="150px" src={`http://localhost:3001/ads/?r=${v.random}.jpg`} alt="Item Image" />
                                            <CardText style={{position:"absolute",bottom:'20px',color:'#E01A1A',fontSize:'14px', fontWeight:'bold'}}>This is Ads</CardText>
                                        </CardBody>
                                    </Card>
                                </React.Fragment>  
                            :
                                <Card style={{height:'200px'}} >
                                    <CardBody style={{padding:'10px'}}>
                                        <CardTitle style={{fontSize:size,lineHeight:'3',textAlign:'center',letterSpacing:'0',color:'#4d4d4d', fontWeight:'bold'}}>{v.face}</CardTitle>
                                        <CardText style={{position:"absolute",bottom:'20px',color:'#E01A1A',fontSize:'14px', fontWeight:'bold'}}>Size: {size}</CardText>
                                        <CardText style={{position:"absolute",bottom:'3px',color:'#E01A1A',fontSize:'14px', fontWeight:'bold'}}>Price: {cents}</CardText>
                                        <CardText style={{position:"absolute",bottom:'0',color:'#E01A1A',fontSize:'14px', fontWeight:'bold'}}>Date: {finalDate}</CardText>
                                    </CardBody>
                                </Card> 
                                
                        }
                            
                            

                        </Col>
                )
            })
        }
        { stopscroll == false && fetchData && 'Loading....' }
        {listing.length == 0 && 'Loading...'}
        </Row>
    )
}

export default List
