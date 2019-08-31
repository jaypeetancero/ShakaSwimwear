import React, { Component } from 'react';

const carouselImages = [{
    url: "https://www.wallpaperup.com/uploads/wallpapers/2016/11/25/1053489/5803ec746e1cd2825130aadc109474aa-700.jpg"
},{
    url: "https://images.alphacoders.com/876/876549.jpg"
},{
    url: "https://sites.google.com/site/hotbikinimodelswallpapers/_/rsrc/1472872608888/bikini-model-wallpaper-012/bikini-model-wallpaper-142/Sexy%20Hot%20Bikini%20Wallpaper%20-b-242.jpg"
},{
    url: "http://elitewallpapers.weebly.com/uploads/6/0/5/6/6056927/lyndall_jarvis_wallpaper_5_sports_illustrated_swimsuit_south_africa_1366x768.jpg"
}]

export class Homepage extends Component {

    renderCarouselImages = () => {
        return (
            carouselImages.map((image) => {
                return (
                    <div className={carouselImages[0].url === image.url ? "carousel-item active carousel-crop" : "carousel-item carousel-crop"}>
                        <img src={image.url} className="w-100 text-center" alt="carousel_image" />
                        <button type="button" className="custom-button-1 carousel-caption w-25 mx-auto position-absolute margin-bottom-25">Shop Now</button>
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <div>
                <div id="carousel1" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {this.renderCarouselImages()}
                    </div>
                    <a className="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel1" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Homepage
