import app from "./app";

const server = app.listen(app.get("port"), () => {
  console.log(
    `Server running at http://localhost:${app.get("port")} in 
    ${app.get("env")} mode`
  );
  console.log("Press Ctrl+C to stop");
});

export default server;
