import { getStyles, setStyle, getOrderBuilder } from "./dataAccess.js"

const styles = getStyles()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

export const JewelryStyles = () => {
    const orderBuilder = getOrderBuilder()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(style => {
        let checked = ``
        if (orderBuilder.styleId === style.id) {
            checked = `checked="true"`
        }
      return `<li>
      <input type="radio" name="style" value="${style.id}" ${checked}/> ${style.style} </li>`        
        })


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}