import express from "express";
import { MongoClient } from "mongodb";
//console.log("hello world");

const app = express();
const PORT =4000;

const student=[
    {rno:100,
    stname:"sudha",
    class:"8th",
    address:{
        state:"pondicherry",
        pincode:"606001"
    }    
},
{rno:101,
    stname:"Muthukumar",
    class:"7th",
    address:{
        state:"Madras",
        pincode:"606451"
    }
},
{rno:102,
    stname:"varsha",
    class:"4th",
    address:{
        state:"Kerala",
        pincode:"406451"
    }
},

   {rno:103,
        stname:"sanjai",
        class:"2th",
        address:{
            state:"Madurai",
            pincode:"34406451"
        }
    }
 ]

app.get("/", function (req, res) {
    res.send("AlliRani- world 🎉✨🧨🎇");
  });

  app.get("/student", function (req, res) {
  res.send(student);
});
app.get('/student/:id', function (req, res) {
    console.log(req.params);
    // filter | find
    const { id } = req.params;
    const std1 = student.find((mv) => mv.rno === +(id));
    res.send(std1);
  });
  
app.post("/student", function (request, response) {
    // db.movies.insertMany(data)
    const data = request.body;
    
    //const result = await newFunction(data);
    response.send(data);
    console.log(data);
  });
  
  


//   app.get('/movie/:id', function (req, res) {
//     console.log(req.params);
//     // filter | find
//     const { id } = req.params;
//     const movie1 = movie.find((mv) => mv.id === +(id));
//     res.send(movie1);
//   });
  

  app.listen(PORT, () => console.log(`server started ${PORT}`));