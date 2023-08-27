import axios from "axios";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";
import Cookies from "js-cookie";
import { serialize } from "cookie";

const MAX_AGE = 60 * 60 * 24 * 30;

export async function login(payload: Object) {
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
          status: 403,
        }
      );
    }

    Cookies.set("dbid", dbid, {
      expires: MAX_AGE,
      sameSite: "Strict",
      path: "/",
    });

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
