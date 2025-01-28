function Button({ num }) {
  const test = "none";
  const test1 = "red";
  const textstyle = {
    backgroundColor: "red",
    color: "white",
    fontSize: "40px",
  };
  // const { num } = props;
  return (
    <div>
      <button style={{ color: test1, backgroundColor: "green", border: test }}>
        submit
      </button>
      <h2 style={textstyle}>hello</h2>
      {/* <h1>{num}</h1> */}
      {/* <p>{props.num}</p> */}
      <h1>{num}</h1>
    </div>
  );
}

export default Button;
