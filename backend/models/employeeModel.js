import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  dob: { type: String },
  gender: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  address: { type: String },
  role: { type: String },
  department: { type: String },
  startDate: { type: String },
  salary: { type: String },
  benefits: { type: String },
  education: { type: String },
  skills: { type: String },
  projectsDone: { type: String },
  projectsOnHold: { type: String },
  achievements: { type: String },
  feedback: { type: String },
  goalsAndObjectives: { type: String },
  satisfactionScore: { type: String },
  attendance: { type: String },
  creativityLevel: { type: String },
  finalPerformanceRating: { type: String },
  profilePic: { type: String }
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;


// DBMS lo manam oka table create cheyyali ante command gurthunda ....
// same mongodb ki ila chstam aa pina command adi command kadu ... Schema declaration ... mana table lo ee attributes undali
// mottam string 
