export default function ToDoList() {
  return (
    <div>
      <main>
        <h1 className="text-2xl font-bold flex justify-center mt-20">
          Ideas List
        </h1>
        <div className="ListTablesContainer">
          <table className="LeftTable">
            <tr>
              <th>Want To Do</th>
            </tr>
            <tr>
              <td>Exmaple</td>
            </tr>
            <tr>
              <td>Exmaple</td>
            </tr>
            <tr>
              <td>Exmaple</td>
            </tr>
          </table>
          <table className="RightTable">
            <tr>
              <th>Need To Do</th>
            </tr>
            <tr>
              <td>Exmaple</td>
            </tr>
            <tr>
              <td>Exmaple</td>
            </tr>
            <tr>
              <td>Exmaple</td>
            </tr>
          </table>
        </div>
      </main>
    </div>
  );
}
