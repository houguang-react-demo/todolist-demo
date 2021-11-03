import './index.css';
import {connect} from "react-redux";
import {SET_SELECT_ITEM} from "../../store/action";

function Index(props){
    return (
        <li
            onMouseOver={props.mouseOver}
            onMouseOut={props.mouseOut}
        >
            <label>
                <input
                    type="checkbox"
                    checked={props.todo.select}
                    onClick={()=>props.setSelect(props.index)}
                    onChange={props.selectChange}
                />
                <span>{props.todo.text}</span>
            </label>
            <button
                className="btn btn-danger"
                style={{display:props.showDeleteButton?'block':'none'}}
            >删除</button>
        </li>
    )
}

const stateToProps = (state) => {
    return {
        showDeleteButton:0
    }
}

const dispatchToProps = dispatch=>{
    return {
        setSelect(index){
            console.log(index)
            dispatch({type:SET_SELECT_ITEM,payload:{index:index}})
        },
        selectChange(){},
        mouseOver(){},
        mouseOut(){}
    }
}

export default connect(stateToProps,dispatchToProps)(Index);