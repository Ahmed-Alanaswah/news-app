"use client";
export default function FilterdNewsError({ error, reset }) {
  return (
    <div id="error">
      <h2>An occured error!</h2>
      <p>{error.message}</p>
    </div>
  );
}
