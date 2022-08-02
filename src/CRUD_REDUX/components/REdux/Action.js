import { Types } from "./Type"

export const AddType = (data) => {
    return {
        type: Types.add,
        payload: data
    }
}
export const EditFun = (data) => {
    return {
        type: Types.edit,
        payload: data
    }
}
export const Del = (data) => {
    return {
        type: Types.del,
        payload: data
    }
}
export const Show = (data) => {
    return {
        type: Types.chan,
        payload: data
    }
}