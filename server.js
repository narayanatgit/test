const express = require('express');
const body=require('body-parser')
const app = express();
app.use(body.json());
app.use(express.json())
app.use(body.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8080;
 i=0;
// Greeting 
 a=[]
app.get('/greeting', (req, res) => {
    return res.send('Hello world!');
});

// Register Employee
app.post('/employee', (req, res) => {
    
    a.push({  employeeId:++i,
        name:req.body.name,
        city:req.body.city})
       
        content= {  employeeId:i,
        name:req.body.name,
        city:req.body.city}
    return res.status(201).json(
        {content}
      

    );
});

// Get Employee details
app.get('/employee/:id', (req, res) => {
        id=req.params.id
   data=a[parseInt(id)-1]
   content=data
    return res.send( 
               content
    );
});
console.log(a)
// Get all Employee details

app.get('/employees/all', (req, res) => {
content=a
    return res.send(
        content
    );
});

// Update Employee
app.put('/employee/:id', (req, res) => {
    return res.send(
        
    );
});

// Delete Employee
app.delete('/employee/:id', (req, res)=>{
    return res.send();
});

app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});