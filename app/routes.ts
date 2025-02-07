import { type RouteConfig, index, route } from "@react-router/dev/routes";


export default [
  index("routes/home.tsx"), // homepage / landingpage
  route("about", "routes/about.tsx"),
  // index pekar på routes --> home.tsx
] satisfies RouteConfig;


