import React, { useState } from "react";
import { Form} from "react-bootstrap";
import axios from "axios";
import {Button} from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";




const AddPostScreen = () => {
  const {isAuthenticated, loginWithRedirect} = useAuth0();

  const [formData, setFormData] = useState({ title: "", content: "" });
  const [postAdded, setPostAdded] = useState(false);
  const addPost = async (e) => {
    e.preventDefault();
    try {
      const post = await axios.post("/api/add_post", {
        title: formData.title,
        content: formData.content,
      });
      if (post.status === 201) {
        setPostAdded(true);
      }
    } catch (err) {
      const msg = err.response ? err.response.data.message : err;
    }
  };
  return (
    <>
    {isAuthenticated? 
    <div id="mt" className="mtt">
    <h3 className="my-4 text-center">Add new Post</h3>
    <hr className="horizontal" />
    <Form className="w-75 m-auto text-center my-4" onSubmit={addPost}>
      <Form.Group className="my-2" controlId="title">
        <Form.Label className="addtitle">Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Post Title"
          value={formData.title}
          onChange={(e) =>
            setFormData({ ...formData, title: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="my-2" controlId="content">
        <Form.Label className="addtitle">Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={8}
          placeholder="Enter Content"
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
        />
      </Form.Group>

      <Button variant="dark" type="submit" >
        Submit
      </Button>
    </Form>
    {postAdded ? (
      <div>
        <h3 className="text-center">Post Added Successfully</h3>
      </div>
    ) : null}
  </div>: loginWithRedirect()
    }
    
    </>
  );
};

export default AddPostScreen;