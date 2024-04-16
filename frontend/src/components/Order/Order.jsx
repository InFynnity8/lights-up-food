import React, {useState, useEffect} from 'react';
import './Order.css';
import Footer from '../SubComponents/Footer/Footer';
import {menuData} from '../../asserts/menu-data.js';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const getDefaultCart = () =>{
    let cart = {}
    for (let i=0; i < menuData.length; i++){
        cart[i] = 0
    }
    return cart;
} 

const Order = () => {
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
    

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    const [okro, setOkro] = useState(0);
    const [beans, setBeans] = useState(0);
    const [quantity, setQuantity] = useState(getDefaultCart());
    const [totalAmount, setTotalAmount] = useState(getTotalCartAmount());
    const [grossAmount, setGrossAmount] = useState(0);
    const navigate = useNavigate();

    useEffect(()=>{
        setTotalAmount(getTotalCartAmount());
        setGrossAmount(totalAmount + okro + beans)
    }, [okro, beans, quantity, totalAmount, grossAmount])

    const increment = (itemId) => {
        setQuantity((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const decrement = (itemId) => {
        setQuantity((prev) => ({...prev, [itemId]: prev[itemId] > 0? (prev[itemId] - 1):(prev[itemId] = 0)}))
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {const response = await axios.post('http://localhost:5000/order', {name, phoneNumber, location, quantity, totalAmount,okro,beans, grossAmount})
        alert(response.data)  }  
        catch (error) {
            console.log(error)
        } 
    }

    return(
        <div className="order-page">
        <div className="order">
                <div className='set1'>
                    <button type='button' className='back-btn' onClick={()=>navigate(-1)}><i class="ri-arrow-left-line"></i> Back</button>
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

                                                <input type='checkbox' name={dish.title} className="checker"
                                                onFocus={()=>{quantity[index] === 0? setQuantity((prev) => ({...prev, [index]: Number(1)})): 
                                                setQuantity(quantity)} }/>

                                                <label className='img-description' htmlFor={dish.title}>
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
                                                        onChange={(e)=>{setQuantity((prev) => ({...prev, [index]: !isNaN(e.target.value) ? Number(e.target.value) : alert("Enter a valid quantity")}))}}/>
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
                                    <label className='okro' htmlFor="Okro">
                                        <h6>Okro Stew</h6>
                                        <input value={okro} type='number' placeholder='Gh₵' style={{paddingLeft:'10px'}}
                                        onChange= {(e) => { (!isNaN(e.target.value) && e.target.value >= 3) || (e.target.value === 0)? setOkro(Number(e.target.value)): setOkro(3)}}/>
                                    </label>
                                </div>
                                <div className='item2'>
                                    <input type='checkbox' name="Beans" className="checker"/>
                                    <label className='beans' htmlFor="Beans">
                                        <h6>Beans</h6>
                                        <input value={beans} type='number' placeholder='Gh₵' style={{paddingLeft:'10px'}}
                                        onChange= {(e) => { (!isNaN(e.target.value) && e.target.value >= 3) || (e.target.value === 0)? setBeans(Number(e.target.value)): setBeans(3)}}/>
                                    </label>
                                </div>
                                <p style={{marginTop: '10px', fontStyle: 'italic',  color: 'grey', fontSize:'14px', marginLeft:'30px'}}>NB: Okro and Beans price start from ₵3.00</p>
                                        
                            </div>
                        
                        </form>
                        
                        <div className="recipient-details">
                            <h2>Recipient Details</h2>
                            <form onSubmit={handleSubmit}>
                                <input type='text' placeholder="Name" required="true" value={name} 
                                onChange={(e)=> {setName(e.target.value)}}/>
                                <input type='text' placeholder="Phone Number" required="true" value={phoneNumber} 
                                onChange={(e)=> {setPhoneNumber(e.target.value)}}/>
                                <input type='text' placeholder="Location" required="true" value={location} 
                                onChange={(e)=> {setLocation(e.target.value)}}/>
                                <p id='prompt'>Please confirm your order before making payment</p>
                                <div className="make-payment">
                                    <div className='enti-price'>
                                        <div className='entities '>
                                            <p style={{color:'grey'}}>Main Dish(es)</p>
                                            <p style={{color:'grey'}}>Extras</p>
                                            <p>Total</p>
                                        </div>      
                                        <div className='gross-price '>
                                            <p style={{color:'grey'}}>{'Gh₵ ' + totalAmount }</p>
                                            <p style={{color:'grey'}}>Gh₵ {isNaN(okro) && isNaN(beans)? 0 : (okro + beans)} </p>
                                            <p>Gh₵ {isNaN(okro) && isNaN(beans)? 0 : (okro + beans + totalAmount) }</p>
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