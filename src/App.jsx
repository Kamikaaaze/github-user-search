import "./App.css";
function App() {
  return (
    <div className="main">
      <div className="search-bar">
        <input
          className="search"
          type="text"
          placeholder="Search Github username..."
        ></input>
        <button className="search-button">Search</button>
      </div>
      <div className="card">
        <div className="card-left">
          <img className="thumbnail" src="public\image\winona.jpg" />
        </div>
        <div className="card-right">
          <p>The Octocat</p>
          <p>Jpined 25 JAN</p>
          <p>@octocat</p>
          <p>This profile has no bio</p>
          <div className="repo-details">9</div>

          <p>SanFransisco</p>
          <p>Not available</p>
          <p>http/www.com</p>
          <p>@github</p>
        </div>
      </div>
    </div>
  );
}
export default App;
