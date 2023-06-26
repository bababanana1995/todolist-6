import React, {ChangeEvent, useState} from "react";


type EditableSpanPropsType = {
    oldTitle: string
    callBack:(updateTitle:string)=>void
}
export const EditableSpan = (props: EditableSpanPropsType) => {
    const editFoo = () => {
        updateSetEdit(!edit)
        if(edit)addTaskHandler()
    }
    const [edit, updateSetEdit] = useState(false)
    const [updateTitle, setTitle] = useState(props.oldTitle)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const addTaskHandler=()=>{
        props.callBack(updateTitle)
    }
    return (

        edit
            ?
            <input onChange={onChangeHandler} value={updateTitle} onBlur={editFoo} autoFocus/>
            :
            <span onDoubleClick={editFoo}>{props.oldTitle}</span>

    )
}
