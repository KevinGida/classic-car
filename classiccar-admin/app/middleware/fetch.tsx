import axios from "axios";
import { NextResponse } from "next/server";
import Cookies from "js-cookie";

const MAX_AGE = 60 * 60 * 24 * 30;
const secret = process.env.NEXT_PUBLIC_JWT_SECRET || "";

export async function Login(payload: Object) {
  try {
    const { data } = await axios.post(
      "http://localhost:8080/api/auth/authenticate",
      payload
    );

    const dbid = data.token;

    if (!dbid) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    Cookies.set("dbid", dbid, {
      expires: 7,
    });

    await axios.post("/api/auth/login", payload);

    const response = {
      message: "Authenticated!",
    };

    return new Response(JSON.stringify(response), {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 403,
      }
    );
  }
}

export async function GetAllCars() {
  const token = Cookies.get("dbid");

  if (!token) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  try {
    const contacts = await axios.get("http://localhost:8080/admin/allCars", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(contacts);

    return contacts;
  } catch (e) {
    console.log(e);
  }
}
