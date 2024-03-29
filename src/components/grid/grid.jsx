"use client";
import React, { useState, useRef } from "react";
import "@/components/grid/grid.css";
import { useParam } from "@/app/contextProvider";

export default function Grid() {
  const {
    grid,
    setGrid,
    editing,
    setEditing,
    mode,
    start,
    end,
    run,
    reset,
    algo,
  } = useParam();

  const [refarray, mm] = useState(getrefarray(grid));

  function getrefarray(grid) {
    let array = [];
    grid.forEach((elem) => {
      elem.forEach((child) => {
        array.push(useRef());
      });
    });
    return array;
  }
  return (
    <div className="board">
      {refarray.map((elem, index) => {
        let classList = ["cell"];
        let yindex = Math.floor(index / 50);
        let xindex = index % 50;
        let cell = grid[yindex][xindex];

        if (cell.isWall) {
          classList.push("wall");
        }

        return (
          <div
            key={`${index}`}
            ref={elem}
            className={classList.join(" ")}
            onMouseDown={() => {
              setEditing(true);
            }}
            onMouseUp={() => {
              setEditing(false);
            }}
            onMouseMove={() => {
              if (!editing) return;
              const current = grid[yindex][xindex];
              if (current.isStart || current.isTarget) return;
              switch (mode) {
                case "setstart":
                  var newgrid = grid.map((elem) => {
                    return elem.map((elem) => {
                      if (!elem.isStart) return elem;
                      return { ...elem, isStart: false };
                    });
                  });
                  newgrid[yindex][xindex] = {
                    ...newgrid[yindex][xindex],
                    isStart: true,
                    isTarget: false,
                    weight: 1,
                    isWall: false,
                  };
                  start.current = { x: xindex, y: yindex };
                  setGrid(newgrid);
                  break;

                case "settarget":
                  var newgrid = grid.map((elem) => {
                    return elem.map((elem) => {
                      if (!elem.isTarget) return elem;
                      return { ...elem, isTarget: false };
                    });
                  });
                  newgrid[yindex][xindex] = {
                    ...newgrid[yindex][xindex],
                    isStart: false,
                    isTarget: true,
                    weight: 1,
                    isWall: false,
                  };
                  end.current = { x: xindex, y: yindex };
                  setGrid(newgrid);
                  break;

                case "addbricks":
                  var newgrid = grid.slice();
                  newgrid[yindex][xindex] = {
                    ...newgrid[yindex][xindex],
                    weight: 1,
                    isWall: true,
                  };
                  setGrid(newgrid);
                  break;

                case "addweight":
                  var newgrid = grid.slice();
                  newgrid[yindex][xindex] = {
                    ...newgrid[yindex][xindex],
                    weight: 5,
                    isWall: false,
                  };
                  setGrid(newgrid);
                  break;
                default:
                  return;
              }
            }}
          >
            {cell.weight > 1 ? <i className="bi bi-virus"></i> : null}
            {cell.isStart ? <i className="bi bi-geo-alt"></i> : null}
            {cell.isTarget ? <i className="bi bi-geo"></i> : null}
          </div>
        );
      })}
    </div>
  );
}
