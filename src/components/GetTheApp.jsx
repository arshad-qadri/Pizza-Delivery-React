import React from 'react'

const GetTheApp = () => {
    return (
        <>
           <div className="gettheapp">
               <div className="left">
                   <img src="https://freepngimg.com/thumb/samsung_mobile_phone/5-2-samsung-mobile-phone-png-hd-thumb.png" alt="img"/>
               </div>
               <div className="right">
                   <h1>Get The Foodhub App</h1>
                   <p>We will send you a link, open it on your phone to download the app </p>
                   <input className="radio" type="radio" name="radio"/><label>Email</label>
                   <input className="radio" type="radio" name="radio"/><label>Phone</label>
                   <div className="input"><input type="text" placeholder="Email / Phone"/>
                       <button>Share app link</button>

                       <br/>
                       <br/>
                       <p>Download App From</p>
                       <div> 
                       <img src="https://b.zmtcdn.com/images/online_ordering/app-store.png?output-format=webp" />
                       <img src="https://b.zmtcdn.com/images/online_ordering/play-store.png?output-format=webp" />
                        </div>
                   </div>
               </div>
           </div> 
        </>
    )
}

export default GetTheApp;
