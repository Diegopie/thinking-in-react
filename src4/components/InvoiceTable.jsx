import './InvoiceTable.css';
import formatCurrency from '../utils/formatCurrency';
import { useState } from 'react';

import InvoiceTableHeader from './InvoiceTableHeader';
import InvoiceTableAddButton from './InvoiceTableAddButton';
import InvoiceTableRow from './TableRow/InvoiceTableRow';


export default function InvoiceTable() {

    const [isEditing, setIsEditing] = useState(false);

    return (
        <table>
            <thead>
                {/* InvoiceTableHeader */}
                <InvoiceTableHeader />
            </thead>
            <tbody>
                <InvoiceTableRow initialInvoiceData={
                    { description: 'Web Development', rate: 25, hours: 10 }}
                    initialIsEditing={false}
                />
                {/* Show Editing */}
                
                <InvoiceTableRow initialInvoiceData={
                    { description: 'Copy Editing', rate: 20, hours: 8 }}
                    initialIsEditing={false}
                />
            </tbody>
            <tfoot>
                {/* InvoiceTableAddButton */}
                <InvoiceTableAddButton />
            </tfoot>
        </table>
    );
}