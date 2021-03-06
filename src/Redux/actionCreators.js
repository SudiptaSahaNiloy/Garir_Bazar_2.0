import axios from "axios";
import * as actionTypes from './actionTypes';

export const loadCars = (cars) => {
    // console.log(cars);
    return {
        type: actionTypes.LOAD_CARS,
        payload: cars,
    }
}

export const selectedCar = (car) => {
    return {
        type: actionTypes.SELECTED_CAR,
        payload: car,
    }
}

export const Car = () => dispatch => {
    axios.get('http://localhost:3001/CarCollection')
        .then(response => dispatch(loadCars(response.data)))
}

export const postInvoiceInfo = (carName, carPrice, customerName, date) => dispatch => {
    let invoiceData = {
        carName: carName,
        carPrice: carPrice,
        customerName: customerName,
        date: date
    }

    axios.post('http://localhost:3001/Invoice', invoiceData)
        .then(response => console.log(response.data))
}
