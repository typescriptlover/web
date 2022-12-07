import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import z from 'zod';

const bodySchema = z
   .object({
      from: z.string().email(),
      subject: z.string().min(1, {
         message: 'Subject must be atleast 1 character.',
      }),
      body: z.string().min(10, {
         message: 'Body must be atleast 10 characters.',
      }),
   })
   .strict();

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method !== 'POST') {
      return res.status(405).json({
         success: false,
         message: 'Invalid request method',
      });
   }

   try {
      const { from, subject, body } = await bodySchema.parse(req.body);

      const transporter = nodemailer.createTransport({
         service: 'Gmail',
         auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD,
         },
      });

      try {
         await transporter.sendMail({
            to: 'vigywadhwani@gmail.com',
            subject: 'Portfolio Contact',
            html: `<div><h4>from: ${from}</h4><h2>${subject}</h2>${body}</div>`,
         });

         return res.status(200).json({
            success: true,
            message: 'Email sent.',
         });
      } catch (err: any) {
         console.log('Email send failed:', err.message);
         return res.status(200).json({
            success: false,
            message: 'Failed sending email.',
         });
      }
   } catch (err) {
      if (err instanceof z.ZodError) {
         return res.status(200).json({
            success: false,
            message: err.issues,
         });
      }

      return res.status(500).json({
         success: false,
         message: 'Something went wrong',
      });
   }
}
