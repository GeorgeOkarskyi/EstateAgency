import 'font-awesome/css/font-awesome.min.css';
import React, { useState } from 'react';
import styles from './filter.module.scss';
import RagneSliderAreaContainer from './rangeSlider/rangeSliderAreaContainer';
import RagneSliderPriceContainer from './rangeSlider/rangeSliderPriceContainer';



const Filter = (props) => {
    const [showNumberOfBedrooms, setShowNumberOfBedrooms] = useState(true);
    const [showBuildingType, setShowBuildingType] = useState(true);
    const [showLastRenovation, setShowLastRenovation] = useState(true);
    const [showForm, setShowForm] = useState(true);

    let handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        return { name, value }
    }
    let onFilterByBedroomsCheckbox = (event) => {
        let handleInput = handleInputChange(event)
        props.filterByBedrooms(handleInput.name, handleInput.value, "numberOfBedrooms")
    }
    let onFilterByLastRenovationCheckbox = (event) => {
        let handleInput = handleInputChange(event)
        props.filterByBedrooms(handleInput.name, handleInput.value, "lastRenovation")
    }
    let onFilterByBuildingTypeCheckbox = (event) => {
        let handleInput = handleInputChange(event)
        props.filterByBedrooms(handleInput.name, handleInput.value, "buildingType")
    }


    return (

        <form className={styles.form}  >
            <div onClick={() => showForm ? setShowForm(false) : setShowForm(true)} className={styles.form__show}>FILTERS</div>
            <div className={`${styles.filter} ${showForm ? styles.filter__closed : ''}`}>
                <div className={`${styles.filter__wrapper}`} >
                    <h2>FILTER</h2>
                    <fieldset className={styles.filter_type}>
                        <legend className={styles.filter_type__title}>Price</legend>
                        <RagneSliderPriceContainer />
                    </fieldset>
                    <fieldset className={styles.filter_type}>
                        <legend onClick={() => showNumberOfBedrooms ? setShowNumberOfBedrooms(false) : setShowNumberOfBedrooms(true)} className={styles.filter_type__title}>
                            <span>Number of bedrooms</span>
                            <i className={`${"fa fa-caret-right"} ${showNumberOfBedrooms ? styles.right : styles.down}`}  ></i>
                        </legend>
                        <ul className={`${styles.filter_type__block} ${showNumberOfBedrooms ? styles.filter_type__block__closed : ''}`}>
                            <li><input onChange={onFilterByBedroomsCheckbox} checked={props.checkboxes.numberOfBedrooms.studio} type="checkbox" className={styles.filter_type__checkbox} name="studio" id="studio" /><label htmlFor="studio">Studio</label></li>
                            <li><input onChange={onFilterByBedroomsCheckbox} checked={props.checkboxes.numberOfBedrooms['1 bedroom']} type="checkbox" className={styles.filter_type__checkbox} name="1 bedroom" id="1 bedroom" /><label htmlFor="1 bedroom">1 bedroom</label></li>
                            <li><input onChange={onFilterByBedroomsCheckbox} checked={props.checkboxes.numberOfBedrooms['2 bedrooms']} type="checkbox" className={styles.filter_type__checkbox} name="2 bedrooms" id="2 bedrooms" /><label htmlFor="2 bedrooms">2 bedrooms</label></li>
                            <li><input onChange={onFilterByBedroomsCheckbox} checked={props.checkboxes.numberOfBedrooms['3 bedrooms']} type="checkbox" className={styles.filter_type__checkbox} name="3 bedrooms" id="3 bedrooms" /><label htmlFor="3 bedrooms">3 bedrooms</label></li>
                            <li><input onChange={onFilterByBedroomsCheckbox} checked={props.checkboxes.numberOfBedrooms['4 bedrooms']} type="checkbox" className={styles.filter_type__checkbox} name="4 bedrooms" id="4 bedrooms" /><label htmlFor="4 bedrooms">4 bedrooms</label></li>
                            <li><input onChange={onFilterByBedroomsCheckbox} checked={props.checkboxes.numberOfBedrooms['5 bedrooms']} type="checkbox" className={styles.filter_type__checkbox} name="5 bedrooms" id="5 bedrooms" /><label htmlFor="5 bedrooms">5 bedrooms</label></li>
                            <li><input onChange={onFilterByBedroomsCheckbox} checked={props.checkboxes.numberOfBedrooms['6 bedrooms']} type="checkbox" className={styles.filter_type__checkbox} name="6 bedrooms" id="6 bedrooms" /><label htmlFor="6 bedrooms">6 bedrooms</label></li>
                            <li><input onChange={onFilterByBedroomsCheckbox} checked={props.checkboxes.numberOfBedrooms.penthouse} type="checkbox" className={styles.filter_type__checkbox} name="penthouse" id="penthouse" /><label htmlFor="penthouse">Penthouse</label></li>
                            <li><input onChange={onFilterByBedroomsCheckbox} checked={props.checkboxes.numberOfBedrooms.townhouse} type="checkbox" className={styles.filter_type__checkbox} name="townhouse" id="townhouse" /><label htmlFor="townhouse">Townhouse</label></li>
                        </ul>
                    </fieldset>
                    <fieldset className={styles.filter_type}>
                        <legend className={styles.filter_type__title}>Total area m2</legend>
                        <RagneSliderAreaContainer />
                    </fieldset>
                    <fieldset className={styles.filter_type}>
                        <legend onClick={() => showBuildingType ? setShowBuildingType(false) : setShowBuildingType(true)} className={styles.filter_type__title}>
                            <span>Last Renovation</span>
                            <i className={`${"fa fa-caret-right"} ${showBuildingType ? styles.right : styles.down}`}  ></i>
                        </legend>
                        <ul className={`${styles.filter_type__block} ${showBuildingType ? styles.filter_type__block__closed : ''}`}>
                            <li><input onChange={onFilterByLastRenovationCheckbox} checked={props.checkboxes.lastRenovation["Brand New"]} type="checkbox" className={styles.filter_type__checkbox} name="Brand New" id="Brand New" /><label htmlFor="Brand New">Brand New</label></li>
                            <li><input onChange={onFilterByLastRenovationCheckbox} checked={props.checkboxes.lastRenovation["1-2 years"]} type="checkbox" className={styles.filter_type__checkbox} name="1-2 years" id="1-2 years" /><label htmlFor="1-2 years">1-2 years</label></li>
                            <li><input onChange={onFilterByLastRenovationCheckbox} checked={props.checkboxes.lastRenovation["3-5 years"]} type="checkbox" className={styles.filter_type__checkbox} name="3-5 years" id="3-5 years" /><label htmlFor="3-5 years">3-5 years</label></li>
                            <li><input onChange={onFilterByLastRenovationCheckbox} checked={props.checkboxes.lastRenovation["5+ years"]} type="checkbox" className={styles.filter_type__checkbox} name="5+ years" id="5+ years" /><label htmlFor="5+ years">5+ years</label></li>
                        </ul>
                    </fieldset>
                    <fieldset className={styles.filter_type}>
                        <legend onClick={() => showLastRenovation ? setShowLastRenovation(false) : setShowLastRenovation(true)} className={styles.filter_type__title}>
                            <span>Building Type</span>
                            <i className={`${"fa fa-caret-right"} ${showLastRenovation ? styles.right : styles.down}`}></i>
                        </legend>
                        <ul className={`${styles.filter_type__block} ${showLastRenovation ? styles.filter_type__block__closed : ''}`}>
                            <li><input onChange={onFilterByBuildingTypeCheckbox} checked={props.checkboxes.buildingType["2000's - up"]} type="checkbox" className={styles.filter_type__checkbox} name="2000's - up" id="2000's - up" /><label htmlFor="2000's - up">2000's - up    </label></li>
                            <li><input onChange={onFilterByBuildingTypeCheckbox} checked={props.checkboxes.buildingType["pre-1930's"]} type="checkbox" className={styles.filter_type__checkbox} name="pre-1930's" id="pre-1930's" /><label htmlFor="pre-1930's">pre-1930's     </label></li>
                            <li><input onChange={onFilterByBuildingTypeCheckbox} checked={props.checkboxes.buildingType["1930's-1950's"]} type="checkbox" className={styles.filter_type__checkbox} name="1930's-1950's" id="1930's-1950's" /><label htmlFor="1930's-1950's">1930's-1950's  </label></li>
                            <li><input onChange={onFilterByBuildingTypeCheckbox} checked={props.checkboxes.buildingType["1970's-1990's"]} type="checkbox" className={styles.filter_type__checkbox} name="1970's-1990's" id="1970's-1990's" /><label htmlFor="1970's-1990's">1970's-1990's  </label></li>
                            <li><input onChange={onFilterByBuildingTypeCheckbox} checked={props.checkboxes.buildingType["1960's-1970's"]} type="checkbox" className={styles.filter_type__checkbox} name="1960's-1970's" id="1960's-1970's" /><label htmlFor="1960's-1970's">1960's-1970's  </label></li>
                            <li><input onChange={onFilterByBuildingTypeCheckbox} checked={props.checkboxes.buildingType["1950's-1960's"]} type="checkbox" className={styles.filter_type__checkbox} name="1950's-1960's" id="1950's-1960's" /><label htmlFor="1950's-1960's">1950's-1960's  </label></li>
                            <li><input onChange={onFilterByBuildingTypeCheckbox} checked={props.checkboxes.buildingType["1990's - 2000's"]} type="checkbox" className={styles.filter_type__checkbox} name="1990's - 2000's" id="1990's - 2000's" /><label htmlFor="1990's - 2000's">1990's - 2000's</label></li>
                        </ul>
                    </fieldset>
                    <fieldset className={styles.filter_type}>
                        <legend className={styles.filter_type__title}><span>Keyword</span></legend>
                        <div className={styles.filter_type_search}>
                            <input className={styles.filter_type_search__input} type="text" />
                            <input onClick={(e) => e.preventDefault()} className={styles.filter_type_search__submit} type="submit" value="search" />
                        </div>
                    </fieldset>
                    <input className={styles.filter__reset} type="reset" value="reset" />
                </div>
            </div>
        </form>
    )
}
export default Filter
