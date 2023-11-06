import { useState } from 'react';
// Components
import InvoiceTableHeader from './InvoiceTableHeader';
import InvoiceTableAddButton from './InvoiceTableAddButton';
import InvoiceTableRow from './TableRow/InvoiceTableRow';
// Utils
import generateId from '../utils/idGenerator'
// CSS
import './InvoiceTable.css';

export default function InvoiceTable({ initialInvoiceList }) {

 
    const [invoiceList, setInvoiceList] = useState(initialInvoiceList);

    const addInvoiceRow = () => {
        const newInvoiceList = [...invoiceList];
        newInvoiceList.push({
          id: generateId(),
          description: 'Description',
          rate: '',
          hours: '',
          isEditing: true,
        });
        setInvoiceList(newInvoiceList);
      };
    
      const deleteInvoiceRow = (id) => {
        const newInvoiceList = [...invoiceList];
        const index = newInvoiceList.findIndex((invoice) => invoice.id === id);
        newInvoiceList.splice(index, 1);
        setInvoiceList(newInvoiceList);
      };

    const rows = invoiceList.map((invoiceItem) => {
        const { id, description, rate, hours } = invoiceItem;

        return (
            <InvoiceTableRow
                key={id}
                initialInvoiceData={{ description, rate, hours }}
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