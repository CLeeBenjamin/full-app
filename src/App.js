import SideNav from "./SideNav";

export default function App() {

  return (
    <div>
      <h1>Rick and Morty</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
      </nav>
      <SideNav/>
    </div>
  );
}



