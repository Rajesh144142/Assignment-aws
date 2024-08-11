import { useParams } from 'react-router-dom';
import { CContainer, CCard, CCardBody, CRow, CCol, CCardHeader } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import './StudentDetails.css'; // Import custom CSS for additional styling

const StudentDetails = () => {
    const { id } = useParams();

    // Example data
    const student = {
        firstName: "Aarav",
        lastName: "Sharma",
        age: 15,
        gender: "male",
        class: "10th",
        roll: "101",
        section: "A",
        address: "45, Rose Avenue",
        state: "Maharashtra",
        city: "Mumbai",
        fatherPhoneNumber: "9123456789",
        motherPhoneNumber: "9876543210",
        bornAt: "Mumbai",
        lastQualifiedClassMarks: 88
    };

    return (
        <CContainer className="my-4">
            <CCard className="student-card">
                <CCardHeader className="student-card-header">
                    <h4 className="mb-0">Student Details</h4>
                </CCardHeader>
                <CCardBody className="student-card-body">
                    <CRow>
                        <CCol md={6}>
                            <div className="info-section">
                                <h5>Personal Information</h5>
                                <div className="info-item">
                                    <strong>Full Name:</strong> {student.firstName} {student.lastName}
                                </div>
                                <div className="info-item">
                                    <strong>Age:</strong> {student.age}
                                </div>
                                <div className="info-item">
                                    <strong>Gender:</strong> {student.gender}
                                </div>
                                <div className="info-item">
                                    <strong>Class:</strong> {student.class}
                                </div>
                                <div className="info-item">
                                    <strong>Roll Number:</strong> {student.roll}
                                </div>
                                <div className="info-item">
                                    <strong>Section:</strong> {student.section}
                                </div>
                            </div>
                        </CCol>
                        <CCol md={6}>
                            <div className="info-section">
                                <h5>Contact Information</h5>
                                <div className="info-item">
                                    <strong>Address:</strong> {student.address}
                                </div>
                                <div className="info-item">
                                    <strong>City:</strong> {student.city}
                                </div>
                                <div className="info-item">
                                    <strong>State:</strong> {student.state}
                                </div>
                                <div className="info-item">
                                    <strong>Father's Phone Number:</strong> {student.fatherPhoneNumber}
                                </div>
                                <div className="info-item">
                                    <strong>Mother's Phone Number:</strong> {student.motherPhoneNumber}
                                </div>
                            </div>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol md={6}>
                            <div className="info-section">
                                <h5>Additional Information</h5>
                                <div className="info-item">
                                    <strong>Born At:</strong> {student.bornAt}
                                </div>
                                <div className="info-item">
                                    <strong>Last Qualified Class Marks:</strong> {student.lastQualifiedClassMarks}%
                                </div>
                            </div>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
        </CContainer>
    );
}

export default StudentDetails;
