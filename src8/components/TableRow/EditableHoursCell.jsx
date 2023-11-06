export default function EditableHoursCell(props) {
    return (
    props.isEditing ?
        <td>
            <input 
                type="text" 
                value={props.value}
                onChange={(e) => props.onValueChange(e.target.value)}
            />
        </td>
        :
        <td>{props.value}</td>
    )
}