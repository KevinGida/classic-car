"use client";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const dashboard = () => {
  const router = useRouter();

  const fetchContacts = () => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return <div>dashboard</div>;
};

export default dashboard;
