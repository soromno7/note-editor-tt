import SimplePaper from "./paper.js";
import { Form } from "./Form.js";
import  FormDialog from "./FormDialog.js";

function App() {
  return (
    <>
      <Form className="filter-by-form" />
      <div className="note-container">
        <FormDialog/>
        <SimplePaper/>
      </div>
    </>
  );
}

export default App;
