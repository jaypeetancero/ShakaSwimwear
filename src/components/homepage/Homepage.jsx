import React, { Component } from 'react';

const carouselImages = [{
    url: "https://www.wallpaperup.com/uploads/wallpapers/2016/11/25/1053489/5803ec746e1cd2825130aadc109474aa-700.jpg"
}, {
    url: "https://images.alphacoders.com/876/876549.jpg"
}, {
    url: "https://sites.google.com/site/hotbikinimodelswallpapers/_/rsrc/1472872608888/bikini-model-wallpaper-012/bikini-model-wallpaper-142/Sexy%20Hot%20Bikini%20Wallpaper%20-b-242.jpg"
}, {
    url: "http://elitewallpapers.weebly.com/uploads/6/0/5/6/6056927/lyndall_jarvis_wallpaper_5_sports_illustrated_swimsuit_south_africa_1366x768.jpg"
}]

const whatsnewImages = [{
    url: "https://instagram.fmnl4-6.fna.fbcdn.net/vp/13f9526784cc843e8ccf0726c22ce4d1/5E10332C/t51.2885-15/e35/p1080x1080/67234022_141066860441492_1361026425021380672_n.jpg?_nc_ht=instagram.fmnl4-6.fna.fbcdn.net&_nc_cat=108"
}, {
    url: "https://instagram.fmnl4-5.fna.fbcdn.net/vp/889a20f7fccd293aafac882a4c0324cc/5DF037DD/t51.2885-15/e35/s1080x1080/68675619_748127072272984_2346204336880795608_n.jpg?_nc_ht=instagram.fmnl4-5.fna.fbcdn.net&_nc_cat=104"
}, {
    url: "https://instagram.fmnl4-6.fna.fbcdn.net/vp/f2d067ebdae62fe2d9ed88f526906246/5DF7D0CD/t51.2885-15/e35/67942846_145091729923979_482393687141919890_n.jpg?_nc_ht=instagram.fmnl4-6.fna.fbcdn.net&_nc_cat=111"
}, {
    url: "https://instagram.fmnl4-6.fna.fbcdn.net/vp/89e350bfd45da5139b215c6364955ba7/5E064DD0/t51.2885-15/e35/p1080x1080/66678012_2374366692843031_5063109398140869735_n.jpg?_nc_ht=instagram.fmnl4-6.fna.fbcdn.net&_nc_cat=107"
},]

export class Homepage extends Component {

    renderCarouselImages = () => {
        return (
            carouselImages.map((image) => {
                return (
                    <div className={carouselImages[0].url === image.url ? "carousel-item active carousel-crop" : "carousel-item carousel-crop"}>
                        <img src={image.url} className="w-100 text-center dim" alt="carousel_image" />
                        <button type="button" className="custom-button-1 carousel-caption w-25 mx-auto position-absolute margin-bottom-25">Shop Now</button>
                        <a href="#whats-new" className="carousel-caption animated infinite bounce slow"><i class="fa fa-chevron-down fa-2x"></i></a>
                    </div>
                )
            })
        )
    }

    renderWhatsNewImages = () => {
        return (
            whatsnewImages.map((image) => {
                return (
                    <div className="col-xl-2 col-lg-3 col-md-6 col-sm-1 col-xs-1">
                        <div className="text-center m-1">
                            <img src={image.url} className="whatsNew-crop" alt="whatsNew_image" />
                            <button type="button" className="custom-button-1 carousel-caption w-25 mx-auto position-absolute margin-bottom-25">Check this</button>
                            <h4 className="font-grotesque">Insert name of profuct here</h4>
                        </div>
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
                <div data-spy="scroll" data-target="#carousel1" data-offset="0" className="mt-5">
                    <h1 id="whats-new" className="text-center font-grotesque">What's new</h1>
                    <div className="row d-flex justify-content-center mx--0">
                        {this.renderWhatsNewImages()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage
