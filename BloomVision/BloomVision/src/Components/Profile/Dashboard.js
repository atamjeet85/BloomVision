import React from 'react'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
function Dashboard() {
  return (
    <div>
    <div className='img-dashboard'>
        <div className='imgs-container'>
        <img src={img3} alt="image3" className='imgs' />
        <img src={img2} alt="image2" className='imgs' />
        <img src={img4} alt="image4" className='imgs' />
        </div>
        <div className='dashboard-text'>
        <h1 className='text-2xl	'> <b>Create floral arrangement designs</b></h1>
         <h2 className="green	text-xl"><b>free for 1 month</b></h2>
         <br />
         <p>Design floral arrangements with 10 customisable</p>
        <p>  templates and a selection of 80+ seasonal flowers.</p>
        <p> 1 month free then $9.99/month</p>
        <br />
        <p> <b>See Pricing Details</b></p>
        <div>
<button className='rounded-lg w-96 mt-6 items-center	'> 
  Start Free Trial</button></div>
        </div>
        </div>
</div>)}
export default Dashboard;