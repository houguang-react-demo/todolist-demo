import {ADD_ITEM, DELETE_ITEM, DELETE_SELECTED_ITEM, INPUT_VALUE, SET_ALL_SELECT, SET_SELECT_ITEM} from './action'
import {pullAt} from "lodash/array";

const defaultData = {
    placeholder:"请输入",
    text:'',
    nullTip:'暂无数据',
    todos:[]
}

const reducer = (state = defaultData, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    const {type,payload} = action
    switch (type){
        case INPUT_VALUE:
            newState.text = payload.value
            break;
        case ADD_ITEM:
            newState.todos.unshift({select: false,text:newState.text})
            newState.text = ""
            break;
        case DELETE_ITEM:
            newState.todos.splice(payload.index,1)
            break;
        case DELETE_SELECTED_ITEM:
            let index = []
            newState.todos.forEach((item,i)=>{
                if (item.select){
                    index.push(i)
                }
            })
            pullAt(newState.todos,index)
            break;
        case SET_SELECT_ITEM:
            newState.todos[payload.index]['select'] = !newState.todos[payload.index]['select'];
            break;
        case SET_ALL_SELECT:
            newState.todos.map(item=>{
                item.select = !item.select;
                return item
            })
            break;
        default:
            return newState
    }
    return newState
}
export default reducer