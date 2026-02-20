import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
                { status: 400 }
            );
        }

        // This is where you would send an email using services like Nodemailer, Resend, or SendGrid
        console.log('--- NEW CONTACT FORM SUBMISSION ---');
        console.log(`From: ${name} (${email})`);
        console.log(`Message: ${message}`);
        console.log('-----------------------------------');

        // Simulate a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json(
            { message: 'Your message has been sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
