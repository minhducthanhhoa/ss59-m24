import React, { useState } from 'react';
import axios from 'axios';

export default function CreateStudent() {
    const [studentName, setStudentName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
  
    const handleSubmit = async (event:any) => {
      event.preventDefault();
      try {
        const response = await axios.post('http://localhost:8080/users', {
          name: studentName,
          email: email,
          address: address,
          phone: phoneNumber
        });
        alert('Sinh viên đã được thêm thành công!');
      } catch (error) {
        console.error('There was an error!', error);
      }
    };
  
    return (
      <div>
        <div id="addEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleSubmit}>
                <div className="modal-header">
                  <h4 className="modal-title">Thêm mới sinh viên</h4>
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Tên sinh viên</label>
                    <input type="text" className="form-control" required value={studentName} onChange={(e) => setStudentName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Địa chỉ</label>
                    <textarea className="form-control" required value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                  </div>
                  <div className="form-group">
                    <label>Số điện thoại</label>
                    <input type="text" className="form-control" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                  <button type="submit" className="btn btn-success">Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  