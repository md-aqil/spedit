import React from "react";

function ConfirmationModal({ isOpen, title, message, onCancel, onConfirm, confirmText, cancelText, confirmButtonClass }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[400px]">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <p className="text-sm mb-4">{message}</p>
        <div className="flex justify-end gap-3">
          <button className="btn btn-outline" onClick={onCancel}>
            {cancelText || "Cancel"}
          </button>
          <button className={`btn ${confirmButtonClass}`} onClick={onConfirm}>
            {confirmText || "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
