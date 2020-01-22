import React from 'react';
import styles from './rangeSlider.module.scss';



const RagneSlider = (props) => { 
    let fromSlider = React.createRef();
    let toSlider = React.createRef();
    let fromInput = React.createRef();
    let toInput = React.createRef();
    let onFromChange = () => {
        let textTo = toSlider.current.value; 
        let textFrom = fromSlider.current.value;
        props.changeFromText(textTo, textFrom) 
    }
    let onFromInputChange = () => {
        let textTo = toInput.current.value; 
        let textFrom = fromInput.current.value;
        props.changeFromText(textTo, textFrom) 
    }
    let onToChange = () => {
        let textTo = toSlider.current.value; 
        let textFrom = fromSlider.current.value;
        props.changeToText(textTo, textFrom) 
    }
    let onToInputChange = () => {
        let textTo = toInput.current.value; 
        let textFrom = fromInput.current.value;
        props.changeToText(textTo, textFrom) 
    }
    let onFilter = (e) =>{
        e.preventDefault();
        let to = toInput.current.value; 
        let from = fromInput.current.value;
        props.filter(from, to)
    }
    return (
        <div> 
            <span className={styles.filter_type__range}>
                <input type="range"
                    min="0"
                    max="9999"
                    value={props.valueOfSlider.from}
                    onChange={onFromChange}
                    ref={fromSlider} />
                <input type="range"
                    min="1"
                    max="10000"
                    value={props.valueOfSlider.to}
                    onChange={onToChange}
                    ref={toSlider} />
            </span>
            <p className={styles.filter_type__range__control}>
                <label htmlFor="priceFrom">From</label>
                <input value={props.valueOfSlider.from}
                    onChange={onFromInputChange}
                    ref={fromInput}
                    type="number" 
                    min="0"
                    max="9999"/>
                <label htmlFor="priceTo">To</label>
                <input value={props.valueOfSlider.to}
                    onChange={onToInputChange}
                    ref={toInput}
                    type="number" 
                    min="1"
                    max="10000"/>
                <input onClick={onFilter} className={styles.filter_type__submit} type="submit" value="OK" />
            </p>
        </div>
    )
}




export default RagneSlider
