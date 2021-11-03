import {ADD_ITEM, DELETE_ITEM, INPUT_VALUE, SET_ALL_SELECT, SET_SELECT_ITEM} from './action'

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
            newState.todos.push({select: false,text:newState.text})
            newState.text = ""
            break;
        case DELETE_ITEM:
            newState.todos.splice(payload.index,1)
            break;
        case SET_SELECT_ITEM:
            newState.todos[payload.index]['select'] = !newState.todos[payload.index]['select'];
            break;
        case SET_ALL_SELECT:
            newState.todos.map(item=>{
                item.select = !item.select;
            })
            break;
        default:
            return newState
    }
    return newState
}
export default reducer