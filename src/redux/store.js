let store = {
    _state: {
        homePage: {
            header: 'header'
        }
    },
    _callSubscriber(){
        console.log('state has been changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer){

    },
    dispatch(action){
        this._state.homePage.header = homePageReducer(this._state.homePage, action)
        this._callSubscriber()
    }

}
