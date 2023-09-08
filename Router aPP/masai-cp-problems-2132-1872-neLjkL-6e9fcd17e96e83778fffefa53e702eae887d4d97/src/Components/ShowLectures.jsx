import TableRow from "./TableRow";


const ShowLectures = ({ lecture, deleteLectures }) => {
  console.log(lecture);
  return (
    <div className="show-lecture">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Batch</th>
            <th>Schedule</th>
            <th>Conclude</th>
            <th>User</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            lecture.map((element, index) => {
              return (

                <TableRow
                  key={index}
                  title={element.title}
                  category={element.category}
                  batch={element.batch}
                  schedule={element.schedule}
                  conclude={element.conclude}
                  user={element.user}
                  id={element.id}
                  deleteLectures={deleteLectures}
                />
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default ShowLectures;
