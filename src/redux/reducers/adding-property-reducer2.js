import {catalogAPI} from "../../api/api";

let initialState = {
}


const addingPropertyReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return {
                ...state
            };
        }
    }
}
export default addingPropertyReducer


export const addProperty = (property) =>  (dispatch) => {

    catalogAPI.addProperty(processPropertyObject(property))
        .then((data) => {
            alert("new property added")
            window.location.reload(false);
        }
    )
};
function processPropertyObject(property){
    console.log(property)
    return {...property,
            area: processPropertyArea(property.area),
            images: setTempImages(),
            coordinates: processCoordinates(property.coordinates)
    }
}
function processPropertyArea(area){
    const arrayOfAreaInfo = area.split(',')
    return {
        "totalArea": arrayOfAreaInfo[0],
        "kitchen": arrayOfAreaInfo[1],
        "bedroom": arrayOfAreaInfo[2]
    }
}
function setTempImages(){
    return [
        {
            "original": "https://s3.amazonaws.com/productuploader-uploads/staging/19/Image/58866_1506526850_glassy_isola_1.jpg",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPx3V3Xk3w99e5hnpim9O0R3clxVJbhxDnG2kmrd6JkGJje181&s"
        },
        {
            "original": "https://s3.amazonaws.com/productuploader-uploads/staging/19/Image/58866_1506526850_glassy_isola_1.jpg",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPx3V3Xk3w99e5hnpim9O0R3clxVJbhxDnG2kmrd6JkGJje181&s"
        },
        {
            "original": "https://s3.amazonaws.com/productuploader-uploads/staging/19/Image/58866_1506526850_glassy_isola_1.jpg",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPx3V3Xk3w99e5hnpim9O0R3clxVJbhxDnG2kmrd6JkGJje181&s"
        }
    ]
}
function processCoordinates(coordinates){
    const coordinatesArray = coordinates.split(',')
    return {
        "lat": coordinatesArray[0],
        "lng": coordinatesArray[1]
    }
}
