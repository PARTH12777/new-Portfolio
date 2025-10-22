const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('.'));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 requests per windowMs
    message: {
        error: 'Too many requests from this IP, please try again later.'
    }
});

app.use('/api/contact', limiter);

// Email transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
    }
});

// Verify transporter configuration
transporter.verify((error, success) => {
    if (error) {
        console.log('Email configuration error:', error);
    } else {
        console.log('Email server is ready to send messages');
    }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                error: 'All fields are required'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                error: 'Invalid email address'
            });
        }

        // Prepare email content
        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: 'Poppins', Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
                    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
                    .header { background: linear-gradient(45deg, #00d4ff, #6366f1); color: white; padding: 30px; text-align: center; }
                    .header h1 { margin: 0; font-size: 28px; }
                    .header p { margin: 10px 0 0 0; opacity: 0.9; }
                    .content { padding: 30px; }
                    .field { margin-bottom: 20px; }
                    .field label { display: block; font-weight: 600; color: #333; margin-bottom: 5px; }
                    .field value { display: block; padding: 10px; background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 5px; }
                    .message-content { background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #00d4ff; }
                    .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 14px; }
                    .tech-badge { display: inline-block; background: #00d4ff; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; margin: 2px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>New Contact Form Submission</h1>
                        <p>You have received a new message through your portfolio website</p>
                    </div>
                    <div class="content">
                        <div class="field">
                            <label>Name:</label>
                            <div class="value">${name}</div>
                        </div>
                        <div class="field">
                            <label>Email:</label>
                            <div class="value">${email}</div>
                        </div>
                        <div class="field">
                            <label>Subject:</label>
                            <div class="value">${subject}</div>
                        </div>
                        <div class="field">
                            <label>Message:</label>
                            <div class="message-content">${message}</div>
                        </div>
                    </div>
                    <div class="footer">
                        <p>This email was sent from your portfolio contact form.</p>
                        <p>
                            <span class="tech-badge">HTML5</span>
                            <span class="tech-badge">CSS3</span>
                            <span class="tech-badge">JavaScript</span>
                            <span class="tech-badge">Node.js</span>
                        </p>
                        <p>© 2024 Parth Patidar - Full Stack Developer</p>
                    </div>
                </div>
            </body>
            </html>
        `;

        // Email options
        const mailOptions = {
            from: `"Portfolio Contact Form" <${process.env.EMAIL_USER || 'noreply@portfolio.com'}>`,
            to: 'patidarparth2660@gmail.com',
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`,
            html: htmlContent,
            text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This email was sent from your portfolio contact form.
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Send auto-reply to sender
        const autoReplyOptions = {
            from: `"Parth Patidar" <${process.env.EMAIL_USER || 'patidarparth2660@gmail.com'}>`,
            to: email,
            subject: 'Thank you for contacting me!',
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: 'Poppins', Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
                        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
                        .header { background: linear-gradient(45deg, #00d4ff, #6366f1); color: white; padding: 30px; text-align: center; }
                        .content { padding: 30px; line-height: 1.6; }
                        .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; }
                        .social-links a { color: #00d4ff; text-decoration: none; margin: 0 10px; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>Thank You, ${name}!</h1>
                            <p>Your message has been received successfully</p>
                        </div>
                        <div class="content">
                            <p>Hi ${name},</p>
                            <p>Thank you for reaching out to me through my portfolio website. I've received your message about "<strong>${subject}</strong>" and I appreciate your interest.</p>
                            <p>I'll review your message and get back to you as soon as possible, usually within 24-48 hours.</p>
                            <p>In the meantime, feel free to:</p>
                            <ul>
                                <li>Check out my latest projects on GitHub</li>
                                <li>Connect with me on LinkedIn</li>
                                <li>Follow my journey on Instagram</li>
                            </ul>
                            <p>Best regards,<br><strong>Parth Patidar</strong><br>Full Stack Developer</p>
                        </div>
                        <div class="footer">
                            <div class="social-links">
                                <a href="https://github.com/PARTH12777">GitHub</a>
                                <a href="https://www.linkedin.com/in/parth-patidar-25a927290">LinkedIn</a>
                                <a href="https://www.instagram.com/parthth__">Instagram</a>
                                <a href="https://wa.me/+919509843596">WhatsApp</a>
                            </div>
                            <p>© 2024 Parth Patidar - Passionate Coder | Future Entrepreneur</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
            text: `
Hi ${name},

Thank you for reaching out to me through my portfolio website. I've received your message about "${subject}" and I appreciate your interest.

I'll review your message and get back to you as soon as possible, usually within 24-48 hours.

Best regards,
Parth Patidar
Full Stack Developer

Connect with me:
GitHub: https://github.com/PARTH12777
LinkedIn: https://www.linkedin.com/in/parth-patidar-25a927290
WhatsApp: https://wa.me/+919509843596
            `
        };

        await transporter.sendMail(autoReplyOptions);

        res.json({
            success: true,
            message: 'Message sent successfully! You should receive a confirmation email shortly.'
        });

    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to send message. Please try again later.'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        error: 'Endpoint not found'
    });
});

// Error handler
app.use((error, req, res, next) => {
    console.error('Server error:', error);
    res.status(500).json({
        error: 'Internal server error'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`
🌟 Parth Patidar's Portfolio Server Running 🌟
    
📡 Server: http://localhost:${PORT}
📧 Contact API: http://localhost:${PORT}/api/contact
⚡ Status: Ready for connections
    
Built with:
- Express.js
- Nodemailer
- Security middleware
- Rate limiting
    
Contact: patidarparth2660@gmail.com
    `);
});

module.exports = app;