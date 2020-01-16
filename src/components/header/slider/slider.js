import React, { Component } from "react";
import styles from './slider.module.scss';
import Slider from "react-slick";


export default class SliderView extends Component {
    render() {
        const settings = {
            dots: false,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div >
                <Slider {...settings}>
                    <div className={styles.container}>
                        <img alt='1' src='https://images.ua.prom.st/836252515_dizajn-kvartiri.jpg'></img>
                    </div>
                    <div className={styles.container}>

                        <img alt='2' src='https://images.ua.prom.st/836252515_dizajn-kvartiri.jpg'></img>


                    </div>
                    <div className={styles.container}>

                        <img alt='3' src='https://images.ua.prom.st/836252515_dizajn-kvartiri.jpg'></img>


                    </div>
                    <div className={styles.container}>

                        <img alt='4' src='https://images.ua.prom.st/836252515_dizajn-kvartiri.jpg'></img>


                    </div>
                    <div className={styles.container}>

                        <img alt='5' src='https://images.ua.prom.st/836252515_dizajn-kvartiri.jpg'></img>

                    </div>
                    <div className={styles.container}>

                        <img alt='6' src='https://images.ua.prom.st/836252515_dizajn-kvartiri.jpg'></img>

                    </div>
                </Slider>
            </div>
        );
    }
}
