export default function EditableHoursCell(props) {
    return (
    props.isEditing ?
        <td>
            <input type="text" value={props.value}/>
        </td>
        :
        <td>{props.value}</td>
    )
}