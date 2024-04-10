import React, {useState} from 'react';
import './Order.css';
import Footer from '../SubComponents/Footer/Footer';
import Dishes from '../../asserts/menu-data.json';



const Order = () => {

    const [dishes, setDishes] = useState();
    const [extras, setExtras] = useState();
    const [total, setTotal] = useState();


    return(
        <div className="order-page">
        <div className="order">
                <div className='set1'>
                    <button type='button' className='back-btn' >Back</button>
                    <h1 className="ready-head">Ready to Take  
                    <span style={{ fontFamily: 'Ojuju',  color: 'red'}}> your Order!</span> </h1>
                </div>

                <div className='set2'>
                        <form className="manage-orders">
                            <div className='main-dishes'>
                                {
                                    Dishes.map( (dish, index) => {
                                        return(
                                            <div className='dish' key={index}>

                                                <input type='checkbox' name={dish.title}/>

                                                <label className='img-description' for={dish.title}>
                                                    <div className='dish-img'>
                                                        <img src={dish.image} alt=""/>
                                                    </div>
                                                    <div className='dish-description'>
                                                        <h5>{dish.title}</h5>
                                                        <p>{dish.description}</p>
                                                    </div>
                                                </label>

                                                <div className='dish-price-quantity'>
                                                    <p className='dish-price'>{dish.price}</p>
                                                    <div className='dish-quantity'>
                                                        <button type='button' className='minus-btn'>-</button>
                                                        <p className='dish-quantity'></p>
                                                        <button type='button' className='plus-btn'>+</button>
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='extras'>
                                <h2>Extras</h2>
                            
                            </div>
                        
                        </form>
                        
                        <div className="recipient-details">
                            <h2>Recipient Details</h2>
                            <form>
                                <input type='text' placeholder="Name"></input>
                                <input type='text' placeholder="Phone Number"></input>
                                <input type='text' placeholder="Location"></input>
                                <p id='prompt'>Please confirm your order before making payment</p>
                                <div className="make-payment">
                                    <div className='enti-price'>
                                        <div className='entities '>
                                            <p style={{color:'grey'}}>Main Dish(es)</p>
                                            <p style={{color:'grey'}}>Extras</p>
                                            <p>Total</p>
                                        </div>      
                                        <div className='gross-price '>
                                            <p style={{color:'grey'}}>{'Gh₵ ' + dishes }</p>
                                            <p style={{color:'grey'}}>{'Gh₵ ' + extras }</p>
                                            <p>{'Gh₵ ' + total }</p>
                                        </div>
                                    </div>
                                    <button type="submit" className='pay col-12' >Make Payment</button>
                                </div>
                            </form>
                            
                        </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};


export default Order;