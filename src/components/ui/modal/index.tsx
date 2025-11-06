"use client";

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  data?: any;
  onSave?: (updatedData: any) => void; // 👈 Callback to send updated data back
  children?: React.ReactNode;
}

const ModalCustom: React.FC<ModalProps> = ({ open, onClose, title, data, onSave, children }) => {
  const [formData, setFormData] = useState<any>(data || {});

  // Keep formData synced with external data when modal opens
  useEffect(() => {
    if (open && data) setFormData(data);
  }, [open, data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (onSave) onSave(formData);
    onClose();
  };

  if (!open) return null;

  return (
    <Modal
      show={open}
      onHide={onClose}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {children ? (
          children
        ) : (
          <>
            {/* Default form rendering (for generic editing) */}
            {Object.keys(formData).map((key) => (
              <div key={key} className="mb-3">
                <label className="form-label text-capitalize">{key}</label>
                <input
                  type="text"
                  className="form-control"
                  name={key}
                  value={formData[key] || ""}
                  onChange={handleChange}
                />
              </div>
            ))}
          </>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Cancel</Button>
        <Button variant="primary" onClick={handleSave}>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCustom;
