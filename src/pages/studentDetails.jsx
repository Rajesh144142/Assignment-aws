import { useParams } from 'react-router-dom';

const StudentDetails = () => {
    const params = useParams();
    console.log('params', params);

    return (
        <>
            <h1>Student Details</h1>
            <p>ID: {params.id}</p>
            {/* Render more details based on params if available */}
        </>
    );
}

export default StudentDetails;
