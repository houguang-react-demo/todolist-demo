import "./index.css"
import {connect} from "react-redux";
import {SET_ALL_SELECT} from "../../store/action";

function Index(props){
    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox" onClick={props.setAllSelect}/>
            </label>
            <span>
                <span>已完成 {props.done}</span> / 全部 {props.count}
            </span>
            <button className="btn btn-danger">清除已完成任务</button>
        </div>
    )
}

const stateToProps = state=>{
    let done = 0
    state.todos.map(item=>{
        if (item.select){
            done += 1;
        }
        return done
    })
    return {
        count:state.todos.length,
        done:done
    }
}

const dispatchToProps = dispatch=>{
    return {
        setAllSelect(){
            dispatch({type:SET_ALL_SELECT})
        }
    }
}

export default connect(stateToProps,dispatchToProps)(Index);