function StudioRibbon(props) {
  return (
    <div style={{ backgroundColor: "gray" }}>
      <a style={{ color: "white", "text-decoration": "none" }} href="">
        All Studios
      </a>
      {props.studios.slice(0, 10).map((s) => {
        return (
          <a style={{ color: "white", "text-decoration": "none" }} href="">
            {" " + s + " "}
          </a>
        );
      })}
    </div>
  );
}

export default StudioRibbon;
