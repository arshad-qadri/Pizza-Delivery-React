import React from "react";

const Prices = () => {
  const data=[
    {
        id:"1",
        name:"Arshad Qadri",
        img:"https://arshadportfolio.ml/img/arshad.jpg",
        work:"Web Developer",
       
    },
    {
        id:"2",
        name:"Arshad Qadri",
        img:"https://arshadportfolio.ml/img/arshad.jpg",
        work:"Web Developer",
       
    },
    {
        id:"3",
        name:"Arshad Qadri",
        img:"https://arshadportfolio.ml/img/arshad.jpg",
        work:"Web Developer",
       
    },
    {
        id:"4",
        name:"Arshad Qadri",
        img:"https://arshadportfolio.ml/img/arshad.jpg",
        work:"Web Developer",
       
    },
    {
        id:"5",
        name:"Arshad Qadri",
        img:"https://arshadportfolio.ml/img/arshad.jpg",
        work:"Web Developer",
       
    },
    {
        id:"6",
        name:"Arshad Qadri",
        img:"https://arshadportfolio.ml/img/arshad.jpg",
        work:"Web Developer",
       
    },
    
  ];
  const cart = data.map((val, i)=>{
    return(
      <div className="price" style={{margin:'0 20px'}} >
      <div className="price__img">
        <img src={data[i].img} alt="pizza" style={{borderRadius:"20px"}} />
      </div>
      <h1 className="price__heading">{data[i].name}</h1>
      <p className="price__text">
      {data[i].work}
      </p>
     
    </div>
    );
    
})
  return (
    <div className="prices bg-light">
      <div className="container">
      <div className="text-center"> <h1>Team Members</h1></div>
        <div className="row ">
          <div className="g-5" style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
           {cart}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
