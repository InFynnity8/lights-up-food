import React, {useState} from 'react';
import './Order.css';
import Footer from '../SubComponents/Footer/Footer';
import {menuData} from '../../asserts/menu-data.js';


const getDefaultCart = () =>{
    let cart = {}
    for (let i=0; i < menuData.length; i++){
        cart[i] = 0
    }
    return cart;
} 


 


const Order = () => {

    const [okro, setOkro] = useState();
    const [beans, setBeans] = useState();
    const [quantity, setQuantity] = useState(getDefaultCart());

    const increment = (itemId) => {
        setQuantity((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const decrement = (itemId) => {
        setQuantity((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }


    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for (const item in quantity){
            if(quantity[item]> 0){
               let itemInfo =   menuData.find((dish, index) => index === Number(item));
               totalAmount += quantity[item]  * itemInfo.price 
            }
        }
    
        return totalAmount;
    }

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
                                    menuData.map( (dish, index) => {
                                        return(
                                            <div className='dish' key={index}>

                                                <input type='checkbox' name={dish.title} className="checker"/>

                                                <label className='img-description' for={dish.title}>
                                                    <div className='dish-img'>
                                                        <img src={dish.image} alt=""/>
                                                    </div>
                                                    <div className='dish-description'>
                                                        <h6 style={{ fontFamily: 'Ojuju', fontWeight: '700'}}>{dish.title}</h6>
                                                        <p>{dish.description}</p>
                                                    </div>
                                                </label>

                                                <div className='dish-price-quantity'>
                                                    <p className='dish-price'>-Gh₵{dish.price}</p>
                                                    <div className='dish-counter'>
                                                        <button type='button' className='minus-btn' onClick={() => decrement(index)}>-</button>
                                                        <input className='dish-quantity' value= {quantity[index]} 
                                                        onChange={(e)=>{setQuantity((prev) => ({...prev, [index]: Number(e.target.value)}))}}/>
                                                        <button type='button' className='plus-btn' onClick={() => increment(index)}>+</button>
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='divider'></div>
                            <div className='extras'>
                                <h2>Extras</h2>
                                <div className='item1'>
                                    <input type='checkbox' name="Okro" className="checker"/>
                                    <label className='okro' for="Okro">
                                        <h6>Okro Stew</h6>
                                        <input value={'Gh₵' + okro} type='number' placeholder='Gh₵' style={{paddingLeft:'10px'}}
                                        onChange= {(e) => { setOkro(e.target.value)}}/>
                                    </label>
                                </div>
                                <div className='item2'>
                                    <input type='checkbox' name="Beans" className="checker"/>
                                    <label className='beans' for="Beans">
                                        <h6>Beans</h6>
                                        <input value={beans} type='number' placeholder='Gh₵' style={{paddingLeft:'10px'}}
                                        onChange= {(e) => { setBeans(e.target.value); console.log(e.target.value)}}/>
                                    </label>
                                </div>
                                <p style={{marginTop: '10px', fontStyle: 'italic',  color: 'grey', fontSize:'14px', marginLeft:'30px'}}>NB: Okro and Beans price start from ₵3.00</p>
                                        
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
                                            <p style={{color:'grey'}}>{'Gh₵ ' + getTotalCartAmount() }</p>
                                            <p style={{color:'grey'}}>{'Gh₵ '  }</p>
                                            <p>Gh₵ { getTotalCartAmount() }</p>
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