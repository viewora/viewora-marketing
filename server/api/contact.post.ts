import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, subject, message } = body

  // Validate
  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields',
    })
  }

  const config = useRuntimeConfig()

  // Create transporter
  // We recommend using environment variables for SMTP settings
  const transporter = nodemailer.createTransport({
    host: config.smtpHost || 'smtp.gmail.com',
    port: parseInt(config.smtpPort || '587'),
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  })

  try {
    // Send mail
    await transporter.sendMail({
      from: `"Viewora Contact Form" <${config.smtpUser || 'vieworasoftware@gmail.com'}>`,
      to: 'vieworasoftware@gmail.com',
      replyTo: email,
      subject: `[Contact Form] ${subject}: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #3b82f6;">New Message from Viewora Contact Form</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error('Email send error:', error)
    
    // If no credentials are set, we might want to log this but return success 
    // for demo purposes if we are in development, OR throw an error.
    // Since this is for a user, I'll return an error so they know they need to set up SMTP.
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email. Please check SMTP configuration.',
    })
  }
})
