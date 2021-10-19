import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import React,{useState} from 'react'
import Ducts from './Ducts'
import Marquee from "react-fast-marquee";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Pcontainer = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
padding: 10px;
text-align: center;
font-size: 30px;
font-family: 'Alfa Slab One', cursive;
margin:5px
`
const Container = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const ProductCont = styled.div`
padding: 10px;
display: flex;
justify-content: space-around;
background-color: #fff;
max-width:100%;
    flex-direction: row;

img {
  max-width:100%;
  max-height:9rem;
  object-fit: contain;
}

`

const Products = () => {
  const [toggle , setToggle] = useState(false)
  const notify = () => toast.warn('You Opened a Category Underneath');

  const get = (cliked)=>{
    
    const check = cliked !== undefined || null
    setToggle({check , cliked})
    notify()
  }

  const productsCat = popularProducts.map((item , i) => <Product item={item} key={item.id} id={i} get={get}/>)
  
  return (
    <>
   <Marquee speed={50} gradient={false}>
   <Pcontainer>Select Category 🔎</Pcontainer>
   <Pcontainer>Select Category 🔎</Pcontainer>
   <Pcontainer>Select Category 🔎</Pcontainer>
   <Pcontainer>Select Category 🔎</Pcontainer>
   <Pcontainer>Select Category 🔎</Pcontainer>
   </Marquee>
   
      <Container>
      {productsCat}
      </Container>

       {toggle.check && <ProductCont> <Ducts id={toggle}/> </ProductCont>}
</>
  )
};

export default Products;