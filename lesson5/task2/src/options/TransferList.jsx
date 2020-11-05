import React from 'react';
import AvailableOptions from './availableOptions';
import SelectedOptions from "./selectedOptions";

const TransferList = () => {
  return (
    <div className="transfer-list">
      <AvailableOptions title="Available options" />
      <SelectedOptions title="Selected options" />
    </div>
  )
}

export default TransferList;