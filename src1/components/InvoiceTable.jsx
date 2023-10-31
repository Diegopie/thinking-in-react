import './InvoiceTable.css';
import formatCurrency from '../utils/formatCurrency';
import { useState } from 'react';


export default function InvoiceTable() {

    // Skeleton of the static app
    
    // const [isEditing, setIsEditing] = useState(false);

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
                   
                   

                </tr>

                {/* Show Editing */}
                <tr>
                   
                      

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