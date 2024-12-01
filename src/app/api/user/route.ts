

import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();

const GET = async () => {

  try {

    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
   
     return NextResponse.json({ error: 'Failed to fetch users' }, {status : 500});
  }

}

const POST = async (req: Request) => {

  const body = await req.json();

  const { email, name, password } = body;

  console.log(email, name, password);

  if (!email || !name || !password) {
    return NextResponse.json({ error: 'Email, name, and password are required' }, { status: 400 });
  }


  try {

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
        role: 'user'
      }
    });
    return NextResponse.json(user);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching users:', error.message);  // Log the message
      return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
    } else {
      console.error('Unknown error:', error);  // In case it's not a standard Error object
    }

  }

}

const DELETE = async(req : NextApiRequest , res : NextApiResponse) => {
    
  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id } = req.query;

  // Validate input
  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "User ID is required" });
  }

  try {
    // Delete the user from the database
    const deletedUser = await prisma.user.delete({
      where: { id },
    });

    return res.status(200).json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ error: "Failed to delete user" });
  }

}




export { GET, POST , DELETE };