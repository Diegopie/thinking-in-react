import './InvoiceTable.css';
import formatCurrency from '../utils/formatCurrency';
import { useState } from 'react';


export default function InvoiceTable() {

    const [isEditing, setIsEditing] = useState(false);

    return (
        <table>
            <thead>
                {/* InvoiceTableHeader */}
                <tr>
                    <th></th>
                    <th>Description</th>
                    <th>Rate</th>
                    <th>Hours</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {/* EditableRowModeButtons */}
                    {isEditing ?
                        <td>
                            <button>Save</button>
                        </td>
                        :
                        <td>
                            <button>Delete</button>
                            <button>Edit</button>
                        </td>}
                    {/* EditableDescriptionCell */}
                    {isEditing ?
                        <td>
                            <input type="text" value='web dev' />
                        </td>
                        :
                        <td>web dev</td>}

                    {/* EditableRateCell */}
                    {isEditing ?
                        <td>
                            $<input type="text" value='25' />
                            /hr
                        </td>
                        :
                        <td>{formatCurrency(25)}/hr</td>}

                    {/* EditableHoursCell */}
                    {isEditing ?
                        <td>
                            <input type="text" value='10' />
                        </td>
                        :
                        <td>10</td>}
                        {/* Amount */}
                    <td>{formatCurrency(10000)}</td>
                </tr>
                {/* Show Editing */}
                <tr>
                    {/* EditableRowModeButtons */}
                    {isEditing ?
                        <td>
                            <button>Save</button>
                        </td>
                        :
                        <td>
                            <button>Delete</button>
                            <button>Edit</button>
                        </td>}

                    {/* EditableDescriptionCell */}
                    {isEditing ?
                        <td>
                            <input type="text" value='copy writing' />
                        </td>
                        :
                        <td>copy writing</td>}

                    {/* EditableRateCell */}
                    {isEditing ?
                        <td>
                            $<input type="text" value='20' />
                            /hr
                        </td>
                        :
                        <td>{formatCurrency(20)}/hr</td>}
                    {/* Editable Hours */}
                    {isEditing ?
                        <td>
                            <input type="text" value='8' />
                        </td>
                        :
                        <td>8</td>}

                    {/* Amount */}
                    <td>{formatCurrency(10000)}</td>
                </tr>
                
            </tbody>
            <tfoot>
                {/* InvoiceTableAddButton */}
                <tr>
                    <td></td>
                    <td colSpan="4">
                        <button>Add</button>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
}