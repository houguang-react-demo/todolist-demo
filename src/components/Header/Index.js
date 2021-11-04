import {ADD_ITEM} from "../../store/action";
import {connect} from "react-redux";
import './index.css';

const Index = (props) => {
    const {value, onChange, onKeyPress} = props
    return (
        <div className="todo-header">
            <input
                type="text"
                placeholder={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
        </div>
    )
}

const stateToProps = (state) => {
    return {
        placeholder: state.placeholder,
        text: state.text,
    }
}
const dispatchToProps = (dispatch) => {
    return {
        onChange: e => {
            //发送dispatch时会导致重新渲染
            //dispatch({type: INPUT_VALUE, payload: {value: e.target.value}})
        },
        onKeyPress:e=>{
            if (e.charCode === 13 && e.target.value){
                dispatch({type:ADD_ITEM,payload:{text:e.target.value}})
                e.target.value = ''
            }
        }
    }
}

export default connect(stateToProps, dispatchToProps)(Index)