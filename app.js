import express from "express";
import employees from "#db/employees";

const app = express();
export default app;

app.route("/").get((req, res) =>{res.send("Hello employees!");});

app.route("/employees").get((req, res) =>{res.send(employees);});



app.route("/employees/random").get((req, res) =>{
const random = Math.floor(Math.random() * employees.length);
const randomEmployee =employees[random];


res.send(randomEmployee);


});
app.route("/employees/:id").get((req, res) =>{
    const { id } = req.params;
    const employee = employees.find((element) => element.id === +id);
    if(!employee){
        return res.status(404).send("Employee not found.");
    } res.send(employee);
});