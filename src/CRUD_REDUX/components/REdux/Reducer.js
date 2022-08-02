import { Types } from "./Type"

export const InitialState = {
    data: JSON.parse(localStorage.getItem('data')) || [],
    change: {}
}


export const ReducerFun = (state = InitialState, { type, payload }) => {
    switch (type) {
        case Types.add:
            localStorage.setItem('data', JSON.stringify([...state.data, payload]))
            console.log(payload);
            return {
                ...state,
                data: JSON.parse(localStorage.getItem('data'))
            }
        case Types.chan:
            return {
                ...state,
                chan: payload
            }
        case Types.edit:
            localStorage.setItem('data', JSON.stringify(state.data.map((val) => val.id === state.change.id ? payload : val)))
            return {
                ...state, data: JSON.parse(localStorage.getItem('data'))
            }
        case Types.del:
            localStorage.setItem('data', JSON.stringify(state.data.filter((val) => val.id !== payload.id)))
            return {
                ...state, data: JSON.parse(localStorage.getItem('data'))
            }
        default:
            return state
    }
}