import { div } from "../framework/element";
export let test = { test: "test", test2: [1, 2, 3, 4], obj: { test: "test" } };
export const User = ({ firstName, lastName }) =>
  div`Hello ${firstName} ${lastName}`;
