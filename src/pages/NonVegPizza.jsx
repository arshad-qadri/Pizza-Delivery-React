import React from 'react'
import Navbar from '../components/Navbar';
import Footer from './Footer';

const NonVegPizza = () => {
    const data=[
        {
            id:"1",
            title:"Non Veg Pizza",
            img:"https://i.pinimg.com/474x/29/ea/a5/29eaa5587af385caa9a59f87323c7402.jpg",
            price:"Rs. 210",
            offer:"10% Off",
            mrp:"Rs. 231",
            // buy:"Buy Now",
            // add:"Add Cart",
        },
        {
            id:"2",
            title:"Non Veg Pizza",
            img:"https://i.pinimg.com/474x/29/ea/a5/29eaa5587af385caa9a59f87323c7402.jpg",
            price:"Rs. 210",
            offer:"10% Off",
            mrp:"Rs. 231",
            // buy:"Buy Now",
            // add:"Add Cart",
        },
        {
            id:"3",
            title:"Non Veg Pizza",
            img:"https://i.pinimg.com/474x/29/ea/a5/29eaa5587af385caa9a59f87323c7402.jpg",
            price:"Rs. 210",
            offer:"10% Off",
            mrp:"Rs. 231",
            // buy:"Buy Now",
            // add:"Add Cart",
        },
        {
            id:"4",
            title:"Non Veg Pizza",
            img:"https://i.pinimg.com/474x/29/ea/a5/29eaa5587af385caa9a59f87323c7402.jpg",
            price:"Rs. 210",
            offer:"10% Off",
            mrp:"Rs. 231",
            // buy:"Buy Now",
            // add:"Add Cart",
        },
        {
            id:"5",
            title:"Non Veg Pizza",
            img:"https://i.pinimg.com/474x/29/ea/a5/29eaa5587af385caa9a59f87323c7402.jpg",
            price:"Rs. 210",
            offer:"10% Off",
            mrp:"Rs. 231",
            // buy:"Buy Now",
            // add:"Add Cart",
        },
        {
            id:"6",
            title:"Non Veg Pizza",
            img:"https://i.pinimg.com/474x/29/ea/a5/29eaa5587af385caa9a59f87323c7402.jpg",
            price:"Rs. 210",
            offer:"10% Off",
            mrp:"Rs. 231",
            // buy:"Buy Now",
            // add:"Add Cart",
        },
        {
            id:"7",
            title:"Non Veg Pizza",
            img:"https://i.pinimg.com/474x/29/ea/a5/29eaa5587af385caa9a59f87323c7402.jpg",
            price:"Rs. 210",
            offer:"10% Off",
            mrp:"Rs. 231",
            // buy:"Buy Now",
            // add:"Add Cart",
        },
        {
            id:"8",
            title:"Non Veg Pizza",
            img:"https://i.pinimg.com/474x/29/ea/a5/29eaa5587af385caa9a59f87323c7402.jpg",
            price:"Rs. 210",
            offer:"10% Off",
            mrp:"Rs. 231",
            // buy:"Buy Now",
            // add:"Add Cart",
        },
        {
            id:"9",
            title:"Non Veg Pizza",
            img:"https://i.pinimg.com/474x/29/ea/a5/29eaa5587af385caa9a59f87323c7402.jpg",
            price:"Rs. 210",
            offer:"10% Off",
            mrp:"Rs. 231",
            // buy:"Buy Now",
            // add:"Add Cart",
        },
    ];
    const cart = data.map((val, i)=>{
        return(
            <div className="product" key={data[i].id}>
            <h3>{data[i].title}</h3>
                 <img src={data[i].img} />
                 <div className="price">
                     <p>{data[i].price}</p>
                     <p>{data[i].offer}</p>
                     <p className="strike">{data[i].mrp}</p>
                 </div>
                 <div className="button">
                     <button className="buy">Buy Now</button>
                     <button className="add">Add Cart</button>
                 </div>
        </div>
        );
        
    })
    return (
        <>
       <Navbar/>
         <div className="vegpizza">
             
                 {cart}
             
         </div>  
         <Footer/> 
        </>
    )
}

export default NonVegPizza;
