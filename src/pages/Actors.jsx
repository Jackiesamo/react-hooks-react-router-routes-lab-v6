
import actors from "../../actors";   // <-- root level

function Actors() {
  return (
    <>
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

export default Actors;