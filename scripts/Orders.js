import { getOrders, getMetals, getSizes, getStyles, getJewelry } from "./dataAccess.js"

const buildOrderListItem = (order) => {

const styles = getStyles()
const sizes = getSizes()
const metals = getMetals()
const jewelry = getJewelry()

 // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
)
let totalCost = foundMetal.price;

   
const foundSize = sizes.find(
    (size) => {
        return size.id === order.sizeId
    }
)
 totalCost += foundSize.price;

const foundStyle = styles.find(
    (style) => {
        return style.id === order.styleId
    }
)
    totalCost += foundStyle.price;

const foundJewelry = jewelry.find(
    (jewel) => {
        return jewel.id === order.jewelryId
    }
)
let serviceFee = foundJewelry.multiplier
    
totalCost *= serviceFee;

let costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})
    
    return `<li>
    Order #${order.id} cost ${costString} on ${new Date(order.timestamp).toLocaleDateString()}
</li>`    
}


export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = `<ul class="order-list">`

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

