import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;

  const { note, updateNote } = props;
  //console.log("note in noteitem is : " + note);
  return (
    <div className="col-md-3" key={note._id}>
      <div className="card my-2">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title m-0">{note.title}</h5>
            <i
              className="fa-solid fa-trash mx-2"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Deleted successfully", "success");
              }}
            ></i>
            <i
              className="fa-solid fa-pen-clip mx-1"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
          </div>

          <p className="card-text">{note.description}</p>
          {/* <Link to="#" className="btn btn-sm btn-primary">
            <i className="fa-solid fa-trash"></i>
          </Link>
          <Link to="#" className="mx-3 btn btn-sm btn-primary">
            <i className="fa-solid fa-pen-clip"></i>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
