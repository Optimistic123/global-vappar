// ContactForm.js
import React, { useState } from 'react';
import './ContactForm.scss';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
        if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = '10-digit phone number is required';
        if (!formData.message) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form Submitted:', formData);
            setFormData({
                name: '',
                email: '',
                phoneNumber: '',
                message: '',
            });
            setErrors({});
            alert('Message Sent!');
        }
    };

    return (
        <div className="contact-form-container">

            <div className="form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                            />
                            {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your message"
                        />
                        {errors.message && <p className="error">{errors.message}</p>}
                    </div>
                    <button type="submit">Submit Now</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;

