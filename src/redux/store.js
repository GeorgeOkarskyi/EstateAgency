import modalReducer from './reducers/modal-reducer';
import filterReducer from './reducers/filter-reducer';
// import addUserReducer from './modal-reducer';


let store = {
    _state: {
        modal: {
            show: false,
            login: true,
            regiastation: false,
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
                    image: "https://images.ua.prom.st/836252515_dizajn-kvartiri.jpg",
                    description: "Beautiful two-bedroom apartment (150 m2) on Dimitrova 4. Fully renovated, 1 balcony, 2 bathrooms (shower, bathtub, washing machine, heated floors). Elevator access directly to the underground parking. Registration.",
                    layout: [["Living Room"], ["Master Bedroom 1"], ["Guest Bedroom"], ["2 Bathrooms"]],
                    totalArea: "150 m2",
                    price: "2,700 $",
                    renovation: "Brand New",
                    building: "8 floor of 25 2000's - up No elevator",
                    layoutType: "studio",
                    location: "kyiv, 25, delovaya street",
                    city: "kyiv"
                },
                {
                    image: "https://q-cf.bstatic.com/images/hotel/max1024x768/117/117288599.jpg",
                    description: "VIP apartment on Zolotovorotskaya 13! One of the best apartments in the segment of Premium class in the city center! New elite house! 4 bedrooms, 5 bathrooms, climate control, professional kitchen, modern furniture. Parking. Available from April!",
                    layout: [["Living Room"], ["Master Bedroom 1"], ["Guest Bedroom"], ["2 Bathrooms"]],
                    totalArea: "310 m2",
                    price: "5,700 $",
                    renovation: "Brand New",
                    building: "8 floor of 25 2000's - up No elevator",
                    layoutType: "Separated Rooms",
                    location: "Odesa, 25, delovaya street",
                    city: "odesa"

                },
                {
                    image: "https://cdngeneral.rentcafe.com/dmslivecafe/3/654967/TheFLAT_Model_Overall_WEB(1).jpg?crop=(0,0,300,200)&cropxunits=300&cropyunits=200&quality=85&scale=both&",
                    description: "First time for rent! 2-room apartment (51 m2) on the street Nikolsko-Botanicheskaya 6/8. Living room with balcony, bathroom with shower, the apartment is fully furnished and equipped. In the yard there is a barrier and parking.",
                    layout: [["Living Room"], ["Master Bedroom 1"], ["Guest Bedroom"], ["2 Bathrooms"]],
                    totalArea: "345 m2",
                    price: "6,300 $",
                    renovation: "Brand New",
                    building: "8 floor of 25 2000's - up No elevator",
                    layoutType: "1 bedroom",
                    location: "lviv, 25, delovaya street",
                    city: "lviv"
                },
                {
                    image: "https://cdngeneral.rentcafe.com/dmslivecafe/3/654967/TheFLAT_Model_Overall_WEB(1).jpg?crop=(0,0,300,200)&cropxunits=300&cropyunits=200&quality=85&scale=both&",
                    description: "First time for rent! 2-room apartment (51 m2) on the street Nikolsko-Botanicheskaya 6/8. Living room with balcony, bathroom with shower, the apartment is fully furnished and equipped. In the yard there is a barrier and parking.",
                    layout: [["Living Room"], ["Master Bedroom 1"], ["Guest Bedroom"], ["2 Bathrooms"]],
                    totalArea: "345 m2",
                    price: "6,300 $",
                    renovation: "Brand New",
                    building: "8 floor of 25 2000's - up No elevator",
                    layoutType: "1 bedroom",
                    location: "lviv, 25, delovaya street",
                    city: "lviv"
                },
                {
                    image: "https://cdngeneral.rentcafe.com/dmslivecafe/3/654967/TheFLAT_Model_Overall_WEB(1).jpg?crop=(0,0,300,200)&cropxunits=300&cropyunits=200&quality=85&scale=both&",
                    description: "First time for rent! 2-room apartment (51 m2) on the street Nikolsko-Botanicheskaya 6/8. Living room with balcony, bathroom with shower, the apartment is fully furnished and equipped. In the yard there is a barrier and parking.",
                    layout: [["Living Room"], ["Master Bedroom 1"], ["Guest Bedroom"], ["2 Bathrooms"]],
                    totalArea: "345 m2",
                    price: "6,300 $",
                    renovation: "Brand New",
                    building: "8 floor of 25 2000's - up No elevator",
                    layoutType: "1 bedroom",
                    location: "lviv, 25, delovaya street",
                    city: "lviv"
                }
            ],
            sorted: [],
        },
        filter:{
            inputs:{
                priceFrom: '30',
                priceTo: '50',
                areaFrom: '20',
                areaTo: '40'
            }
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
        this._state.filter = filterReducer(this._state.filter, action);

        this._callSubscriber(this._state);

    }

}


export default store;