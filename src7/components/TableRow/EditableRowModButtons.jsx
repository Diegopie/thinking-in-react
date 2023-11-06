export default function (props) {
    return (
        props.isEditing ?
            <td>
                < button onClick={props.onSaveClick}> Save</button >
            </td >
            :
            <td>
                <button onClick={props.onDeleteRow}>Delete</button>
                <button onClick={props.onEditClick}>Edit</button>
            </td>
    )
}