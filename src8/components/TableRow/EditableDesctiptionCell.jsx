export default function EditableDesctiption ({value, onValueChange, isEditing}) {
    return (
        isEditing ?
            <td>
                <input 
                    type="text"
                    value={value}
                    onChange={(e) => onValueChange(e.target.value)}
                />
            </td>
            :
            <td>{value}</td>
    )
}