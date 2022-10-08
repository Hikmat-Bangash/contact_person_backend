import mysql from "mysql2";
//----------- MYSQL CONNECTION ---------
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_express_crud"
})
// connection end

export const addUser = (req,res)=>{
    const {fullname, email, address, contact} = req.body;

   const inserting = "INSERT INTO usersinfo (fullname, email, address, contact) VALUES(?,?,?,?)";

   // inserting record into database"
   db.query(inserting,[fullname,email,address,contact], (err, result)=>{

    if(err){
        console.log(err)
        res.status(500).json(err);
    }
    else{
        res.send(result);
    }
   })

}

// ---------------- fetching all users record --------
export const fetchingData = (req,res)=>{
  const data = "SELECT * FROM usersinfo";
  
  db.query(data, (err,result)=>{
    if(err){
        res.status(500).json(err);
    }
    else{
        res.send(result);
    }
  })
}

// ----------- Fetching A single user record ---------
export const SingleUser = (req,res)=>{
    const id = req.params.id;

    const record = "SELECT * FROM usersinfo WHERE id = ?";

    db.query(record, id, (err,result)=>{
        
        if(err){
            console.log(err)
            res.status(500).json(err)
        }
        else{
            console.log(result[0])
            res.status(200).send(result[0])
        }
    })

}

// --------------- DELETING A SPECIFIC USER RECORD ----------------

export const DeleteUser = (req,res)=>{
    const id = req.params.id;
    
    const deleting = "DELETE from usersinfo WHERE id = ?";
    
    db.query(deleting, [id], (err, result)=>{
        if(err){
            console.log(err)
            res.status(500).json(err);
        }
        else{
            res.send("User Deleted Successfully")
        }
    })
}

// ------------------ updating user record ------------------
export const UpdateUser = (req, res)=>{
    const id = req.params.id;
    const {fullname, email, address, contact}= req.body;
    const updating = " UPDATE usersinfo SET fullname=?, email= ? , address= ?, contact= ? WHERE id= ? ";

    db.query(updating, [fullname,email,address,contact,id], (err,result)=>{
        if(err){
            res.status(500).json(err);
        }
        else{
            res.status(200).json(result);
        }
    })
}
