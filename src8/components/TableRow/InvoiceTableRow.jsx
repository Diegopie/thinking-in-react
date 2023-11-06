import { useState } from "react";
// Components
import EditableRowModeButtons from "./EditableRowModButtons";
import EditableDesctiption from "./EditableDesctiptionCell";
import EditableRateCell from "./EditableRateCell";
import EditableHoursCell from "./EditableHoursCell";
// Utils
import formatCurrency from "../../utils/formatCurrency";
import axios from 'axios';


export default function InvoiceTableRow({ initialInvoiceData, initialIsEditing, onDeleteRow }) {

  // Moved is editing to Row
  const [isEditing, setIsEditng] = useState(initialIsEditing);

  const setEditMode = () => setIsEditng(true);

  const setNormalMode = async () => {
  const { data } = await axios.put(`/api/invoice/${initialInvoiceData.id}`, {
    description,
    rate,
    hours,
  });

  if (!data.error) {
    setDescription(data.description);
    setRate(data.rate);
    setHours(data.hours);
  }

  setIsEditng(false);
};

  const [description, setDescription] = useState(initialInvoiceData.description);
  const [rate, setRate] = useState(initialInvoiceData.rate);
  const [hours, setHours] = useState(initialInvoiceData.hours);

  return (
    <tr>
      {/* Pass Inverse Data To Row Buttons */}
      <EditableRowModeButtons 
        isEditing={isEditing} 
        onEditClick={setEditMode}
        onSaveClick={setNormalMode}
        onDeleteRow={onDeleteRow}
      />
      <EditableDesctiption 
        value={description}
        isEditing={isEditing} 
        onValueChange={setDescription}
      />
      <EditableRateCell 
        value={rate}
        isEditing={isEditing} 
        onValueChange={setRate}
      />
      <EditableHoursCell 
        value={hours}
        isEditing={isEditing}
        onValueChange={setHours}
        />
      <td>{formatCurrency(rate * hours)}</td>
    </tr>
  );
}
