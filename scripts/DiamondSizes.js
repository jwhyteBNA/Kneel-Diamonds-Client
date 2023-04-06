import { getSizes , setSize, getOrderBuilder } from "./dataAccess.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

export const DiamondSizes = () => {
    const orderBuilder = getOrderBuilder()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        let checked = ``
        if (orderBuilder.sizeId === size.id) {
            checked = `checked="true"`
        }
            return `<li>
            <input type="radio" name="size" value="${size.id}" ${checked}/> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}