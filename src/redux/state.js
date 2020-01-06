import modalReducer from './modal-reducer';
// import addUserReducer from './modal-reducer';


let store = {
    _state: {
        modal: {
            show: false,
            users: [
                {
                    name: "Petro Ivanov",
                    email: "petro.ivanov@gmail.com",
                    password: "petro1202"
                }
            ],
            input: {
                name: '',
                email: '',
                password: ''
            }
        },
        slider: {
            image1: ''
        },
        properties: {
            current: [
                {
                    description: "Beautiful two-bedroom apartment (150 m2) on Dimitrova 4. Fully renovated, 1 balcony, 2 bathrooms (shower, bathtub, washing machine, heated floors). Elevator access directly to the underground parking. Registration.",
                    layout: [["Living Room"], ["Master Bedroom 1"], ["Guest Bedroom"], ["2 Bathrooms"]],
                    totalArea: "150 m2",
                    price: "2,700 $",
                    renovation: "Brand New",
                    building: "8 floor of 25 2000's - up No elevator",
                    layoutType: "studio",
                    location: "kyiv, 25, delovaya street"
                }
            ],
            sorted: [],
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
        this._state.modal = modalReducer(this._state.modal, action);
        // addUserReducer(this._state.users, action);

        this._callSubscriber(this._state);

    }

}


export default store;