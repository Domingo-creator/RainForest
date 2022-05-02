import React from 'react'

export const formatPrice = (price) => {
    let priceArray = price.toString().split('.')
    if(priceArray.length === 1) priceArray.push('00');
    return (
        <div className="product-price">
            <p className="product-price-dollar-symbol">$</p>
            <p className="product-price-dollars">{priceArray[0]}</p>
            <p className="product-price-cents">{priceArray[1]}</p>
        </div>
    )
}

export const formatCartPrice = (price) => {
    let priceArray = price.toString().split('.')
    if(priceArray.length === 1) priceArray.push('00');
    return (
        <div className="product-price">
            <p className="cart-item-price">$</p>
            <p className="cart-item-price">{priceArray[0]}.</p>
            <p className="cart-item-price">{priceArray[1]}</p>
        </div>
    )
}

export const formatCheckoutPrice = (price) => {
    let priceArray = price.toString().split('.')
    if(priceArray.length === 1) priceArray.push('00');
    return (
        <div className="product-price">
            <p className="cart-checkout-price">$</p>
            <p className="cart-checkout-price">{priceArray[0]}.</p>
            <p className="cart-checkout-price">{priceArray[1]}</p>
        </div>
    )
}

export const getNextDeliveryTime = () => {
    let deliveryTime = new Date
    deliveryTime.getMinutes()
    return `${deliveryTime.getHours() % 12} hours, ${60 - deliveryTime.getMinutes()} minutes`
}

export const formatDeliveryDateShort = (product, deliveryDelay = product.id * 5 % 3 + 1) => {
    let deliveryDate = new Date
    deliveryDate.setDate(deliveryDate.getDate() + deliveryDelay)
    deliveryDate = deliveryDate.toDateString().split(' ')
    deliveryDelay === 1 ? deliveryDate[0] = 'Tomorrow' : deliveryDelay === 0 ? deliveryDate[0] = 'Today' : null;
    deliveryDate[0] += ','
    return deliveryDate.slice(0, 3).join(' ') 
}

export const formatDeliveryDateLong = (product, deliveryDelay = product.id * 5 % 3 + 1) => {
    let deliveryDate = new Date
    deliveryDate.setDate(deliveryDate.getDate() + deliveryDelay)
    deliveryDate = deliveryDate.toDateString().split(' ')
    deliveryDelay === 1 ? deliveryDate[0] = 'Tomorrow' : deliveryDelay === 0 ? deliveryDate[0] = 'Today' : null;
    deliveryDate[0] = getVerboseDay(deliveryDate[0])
    deliveryDate[1] = getVerboseMonth(deliveryDate[1])
    deliveryDate[0] += ','
    return deliveryDate.slice(0, 3).join(' ') 
}

export const formatDeliveryDateWithYear = (product, deliveryDelay = product.id * 5 % 3 + 1) => {
    let deliveryDate = new Date
    deliveryDate.setDate(deliveryDate.getDate() + deliveryDelay)
    deliveryDate = deliveryDate.toDateString().split(' ')
    deliveryDate[1] = getVerboseMonth(deliveryDate[1])
    deliveryDate[2] += ','
    return deliveryDate.slice(1, 4).join(' ') 
}

const getVerboseDay = (day) => {
    switch(day){
        case 'Sun':
            return 'Sunday';
        case 'Mon':
            return 'Monday';
        case 'Tue': 
            return 'Tuesday';
        case 'Wed':
            return 'Wednesday';
        case 'Thu':
            return 'Thursday';
        case 'Fri':
            return 'Friday';
        case 'Sat':
            return 'Saturday';
        default:
            return day;
    }
}

const getVerboseMonth = (month) => {
    switch(month) {
        case 'Jan':
            return 'January'
        case 'Feb':
            return 'February'
        case 'Mar':
            return 'March'
        case 'Apr':
            return 'April'
        case 'May':
            return 'May'
        case 'Jun':
            return 'June'
        case 'Jul':
            return 'July'
        case 'Aug':
            return 'August'
        case 'Sep':
            return 'September'
        case 'Oct':
            return 'October'
        case 'Nov':
            return 'November'
        case 'Dec':
            return 'December'
        default:
            return month
    }
}

