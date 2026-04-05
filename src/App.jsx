// Global data
const stories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

// Header Component (arrow function - concise body)
const Header = () => <h1>Hacker News</h1>;

// Search Component (arrow function - BLOCK body)
const Search = () => {
  const handleChange = (event) => {
    console.log(event.target.value); // logs input value
    console.log("User is typing...");
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};

// List Component (arrow function)
const List = () => (
  <ul>
    {stories.map((item) => (
      <li key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span> {item.author} </span>
        <span> {item.num_comments} </span>
        <span> {item.points} </span>
      </li>
    ))}
  </ul>
);

// App Component (arrow function)
const App = () => (
  <div>
    <Header />
    <Search />
    <List />
  </div>
);

export default App;