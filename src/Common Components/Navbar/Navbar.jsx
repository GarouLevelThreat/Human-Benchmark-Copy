import HumanBenchmarkIcon from "../HumanBenchmarkIcon/HumanBenchmarkIcon";
import "./navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="left-side">
        <li className="human-benchmark-link">
          <a href="">
            <HumanBenchmarkIcon />
            HUMAN BENCHMARK
          </a>
        </li>
        <li className="dashboard-link">
          <a href="">DASHBOARD</a>
        </li>
      </ul>
      <ul className="right-side">
        <li className="sign-up-link">
          <a href="">SIGN UP</a>
        </li>
        <li className="login-link">
          <a href="">LOGIN</a>
        </li>
      </ul>
    </nav>
  );
}