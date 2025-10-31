
import directors from "../../directors";   // <-- root level

function Directors() {
  return (
    <>
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <article key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

export default Directors;