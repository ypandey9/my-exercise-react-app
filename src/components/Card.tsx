function Card({ header, footer, children }) {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "10px",
      borderRadius: "8px",
      marginBottom: "15px",
      marginLeft:"30px",
    }}>
      <div>{header}</div>
      <div>{children}</div>
      <div style={{ marginTop: "10px" }}>{footer}</div>
    </div>
  );
}


export default Card;