import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchProducts } from '../../actions/product_actions';
import {BsChevronCompactRight, BsChevronCompactLeft} from 'react-icons/bs'

const HomePage = ({fetchProducts, history}) => {
    const [currentBannerIndex, setBannerIndex] = useState(0)
    const bannerIndex = useRef(0)
    const carouselInterval = useRef(null)
    const bannerSrcUrls = [ 
                            <img src="https://rainforest-dev.s3.us-west-1.amazonaws.com/home_page_banner_1.jpg"/>,
                            <img src="https://rainforest-dev.s3.us-west-1.amazonaws.com/homePageBanner6.jpg" className="hover" onClick={() => fetchProducts(`category = 'Fashion'`).then(history.push('/products'))}/>,
                            <img src="https://rainforest-dev.s3.us-west-1.amazonaws.com/home_page_banner_4.jpg" className="hover" onClick={() => history.push('products/31')}/>,
                          ]

  
   
    useEffect(() => {
        window.scrollTo(0, 0)
        if (!carouselInterval.current) {
            startCarouselTimer();
        }
        return () => carouselInterval.current ? clearInterval(carouselInterval.current) : null
    },[])

    const startCarouselTimer = () => {
        if(carouselInterval.current) clearInterval(carouselInterval.current)
        carouselInterval.current = setInterval( () => {
            bannerIndex.current = (bannerIndex.current + 1) % bannerSrcUrls.length
            setBannerIndex(bannerIndex.current)
        }, 10000)
    }

    const carouselForward = () => {
        bannerIndex.current = (bannerIndex.current + 1) % bannerSrcUrls.length
        setBannerIndex(bannerIndex.current)
        startCarouselTimer();
    }

    const carouselBack = () => {
        bannerIndex.current = (bannerIndex.current + 1) % bannerSrcUrls.length
        setBannerIndex(bannerIndex.current)
        startCarouselTimer();
    }

    return (
        <div className="homepage">
            <div className='homepage-banner'>
                {bannerSrcUrls[currentBannerIndex]}
                <button className="carousel-button left" onClick={carouselBack}><BsChevronCompactLeft className="banner-arrows"/></button>
                <button className="carousel-button right" onClick={carouselForward}><BsChevronCompactRight className="banner-arrows"/></button>
            </div>
            <div className="homepage-list">
                <li>
                    <h1>Control Your Home With Your Voice!</h1>
                    <Link to='products/31'  className='homepage-product-image'><img src="https://rainforest-dev.s3.us-west-1.amazonaws.com/echoDot.jpg" /></Link>
                </li>
                <li>
                    <h1>Play the hottest games</h1>
                    <Link to='products/18' className='homepage-product-image'><img src="https://rainforest-dev.s3.us-west-1.amazonaws.com/eldenRing.jpg" /></Link>
                </li>
                <li>
                    <h1>Stock up on pet supplies</h1>
                    <Link to='products/50' className='homepage-product-image'><img src="https://rainforest-dev.s3.us-west-1.amazonaws.com/catLitter.jpg" /></Link>
                </li>
                <li>
                    <h1>Get the latest TVs</h1>
                    <Link to='products/32' className='homepage-product-image'><img src="https://rainforest-dev.s3.us-west-1.amazonaws.com/lgTv.jpg" /></Link>
                </li>
                <li>
                    <h1>Get in shape for summer!</h1>
                    <Link to='products/55' className='homepage-product-image'><img src="https://rainforest-dev.s3.us-west-1.amazonaws.com/maxiClimber.jpg" /></Link>
                </li>
                <li>
                    <h1>Venture into the metaverse!</h1>
                    <Link to='products/39' className='homepage-product-image'><img src="https://rainforest-dev.s3.us-west-1.amazonaws.com/oculus.jpg" /></Link>
                </li>
                <li>
                    <h1>Keep your laundry smelling fresh</h1>
                    <Link to='products/2' className='homepage-product-image'><img src="https://rainforest-dev.s3.us-west-1.amazonaws.com/snuggleDetergent.jpg" /></Link>
                </li>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: (filter) => dispatch(fetchProducts(filter))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));

