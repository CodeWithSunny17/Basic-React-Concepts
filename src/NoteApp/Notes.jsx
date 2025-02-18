import React, { useState, useEffect } from 'react'

export default function Notes() {

    const [page, setPage] = useState("list");
    const [notes, setNotes] = useState([])
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        description: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })

    }

    const handleSubmit = (e, id) => {


        setNotes((prev) => {
            for (let i = 0; i < notes.length; i++) {
                if (notes[i].id === id) {

                    formData.id = Date.now();
                    handleDelete(id);
                    return formData;
                } else {
                    formData.id = Date.now();
                    return formData;
                }
            };



            const updatedNotes = [...prev, newFormData]
            localStorage.setItem("events", JSON.stringify(updatedNotes));
            return updatedNotes;
        });

        // setNotes([...notes, formData])
        setFormData({
            id: "",
            title: "",
            description: ""
        })
        e.preventDefault()

    }


    const handleDelete = (id) => {
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
        localStorage.setItem("events", JSON.stringify(updatedNotes));
    };

    const handleEdit = (id) => {

        const editedForm = notes.filter(note => note.id === id);
        setPage("create")
        setFormData(...editedForm);
    }

    useEffect(() => {
        const storedEvents = localStorage.getItem("events");
        if (storedEvents) {
            setNotes(JSON.parse(storedEvents));
            // console.log(setNotes);
        }
    }, []);



    return (

        <div>
            <div>

                <button onClick={() => { setPage("list") }}>Note List</button>
                {page === "list" && <button onClick={() => { setPage("create") }}>Create New Note</button>}
            </div>
            {
                page === "list" ? (<div>
                    {
                        notes && notes.map((note, i) =>
                            <div key={note.id} style={{ border: "1px solid grey", display: "flex", gap: "20px", alignItems: "center" }}>
                                <p>{note.id}</p>
                                <p>{note.title}</p>
                                <p>{note.description}</p>
                                <button onClick={() => handleEdit(note.id)} style={{ height: "25px" }}>Edit</button>
                                <button onClick={() => handleDelete(note.id)} style={{ height: "25px" }}>Delete</button>
                            </div>
                        )
                    }
                </div>) : (<form action="" onSubmit={() => handleSubmit(formData.id)}>
                    <div>
                        <label>Title</label>
                        <input type="text" name='title' placeholder='Title' value={formData.title} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Description</label>
                        <input type="text" name='description' placeholder='Write anything...' value={formData.description} onChange={handleChange} />
                    </div>
                    <button>Submit</button>
                </form>)
            }

        </div >
    )
}
