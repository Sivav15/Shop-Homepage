import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import ReactStars from "react-rating-stars-component";
import Mobile from './images/phone.jpg';


function App() {
  let [cartValue, setCartValue] = useState(0);
  let [toggle1, setToggle1] = useState(true);
  let [toggle2, setToggle2] = useState(true);
  let [toggle3, setToggle3] = useState(true);
  let [toggle4, setToggle4] = useState(true);
  let [toggle5, setToggle5] = useState(true);
  let [toggle6, setToggle6] = useState(true);
  let [toggle7, setToggle7] = useState(true);
  let [toggle8, setToggle8] = useState(true);

  return (
    <div>
      <Navbar cart={{ cartValue: cartValue }} />
      <Header />

      <section className="py-5">

        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">
                
                {/* <!-- Product image--> */}
                <img className="card-img-top" src={Mobile} alt="..." />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">APPLE iPhone 12 (Green, 128 GB)</h5>
                    
                    {/* <!-- Product price--> */}
                    Rs: 59,999/-
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">{toggle1? <button className="btn btn-outline-dark mt-auto" href="#!" onClick={() => {
                    setCartValue(cartValue + 1)
                    setToggle1(false);

                  }} >Add to cart</button> : <button className="btn btn-outline-dark mt-auto" href="#!" onClick={() => {
                    setCartValue(cartValue - 1);
                    setToggle1(true);

                  }}>Remove</button>}</div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute icon">Sale</div>
                {/* <!-- Product image--> */}
                <img className="card-img-top" src={Mobile} alt="..." />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">APPLE iPhone 11 (Black, 128 GB)</h5>
                    <div className='d-flex flex-row justify-content-center'>
                      <div>
                        <ReactStars size={30} />
                      </div>
                    </div>
                    {/* <!-- Product price--> */}
                    Rs: 46,999/-
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">{toggle2? <button className="btn btn-outline-dark mt-auto" href="#!" onClick={() => {
                    setCartValue(cartValue + 1)
                    setToggle2(false);

                  }} >Add to cart</button> : <button className="btn btn-outline-dark mt-auto" href="#!" onClick={() => {
                    setCartValue(cartValue - 1);
                    setToggle2(true);

                  }}>Remove</button>}</div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute icon">Sale</div>
                {/* <!-- Product image--> */}
                <img className="card-img-top" src={Mobile} alt="..." />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">APPLE iPhone 11 Pro</h5>
                   
                    {/* <!-- Product price--> */}
                    Rs: 1,40,300/-
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">{toggle3?<button className="btn btn-outline-dark mt-auto" href="#!" onClick={() => {
                    setCartValue(cartValue + 1)
                    setToggle3(false);

                  }} >Add to cart</button> : <button className="btn btn-outline-dark mt-auto" href="#!" onClick={() => {
                    setCartValue(cartValue - 1);
                    setToggle3(true);

                  }}>Remove</button>}</div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
               
                {/* <!-- Product image--> */}
                <img className="card-img-top" src={Mobile} alt="..." />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">APPLE iPhone 12 Pro (Gold, 512 GB)</h5>
                    <div className='d-flex flex-row justify-content-center'>
                      <div>
                        <ReactStars size={30} />
                      </div>
                    </div>
                    {/* <!-- Product price--> */}
                    Rs: 1,39,900/-
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">{toggle4 ? <button className="btn btn-outline-dark mt-auto" href="#!" onClick={() => {
                    setCartValue(cartValue + 1)
                    setToggle4(false);

                  }} >Add to cart</button> : <button className="btn btn-outline-dark mt-auto" href="#!" onClick={() => {
                    setCartValue(cartValue - 1);
                    setToggle4(true);

                  }}>Remove</button>}</div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute icon">Sale</div>
                {/* <!-- Product image--> */}
                <img className="card-img-top" src={Mobile} alt="..." />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">APPLE iPhone 13 (Green, 128 GB)</h5>
                   
                    {/* <!-- Product price--> */}
                    Rs: 73,999/-
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">{toggle5 ? <button className="btn btn-outline-dark mt-auto" href="#!" onClick={() => {
                    setCartValue(cartValue + 1)
                    setToggle5(false);

                  }} >Add to cart</button> : <button className="btn btn-outline-dark mt-auto" href="#!" onClick={() => {
                    setCartValue(cartValue - 1);
                    setToggle5(true);

                  }}>Remove</button>}</div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
               
                {/* <!-- Product image--> */}
                <img className="card-img-top" src={Mobile} alt="..." />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">APPLE iPhone 13 Pro (Silver, 1 TB)</h5>
                   
                    {/* <!-- Product price--> */}
                    Rs: 1,69,900/-
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">{toggle6 ? <button className="btn btn-outline-dark mt-auto" href="#!" onClick={() => {
                    setCartValue(cartValue + 1)
                    setToggle6(false);

                  }} >Add to cart</button> : <button className="btn btn-outline-dark mt-auto" href="#!" onClick={() => {
                    setCartValue(cartValue - 1);
                    setToggle6(true);

                  }}>Remove</button>}</div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
              <div className="badge bg-dark text-white position-absolute icon">Sale</div>
                {/* <!-- Product image--> */}
                <img className="card-img-top" src={Mobile} alt="..." />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">APPLE iPhone 13 Pro Max (Alpine Green, 256 GB)</h5>
                    <div className='d-flex flex-row justify-content-center'>
                      <div>
                        <ReactStars size={30} />
                      </div>
                    </div>
                    {/* <!-- Product price--> */}
                    Rs: 1,39,900/-
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">{toggle7 ? <button className="btn btn-outline-dark mt-auto" href="#!" onClick={() => {
                    setCartValue(cartValue + 1)
                    setToggle7(false);

                  }} >Add to cart</button> : <button className="btn btn-outline-dark mt-auto" href="#!" onClick={() => {
                    setCartValue(cartValue - 1);
                    setToggle7(true);

                  }}>Remove</button>}</div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
        
                {/* <!-- Product image--> */}
                <img className="card-img-top" src={Mobile} alt="..." />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">APPLE iPhone 12 Pro Max (Pacific Blue, 512 GB)</h5>
                    <div className='d-flex flex-row justify-content-center'>
                      <div>
                        <ReactStars size={30} />
                      </div>
                    </div>
                    {/* <!-- Product price--> */}
                    Rs: 1,49,900/-
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">{toggle8 ? <button className="btn btn-outline-dark mt-auto" href="#!" onClick={() => {
                    setCartValue(cartValue + 1)
                    setToggle8(false);

                  }} >Add to cart</button> : <button className="btn btn-outline-dark mt-auto" href="#!" onClick={() => {
                    setCartValue(cartValue - 1);
                    setToggle8(true);

                  }}>Remove</button>}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
