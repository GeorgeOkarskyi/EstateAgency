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
 
    return (
        <div> 
            <span className={styles.filter_type__range}>
                <input type="range"
                    min="0"
                    max="99"
                    value={props.state.from}
                    onChange={onFromChange}
                    ref={fromSlider} />
                <input type="range"
                    min="1"
                    max="100"
                    value={props.state.to}
                    onChange={onToChange}
                    ref={toSlider} />
            </span>
            <p className={styles.filter_type__range__control}>
                <label htmlFor="priceFrom">From</label>
                <input value={props.state.from}
                    onChange={onFromInputChange}
                    ref={fromInput}
                    type="number" 
                    min="0"
                    max="99"/>
                <label htmlFor="priceTo">To</label>
                <input value={props.state.to}
                    onChange={onToInputChange}
                    ref={toInput}
                    type="number" 
                    min="1"
                    max="100"/>
                <input className={styles.filter_type__submit} type="submit" value="OK" />

            </p>
        </div>
    )
}




export default RagneSlider
