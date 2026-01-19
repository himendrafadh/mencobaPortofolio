import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
                console.error('Error:', result.message);
            }
        } catch (error) {
            console.error('Network error:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h3>Let's Talk</h3>
                        <p>
                            I'm interested in freelance opportunities - especially ambitious or large projects.
                            However, if you have other request or question, don't hesitate to use the form.
                        </p>
                        <div className="info-item">
                            <span>📧</span>
                            <a href="mailto:himendra@example.com">himendra@example.com</a>
                        </div>
                        <div className="info-item">
                            <span>📍</span>
                            <p>Jakarta, Indonesia</p>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Your project details..."
                                rows="5"
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && <p className="status-msg success">Message sent successfully!</p>}
                        {status === 'error' && <p className="status-msg error">Failed to send message. Please try again.</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
