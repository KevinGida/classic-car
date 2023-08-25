import axios from "axios";
import Cookies from "js-cookie";

const jwt_secret = process.env.jwt_secret;

export function checkJwt() {}

export async function login(payload) {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/auth/authenticate",
      payload
    );
    const token = await response.data.token;

    Cookies.set("token", token, {
      expires: 7,
      sameSite: "strict",
      secure: true,
    });
  } catch (e) {
    console.log(e.message);
  }
}

export async function GET() {
  const cookieStore = Cookies();
  const token = cookieStore.get("token");
}
