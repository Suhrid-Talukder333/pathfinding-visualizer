"use client";
import { useParam } from "@/app/contextProvider";
import '@/components/navbar/navbar.css';

export default function Navbar() {
  const { mode, setMode, algo, setAlgo, setReset, setRun } = useParam();

  return (
    <div className="navbar">
      <div className="container">
        <button
          type="button"
          className={[
            "btn",
            "btn-primary",
            mode == "setstart" ? "selected" : "",
          ].join(" ")}
          onClick={() => {
            if (mode == "setstart") setMode(null);
            else {
              setMode("setstart");
            }
          }}
        >
          <i className="bi bi-geo-alt"></i>
        </button>
        <button
          type="button"
          className={[
            "btn",
            "btn-primary",
            mode == "settarget" ? "selected" : "",
          ].join(" ")}
          onClick={() => {
            if (mode == "settarget") setMode(null);
            else {
              setMode("settarget");
            }
          }}
        >
          <i className="bi bi-geo"></i>
        </button>
        <button
          type="button"
          className={[
            "btn",
            "btn-primary",
            mode == "addbricks" ? "selected" : "",
          ].join(" ")}
          onClick={() => {
            if (mode == "addbricks") setMode(null);
            else {
              setMode("addbricks");
            }
          }}
        >
          <i className="bi bi-bricks"></i>
        </button>
        <button
          type="button"
          className={[
            "btn",
            "btn-primary",
            mode == "addweight" ? "selected" : "",
          ].join(" ")}
          onClick={() => {
            if (mode == "addweight") setMode(null);
            else {
              setMode("addweight");
            }
          }}
        >
          <i className="bi bi-virus"></i>
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setReset((old) => {
              return !old;
            });
          }}
        >
          <i className="bi bi-arrow-counterclockwise"></i>
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setRun((old) => {
              return !old;
            });
          }}
        >
          <i className="bi bi-caret-right"></i>
        </button>
        <div>
          <select
            className="form-select"
            aria-label="Default select example"
            value={algo}
            onChange={(e) => {
              setAlgo(e.target.value);
            }}
          >
            <option value="">Choose your algorithm</option>
            <option value="dijkstra">dijkstra</option>
            <option value="BDS">BDS</option>
            <option value="BFS">BFS</option>
          </select>
        </div>
      </div>
    </div>
  );
}
