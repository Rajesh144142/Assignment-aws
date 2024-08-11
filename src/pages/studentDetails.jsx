import { useParams } from 'react-router-dom';
import { CContainer, CCard, CCardBody, CRow, CCol, CCardHeader, CSpinner, CAlert } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import './StudentDetails.css'; // Import custom CSS for additional styling
import { useState, useEffect } from 'react';
import { getIndividualStudentData } from '../helpers/apiHelpers';

const StudentDetails = () => {
    const { id } = useParams();
    const [studentDetails, setStudentDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async (studentId) => {
            try {
                const response = await getIndividualStudentData(studentId);
                setStudentDetails(response);
            } catch (err) {
                setError('Failed to fetch student details');
                console.error(err);
            } finally {
                setLoading(false);
            }
        })(id);
    }, [id]);

    return (
        <CContainer className="my-4">
            <CCard className="student-card">
                <CCardHeader className="student-card-header">
                    <h4 className="mb-0">Student Details</h4>
                </CCardHeader>
                <CCardBody className="student-card-body">
                    {loading ? (
                        <div className="text-center">
                            <CSpinner color="primary" />
                        </div>
                    ) : error ? (
                        <CAlert color="danger">{error}</CAlert>
                    ) : (
                        <>
                            <CRow>
                                <CCol md={6}>
                                    <div className="info-section">
                                        <h5>Personal Information</h5>
                                        <div className="info-item">
                                            <strong>Full Name:</strong> {studentDetails?.firstName} {studentDetails?.lastName}
                                        </div>
                                        <div className="info-item">
                                            <strong>Age:</strong> {studentDetails?.age}
                                        </div>
                                        <div className="info-item">
                                            <strong>Gender:</strong> {studentDetails?.gender}
                                        </div>
                                        <div className="info-item">
                                            <strong>Class:</strong> {studentDetails?.class}
                                        </div>
                                        <div className="info-item">
                                            <strong>Roll Number:</strong> {studentDetails?.roll}
                                        </div>
                                        <div className="info-item">
                                            <strong>Section:</strong> {studentDetails?.section}
                                        </div>
                                    </div>
                                </CCol>
                                <CCol md={6}>
                                    <div className="info-section">
                                        <h5>Contact Information</h5>
                                        <div className="info-item">
                                            <strong>Address:</strong> {studentDetails?.address}
                                        </div>
                                        <div className="info-item">
                                            <strong>City:</strong> {studentDetails?.city}
                                        </div>
                                        <div className="info-item">
                                            <strong>State:</strong> {studentDetails?.state}
                                        </div>
                                        <div className="info-item">
                                            <strong>Father's Phone Number:</strong> {studentDetails?.fatherPhoneNumber}
                                        </div>
                                        <div className="info-item">
                                            <strong>Mother's Phone Number:</strong> {studentDetails?.motherPhoneNumber}
                                        </div>
                                    </div>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol md={6}>
                                    <div className="info-section">
                                        <h5>Additional Information</h5>
                                        <div className="info-item">
                                            <strong>Born At:</strong> {studentDetails?.bornAt}
                                        </div>
                                        <div className="info-item">
                                            <strong>Last Qualified Class Marks:</strong> {studentDetails?.lastQualifiedClassMarks}%
                                        </div>
                                    </div>
                                </CCol>
                            </CRow>
                        </>
                    )}
                </CCardBody>
            </CCard>
        </CContainer>
    );
}

export default StudentDetails;
