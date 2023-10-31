import './InvoiceTable.css';
import formatCurrency from '../utils/formatCurrency';
import { useState } from 'react';

import InvoiceTableHeader from './InvoiceTableHeader';
import EditableRowModButtons from './EditableRowModButtons';
import EditableDesctiption from './EditableDesctiptionCell';
import EditableRateCell from './EditableRateCell';
import EditableHoursCell from './EditableHoursCell';
import InvoiceTableAddButton from './InvoiceTableAddButton';


export default function InvoiceTable() {

    const [isEditing, setIsEditing] = useState(false);

    return (
        <table>
            <thead>
                {/* InvoiceTableHeader */}
                <InvoiceTableHeader />
            </thead>
            <tbody>
                <tr>
                    {/* EditableRowModeButtons */}
                    <EditableRowModButtons isEditing={isEditing} />
                    {/* EditableDescriptionCell */}
                    <EditableDesctiption value='web dev' isEditing={isEditing} />

                    {/* EditableRateCell */}
                    <EditableRateCell value={25} isEditing={isEditing} />

                    {/* EditableHoursCell */}
                    <EditableHoursCell value={10} isEditing={isEditing}/>
                    {/* Amount */}
                    <td>{formatCurrency(10000)}</td>
                </tr>
                {/* Show Editing */}
                <tr>
                    {/* EditableRowModeButtons */}
                    <EditableRowModButtons isEditing={isEditing} />
                    {/* EditableDescriptionCell */}
                    <EditableDesctiption value='Copy Writing' isEditing={isEditing} />

                    {/* EditableRateCell */}
                    <EditableRateCell value={20} isEditing={isEditing} />

                    {/* EditableHoursCell */}
                    <EditableHoursCell value={8} isEditing={isEditing}/>
                    {/* Amount */}
                    <td>{formatCurrency(10000)}</td>
                </tr>

            </tbody>
            <tfoot>
                {/* InvoiceTableAddButton */}
                <InvoiceTableAddButton />
            </tfoot>
        </table>
    );


}