

import { PrismaClient } from '@prisma/client';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();

const GET = async () => {

  try {

    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, {status : 500});
  }

}

const POST = async (req: NextApiRequest) => {

  const { email, name, password } = req.body;

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




export { GET, POST };