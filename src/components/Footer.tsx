export function Footer() {
  const divStyles = {
    backgroundColor: "black",
    height: "30px",
  };

  const pStyles = {
    backgroundColor: "black",
    margin: "auto",
    fontSize: "20px",
  };

  return (
    <div style={divStyles}>
      <p style={pStyles}>All rights reserved.</p>
    </div>
  );
}
