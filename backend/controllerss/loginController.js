const loginUser = async (req, res) => {

    const { username, password } = req.body;
    
        try {
            // Find employee by username
            const employee = await Employee.findOne({ username });
    
            if (!employee) {
                return res.status(404).json({ message: "User not found" });
            }
    
            // Extract the year from the DOB ('YYYY-MM-DD')
            const dobYear = employee.dob.split('-')[0];
    
            // Check if the password is the username + year from DOB
            const expectedPassword = username + dobYear;
            if (password !== expectedPassword) {
                return res.status(401).json({ message: "Invalid password" });
            }
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
                message: "Login successful",
                user: {
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
                    username: employee.username
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    };