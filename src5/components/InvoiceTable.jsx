import './InvoiceTable.css';
import formatCurrency from '../utils/formatCurrency';
import { useState } from 'react';

import InvoiceTableHeader from './InvoiceTableHeader';
import InvoiceTableAddButton from './InvoiceTableAddButton';
import InvoiceTableRow from './TableRow/InvoiceTableRow';


export default function InvoiceTable({ initialInvoiceList }) {

    const rows = initialInvoiceList.map((invoiceItem) => {
        const { id, description, rate, hours } = invoiceItem;

        return (
            <InvoiceTableRow
                key={id}
                initialInvoiceData={{ description, rate, hours }}
                initialIsEditing={false}
            />
        );
    });


    return (
        <table>
            <thead>
                {/* InvoiceTableHeader */}
                <InvoiceTableHeader />
            </thead>
            <tbody>{rows}</tbody>
            <tfoot>
                {/* InvoiceTableAddButton */}
                <InvoiceTableAddButton />
            </tfoot>
        </table>
    );
}