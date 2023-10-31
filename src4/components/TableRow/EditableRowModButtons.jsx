export default function (props) {
    return (
        props.isEditing ?
            <td>
                < button > Save</button >
            </td >
            :
            <td>
                <button>Delete</button>
                <button>Edit</button>
            </td>
    )
}