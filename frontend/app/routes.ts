import { type RouteConfig, index, route } from "@react-router/dev/routes";

const routes: RouteConfig = [
  route("/", "routes/home.tsx"),
  route("/login", "routes/login.tsx"),
];

export default routes;
