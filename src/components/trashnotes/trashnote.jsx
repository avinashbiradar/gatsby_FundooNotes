import React from "react";
import AddNote from "../addNote/addnote";
import DisplayNote from "../displaynotes./displaynotes";
import Typography from "@material-ui/core/Typography";
import DisplayIcons from "../displayicons/displayicons";
import { getTrashNotes } from "../../services/userservice";
import "../trashnotes/trashnote.scss";
export default function Notes(props) {
    const [trash, setTrash] = React.useState([]);
  React.useEffect(() => {
    displaynotes();
  }, []);

  const displaynotes = () => {
    getTrashNotes()
      .then((data) => {
        setTrash(data.data.data.data);
        console.log(trash);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mainContent">
    {trash.map((data) => (
        <div className="notes"  >
        <div>
          <Typography className="title">{data.title}</Typography>
          <Typography className="description">{data.description}</Typography>  
        </div>
        <div className="display">
            <DisplayIcons
            // setDelete={setDelete}
             noteobject={data}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
//<DisplayNote notes={trash} />