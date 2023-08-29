"use client";
import { useEffect } from "react";
import { GetAllCars } from "../middleware/fetch";

export default function DashboardPage() {
  useEffect(() => {
    GetAllCars();
  }, []);

  return (
    <div>
      <h1>Super Secret Dashboard</h1>

      {}
    </div>
  );
}
