
let store = {
    _state: {
        modal:{
            show: false
        },
        slider: {
            image1: ''
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('no subscribers');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === "SHOW-MODAL") {
            this._state.modal.show = true;
            this._callSubscriber(this._state);
        } else if (action.type === "CLOSE-MODAL") {
            this._state.modal.show = false;
            this._callSubscriber(this._state);
        }
    }
}

export const showModalActionCreator = () => {
    return {
        type: "SHOW-MODAL"
    }
}
export const closeModalActionCreator = () => {
    return {
        type: "CLOSE-MODAL"
    }
}

export default store;