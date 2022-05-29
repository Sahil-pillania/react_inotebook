import React from "react";
import { Link } from "react-router-dom";
const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div class="card my-2">
        <div class="card-body">
          <h5 class="card-title">{note.title}</h5>
          <p class="card-text">{note.description}</p>
          <Link to="#" class="btn btn-primary">
            SEE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
