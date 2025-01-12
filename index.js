import { init } from "./framework";
import { test, User } from "./src/user";

let firstName = "Marvin";
let lastName = "Frachet";

console.log(test);

init("#app", User({ firstName, lastName }));
firstName = "duc";
lastName = "anh";
init("#test", User({ firstName, lastName }));
