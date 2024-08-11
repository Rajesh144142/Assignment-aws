import axios from 'axios';
import { host } from '../configuration/apiConfig';

export const getAllStudents = async () => {
    try {
        const response = await axios.get(`${host}/allStudent`);
        return response.data;
    } catch (err) {
        console.error('Error fetching all students:', err);
        throw err; 
    }
}

export const getIndividualStudentData = async (id) => {
    try {
        const response = await axios.get(`${host}/student/${id}`);
        return response.data;
    } catch (err) {
        console.error(`Error fetching student data with ID ${id}:`, err);
        throw err; 
    }
}
