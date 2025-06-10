// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Container, Table, Button, Modal, Form } from "react-bootstrap";

// export default function AddProject() {
//   const [menuList, setMenuList] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [editItem, setEditItem] = useState(null);
//   const [projects, setProjects] = useState({ title: "", description: "", image: ""})

//   async function getMenu() {
//     try {
//       const response = await axios.get("http://localhost:5000/projects/");
//       setMenuList(response.data.projects);
//     } catch (error) {
//       alert(error.response.data.message)
//     }
//   }

//   async function saveMenu(e) {
//     e.preventDefault();

//     if (!projects.title || !projects.description || !projects.image || ) {
//       alert("All fields are required!");
//       return;
//     }

//     try {
//       const data = {
//         title: projects.title,
//         description: projects.description,
//         image: projects.image,
         
//       }
//       const response = await axios.post("http://localhost:5000/admin/projects", data, { withCredentials: true });
//       alert(response.data.message || "Added successfully!");
//       setShowForm(false);
//       getprojects();
//     } catch (error) {
//       alert(error.response.data.message || "Error adding projects!");
//     }
//   }

//   async function updateprojects(e) {
//     e.preventDefault();

//     try {

//       const data = {
//         title: projects.title,
//         description: projects.description,
//         image: projects.image,
         
//       }

//       const response = await axios.put(`http://localhost:5000/admin/projects/${projects.mid}`, data, { withCredentials: true });
//       alert(response.data.message || "Updated successfully!");
//       setShowForm(false);
//       getprojects();
//     } catch (error) {
//       alert(error.response.data.message || "Error updating projects!");
//     }
//   }


//   async function deleteprojects(item) {
//     try {
//       if (window.confirm(`Are you sure you want to delete ${item.title}`)) {

//         await axios.delete(`http://localhost:5000/admin/projects/${item.mid}`, { withCredentials: true });
//         alert("Deleted Successfully")

//         getprojects();
//       }
//     } catch (error) {
//       alert(error.response.data.message)
//     }
//   }

  

//   function handleAdd() {
//     setprojects({ title: "", description: "", image: "",  0 })
//     setEditItem(null);
//     setShowForm(true);
//   }

//   function handleUpdate(item) {
//     setEditItem(item);
//     setprojects(item)
//     setShowForm(true);
//   }

//   function handleChange(e) {
//     setprojects({ ...projects, [e.target.name]: e.target.value });
//   }
  
//   function handleClose(){
//     setShowForm(false)
//   }

//   useEffect(() => {
//     getprojects();
//   }, []);

//   return (
//     <Container className="mt-4">
//       <h1 className="text-center mb-4">projects</h1>



//       <center>
//         <Button onClick={handleAdd} variant="success">Add projects</Button>

//       </center>
//       <br />


//       {/* Modal */}
//       <Modal show={showForm} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{editItem ? "Update projects" : "Add projects"}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group>
//               <Form.Label>projects Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="title"
//                 value={projects.title}
//                 onChange={handleChange}
//                 placeholder="Enter projects Name"
//               />
//               <Form.Label>Type</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="description"
//                 value={projects.description}
//                 onChange={handleChange}
//                 placeholder="Enter projects Type"
//               />
//               <Form.Label>Quantity</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="image"
//                 value={projects.image}
//                 onChange={handleChange}
//                 placeholder="Enter projects Quantity"
//               />
//               <Form.Label>Price</Form.Label>
//               <Form.Control
//                 type="number"
//                 name="price"
//                 value={}
//                 onChange={handleChange}
//                 placeholder="Enter projects Price"
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>Cancel</Button>
//           <Button variant="primary" onClick={editItem ? updateprojects : saveMenu}>
//             {editItem ? "Update" : "Add"}
//           </Button>
//         </Modal.Footer>
//       </Modal>


//       <Table striped bordered hover responsive>
//         <thead className="table-dark">
//           <tr>
//             <th>Menu ID</th>
//             <th>Menu Name</th>
//             <th>Menu Type</th>
//             <th>Menu Quantity</th>
            
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {menuList.map((item) => (
//             <tr key={item.mid}>
//               <td>{item.mid}</td>
//               <td>{item.title}</td>
//               <td>{item.description}</td>
//               <td>{item.image}</td>
              
//               <td>
//                 <Button size="sm" variant="warning" className="me-2" onClick={() => handleUpdate(item)}>Update</Button>
//                 <Button size="sm" variant="danger" onClick={() => deleteMenu(item)}>Delete</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </Container>
//   );
// }





