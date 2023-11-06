export default function EditableRowModButtons (props) {
    return (
        props.isEditing ?
            <td>
                < button onClick={props.onSaveClick}> Save</button >
            </td >
            :
            <td>
                <button>Delete</button>
                <button onClick={props.onEditClick}>Edit</button>
            </td>
    )
}