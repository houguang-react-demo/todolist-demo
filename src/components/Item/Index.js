import './index.css';
import {connect} from "react-redux";
import {DELETE_ITEM, SET_SELECT_ITEM} from "../../store/action";
import {useState} from "react";

const Index = (props) => {

    const [mouse, setMouse] = useState(false);
    return (
        <li
            onMouseEnter={() => setMouse(true)}
            onMouseLeave={() => setMouse(false)}
            style={{backgroundColor: mouse ? '#ccc' : 'white'}}
        >
            <label>
                <input
                    type="checkbox"
                    checked={props.todo.select}
                    onChange={()=>{}}
                    onClick={() => props.setSelect(props.index)}
                />
                <span>{props.todo.text}</span>
            </label>
            <button
                className="btn btn-danger"
                style={{display: mouse ? 'block' : 'none'}}
                onClick={() => props.deleteItem(props.index)}
            >删除
            </button>
        </li>
    )
}

const stateToProps = (state) => {
    return {
        showDeleteButton: 1,
        ...state
    }
}

const dispatchToProps = dispatch => {
    return {
        setSelect(index) {
            console.log(index)
            dispatch({type: SET_SELECT_ITEM, payload: {index}})
        },
        deleteItem(index) {
            if (window.confirm("确定要删除吗?")) {
                dispatch({type: DELETE_ITEM, payload: {index}})
            }
        }
    }
}

export default connect(stateToProps, dispatchToProps)(Index);