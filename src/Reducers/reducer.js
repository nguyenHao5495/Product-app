
const initialState = {
    getStore: false,
}

function Reducer(state = initialState, actions = {}) {
    switch (actions.type) {
        case "DATA_SUCCESS":
            return {
                ...actions,
                getStore: true
            }
        default:
    }

    return state;
}

export { Reducer } 
