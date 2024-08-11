import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { 
  CTable, 
  CTableHead, 
  CTableRow, 
  CTableHeaderCell, 
  CTableBody, 
  CTableDataCell, 
  CCard, 
  CCardHeader, 
  CCardBody, 
  CContainer, 
  CAlert, 
  CFormSelect, 
  CButton 
} from "@coreui/react";
import { CSmartPagination } from '@coreui/react-pro';
import '@coreui/coreui/dist/css/coreui.min.css';
import './Students.css'; // Import custom CSS

const Students = () => {
    const [studentsList, setStudentsList] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/get-users');  
                setStudentsList(response.data.students || []); // Handle case where students might be undefined
            } catch (err) {
                setError('Failed to fetch students'); // Set error message
                console.error(err); // Log error for debugging
            } finally {
                setLoading(false); // Set loading to false after fetch is done
            }
        };

        fetchStudents();
    }, []);

    // Calculate total pages
    const totalPages = Math.ceil(studentsList.length / pageSize);

    // Get current page data
    const paginatedStudents = studentsList.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    // Handle page size change
    const handlePageSizeChange = (e) => {
        setPageSize(parseInt(e.target.value, 10));
        setCurrentPage(1); // Reset to first page on page size change
    };

    return (
        <CContainer className="my-4">
            <CCard className="students-card">
                <CCardHeader className="students-card-header">
                    <h4>Student List</h4>
                </CCardHeader>
                <CCardBody>
                    {loading ? (
                        <div className="text-center">
                            <CButton color="primary" disabled>
                                Loading...
                            </CButton>
                        </div>
                    ) : (
                        <>
                            {error && <CAlert color="danger">{error}</CAlert>} {/* Display error message if any */}
                            {paginatedStudents.length === 0 ? (
                                <div className="text-center">
                                    <CAlert color="info">No students found</CAlert> {/* Display message when no students are available */}
                                </div>
                            ) : (
                                <>
                                    <CTable striped hover responsive="md" className="students-table">
                                        <CTableHead>
                                            <CTableRow>
                                                <CTableHeaderCell>ID</CTableHeaderCell>
                                                <CTableHeaderCell>Name</CTableHeaderCell>
                                                <CTableHeaderCell>Gender</CTableHeaderCell>
                                                <CTableHeaderCell>Class</CTableHeaderCell>
                                                <CTableHeaderCell>Section</CTableHeaderCell>
                                                <CTableHeaderCell>Roll</CTableHeaderCell>
                                                <CTableHeaderCell>Action</CTableHeaderCell>
                                            </CTableRow>
                                        </CTableHead>
                                        <CTableBody>
                                            {paginatedStudents.map((student) => (
                                                <CTableRow key={student?.id}>
                                                    <CTableHeaderCell>{student?.id}</CTableHeaderCell>
                                                    <CTableDataCell>{student?.firstName} {student?.lastName}</CTableDataCell>
                                                    <CTableDataCell>{student?.gender}</CTableDataCell>
                                                    <CTableDataCell>{student?.class}</CTableDataCell>
                                                    <CTableDataCell>{student?.section}</CTableDataCell>
                                                    <CTableDataCell>{student?.roll}</CTableDataCell>
                                                    <CTableDataCell>
                                                        <Link to={`/students/${student?.id}`}>
                                                            <CButton color="info">View</CButton>
                                                        </Link>
                                                    </CTableDataCell>
                                                </CTableRow>
                                            ))}
                                        </CTableBody>
                                    </CTable>
                                    <div className="d-flex justify-content-between align-items-center mt-4">
                                        <CFormSelect 
                                            className="page-size-select" 
                                            value={pageSize} 
                                            onChange={handlePageSizeChange} 
                                        >
                                            <option value={5}>5</option>
                                            <option value={10}>10</option>
                                            <option value={15}>15</option>
                                            <option value={20}>20</option>
                                        </CFormSelect>
                                        <CSmartPagination
                                            className="pagination"
                                            align="end"
                                            activePage={currentPage}
                                            pages={totalPages}
                                            onActivePageChange={setCurrentPage}
                                        />
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </CCardBody>
            </CCard>
        </CContainer>
    );
}

export default Students;
