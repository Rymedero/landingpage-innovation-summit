export default function FirefliesBackground() {
  return (
    <div className="bg">
      <ul className="fireflies">
        {Array.from({ length: 20 }).map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>
    </div>
  );
}