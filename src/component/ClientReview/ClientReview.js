import React from 'react';
import useService from '../../Hooks/useService';
import "./ClientReview.css"
import {FaStar} from "react-icons/fa"

const ClientReview = () => {
    const [service] = useService();
    const clientReview = service.filter(item => item.type.includes("review"));
    return (
        <div className='review'>
            {
                clientReview.map(i => <div>
                    <div data-aos="zoom-in-up" data-aos-duration="800" className="review-item h-100">
                        <div className="img">
                            <img src={i.img} className="img-fluid" alt="" />
                        </div>
                        <div className="">
                            <h4 className='mt-3'>{i.name}</h4>
                            <div className="">
                                {
                                    i.rating.map(stare => <FaStar className='mx-1' color='red'></FaStar>)
                                }
                            </div>
                            <p className='my-3'>{i.title}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ClientReview;