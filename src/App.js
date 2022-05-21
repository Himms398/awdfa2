import "./styles.css";

export default function App() {
  return (
    <>
      <div className="head1">
        <h1>My Order List</h1>
      </div>
      <div className="App">
        <div className="item1">
          I Oredered <strong>biryani</strong> from <strong>gopal</strong> which
          cost me Rs <strong>250</strong>
        </div>
        <div className="item2">
          I Ordeered <strong>Pizza</strong> From <strong>Dominos</strong> which
          cost me Rs <strong>500</strong>
        </div>
        <div className="item3">
          I Oredered <strong>sandwhich</strong> from <strong>subway</strong>{" "}
          which cost me Rs <strong>300</strong>
        </div>
      </div>
    </>
  );
}
