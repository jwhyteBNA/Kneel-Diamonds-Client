import { getMetals , setMetal, getOrderBuilder } from "./dataAccess.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

// Original Change Event to Display Choice
// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "metal") {
//             window.alert(`User chose metal ${event.target.value}`)
//         }
//     }
// )

export const Metals = () => {
    const orderBuilder = getOrderBuilder()
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        let checked = ``
        if (orderBuilder.metalId === metal.id) {
            checked = `checked="checked"`
        }
            html += `<li>
            <input type="radio" name="metal" value="${metal.id}" ${checked} /> ${metal.metal}
        </li>`
    }
    html += "</ul>"
    return html
}

