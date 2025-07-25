// import { Resend } from 'resend';

// const resend = new Resend('re_AMRqV7n1_7wZdRKvqPjXaM4sp5prQ1h6A'); // ✅ correct: string me diya

// async function sendTestEmail() {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: 'Budget App <onboarding@resend.dev>',
//       to: 'jankush905@gmail.com',
//       subject: '✅ Test Email from Budget App',
//       html: `
//         <div style="font-family: Arial, sans-serif; padding: 20px;">
//           <h2>Hello Ankush! 👋</h2>
//           <p>This is a test email sent using <b>Resend</b>.</p>
//           <p>You're receiving this because you're awesome 🎉</p>
//         </div>
//       `,
//     });

//     if (error) {
//       console.error('❌ Error sending email:', error);
//     } else {
//       console.log('✅ Email sent successfully:', data);
//     }
//   } catch (err) {
//     console.error('💥 Unexpected error:', err);
//   }
// }

// sendTestEmail();
