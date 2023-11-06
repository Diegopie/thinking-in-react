export default function InvoiceTableAddButton(props) {
    return (
        <tr>
            <td></td>
            <td colSpan="4">
                <button onClick={props.onClick}>Add</button>
            </td>
        </tr>
    )
}