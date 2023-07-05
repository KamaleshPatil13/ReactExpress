const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

let student_data = [
  { id: 1, name: "Mayur", education: "BE" },
  { id: 2, name: "Sham", education: "Diploma" },
  { id: 3, name: "Ram", education: "Pharmacy" },
  { id: 4, name: "Sita", education: "MBBS" },
];

app.post("/case1", async (req, res) => {
    requestB = req.body
    //   if (requestB) {
        //     if(requestB.data){
            const student = student_data.find(student => student.name.toLowerCase() === requestB.data.toLowerCase());
            console.log("student_data", student_data);
            console.log("Api call", student);
       if (student) {
        res.json(student);
  } else{
    res.json("not found");
  }
});

app.listen(3001, () => console.log("server started on port 3001"));
