import formatCurrency from "../../utils/formatCurrency"

export default function EditableRateCell (props) {
    return (
    props.isEditing ?
        <td>
            $<input type="text" value={props.value} />
            /hr
        </td>
        :
        <td>{formatCurrency(props.value)}/hr</td>
    )
}