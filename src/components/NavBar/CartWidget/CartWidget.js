import React from "react";
import './CartWidget.css'

const CartWidget = ({qtty}) => {
    // 
    return (
        <div className='cart'>
            <a className='btn btn-warning' href="#"><ion-icon name="cart-outline"></ion-icon></a>
            {qtty ? <p className='qtty'>{qtty}</p> : null }
        </div>
    )

}

export default CartWidget;
