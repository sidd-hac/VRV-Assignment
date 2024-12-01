import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";



const prisma = new PrismaClient();

const  PUT = async(req: Request)  => {
 
  const body = await req.json();

  const { id, role } = body;

  // Validate input
  if (!id || !role) {
    return NextResponse.json({ error: "User ID and role are required" } , {status : 400});
  }

  try {
    // Update the user's role
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { role },
    });

    return NextResponse.json({ message: "Role updated successfully", user: updatedUser } , {status : 200});
  } catch (error) {
    return NextResponse.json({ error: "Failed to update role" } , {status : 500});
  }
}

export {PUT}