import { Outlet, Link } from "react-router-dom";

export default function SideNav() {
  let options = ['Characters', 'Location']
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
          backgroundColor: "#f0e14a", 
          color: 'black',
          fontWeight: "bolder"
        }}
      >
        {options.map((option) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/${option}`}
            key={option}
          >
            {option}
          </Link>
        ))}
      </nav>
      <Outlet/>
    </div>
  );
}