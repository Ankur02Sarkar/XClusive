// Here we define all application level States and Define actions to make the changes to the state

export const initialState = {
    basket : [],
}

// Selector
const reducer = (state, action) => {
    // eslint-disable-next-line
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
    }
}

export default reducer;