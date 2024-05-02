import React from 'react';
import './home/page.css';
import Header from './header/page';
export default function Home() {

  // const [data,setData]=useState('');

  return (
    <>
      <Header />
      <div className='container1 sm:scale-0'>
        <img src="/images/Group 8429.png" className='p1' alt="" />
        <img src="/images/Ellipse 44.png" className='p2' alt="" />
        <img src="/images/Group 8433.png" className='p3' alt="" />
        <img src="/images/Group 8476.png" className='p4' alt="" />
        <img src="/images/Group 8477.png" className='p5' alt="" />
        <img src="/images/Decore.png" className='p6' alt="" />
        <img src="/images/Group 8438.png" alt="" />
        <div className="box">
          <img src="/images/pngfind 1.png" className='m1' alt="" />
          <img src="/images/Meal-PNG-Download-Image 2.png" className='m2' alt="" />
          <img src="/images/Meal-PNG-Download-Image 1.png" className='m3' alt="" />
          <img src="/images/t4gag1e6fmeokhs7mt3g58vhbt 1.png" className='m4' alt="" />
        </div>
        <div className="dist">
          <h2>We're <span>Serious</span> For <span>Food</span></h2>
          <p>Best cooks and best delivery guys all at your service.Hot tasty food will reach you in 60 miniutes.</p>
        </div>
        <div className="btn">
          <li><a href="">Login</a></li>
          <img src="/images/play Demo.png" alt="" />
        </div>
        <h2>home page</h2>
      </div>
      <div className="container2">
        <img src="/images/Group.png" className='p1' alt="" />
        <h2>Today <span>Special</span> Offer</h2>
        <p>AI in the food industry involves the use of artificial intelligence technologies like data analytics and machine learning. </p>
        <div className="items">
          <div className="item">
            <img src="/images/Group 8449.png" alt="" />
            <div className="dis">
              <h2>Kebab</h2>
              <p>This is a list of kebab dishes from around the world. Kebabs are various cooked meat dishes,</p>
              <a href="" id="btn">Check</a>
            </div>
          </div>
          <div className="item">
            <img src="/images/Group 8449.png" alt="" />
            <div className="dis">
              <h2>Kebab</h2>
              <p>This is a list of kebab dishes from around the world. Kebabs are various cooked meat dishes,</p>
              <a href="" id="btn">Check</a>
            </div>
          </div>
          <div className="item">
            <img src="/images/Group 8449.png" alt="" />
            <div className="dis">
              <h2>Kebab</h2>
              <p>This is a list of kebab dishes from around the world. Kebabs are various cooked meat dishes,</p>
              <a href="" id="btn">Check</a>
            </div>
          </div>

        </div>
      </div>
      <div className="container3">
        <img src="/images/Group 84771.png" className='r2' alt="" />
        <img src="/images/rosemary.png" className='r1' alt="" />
        <img src="/images/Group 8478.png" className='r3' alt="" />
        <a href="" id="btn">About Us</a>
      </div>
    </>
  )
}
