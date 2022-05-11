import React from 'react';
import { Link } from 'react-router-dom';
import ClientReview from '../component/ClientReview/ClientReview';
// import ClientReview from '../Component/ClientReview/ClientReview';
// import Service from '../Component/Service/Service';

// import ClientReview from '../component/ClientReview/ClientReview<FontAwesomeIcon icon="fa-brands fa-facebook-f" />'
import Service from '../component/Service/Service';
import banner from "../Images/person.png"
import "../Style/Home.css"

const Home = () => {
    return (
        <div className=''>
            <div className="banner py-5">
                <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5 d-flex align-items-center justify-content-center">
                        <div className="p-3 text-center" data-aos="fade-right" data-aos-duration="700">
                            <h1 className=' text-info'>for a better life</h1>
                            <h1 className='fw-bold text-primary display-4'>Yoga Is The Best Journey To Self</h1>
                            <p className='fw-bold my-3'>Welcome to yoga master. This is Anny Lee. I'm your spiritual yoga master. I'm your Personal trainer Who has that Extra Educational will have more Knowledge and tools to help you..!</p>
                            <div className="d-flex align-items-center justify-content-center mt-4">
                                <Link to='/checkout' className='btn fw-bold btn-outline-primary border-3 rounded-pill me-3'>JOIN NOW</Link>
                                <Link to='/checkout' className='btn fw-bold btn-outline-primary border-3 rounded-pill'>VIEW MORE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="p-2" data-aos="fade-left" data-aos-duration="800">
                            <img src={banner} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="service-section my-5 ">
                <h3 className='my-5 fw-bold text-primary text-center'>MY BEST CLASSES..!</h3>
                <div className="container">
                <Service></Service>
                </div>
            </div>

            <div className="client-review my-5">
                <h3 className='my-5 fw-bold text-primary text-center'>PEOPLES REVIEW..!</h3>
                <div className="container">
                    <ClientReview></ClientReview>
                </div>
            </div>
        </div>
    );
};

export default Home;