import React, { Component } from "react";
import styles from './slider.module.scss';
import Slider from "react-slick";
import './slider.scss'

export default class SliderView extends Component {
    render() {
        const settings = {
            dots: true,
            arrows: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div >
                <Slider {...settings}>
                    <div className={styles.container}>
                        <img alt='1' src='https://images.ua.prom.st/836252515_dizajn-kvartiri.jpg'>
                        </img>
                        <div className={`${styles.info_block}`}>
                            <div className={`${'container'} ${styles.slider_content}`}>
                                <div className={styles.slider_content_left}>
                                    <h2 className={styles.slider_content_left__title}>2 bedrooms</h2>
                                    <p className={styles.slider_content_left__description}>Beautiful two-bedroom apartment (150 m2) on Dimitrova 4. Fully renovated, 1 balcony, 2 bathrooms (shower, bathtub, washing machine, heated floors). Elevator access directly to the underground parking. Registration.</p>
                                </div>
                                <div className={styles.slider_content_buttons}>
                                    <button className={styles.slider_content_buttons__item}>more</button>
                                    <button className={styles.slider_content_buttons__item}>Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <img alt='1' src='https://q-cf.bstatic.com/images/hotel/max1024x768/143/143923734.jpg'>
                        </img>
                        <div className={`${styles.info_block}`}>
                            <div className={`${'container'} ${styles.slider_content}`}>
                                <div className={styles.slider_content_left}>
                                    <h2 className={styles.slider_content_left__title}>penthouse</h2>
                                    <p className={styles.slider_content_left__description}>Beautiful two-bedroom apartment (150 m2) on Dimitrova 4. Fully renovated, 1 balcony, 2 bathrooms (shower, bathtub, washing machine, heated floors). Elevator access directly to the underground parking. Registration.</p>
                                </div>
                                <div className={styles.slider_content_buttons}>
                                    <button className={styles.slider_content_buttons__item}>more</button>
                                    <button className={styles.slider_content_buttons__item}>Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <img alt='1' src='https://930sf3rpc2138xd1c35yfvie-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/Nell-Gwynn-House-735-5-1280x800.jpg'>
                        </img>
                        <div className={`${styles.info_block}`}>
                            <div className={`${'container'} ${styles.slider_content}`}>
                                <div className={styles.slider_content_left}>
                                    <h2 className={styles.slider_content_left__title}>5 bedrooms</h2>
                                    <p className={styles.slider_content_left__description}>Beautiful two-bedroom apartment (150 m2) on Dimitrova 4. Fully renovated, 1 balcony, 2 bathrooms (shower, bathtub, washing machine, heated floors). Elevator access directly to the underground parking. Registration.</p>
                                </div>
                                <div className={styles.slider_content_buttons}>
                                    <button className={styles.slider_content_buttons__item}>more</button>
                                    <button className={styles.slider_content_buttons__item}>Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <img alt='1' src='https://q-cf.bstatic.com/images/hotel/max1280x900/217/217741956.jpg'>
                        </img>
                        <div className={`${styles.info_block}`}>
                            <div className={`${'container'} ${styles.slider_content}`}>
                                <div className={styles.slider_content_left}>
                                    <h2 className={styles.slider_content_left__title}>townhouse</h2>
                                    <p className={styles.slider_content_left__description}>Beautiful two-bedroom apartment (150 m2) on Dimitrova 4. Fully renovated, 1 balcony, 2 bathrooms (shower, bathtub, washing machine, heated floors). Elevator access directly to the underground parking. Registration.</p>
                                </div>
                                <div className={styles.slider_content_buttons}>
                                    <button className={styles.slider_content_buttons__item}>more</button>
                                    <button className={styles.slider_content_buttons__item}>Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <img alt='1' src='https://r-cf.bstatic.com/images/hotel/max1280x900/192/192451937.jpg'>
                        </img>
                        <div className={`${styles.info_block}`}>
                            <div className={`${'container'} ${styles.slider_content}`}>
                                <div className={styles.slider_content_left}>
                                    <h2 className={styles.slider_content_left__title}>penthouse</h2>
                                    <p className={styles.slider_content_left__description}>Beautiful two-bedroom apartment (150 m2) on Dimitrova 4. Fully renovated, 1 balcony, 2 bathrooms (shower, bathtub, washing machine, heated floors). Elevator access directly to the underground parking. Registration.</p>
                                </div>
                                <div className={styles.slider_content_buttons}>
                                    <button className={styles.slider_content_buttons__item}>more</button>
                                    <button className={styles.slider_content_buttons__item}>Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <img alt='1' src='https://q-cf.bstatic.com/images/hotel/max1280x900/183/183711928.jpg'>
                        </img>
                        <div className={`${styles.info_block}`}>
                            <div className={`${'container'} ${styles.slider_content}`}>
                                <div className={styles.slider_content_left}>
                                    <h2 className={styles.slider_content_left__title}>townhouse</h2>
                                    <p className={styles.slider_content_left__description}>Beautiful two-bedroom apartment (150 m2) on Dimitrova 4. Fully renovated, 1 balcony, 2 bathrooms (shower, bathtub, washing machine, heated floors). Elevator access directly to the underground parking. Registration.</p>
                                </div>
                                <div className={styles.slider_content_buttons}>
                                    <button className={styles.slider_content_buttons__item}>more</button>
                                    <button className={styles.slider_content_buttons__item}>Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
