import { getJewelry, setJewelry } from "./dataAccess.js"

const jewelry = getJewelry()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "jewel") {
            setJewelry(parseInt(event.target.value))
        }
    }
)

export const JewelryTypes = () => {
    let html = `<ul class="jewerlyTypes">`

    // Use .map() for converting objects to <li> elements
    const listItems = jewelry.map(jewel => {
        return `<li>
            <input type="radio" name="jewel" class="gem" value="${jewel.id}" /> ${jewel.type}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}
