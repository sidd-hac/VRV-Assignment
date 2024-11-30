

import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';


const prisma = new PrismaClient();

 const GET = async(req :NextApiRequest ,res : NextApiResponse  ) =>{
        
    try {
    
        const users = await prisma.user.findMany();
        res.status(200).json(users);
      } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
      }

 }
 const POST = async(req :NextApiRequest ,res : NextApiResponse ) =>{

  const {email , name , password} = req.body;
        
    try {
    
        const users = await prisma.user.create({
          data : {
            email,
            name,
            password,
            role : 'user'
          }
        });
        res.status(200).json(users);
      } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
      }

 }




 export { GET , POST};