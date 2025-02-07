import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

  
// detta behövs inte ändras på --> kanske titeln 
// export -     namn - 
export function meta({}: Route.MetaArgs) { // metadata
  return [
    // syfte: sätter en titel på vår flik i webbläsaren
    { title: "New React Router App" },
    // går man in i dokumentet så finns det en beskrivning
    { name: "description", content: "Welcome to React Router!" },
  ];
}

// detta är ett route
// importerar welcome-fil från welcome foldern
export default function Home() {
  // detta är en vy (versal pekar på det)
  // ngt vi kan se kallas för en vy
  return <Welcome />;
}
