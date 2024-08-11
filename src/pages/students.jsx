import { useState } from "react";
import { Link } from 'react-router-dom';

const Students = () => {
    const [studentsList, setStudentsList] = useState([
        { id: 1, first_name: "Barn", last_name: "Middell", email: "bmiddell0@thetimes.co.uk", gender: "Male", address: "101.102.229.165", city: "Vitrolles", phone_no: "883-659-8794" },
        { id: 2, first_name: "Bellina", last_name: "Tilson", email: "btilson1@seattletimes.com", gender: "Female", address: "41.8.230.215", city: "Palkovice", phone_no: "834-591-8331" },
        { id: 3, first_name: "Inessa", last_name: "Zoane", email: "izoane2@a8.net", gender: "Female", address: "58.228.121.170", city: "Kolumbug", phone_no: "914-604-3594" },
        { id: 4, first_name: "Tadeas", last_name: "Lichfield", email: "tlichfield3@unesco.org", gender: "Male", address: "170.76.143.93", city: "Bajos de Haina", phone_no: "937-438-8379" },
        { id: 5, first_name: "Vivienne", last_name: "Boxhill", email: "vboxhill4@nhs.uk", gender: "Female", address: "151.204.237.96", city: "Volgograd", phone_no: "464-423-3683" },
        { id: 6, first_name: "Leela", last_name: "Alliston", email: "lalliston5@opensource.org", gender: "Female", address: "166.153.111.0", city: "VrachnaÃ­ika", phone_no: "976-558-0897" },
        { id: 7, first_name: "Winfred", last_name: "Marde", email: "wmarde6@discuz.net", gender: "Male", address: "215.101.221.11", city: "KÃ¸benhavn", phone_no: "670-992-6539" },
        { id: 8, first_name: "Lorens", last_name: "Roberson", email: "lroberson7@discuz.net", gender: "Male", address: "36.222.89.26", city: "TucumÃ£", phone_no: "238-467-3557" },
        { id: 9, first_name: "Grissel", last_name: "Loftin", email: "gloftin8@mashable.com", gender: "Female", address: "34.97.168.172", city: "KhvÄnsÄr", phone_no: "376-388-9002" },
    ]);

    return (
        <>
            {studentsList.map((student) => (
                <div key={student.id}>
                    <h2>{student.first_name} {student.last_name}</h2>
                    <Link to={`/${student.id}`}>View</Link>
                </div>
            ))}
        </>
    );
}

export default Students;
