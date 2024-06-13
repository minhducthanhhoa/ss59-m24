import React, { useState, useEffect } from 'react';

const Bai11 = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(10);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await fetch('http://localhost:8080/users');
      const data = await res.json();
      setStudents(data);
    };

    fetchStudents();
  }, []);

  // Get current students
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Calculate total pages
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(students.length / studentsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <h2>Quản lý sinh viên</h2>
      <ul className="list-group mb-4">
        {currentStudents.map(student => (
          <li key={student.id} className="list-group-item">
            {student.name} - {student.email}
          </li>
        ))}
      </ul>
      <nav>
        <ul className='pagination'>
          <li className="page-item">
            <a onClick={() => setCurrentPage(currentPage - 1)} href="#!" className="page-link">
              Trước
            </a>
          </li>
          {pageNumbers.map(number => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <a onClick={() => paginate(number)} href="#!" className="page-link">
                {number}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a onClick={() => setCurrentPage(currentPage + 1)} href="#!" className="page-link">
              Sau
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Bai11;
