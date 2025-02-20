import React, { useState, useEffect } from "react";
import "./style.css";

export default function Notes() {
  const [page, setPage] = useState("list");
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    setNotes((prev) => {
      const revisedVal = prev.filter((item) => item.id !== formData.id);
      const newNote = { ...formData, id: Date.now() };
      const updatedNotes = [...revisedVal, newNote];
      localStorage.setItem("events", JSON.stringify(updatedNotes));
      return updatedNotes;
    });

    setFormData({
      id: "",
      title: "",
      description: "",
    });
    setPage("list");
    e.preventDefault();
  };

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("events", JSON.stringify(updatedNotes));
  };

  const handleEdit = (id) => {
    const editedForm = notes.filter((note) => note.id === id);
    setPage("create");
    setFormData(...editedForm);
  };

  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      setNotes(JSON.parse(storedEvents));
      // console.log(setNotes);
    }
  }, []);

  return (
    <div className="note-container">
      <div className="note-header">
        <button
          className="note-button"
          onClick={() => {
            setPage("list");
          }}
        >
          Note List
        </button>
        {page === "list" && (
          <button
            className="note-button"
            onClick={() => {
              setPage("create");
            }}
          >
            Create New Note
          </button>
        )}
      </div>
      {page === "list" ? (
        <div className="note-list">
          {notes &&
            notes.map((note, i) => (
              <div className="note-item" key={note.id}>
                <p className="note-id">{note.id}</p>
                <p className="note-title">{note.title}</p>
                <p className="note-description">{note.description}</p>
                <button
                  className="note-button"
                  onClick={() => handleEdit(note.id)}
                >
                  Edit
                </button>
                <button
                  className="note-button"
                  onClick={() => handleDelete(note.id)}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      ) : (
        <form className="note-form" action="" onSubmit={handleSubmit}>
          <div className="note-form-group">
            <label className="note-form-label">Title</label>
            <input
              className="note-form-input"
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="note-form-group">
            <label className="note-form-label">Description</label>
            <textarea
              className="note-form-input"
              type="text"
              name="description"
              placeholder="Write anything..."
              value={formData.description}
              onChange={handleChange}
              style={{
                height: "300px",
                width: "400px",
              }}
            />
          </div>
          <button className="note-button">Submit</button>
        </form>
      )}
    </div>
  );
}
