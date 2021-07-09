import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/"
})

export const catalogAPI = {
    getProperties(){
        return instance.get('properties')
            .then(res => {
               return res.data
            })
    },
    addProperty(property){
        return instance.post('properties', property)
            .then(res => {
                return res.data
            })
            .catch(error => {
                console.log(error);
            });
    }
}
