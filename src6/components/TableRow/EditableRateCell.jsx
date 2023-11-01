import formatCurrency from "../../utils/formatCurrency"

export default function EditableRateCell (props) {
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
        <td>{formatCurrency(props.value)}/hr</td>
    )
}