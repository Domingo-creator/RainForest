import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const homepage = () => {
    const [currentBannerIndex, setBannerIndex] = useState(0)
    const [carouselInterval, setCarouselInterval] = useState();
    const bannerSrcUrls = [ <img src="https://rainforest-dev.s3.us-west-1.amazonaws.com/home_page_banner_1.jpg"/>,
                            <Link to="products/34"><img src="https://rainforest-dev.s3.us-west-1.amazonaws.com/home_page_banner_4.jpg"/></Link>
                          ]

    if (!carouselInterval) {
        setCarouselInterval(setInterval( () => setBannerIndex( (currentBannerIndex + 1) % bannerSrcUrls.length ), 15000))
    }

    return (
        <div className="homepage">
            <div className='homepage-banner'>
                {bannerSrcUrls[currentBannerIndex]}
            </div>
            <div className="homepage-list">
                <li>
                    <h1>Control Your Home With Your Voice!</h1>
                    <Link to='products/34'  className='homepage-product-image'><img src="https://rainforest-dev.s3.us-west-1.amazonaws.com/echoDot.jpg" /></Link>
                </li>
                <li>
                    <h1>Play the hottest games</h1>
                    <Link to='products/18' className='homepage-product-image'><img src="https://rainforest-dev.s3.us-west-1.amazonaws.com/eldenRing.jpg" /></Link>
                </li>
                <li>
                    <h1>Stock up on pet supplies</h1>
                    <Link to='products/54' className='homepage-product-image'><img src="https://rainforest-dev.s3.us-west-1.amazonaws.com/catLitter.jpg" /></Link>
                </li>
                <li>
                    <h1>Get the latest TVs</h1>
                    <Link to='products/35' className='homepage-product-image'><img src="https://rainforest-dev.s3.us-west-1.amazonaws.com/lgTv.jpg" /></Link>
                </li>
                <li>
                    <h1>Get in shape for summer!</h1>
                    <Link to='products/60' className='homepage-product-image'><img src="https://rainforest-dev.s3.us-west-1.amazonaws.com/maxiClimber.jpg" /></Link>
                </li>
                <li>
                    <h1>Venture into the metaverse!</h1>
                    <Link to='products/42' className='homepage-product-image'><img src="https://rainforest-dev.s3.us-west-1.amazonaws.com/oculus.jpg" /></Link>
                </li>
                <li>
                    <h1>Keep your laundry smelling fresh</h1>
                    <Link to='products/2' className='homepage-product-image'><img src="https://rainforest-dev.s3.us-west-1.amazonaws.com/snuggleDetergent.jpg" /></Link>
                </li>
            </div>
        </div>
    )
}

export default homepage;