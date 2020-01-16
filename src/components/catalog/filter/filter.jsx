import React from 'react';
import styles from './filter.module.scss';
import 'font-awesome/css/font-awesome.min.css';
import RagneSliderAreaContainer from './rangeSlider/rangeSliderAreaContainer'  
import RagneSliderPriceContainer from './rangeSlider/rangeSliderPriceContainer'  



const Filter = () => { 
    
    return (
        <div>
            <form className={styles.form}  >
                <div className={styles.filter__wrapper}>
                    <h2>FILTER</h2>
                    <fieldset className={styles.filter_type}>
                        <legend className={styles.filter_type__title}>Price</legend>
                        <RagneSliderPriceContainer />

                    </fieldset>
                    <fieldset className={styles.filter_type}>
                        <legend className={styles.filter_type__title}><span>Number of bedrooms</span><i className="fa fa-caret-down"></i></legend>
                        <ul>
                            <li><input type="checkbox" className={styles.filter_type__checkbox} id="styled-checkbox-1"/><label htmlFor="styled-checkbox-1">Studio</label></li>
                            <li><input type="checkbox" className={styles.filter_type__checkbox} id="styled-checkbox-7"/><label htmlFor="styled-checkbox-7">1 bedroom</label></li>
                            <li><input type="checkbox" className={styles.filter_type__checkbox} id="styled-checkbox-2"/><label htmlFor="styled-checkbox-2">2 bedroom</label></li>
                            <li><input type="checkbox" className={styles.filter_type__checkbox} id="styled-checkbox-3"/><label htmlFor="styled-checkbox-3">3 bedroom</label></li>
                            <li><input type="checkbox" className={styles.filter_type__checkbox} id="styled-checkbox-4"/><label htmlFor="styled-checkbox-4">4 bedroom</label></li>
                            <li><input type="checkbox" className={styles.filter_type__checkbox} id="styled-checkbox-5"/><label htmlFor="styled-checkbox-5">5 bedroom</label></li>
                            <li><input type="checkbox" className={styles.filter_type__checkbox} id="styled-checkbox-6"/><label htmlFor="styled-checkbox-6">6 bedroom</label></li>
                            <li><input type="checkbox" className={styles.filter_type__checkbox} id="styled-checkbox-8"/><label htmlFor="styled-checkbox-8">Penthouse</label></li>
                            <li><input type="checkbox" className={styles.filter_type__checkbox} id="styled-checkbox-9"/><label htmlFor="styled-checkbox-9">Townhouse</label></li>
                        </ul>
                    </fieldset>
                    <fieldset className={styles.filter_type}>
                        <legend className={styles.filter_type__title}>Total area m2</legend>
                        <RagneSliderAreaContainer />
                    </fieldset>
     
                    <fieldset className={styles.filter_type}>
                        <legend  className={styles.filter_type__title}><span>Building Type</span><i className="fa fa-caret-down"></i></legend>
                
                            <ul >
                                <li><input type="checkbox" className={styles.filter_type__checkbox} id="styled-checkbox-10"/><label htmlFor="styled-checkbox-10">2000's - up</label></li>
                                <li><input type="checkbox" className={styles.filter_type__checkbox} id="styled-checkbox-11"/><label htmlFor="styled-checkbox-11">pre-1930's</label></li>
                                <li><input type="checkbox" className={styles.filter_type__checkbox} id="styled-checkbox-12"/><label htmlFor="styled-checkbox-12">1930's-1950's</label></li>
                                <li><input type="checkbox" className={styles.filter_type__checkbox} id="styled-checkbox-13"/><label htmlFor="styled-checkbox-13">1970's-1990's</label></li>
                                <li><input type="checkbox" className={styles.filter_type__checkbox} id="styled-checkbox-14"/><label htmlFor="styled-checkbox-14">1960's-1970's</label></li>
                                <li><input type="checkbox" className={styles.filter_type__checkbox} id="styled-checkbox-15"/><label htmlFor="styled-checkbox-15">1950's-1960's</label></li>
                                <li><input type="checkbox" className={styles.filter_type__checkbox} id="styled-checkbox-16"/><label htmlFor="styled-checkbox-16">1990's - 2000's</label></li>
                                
                            </ul>
           
                        
                    </fieldset>
 
                    <fieldset className={styles.filter_type}>

                        <legend className={styles.filter_type__title}><span>Last Renovation</span><i className="fa fa-caret-down"></i></legend>
                        <ul>
                            <li><input type="checkbox" className={styles.filter_type__checkbox} id="styled-checkbox-17"/><label htmlFor="styled-checkbox-17">Studio</label></li>
                            <li><input type="checkbox" className={styles.filter_type__checkbox} id="styled-checkbox-18"/><label htmlFor="styled-checkbox-18">1 bedroom</label></li>
                            <li><input type="checkbox" className={styles.filter_type__checkbox} id="styled-checkbox-19"/><label htmlFor="styled-checkbox-19">2 bedroom</label></li>
                            <li><input type="checkbox" className={styles.filter_type__checkbox} id="styled-checkbox-20"/><label htmlFor="styled-checkbox-20">3 bedroom</label></li>
                        </ul>
                    </fieldset>
                    <fieldset className={styles.filter_type}>
                        <legend className={styles.filter_type__title}><span>Keyword</span></legend>
                        <div className={styles.filter_type_search}>
                            <input className={styles.filter_type_search__input} type="text"/> 
                            <input className={styles.filter_type_search__submit} type="submit" value="search"/>
                        </div>
                    </fieldset>
                    <input className={styles.filter__reset} type="reset" value="reset"/>
                </div>
            </form>
        </div>
    )
}




export default Filter
