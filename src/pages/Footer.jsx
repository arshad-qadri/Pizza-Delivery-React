import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="contact_D">
                <p>
                <span> Name</span>
                
                 <span className="span1">-</span> <span>Foodhub</span>
                 </p>

                <p> 
                <span> Address</span>
                <span className="span2">-</span> 
                <span>Anant Nagar, Tinbatti, Visar Chowk, Delhi</span>
                 </p>

                <p>
                <span>Contact Number</span>
                <span className="span3">-</span>
                <span>+91-9876543210</span>
                 </p>

            </div>
            <div className="social_icon">
            <i className="fab fa-whatsapp"></i>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            </div>
            <div className="copyright">Copyright@Foodhub<br/>All Rights Are Reserved</div>
        </div>
    )
}

export default Footer
