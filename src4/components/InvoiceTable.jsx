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
                    initialIsEditing={isEditing}
                />
                {/* Show Editing */}
                
                <InvoiceTableRow initialInvoiceData={
                    { description: 'Copy Editing', rate: 20, hours: 8 }}
                    initialIsEditing={isEditing}
                />
                <InvoiceTableRow initialInvoiceData={
                    { description: 'Copy Editing three', rate: 20, hours: 8 }}
                    initialIsEditing={isEditing}
                />
                <InvoiceTableRow initialInvoiceData={
                    { description: 'Copy Editing four', rate: 20, hours: 8 }}
                    initialIsEditing={isEditing}
                />
            </tbody>
            <tfoot>
                {/* InvoiceTableAddButton */}
                <InvoiceTableAddButton />
            </tfoot>
        </table>
    );
}