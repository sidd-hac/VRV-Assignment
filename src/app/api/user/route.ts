

import { PrismaClient } from '@prisma/client';
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

const DELETE = async(req : Request ) => {
    
  if (req.method !== "DELETE") {
    return NextResponse.json({ error: "Method not allowed" } , {status : 405});
  }

  const request = await req.json();

  const {id} = request;

  // Validate input
  if (!id || typeof id !== "string") {
    return NextResponse.json({ error: "User ID is required" } ,{ status : 400});
  }

  try {
    // Delete the user from the database
    const deletedUser = await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json({ message: "User deleted successfully", user: deletedUser } , {status : 200});
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete user" } , {status : 500});
  }

}




export { GET, POST , DELETE };