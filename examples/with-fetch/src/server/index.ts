import App from "./app";
import { error, info } from "ordijs/log";

let app = App;

app
  .start()
  .then(() => {
    info("Listening: 127.0.0.1:" + process.env.PORT_SERVER);
  })
  .catch((err) => {
    error(err);
  });
