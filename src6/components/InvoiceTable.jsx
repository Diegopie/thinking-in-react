import './InvoiceTable.css';
// This function was moved to a component
// import formatCurrency from '../utils/formatCurrency';
import { useState } from 'react';

import InvoiceTableHeader from './InvoiceTableHeader';
import InvoiceTableAddButton from './InvoiceTableAddButton';
import InvoiceTableRow from './TableRow/InvoiceTableRow';


export default function InvoiceTable({ initialInvoiceList }) {

    // * This state is only ever passed as a prop to row, so we can move it to Row component
    // const [isEditing, setIsEditing] = useState(false);
    const [invoiceList, setInvoiceList] = useState(initialInvoiceList);

    const rows = invoiceList.map((invoiceItem) => {
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