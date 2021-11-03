import Item from '../Item/Index'
import "./index.css";
import {connect} from "react-redux";

function Index(props){

    const nullTips = (
        <div style={{textAlign:"center",padding:"10px"}}>
            {props.nullTip}
        </div>
    )

    const list = (
        <ul className="todo-main">
            {props.todos.map((todo,index)=>(
                <Item todo={todo} index={index} key={index}/>
            ))}
        </ul>
    )
    return (
        <>
            {props.todos.length ===0 ? nullTips:list}
        </>
    )
}

const stateToProps = (state)=>{
    return {
        todos:state.todos,
        nullTip: state.nullTip
    }
}

const dispatchToProps = dispatch=>{
    return {
        select_item(index){},
        delete_item(index){},
    }
}

export default connect(stateToProps,dispatchToProps)(Index);