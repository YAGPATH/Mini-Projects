const TableRow = ({user,conclude,schedule,batch,category,title,id,deleteLectures}) => {

  const deleteL = async()=> {
    try {
      await fetch (
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/lectures/${id}`,
      
        {
          method: "DELETE",
        }
      );
      deleteLectures();
    }
    catch (error) {
      console.log("Error in Tablerow", error);
    }
  }



  return <tr className="table-row">

  <td>{title}</td>
  <td>{category}</td>
  <td>{batch}</td>
  <td>{schedule}</td>
  <td>{conclude}</td>
  <td>{user}</td>
  <td><button onClick = {deleteL}> Delete </button></td>


  </tr>;
};

export default TableRow;
