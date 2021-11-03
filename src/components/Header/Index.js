import {ADD_ITEM, INPUT_VALUE} from "../../store/action";
import {connect} from "react-redux";
import './index.css';

const Index = (props) => {
    const {value, text, onChange, onKeyPress} = props
    return (
        <div className="todo-header">
            <input
                type="text"
                placeholder={value}
                value={text || ''}
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
            console.log(e.target.value)
            dispatch({type: INPUT_VALUE, payload: {value: e.target.value}})
        },
        onKeyPress:e=>{
            if (e.charCode === 13 && e.target.value){
                dispatch({type:ADD_ITEM})
            }
        }
    }
}

export default connect(stateToProps, dispatchToProps)(Index)