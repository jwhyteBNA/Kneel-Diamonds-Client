/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

    ERD: https://dbdiagram.io/d/63d43ae8296d97641d7ca544

*/

export const database = {
    styles: [
        { id: 1, style: "Classic", price: 500 },
        { id: 2, style: "Modern", price: 710 },
        { id: 3, style: "Vintage", price: 965 }
    ],
    sizes: [
        { id: 1, carets: 0.5, price: 405 },
        { id: 2, carets: 0.75, price: 782 },
        { id: 3, carets: 1, price: 1470 },
        { id: 4, carets: 1.5, price: 1997 },
        { id: 5, carets: 2, price: 3638 }
    ],
    metals: [
        { id: 1, metal: "Sterling Silver", price: 400.42 },
        { id: 2, metal: "14K Gold", price: 736.4 },
        { id: 3, metal: "24K Gold", price: 1258.9 },
        { id: 4, metal: "Platinum", price: 795.45 },
        { id: 5, metal: "Palladium", price: 1241.0 }
    ],
    jewelry: [
        { id: 1, type: "Ring", multiplier: 1 },
        { id: 2, type: "Necklace", multiplier: 2 },
        { id: 3, type: "Earring", multiplier: 4 },
    ],
    customOrders: [
        {
            id: 1,
            metalId: 3,
            sizeId: 2,
            styleId: 3,
            jewelryId: 2,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {
        metalId: 0,
        sizeId: 0,
        styleId: 0,
        jewelryId: 0,
        timestamp: 0
    },
}