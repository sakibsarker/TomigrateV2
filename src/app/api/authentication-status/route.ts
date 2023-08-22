import { getDataFromToken } from "@/helpers/getDataFromToken";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");

    if (user) {
      return NextResponse.json({
        mesaaage: "User is authenticated",
        success: true,
        isAuthenticated: true,
      });
    }

    return NextResponse.json({
      message: "User is not loggin in",
      success: true,
      isAuthenticated: false,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
