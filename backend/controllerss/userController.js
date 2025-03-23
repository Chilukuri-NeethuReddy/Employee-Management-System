import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/helpers/generateWebToken.js';
import mongoose from 'mongoose';
import Employee from '../models/employeeModel.js';

const registerEmployee = async (req, res) => {
  try {
    // Extracting all the attributes from the request body
    const {
      firstName,
      lastName,
      dob,
      gender,
      email,
      phoneNumber,
      address,
      role,
      department,
      startDate,
      salary,
      benefits,
      education,
      skills,
      projectsDone,
      projectsOnHold,
      achievements,
      feedback,
      goalsAndObjectives,
      satisfactionScore,
      attendance,
      creativityLevel,
      finalPerformanceRating,
      profilePic
    } = req.body;

    // Check if the email already exists in the database
    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      return res.status(400).json({ message: 'Email is already in use' });
    }

    // Create and save the new employee in the database
    const newEmployee = new Employee({
      firstName,
      lastName,
      dob,
      gender,
      email,
      phoneNumber,
      address,
      role,
      department,
      startDate,
      salary,
      benefits,
      education,
      skills,
      projectsDone,
      projectsOnHold,
      achievements,
      feedback,
      goalsAndObjectives,
      satisfactionScore,
      attendance,
      creativityLevel,
      finalPerformanceRating,
      profilePic
    });

    await newEmployee.save();

    return res.status(201).json({
      message: 'Employee registered successfully',
      employee: {
        id: newEmployee._id, // Use _id to refer to the document ID
        firstName: newEmployee.firstName,
        lastName: newEmployee.lastName,
        email: newEmployee.email,
        phoneNumber: newEmployee.phoneNumber
      }
    });
  } catch (error) {
    console.error('Error registering employee:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


//signup anedi admin chestadu anthe ga

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  // console.log("Username:", username, "Password:", password);

  try {
    // Extract lastname from password
    const extractedLastName = password.replace(/\d{4}$/, "");
    // console.log("Extracted Lastname:", extractedLastName);

    // Find employee by extracted lastName
    const employee = await Employee.findOne({ lastName: extractedLastName });
    // console.log("Found Employee:", employee);

    if (!employee) {
      return res.status(404).json({ message: "User not found" });
    }

    // Extract the year from employee's DOB
    const dobYear = employee.dob.split('-')[0];

    // Expected username and password formats
    const expectedUsername = `${employee.firstName}${dobYear}`;
    const expectedPassword = `${employee.lastName}${dobYear}`;
    // console.log("username : ", expectedUsername, "password : ", expectedPassword, "employee", employee);

    // Check if the provided username and password match expected formats
    if (username !== expectedUsername || password !== expectedPassword) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // If login is successful, generate token and set cookie
    generateTokenAndSetCookie(employee._id, res);
    res.status(200).json(employee);

  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


const logoutUser = (req, res) => {
  try {
    res.clearCookie("jwt");
    //res.cookie("jwt", "", { maxAge: 1 });
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const getAllEmployees = async (req, res) => {
  try {
    // Retrieve all employees excluding the specified user
    const employees = await Employee.find({
      firstName: { $ne: "Neethu" },
      lastName: { $ne: "Doe" }
    });

    // Return the retrieved employees
    res.status(200).json(employees);
  } catch (error) {
    console.error('Error retrieving employees:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getPersonal = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json({
      profilePic: employee.profilePic,
      firstName: employee.firstName,
      lastName: employee.lastName,
      dob: employee.dob,
      gender: employee.gender,
      email: employee.email,
      phoneNumber: employee.phoneNumber,
      address: employee.address,
      role: employee.role,
      department: employee.department,
      startDate: employee.startDate,
      salary: employee.salary,
      benefits: employee.benefits,
      education: employee.education,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getPerformance = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json({
      profilePic: employee.profilePic,
      firstName: employee.firstName,
      lastName: employee.lastName,
      skills: employee.skills,
      projectsDone: employee.projectsDone,
      projectsOnHold: employee.projectsOnHold,
      achievements: employee.achievements,
      feedback: employee.feedback,
      goalsAndObjectives: employee.goalsAndObjectives,
      satisfactionScore: employee.satisfactionScore,
      attendance: employee.attendance,
      creativityLevel: employee.creativityLevel,
      finalPerformanceRating: employee.finalPerformanceRating,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};




// Controller function to edit an employee's information
const editEmployee = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    // Find the employee by ID and update with new data
    const updatedEmployee = await Employee.findByIdAndUpdate(id, updateData, {
      new: true,        // Returns the updated document
      runValidators: true // Ensures schema validations are applied
    });

    // Check if employee exists
    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json(updatedEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating employee data', error });
  }
};


const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
     console.log("hi");
    // Find employee by ID
    const employee = await Employee.findById(id);

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    // Send employee details
    res.status(200).json(employee);
  } catch (error) {
    console.error('Error fetching employee by ID:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete employee by ID
    const employee = await Employee.findByIdAndDelete(id);

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    // Confirm deletion
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


export { registerEmployee, loginUser, logoutUser, getAllEmployees, getPersonal, getPerformance,editEmployee,getEmployeeById,deleteEmployee };