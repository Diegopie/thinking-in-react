// Components
import EditableRowModeButtons from "./EditableRowModButtons";
import EditableDesctiption from "./EditableDesctiptionCell";
import EditableRateCell from "./EditableRateCell";
import EditableHoursCell from "./EditableHoursCell";
// Utils
import formatCurrency from "../../utils/formatCurrency";




export default function InvoiceTableRow({ initialInvoiceData, initialIsEditing }) {

  const { description, rate, hours } = initialInvoiceData;

  return (
    <tr>
      <EditableRowModeButtons isEditing={initialIsEditing} />
      <EditableDesctiption value={description} isEditing={initialIsEditing} />
      <EditableRateCell value={rate} isEditing={initialIsEditing} />
      <EditableHoursCell value={hours} isEditing={initialIsEditing} />
      <td>{formatCurrency(rate * hours)}</td>
    </tr>
  );
}
