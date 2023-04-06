import { database } from "./database.js"

//Exporting functions that return copies of database arrays and objects
export const getMetals = () => {
    return database.metals.map(metal => ({...metal}))
}

export const getSizes = () => {
    return database.sizes.map(size => ({...size}))
}

export const getStyles = () => {
    return database.styles.map(style => ({...style}))
}

export const getJewelry = () => {
    return database.jewelry.map(jewel => ({...jewel}))
}

export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}

export const getOrderBuilder = () => {
    return database.orderBuilder
}


//Exporting functions whose responsibility is to set state
export const setMetal = (id) => {
    database.orderBuilder.metalId = id
}

export const setSize = (id) => {
    database.orderBuilder.sizeId = id
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id
}

export const setJewelry = (id) => {
    database.orderBuilder.jewelryId = id
}


export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1
    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


// export const addCustomOrder = () => {
//     // Copy the current state of user choices
//     const newOrder = {...database.orderBuilder}

//     // Add a new primary key to the object
//     const lastIndex = database.customOrders.length - 1
//     newOrder.id = database.customOrders[lastIndex].id + 1

//     // Add a timestamp to the order
//     newOrder.timestamp = Date.now()

//     // Add the new order object to custom orders state
//     database.customOrders.push(newOrder)

//     // Reset the temporary state for user choices
//     database.orderBuilder = {}

//     // Broadcast a notification that permanent state has changed
//     document.dispatchEvent(new CustomEvent("stateChanged"))
// }


// .map method to export database array:
// export const getOrders = () => {
//     return database.customOrders.map(customOrder => ({...customOrder}))
// }
