import React, { useState } from 'react';
import axios from 'axios';

export default function UpdateStudent() {
    const [studentId, setStudentId] = useState(''); 
    const [studentName, setStudentName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
  
    const handleUpdate = async (event:any) => {
      event.preventDefault();
      try {
        const response = await axios.put(`http://localhost:8080/users/${studentId}`, {
          name: studentName,
          email: email,
          address: address,
          phone: phoneNumber
        });
        alert('Thông tin sinh viên đã được cập nhật thành công!');
      } catch (error) {
        alert('Có lỗi xảy ra khi cập nhật thông tin sinh viên');
        console.error(error);
      }
    };
  
    return (
      <div>
        <div id="editEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleUpdate}>
                <div className="modal-header">
                  <h4 className="modal-title">Sửa thông tin sinh viên</h4>
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Tên sinh viên</label>
                    <input type="text" className="form-control" required value={studentName} onChange={e => setStudentName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" required value={email} onChange={e => setEmail(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Địa chỉ</label>
                    <textarea className="form-control" required value={address} onChange={e => setAddress(e.target.value)}></textarea>
                  </div>
                  <div className="form-group">
                    <label>Số điện thoại</label>
                    <input type="text" className="form-control" required value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Thoát</button>
                  <button type="submit" className="btn btn-info">Lưu</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  