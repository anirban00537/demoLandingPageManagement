import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { fetchCustomerContact } from "../../Api";
import { ExportCSV } from "../ExportCsv";

import "./dash.css";
import Navbar from "./Navbar";
const Homeadmin = () => {
  const history = useHistory();
  const [cc, setCC] = useState([]);
  const [date, setDate] = useState({
    month: "",
    year: "",
  });
  let len = cc.length;
  const onload = async () => {
    const { data } = await fetchCustomerContact();
    setCC(data);
  };
  function printdata(month, year) {
    const data = cc.filter((m) => (m.month == month) & (m.year == year));
    setCC(data);
  }

  function checkuser() {
    const user = JSON.parse(localStorage.getItem("users"));
    const token = localStorage.getItem("jwtauth");
    if (!token) {
      history.push("/login");
    }
  }
  useEffect(() => {
    checkuser();
    onload();
  }, []);
  const fileName = "brain";

  const handleLogout = async () => {
    localStorage.removeItem("jwtauth");
    localStorage.removeItem("users");

    history.push("/");
  };
  return (
    <div className="homeAdmin">
      <nav className="navbar navbar-expand-lg navbar-light bg-light customnavbar">
        <a className="navbar-brand" href="#">
          BRAINBOXBD
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse goupin"
          id="navbarSupportedContent"
        >
          <div className="mainSearch ">
            <div class="input-group cstmgroupin ">
              <select
                class="form-select"
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
                onChange={(e) => {
                  setDate({ ...date, year: e.target.value });
                  console.log(date.year);
                }}
              >
                <option selected>Year</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
              </select>
              <select
                class="form-select"
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
                onChange={(e) => {
                  setDate({ ...date, month: e.target.value });
                  console.log(date.month);
                }}
              >
                <option selected>Month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <button
                class="btn btn-outline-secondary"
                type="button"
                onClick={() => {
                  printdata(date.month, date.year);
                }}
              >
                search
              </button>
              <ExportCSV csvData={cc} fileName={fileName} />
              <button
                class="btn btn-outline-secondary"
                type="button"
                onClick={() => {
                  onload();
                }}
              >
                Reload all data
              </button>
              <button
                class="btn btn-outline-secondary"
                type="button"
                onClick={() => {
                  handleLogout();
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      {cc.map((c) => (
        <div class=" cardBDY">
          <div class="card-header-head">{cc.length + 1 - len--}</div>
          <div class="card-body-port">
            <h5 class="card-title-dash">Name: {c.name}</h5>
            <p class="card-text-dash">Email: {c.email}</p>
            <p class="card-text-dash">Mobile: {c.mobile}</p>
            <p class="card-text-dash">Date: {Date(c.date)}</p>
            <p class="card-text-dash">Message: {c.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homeadmin;
