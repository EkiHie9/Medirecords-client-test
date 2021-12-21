import React,{useState} from 'react'
import {Row , Col , Card,Container} from 'reactstrap'
import Input from '../../components/Input';
import { useDebounce, useDidUpdateEffect } from '../../helpers/hook'
const Home = (props) => {
    const [array, setArray] = useState()
    const [buffering, setBuffering] = useState(false)
    const [double, setDouble] = useState()
    const debouncedSearchVal = useDebounce(array, 500);


    useDidUpdateEffect(()=>{
        setBuffering(true)
        const split = array.split(',')
        let result = []
        for(var i = 0; i < split.length ; i++){
            result = [...result , split[i] * 2]
        }
        setDouble(result)
        setTimeout(()=>{
            setBuffering(false)
        },1000)
    },[debouncedSearchVal])

    if(buffering){
        return <h3>Calculating... (please input by using comma)</h3>
    }

  return (
    <Container>
        <h1>Medirecords Front end Code Challenge</h1>
        <Row>
            <Col><Input title={'Input'} value={array} inputHandleChange={(e)=> setArray(e.target.value)} label="array" placeholder="masukkan array dengan koma" /></Col>
            <Col><Input title={'Output'} value={double} label="Double" placeholder="Hasil Double" /></Col>
        </Row>
    </Container>
  );
}

export default Home;
