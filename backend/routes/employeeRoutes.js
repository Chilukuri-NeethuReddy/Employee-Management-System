import express from 'express';
import {
    registerEmployee,
    loginUser,
    logoutUser,
    getAllEmployees,
    getPersonal,
    getPerformance,
    editEmployee,
    getEmployeeById,
    deleteEmployee,
} from '../controllerss/userController.js'; // Adjust path as needed

const router = express.Router(); // Create a router

// Define your routes
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/register', registerEmployee);
router.get('/all', getAllEmployees);
router.get('/get/:id',getEmployeeById);
router.get('/personal/:id', getPersonal);
router.get('/performance/:id', getPerformance);
router.put('/edit/:id', editEmployee);
router.delete('/delete/:id',deleteEmployee);
export default router; // Export the router as default
