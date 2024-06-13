import React, { useState } from 'react';
import axios from 'axios';

export default function DeleteStudent() {
  const [showModal, setShowModal] = useState(false);
  const [studentId, setStudentId] = useState("ST001"); 

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/users/${studentId}`);
      setShowModal(false);
      alert('Sinh viên đã được xóa thành công!');
    } catch (error) {
      alert('Lỗi khi xóa sinh viên');
      console.error(error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <button onClick={openModal} className="btn btn-danger">Xóa Sinh Viên</button>

      {showModal && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={(e) => {
                e.preventDefault();
                handleDelete();
              }}>
                <div className="modal-header">
                  <h4 className="modal-title">Xóa nhân viên</h4>
                  <button
                    type="button"
                    className="close"
                    onClick={closeModal}
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <p>Bạn chắc chắn muốn xóa sinh viên {studentId}?</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    onClick={closeModal}
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="btn btn-danger"
                  >
                    Xóa
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
