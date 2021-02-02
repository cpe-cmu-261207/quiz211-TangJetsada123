function App() {
  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    }
  ];

  return (
    <div class="ml-2">
      <h3 class="title is-3">Person List</h3>

      {/* Convert me to a component! */}
      <table class="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Bob</td>
            <td>male</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Alice</td>
            <td>male</td>
            <td>20</td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Jetsada Jinaka</td>
            <td>male</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>

      {/* Code me please! */}

      <h3 class="title is-3">ID Counter</h3>
      <p>620612144</p>
      <button onClick={() => 620612144 - 1}>-</button>
      <button>reset</button>
      <button onClick={() => 620612144 + 1}>+ </button>
    </div>
  );
}

export default App;
