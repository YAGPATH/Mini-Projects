import { useState } from "react";

const initdata = {
  title: '',
  category: '',
  batch: '',
  schedule: '',
  conclude: '',
  user: '',
};




function CreateLecture({apireq}) {
  let [form, setForm] = useState(initdata);

  function gettingData(ele) {
    setForm({...form, [ele.target.name]: ele.target.value});
  }

  const finalData = async (ele) => {
    ele.preventDefault();

    try {
      await fetch (`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/lectures`,
      {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(form),
      })
      .then((response) => response.json())
      .then((response) => {
        setForm(initdata);
        apireq();
      });
    }
    catch (error) {
      console.log(error);
    }
    ele.target.reset();
  }
  return (
    <div className="form">
      <form onSubmit = {finalData}>
        <div>
          <label htmlFor="titleInput">Title</label>
          <input type="text" id="titleInput" name="title" value={form.title} onChange={gettingData} />
        </div>
        <div>
          <label htmlFor="categoryInput">Category:</label>
          <select id="categoryInput" name="category" value={form.category} onChange={gettingData}>
            <option value="">Select Category</option>
            <option value="dsa">DSA</option>
            <option value="coding">Coding</option>
            <option value="da">DA</option>
          </select>
        </div>
        <div>
          <label htmlFor="batchInput">Batch:</label>
          <select id="batchInput" name="batch" value={form.batch} onChange={gettingData}>
            <option value="">Select Batch</option>
            <option value="CAP-05">CAP-05</option>
            <option value="PT-WEB-16">PT-WEB-16</option>
            <option value="CAP-04">CAP-04</option>
            <option value="FT-WEB-27">FT-WEB-27</option>
            <option value="CAP-03">CAP-03</option>
          </select>
        </div>
        <div>
          <label htmlFor="scheduleInput">Schedule:</label>
          <input type="datetime-local" id="scheduleInput" name="schedule" value={form.schedule} onChange={gettingData}/>
        </div>
        <div>
          <label htmlFor="concludeInput">Concludes:</label>
          <input type="datetime-local" id="concludeInput" name="conclude" value={form.conclude} onChange={gettingData} />
        </div>
        <div>
          <label htmlFor="userInput">User:</label>
          <select id="userInput" name="user" value={form.user} onChange={gettingData}>
            <option value="">Select User</option>
            <option value="user1">User 1</option>
            <option value="user2">User 2</option>
            <option value="user3">User 3</option>
          </select>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default CreateLecture;
