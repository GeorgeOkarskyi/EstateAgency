import React from 'react';
import styles from './filter.module.scss';





const Filter = (props) => {
    return (
        <div>

            <form className={styles.form}  >
                <div className={styles.filter_container}>
                    <div className={styles.filter_type}>
                        <div className="clearfix">
                            <h3 className="filter-type__title filter-type__title--without-arrow pull-left">
                                Price
                            </h3>

                        </div>
                        <div class="filter-slider">
                            <div class="filter-slider__values clearfix">
                                <span class="filter-slider__value filter-slider__value--from">
                                    <span id="text-from-price"></span>
                                    $
                                </span> <span class="filter-slider__value filter-slider__value--to">
                                    <span id="text-to-price"></span>
                                    $
                                </span> 
                            </div>

                            <div id="slider-price" class="noUi--custom" data-min="0" data-max="30000"></div>

                            <ul class="filter-slider__control clearfix">
                                <li class="form__input">
                                    <label class="form__label" for="filter_from">From</label>
                                    <input value="0" type="number" id="from_price" class="form__field form__field--from-price"
                                        name="filter[price[bottom]]" />
                                </li>
                                <li class="form__input">
                                    <label class="form__label" for="filter_to">To</label>
                                    <input value="50000" type="number" id="to_price" class="form__field form__field--to-price"
                                        name="filter[price[top]]" />

                                </li>
                                <li class="pull-right">
                                    <div class="btn btn--filter js-submit-filter">Ok</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles.filter_type} ${styles.collapse_box}`} data-open='open'>
                        <h3 class='filter-type__title'>Number of bedrooms</h3>
                        <table class="filter-type__body filter-type__body--list">
                            <tbody>
                                <tr>
                                    <td class="check-box"><input type="checkbox" name="filter[property_type][]" id="property_type-1"
                                        value="one_room_studio" class="check-box__input" /><label class="check-box__label"
                                            for="property_type-1"><i class="check-box__icon"></i><span class="check-box__text">Studio</span><span
                                                class="check-box__counter"></span></label></td>
                                    <td class="check-box"><input type="checkbox" name="filter[property_type][]" id="property_type-2"
                                        value="one_bedroom" class="check-box__input" /><label class="check-box__label" for="property_type-2"><i
                                            class="check-box__icon"></i><span class="check-box__text">1 bedroom</span><span
                                                class="check-box__counter"></span></label></td>
                                    <td class="check-box"><input type="checkbox" name="filter[property_type][]" id="property_type-3"
                                        value="three_rooms" class="check-box__input" /><label class="check-box__label" for="property_type-3"><i
                                            class="check-box__icon"></i><span class="check-box__text">2 bedroom</span><span
                                                class="check-box__counter"></span></label></td>
                                </tr>
                                <tr>
                                    <td class="check-box"><input type="checkbox" name="filter[property_type][]" id="property_type-4"
                                        value="four_rooms" class="check-box__input" /><label class="check-box__label" for="property_type-4"><i
                                            class="check-box__icon"></i><span class="check-box__text">3 bedroom</span><span
                                                class="check-box__counter"></span></label></td>
                                    <td class="check-box"><input type="checkbox" name="filter[property_type][]" id="property_type-5"
                                        value="five_rooms" class="check-box__input" /><label class="check-box__label" for="property_type-5"><i
                                            class="check-box__icon"></i><span class="check-box__text">4 bedroom</span><span
                                                class="check-box__counter"></span></label></td>
                                    <td class="check-box"><input type="checkbox" name="filter[property_type][]" id="property_type-6"
                                        value="six_rooms" class="check-box__input" /><label class="check-box__label" for="property_type-6"><i
                                            class="check-box__icon"></i><span class="check-box__text">5 bedroom</span><span
                                                class="check-box__counter"></span></label></td>
                                </tr>
                                <tr>
                                    <td class="check-box"><input type="checkbox" name="filter[property_type][]" id="property_type-7"
                                        value="penthouse" class="check-box__input" /><label class="check-box__label" for="property_type-7"><i
                                            class="check-box__icon"></i><span class="check-box__text">Penthouse</span><span
                                                class="check-box__counter"></span></label></td>
                                    <td class="check-box"><input type="checkbox" name="filter[property_type][]" id="property_type-8"
                                        value="townhouse" class="check-box__input" /><label class="check-box__label" for="property_type-8"><i
                                            class="check-box__icon"></i><span class="check-box__text">Townhouse</span><span
                                                class="check-box__counter"></span></label></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.filter_type}>
                        <div class="clearfix">
                            <h3 class="filter-type__title filter-type__title--without-arrow pull-left">
                                Total area m2
                            </h3>

                        </div>

                        <div class="filter-slider">
                            <div class="filter-slider__values clearfix">
                                <span class="filter-slider__value filter-slider__value--from">
                                    <span id="text-from-total_size"></span>
                                    <span> m<sup class="degrees">2</sup></span>
                                </span> <span class="filter-slider__value filter-slider__value--to">
                                    <span id="text-to-total_size"></span>
                                    <span> m<sup class="degrees">2</sup></span>
                                </span> </div>

                            <div id="slider-total_size" class="noUi--custom" data-min="0" data-max="1700"></div>

                            <ul class="filter-slider__control clearfix">
                                <li class="form__input">
                                    <label class="form__label" for="filter_from">From</label>
                                    <input value="0" type="number" id="from_total_size" class="form__field form__field--from-total_size"
                                        name="filter[total_size[bottom]]" />
                                </li>
                                <li class="form__input">
                                    <label class="form__label" for="filter_to">To</label>
                                    <input value="1700" type="number" id="to_total_size" class="form__field form__field--to-total_size"
                                        name="filter[total_size[top]]" />
                                    <span> m<sup class="degrees">2</sup></span>
                                </li>
                                <li class="pull-right">
                                    <div class="btn btn--filter js-submit-filter">Ok</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles.filter_type} ${styles.collapse_box}`} data-open='closed'>
                        <h3 class='filter-type__title'>District</h3>
                        <ul class="filter-type__body filter-type__body--list">
                            <li class="check-box" data-filter="district"><input type="checkbox" name="filter[district][]" id="district-1"
                                value="Kiev Center Pechersk" class="check-box__input" /><label class="check-box__label" for="district-1"><i
                                    class="check-box__icon"></i><span class="check-box__text">Kiev Center Pechersk</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="district"><input type="checkbox" name="filter[district][]" id="district-2"
                                value="Kiev Center Holosiivskiy" class="check-box__input" /><label class="check-box__label"
                                    for="district-2"><i class="check-box__icon"></i><span class="check-box__text">Kiev Center
                                    Holosiivskiy</span><span class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="district"><input type="checkbox" name="filter[district][]" id="district-3"
                                value="Kiev Center Shevchenkovskii" class="check-box__input" /><label class="check-box__label"
                                    for="district-3"><i class="check-box__icon"></i><span class="check-box__text">Kiev Center
                                    Shevchenkovskii</span><span class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="district"><input type="checkbox" name="filter[district][]" id="district-4"
                                value="Suburbs of Kiev" class="check-box__input" /><label class="check-box__label" for="district-4"><i
                                    class="check-box__icon"></i><span class="check-box__text">Suburbs of Kiev</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="district"><input type="checkbox" name="filter[district][]" id="district-5"
                                value="Solomenskiy" class="check-box__input" /><label class="check-box__label" for="district-5"><i
                                    class="check-box__icon"></i><span class="check-box__text">Solomenskiy</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="district"><input type="checkbox" name="filter[district][]" id="district-6"
                                value="Obolon" class="check-box__input" /><label class="check-box__label" for="district-6"><i
                                    class="check-box__icon"></i><span class="check-box__text">Obolon</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="district"><input type="checkbox" name="filter[district][]" id="district-7"
                                value="Left bank" class="check-box__input" /><label class="check-box__label" for="district-7"><i
                                    class="check-box__icon"></i><span class="check-box__text">Left bank</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="district"><input type="checkbox" name="filter[district][]" id="district-8"
                                value="Kiev" class="check-box__input" /><label class="check-box__label" for="district-8"><i
                                    class="check-box__icon"></i><span class="check-box__text">Kiev</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="district"><input type="checkbox" name="filter[district][]" id="district-9"
                                value="Svyatoshyn" class="check-box__input" /><label class="check-box__label" for="district-9"><i
                                    class="check-box__icon"></i><span class="check-box__text">Svyatoshyn</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="district"><input type="checkbox" name="filter[district][]" id="district-10"
                                value="Podil" class="check-box__input" /><label class="check-box__label" for="district-10"><i
                                    class="check-box__icon"></i><span class="check-box__text">Podil</span><span
                                        class="check-box__counter"></span></label></li>
                        </ul>
                    </div>
                    <div className={`${styles.filter_type} ${styles.collapse_box}`} data-open='closed'>
                        <h3 class='filter-type__title'>Residential Compound</h3>
                        <ul class="filter-type__body filter-type__body--list">
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-1" value="Bulvar Fontanov"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-1"><i
                                    class="check-box__icon"></i><span class="check-box__text">Bulvar Fontanov</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-2" value="Busov Hill"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-2"><i
                                    class="check-box__icon"></i><span class="check-box__text">Busov Hill</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-3" value="Central Park"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-3"><i
                                    class="check-box__icon"></i><span class="check-box__text">Central Park</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-4" value="Chicago"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-4"><i
                                    class="check-box__icon"></i><span class="check-box__text">Chicago</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-5" value="Diamant"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-5"><i
                                    class="check-box__icon"></i><span class="check-box__text">Diamant</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-6" value="Diamond Hill"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-6"><i
                                    class="check-box__icon"></i><span class="check-box__text">Diamond Hill</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-7" value="Diplomat Hall"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-7"><i
                                    class="check-box__icon"></i><span class="check-box__text">Diplomat Hall</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-8" value="French Kvartal"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-8"><i
                                    class="check-box__icon"></i><span class="check-box__text">French Kvartal</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-9" value="French Quarter 2"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-9"><i
                                    class="check-box__icon"></i><span class="check-box__text">French Quarter 2</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-10" value="Grushevskogo 9a"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-10"><i
                                    class="check-box__icon"></i><span class="check-box__text">Grushevskogo 9a</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-11" value="Institutskaya 18a"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-11"><i
                                    class="check-box__icon"></i><span class="check-box__text">Institutskaya 18a</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-12" value="Izumrudniy &amp; Vremena Goda"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-12"><i
                                    class="check-box__icon"></i><span class="check-box__text">Izumrudniy &amp; Vremena Goda</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-13" value="Jack House"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-13"><i
                                    class="check-box__icon"></i><span class="check-box__text">Jack House</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-14" value="Klovskiy Spusk 7"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-14"><i
                                    class="check-box__icon"></i><span class="check-box__text">Klovskiy Spusk 7</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-15" value="Kvartet"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-15"><i
                                    class="check-box__icon"></i><span class="check-box__text">Kvartet</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-16" value="Lesi Ukrainki 7 (a.b)"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-16"><i
                                    class="check-box__icon"></i><span class="check-box__text">Lesi Ukrainki 7 (a.b)</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-17" value="New York"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-17"><i
                                    class="check-box__icon"></i><span class="check-box__text">New York</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-18" value="Novopecherskie Lipki"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-18"><i
                                    class="check-box__icon"></i><span class="check-box__text">Novopecherskie Lipki</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-19" value="Obolon Residences"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-19"><i
                                    class="check-box__icon"></i><span class="check-box__text">Obolon Residences</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-20" value="Olimpijskij"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-20"><i
                                    class="check-box__icon"></i><span class="check-box__text">Olimpijskij</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-21" value="Panorama Pechersk"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-21"><i
                                    class="check-box__icon"></i><span class="check-box__text">Panorama Pechersk</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-22" value="Park Avenue"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-22"><i
                                    class="check-box__icon"></i><span class="check-box__text">Park Avenue</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-23" value="Pechersk Sky"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-23"><i
                                    class="check-box__icon"></i><span class="check-box__text">Pechersk Sky</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-24" value="Pokrovskiy Posad"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-24"><i
                                    class="check-box__icon"></i><span class="check-box__text">Pokrovskiy Posad</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-25" value="Prestige Hall"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-25"><i
                                    class="check-box__icon"></i><span class="check-box__text">Prestige Hall</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-26" value="River Stone"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-26"><i
                                    class="check-box__icon"></i><span class="check-box__text">River Stone</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-27" value="Royal Tower"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-27"><i
                                    class="check-box__icon"></i><span class="check-box__text">Royal Tower</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-28" value="Tetris Hall"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-28"><i
                                    class="check-box__icon"></i><span class="check-box__text">Tetris Hall</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-29" value="Vladimirskaya 49a"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-29"><i
                                    class="check-box__icon"></i><span class="check-box__text">Vladimirskaya 49a</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-30" value="Vozdvizhenka"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-30"><i
                                    class="check-box__icon"></i><span class="check-box__text">Vozdvizhenka</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="residential_complex"><input type="checkbox"
                                name="filter[residential_complex][]" id="residential_complex-31" value="Zarechnyj"
                                class="check-box__input" /><label class="check-box__label" for="residential_complex-31"><i
                                    class="check-box__icon"></i><span class="check-box__text">Zarechnyj</span><span
                                        class="check-box__counter"></span></label></li>
                        </ul>
                    </div>
                    <div className={`${styles.filter_type} ${styles.collapse_box}`} data-open='closed'>
                        <h3 class='filter-type__title'>Building Type</h3>
                        <ul class="filter-type__body filter-type__body--list">
                            <li class="check-box" data-filter="building_type"><input type="checkbox" name="filter[building_type][]"
                                id="building_type-1" value="2000&#39;s - up" class="check-box__input" /><label class="check-box__label"
                                    for="building_type-1"><i class="check-box__icon"></i><span class="check-box__text">2000&#39;s -
                                    up</span><span class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="building_type"><input type="checkbox" name="filter[building_type][]"
                                id="building_type-2" value="pre-1930&#39;s" class="check-box__input" /><label class="check-box__label"
                                    for="building_type-2"><i class="check-box__icon"></i><span
                                        class="check-box__text">pre-1930&#39;s</span><span class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="building_type"><input type="checkbox" name="filter[building_type][]"
                                id="building_type-3" value="1930&#39;s-1950&#39;s" class="check-box__input" /><label
                                    class="check-box__label" for="building_type-3"><i class="check-box__icon"></i><span
                                        class="check-box__text">1930&#39;s-1950&#39;s</span><span class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="building_type"><input type="checkbox" name="filter[building_type][]"
                                id="building_type-4" value="1970&#39;s-1990&#39;s" class="check-box__input" /><label
                                    class="check-box__label" for="building_type-4"><i class="check-box__icon"></i><span
                                        class="check-box__text">1970&#39;s-1990&#39;s</span><span class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="building_type"><input type="checkbox" name="filter[building_type][]"
                                id="building_type-5" value="1960&#39;s-1970&#39;s" class="check-box__input" /><label
                                    class="check-box__label" for="building_type-5"><i class="check-box__icon"></i><span
                                        class="check-box__text">1960&#39;s-1970&#39;s</span><span class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="building_type"><input type="checkbox" name="filter[building_type][]"
                                id="building_type-6" value="1950&#39;s-1960&#39;s" class="check-box__input" /><label
                                    class="check-box__label" for="building_type-6"><i class="check-box__icon"></i><span
                                        class="check-box__text">1950&#39;s-1960&#39;s</span><span class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="building_type"><input type="checkbox" name="filter[building_type][]"
                                id="building_type-7" value="1990&#39;s - 2000&#39;s" class="check-box__input" /><label
                                    class="check-box__label" for="building_type-7"><i class="check-box__icon"></i><span
                                        class="check-box__text">1990&#39;s - 2000&#39;s</span><span class="check-box__counter"></span></label>
                            </li>
                        </ul>
                    </div>
                    <div className={`${styles.filter_type} ${styles.collapse_box}`} data-open='closed'>
                        <h3 class='filter-type__title'>Last Renovation</h3>
                        <table class="filter-type__body filter-type__body--list">
                            <tbody>
                                <tr>
                                    <td class="check-box"><input type="checkbox" name="filter[interior_condition][]" id="interior_condition-1"
                                        value="Brand New" class="check-box__input" /><label class="check-box__label"
                                            for="interior_condition-1"><i class="check-box__icon"></i><span class="check-box__text">Newly
                                        Remodeled</span><span class="check-box__counter"></span></label></td>
                                    <td class="check-box"><input type="checkbox" name="filter[interior_condition][]" id="interior_condition-2"
                                        value="1-2 Years Old" class="check-box__input" /><label class="check-box__label"
                                            for="interior_condition-2"><i class="check-box__icon"></i><span class="check-box__text">1-2
                                        years</span><span class="check-box__counter"></span></label></td>
                                </tr>
                                <tr>
                                    <td class="check-box"><input type="checkbox" name="filter[interior_condition][]" id="interior_condition-3"
                                        value="3-5 Years" class="check-box__input" /><label class="check-box__label"
                                            for="interior_condition-3"><i class="check-box__icon"></i><span class="check-box__text">3-5
                                        years</span><span class="check-box__counter"></span></label></td>
                                    <td class="check-box"><input type="checkbox" name="filter[interior_condition][]" id="interior_condition-4"
                                        value="5 Years and Older" class="check-box__input" /><label class="check-box__label"
                                            for="interior_condition-4"><i class="check-box__icon"></i><span class="check-box__text">5+
                                        years</span><span class="check-box__counter"></span></label></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={`${styles.filter_type} ${styles.collapse_box}`} data-open='closed'>
                        <h3 class='filter-type__title'>Metro station</h3>
                        <ul class="filter-type__body filter-type__body--list">
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-1" value="Klovs&#39;ka" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-1"><i class="check-box__icon"></i><span class="check-box__text">Klovs&#39;ka</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-2" value="Universytet" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-2"><i class="check-box__icon"></i><span class="check-box__text">Universytet</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-3" value="Pechers&#39;ka" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-3"><i class="check-box__icon"></i><span
                                        class="check-box__text">Pechers&#39;ka</span><span class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-4" value="Maidan Nezalezhnosti" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-4"><i class="check-box__icon"></i><span class="check-box__text">Maidan
                                    Nezalezhnosti</span><span class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-5" value="Luk&#39;yanivs&#39;ka" class="check-box__input" /><label
                                    class="check-box__label" for="metro_station-5"><i class="check-box__icon"></i><span
                                        class="check-box__text">Luk&#39;yanivs&#39;ka</span><span class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-6" value="Lybid&#39;ska" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-6"><i class="check-box__icon"></i><span class="check-box__text">Lybid&#39;ska</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-7" value="Druzhby Narodiv" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-7"><i class="check-box__icon"></i><span class="check-box__text">Druzhby
                                    Narodiv</span><span class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-8" value="Kontraktova Square" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-8"><i class="check-box__icon"></i><span class="check-box__text">Kontraktova
                                    Square</span><span class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-9" value="(Unknown)" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-9"><i class="check-box__icon"></i><span class="check-box__text">(Unknown)</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-10" value="Zoloti Vorota" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-10"><i class="check-box__icon"></i><span class="check-box__text">Zoloti
                                    Vorota</span><span class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-11" value="Arsenal&#39;na" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-11"><i class="check-box__icon"></i><span
                                        class="check-box__text">Arsenal&#39;na</span><span class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-12" value="(Other)" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-12"><i class="check-box__icon"></i><span class="check-box__text">(Other)</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-13" value="L&#39;va Tolstoho" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-13"><i class="check-box__icon"></i><span class="check-box__text">L&#39;va
                                    Tolstoho</span><span class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-14" value="Palats Ukraina" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-14"><i class="check-box__icon"></i><span class="check-box__text">Palats
                                    Ukraina</span><span class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-15" value="Holosiivks&#39;ka" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-15"><i class="check-box__icon"></i><span
                                        class="check-box__text">Holosiivks&#39;ka</span><span class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-16" value="Polytechnichnyi Institut" class="check-box__input" /><label
                                    class="check-box__label" for="metro_station-16"><i class="check-box__icon"></i><span
                                        class="check-box__text">Polytechnichnyi Institut</span><span class="check-box__counter"></span></label>
                            </li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-17" value="Kreshchatyk" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-17"><i class="check-box__icon"></i><span class="check-box__text">Kreshchatyk</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-18" value="Palats Sportu" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-18"><i class="check-box__icon"></i><span class="check-box__text">Palats
                                    Sportu</span><span class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-19" value="Mins&#39;ka" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-19"><i class="check-box__icon"></i><span class="check-box__text">Mins&#39;ka</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-20" value="Olympiiskaya" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-20"><i class="check-box__icon"></i><span class="check-box__text">Olympiiskaya</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-21" value="Obolon" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-21"><i class="check-box__icon"></i><span class="check-box__text">Obolon</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-22" value="Teatral&#39;na" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-22"><i class="check-box__icon"></i><span
                                        class="check-box__text">Teatral&#39;na</span><span class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-23" value="Poshtova Square" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-23"><i class="check-box__icon"></i><span class="check-box__text">Poshtova
                                    Square</span><span class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-24" value="Demiivs&#39;ka" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-24"><i class="check-box__icon"></i><span
                                        class="check-box__text">Demiivs&#39;ka</span><span class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-25" value="Nivki" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-25"><i class="check-box__icon"></i><span class="check-box__text">Nivki</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-26" value="Shulyavs&#39;ka" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-26"><i class="check-box__icon"></i><span
                                        class="check-box__text">Shulyavs&#39;ka</span><span class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-27" value="Svyatoshyn" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-27"><i class="check-box__icon"></i><span class="check-box__text">Svyatoshyn</span><span
                                        class="check-box__counter"></span></label></li>
                            <li class="check-box" data-filter="metro_station"><input type="checkbox" name="filter[metro_station][]"
                                id="metro_station-28" value="Beresteis&#39;ka" class="check-box__input" /><label class="check-box__label"
                                    for="metro_station-28"><i class="check-box__icon"></i><span
                                        class="check-box__text">Beresteis&#39;ka</span><span class="check-box__counter"></span></label></li>
                        </ul>
                    </div>

                    <div className={`${styles.filter_type} ${styles.search}`}>
                        <h3 class="filter-type__title filter-type__title--without-arrow">
                            Keyword
                            </h3>
                        <div class="keyword clearfix">
                            <input type="text" name="filter[keyword]" id="filter_keyword" value="" autocomplete="off"
                                class="form__field form__field--keyword left" />
                            <div class="btn btn--filter right js-submit-filter">
                                <svg class="white-magnifier">

                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.filter__actions} ${styles.clearfix}`}>
                        <button name="button" type="submit" id="submit_filters" class="filter__submit btn btn-inverse right">
                            <i class="button__icon button__icon-ok"></i>
                            Apply
                        </button> <a id="drop_filters" rel="nofollow" class="filter__drop-link left" href="/reset_settings">
                            <span class="filter__drop-text">
                                Reset filters
                        </span>
                            <svg class="filter__drop-cross">

                            </svg>
                        </a> </div>
                </div>
            </form>

        </div>
    )
}




export default Filter
