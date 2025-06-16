'use client';
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({first_name: "", last_name: "", email_id: "", phone_number: "", company_name: "", service: "", subject: "", message: "" });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
            const formId = 6; // Replace with your Contact Form 7 form ID
            const url = `https://netfirst.ca/gwebpro_new/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`;
            const body = new FormData();
            body.append("first-name", formData.first_name); // Replace 'your-name' with the actual field name from your form
            body.append("last-name", formData.last_name);
            body.append("email-id", formData.email_id);
            body.append("phone-number", formData.phone_number);

            body.append("company-name", formData.company_name); 
            body.append("services", formData.service);
            body.append("subject", formData.subject);
            body.append("message", formData.message);

            body.append("_wpcf7_unit_tag", 6);

             try{
                    const response = await fetch(url,{
                    method: "POST",
                    body,
                    });
                    const result = await response.json();
                    if(result.status === "mail_sent"){
                            setStatus("Thank You! Your message is submitted successfully.");
                    } else{
                            setStatus(result.message);
                    }

                    //Reset the form
                    setFormData({ first_name: '', last_name: '', email_id: '', phone_number: '', company_name: '', service: '', subject: '', message: '',  });

                } catch(error){
                    console.error("Error submitting the form:", error);
                    setStatus("An error occurred. Please try again.");
                }
    };

  

    return(
    <>
    <div className="row">
            <div className="col">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="first_name"
                        value={formData.first_name} onChange={handleChange}
                        placeholder="First Name *" required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="last_name"
                        value={formData.last_name} onChange={handleChange}
                        placeholder="Last Name *" required
                      />
                    </div>
                    <div className="col-md-6">
                      <input type="email" name="email_id" value={formData.email_id} onChange={handleChange} placeholder="Email Id *" required/>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        name="phone_number"
                        value={formData.phone_number} onChange={handleChange}
                        placeholder="Phone Number *" required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="company_name"
                        value={formData.company_name} onChange={handleChange}
                        placeholder="Company Name *" required
                      />
                    </div>
                    <div className="col-md-6">
                      <select name="service" value={formData.service} onChange={handleChange} required>
                        <option value="" defaultValue>
                          Services
                        </option>
                        <option value="Web Development">Web Development</option>
                        <option value="App Development">App Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Cloud Computing">Cloud Computing</option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="Data Analytics">Data Analytics</option>
                        <option value="IT Consulting">IT Consulting</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject} onChange={handleChange}
                        placeholder="Subject *"
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message"></textarea>
                    </div>
                    <div className="col-md-12">
                      <button type='submit'>Submit Message</button> 
                    </div>
                    <div className="col-md-12"> {status && <p style={{ color: 'green' }}>{status}</p>}</div>
                  </div>
                </form>
              </div>
            </div>
          </div>
    </>
    );
}