import { useState } from 'react';
// Components
import InvoiceTableHeader from './InvoiceTableHeader';
import InvoiceTableAddButton from './InvoiceTableAddButton';
import InvoiceTableRow from './TableRow/InvoiceTableRow';
// Utils
import axios from 'axios';
// CSS
import './InvoiceTable.css';

export default function InvoiceTable({ initialInvoiceList }) {


    const [invoiceList, setInvoiceList] = useState(initialInvoiceList);

    const addInvoiceRow = async () => {
        const { data } = await axios.post('/api/invoice', { description: 'Description' });

        const newInvoice = { ...data, isEditing: true };
        setInvoiceList([...invoiceList, newInvoice]);
    };

    const deleteInvoiceRow = async (id) => {
        const { data } = await axios.delete(`/api/invoice/${id}/delete`);

        if (!data.error) {
            const newInvoiceList = [...invoiceList];

            const index = newInvoiceList.findIndex((invoice) => invoice.id === data.id);
            newInvoiceList.splice(index, 1);
            setInvoiceList(newInvoiceList);
        }
    };

    const rows = invoiceList.map((invoiceItem) => {
        const { id, description, rate, hours } = invoiceItem;

        return (
            <InvoiceTableRow
                key={id}
                initialInvoiceData={{ id, description, rate, hours }}
                initialIsEditing={false}
                onDeleteRow={() => deleteInvoiceRow(id)}
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
                <InvoiceTableAddButton onClick={addInvoiceRow} />
            </tfoot>
        </table>
    );
}