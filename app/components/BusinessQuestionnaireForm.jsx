'use client';
import { useState } from 'react';

export default function BusinessQuestionnaireForm() {
    const [formData, setFormData] = useState({  company_name: '', company_website: '', company_address: '', company_email: '', company_phone: '', hoursof_operation: '', website_hostinglogin: '', website_adminlogin: '', business_owner: '', business_establishedDate: '', employee_revenue: '', business_industry: '', business_goal: '', socialMedia_profiles: '', other_correspondingWebsite: '', google_pluspage: '', gst_hstno: '', target_area: '', is_parkingavailable: '', payment_methods: '', communicate_method:'', previous_business_name:'', associated_name:'' });

    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
    };

     const handleSubmit = async (e) => {
        e.preventDefault();
         const formId = 781; // Replace with your Contact Form 7 form ID
         const url = `https://netfirst.ca/gwebpro_new/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`;

         const body = new FormData();
            body.append("companyName", formData.company_name); // Replace 'your-name' with the actual field name from your form
            body.append("companyWebsite", formData.company_website);
            body.append("companyAddress", formData.company_address);
            body.append("companyEmail", formData.company_email);

            body.append("companyPhone", formData.company_phone); 
            body.append("hoursofOperation", formData.hoursof_operation);
            body.append("websiteHostinglogin", formData.website_hostinglogin);
            body.append("websiteAdminlogin", formData.website_adminlogin);

            body.append("businessOwner", formData.business_owner); 
            body.append("businessEstablishedDate", formData.business_establishedDate);
            body.append("employeeRevenue", formData.employee_revenue);
            body.append("businessIndustry", formData.business_industry);
            body.append("businessGoal", formData.business_goal); 

            body.append("socialMediaProfiles", formData.socialMedia_profiles); 
            body.append("otherCorrespondingWebsite", formData.other_correspondingWebsite);
            body.append("googlePluspage", formData.google_pluspage);
            body.append("GstHstno", formData.gst_hstno);
            body.append("targetArea", formData.target_area); 
            body.append("isParkingavailable", formData.is_parkingavailable);
            body.append("paymentMethods", formData.payment_methods); 
            body.append("communicateMethod", formData.communicate_method);
            body.append("previousBusinessName", formData.previous_business_name);
            body.append("associatedName", formData.associated_name);

            body.append("_wpcf7_unit_tag", 781);

              try{
                    setLoading(true);
                    const response = await fetch(url,{
                    method: "POST",
                    body,
                    });
                    const result = await response.json();
                    if(result.status === "mail_sent"){
                            setLoading(false);
                            setStatus("Thank You! Your message is submitted successfully.");
                    } else{
                            setLoading(false);
                            setStatus(result.message);
                    }

                    //Reset the form
                    setFormData({ company_name: '', company_website: '', company_address: '', company_email: '', company_phone: '', hoursof_operation: '', website_hostinglogin: '', website_adminlogin: '', business_owner: '', business_establishedDate: '', employee_revenue: '', business_industry: '', business_goal: '', socialMedia_profiles: '', other_correspondingWebsite: '', google_pluspage: '', gst_hstno: '', target_area: '', is_parkingavailable: '', payment_methods: '', communicate_method:'', previous_business_name:'', associated_name:'' });

                } catch(error){
                    setLoading(false);
                    console.error("Error submitting the form:", error);
                    setStatus("An error occurred. Please try again.");
                }
              }

    return(
    <>
         <div className="contact-form form-questionnaires">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <p>
                        Please fill out the information below to ensure your
                        business listings online are consistent. This
                        information will help us to ensure every listing we
                        create is correct with no discrepancies.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <input placeholder="Business Name*" required="" type="text" name="company_name" value={formData.company_name} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                      <input placeholder="Website*" required="" type="text" name="company_website" value={formData.company_website} onChange={handleChange} />
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Physical Address:
                        <br />
                        (If company has multiple locations, please list all of
                        them)
                      </label>
                      <textarea name="company_address" value={formData.company_address} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="">Email Address:</label>
                      <input type="email" name="company_email" value={formData.company_email} onChange={handleChange} placeholder="Answer" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="">Phone No.:</label>
                      <input type="tel" name="company_phone" value={formData.company_phone} onChange={handleChange} placeholder="Answer" />
                    </div>

                    <div className="col-12">
                      <label htmlFor="">Hours of Operation:</label>
                      <textarea name="hoursof_operation" value={formData.hoursof_operation} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Website FTP and Hosting Login Details:
                      </label>
                      <input type="file" name="" id="" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Provide us website admin login details: (If you have)
                      </label>
                      <textarea name="website_adminlogin" value={formData.website_adminlogin} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Business Owner’s Name or Manager’s Name (Please provide
                        us the name and designation of the owner(s) or
                        authorized manager(s) – they will be listed on public
                        business directories).
                      </label>
                      <textarea name="" placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        When was the business established? Provide the date
                        (month and year).
                      </label>
                      <textarea name="business_establishedDate" value={formData.website_adminlogin} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What is the approximate number of employees and the
                        estimated yearly revenue?
                      </label>
                      <textarea name="employee_revenue" value={formData.employee_revenue} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What industry and category is your business in?
                      </label>
                      <textarea name="business_industry" value={formData.business_industry} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Please provide us a description of your business goals
                        and philosophy?
                      </label>
                      <textarea name="business_goal" value={formData.business_goal} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have any Social Media Profile’s? If yes, please
                        provide the URLs and login access to, Twitter, Linkedin,
                        Pinterest, Youtube and any other social media profiles.
                        For Facebook - please set manny.saran@gwebpro.com as the
                        Page Role Manager.
                      </label>
                      <textarea name="socialMedia_profiles" value={formData.socialMedia_profiles} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have a photo of the Owner or the authorized
                        manager? If yes, please send the image your marketing
                        consultant or send to sales@gwebpro.com.
                      </label>
                      <input type="file" name="" id="" />
                    </div>
                    <div className="col-12">
                      <p>
                        <strong>Detail Information of Business</strong>
                      </p>
                      <label htmlFor="">
                        Do you have other corresponding business website? If
                        yes, please mention the URL of those websites:
                      </label>
                      <textarea name="other_correspondingWebsite" value={formData.other_correspondingWebsite} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have a verified Local Google Plus page for your
                        location(s)? If yes, then please provide us the URL and
                        assign administrative access to cglen30@gmail.
                      </label>
                      <textarea name="google_pluspage" value={formData.google_pluspage} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <p>
                        <strong>Additional</strong>
                      </p>
                      <label htmlFor="">
                        What is your Business Number (GST/HST number)?
                      </label>
                      <textarea name="google_pluspage" value={formData.google_pluspage} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Which areas do you target? Specify all cities, regions
                        and countries.
                      </label>
                      <textarea name="google_pluspage" value={formData.google_pluspage} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-md-6">
                      <p>Does your business have parking available? (Yes/No)</p>
                      <div className="input_radio">
                        <input type="radio" id="business_parking_yes" name="business_parking" value="yes"/>
                        <label for="business_parking_yes">Yes</label>
                        <input type="radio" id="business_parking_no" name="business_parking" value="no"/>
                        <label for="business_parking_no">No</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="">
                        What payment methods do you accept?
                      </label>
                      <input type="text" name="payment_methods" value={formData.payment_methods} onChange={handleChange} />
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        How do you prefer to communicate with your customers?
                        (Phone/Email)
                      </label>
                      <textarea name="communicate_method" value={formData.communicate_method} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Did your business use to operate under a different name
                        previously, either through a change of branding,
                        ownership or a new acquisition? If yes, please mention
                        the previous business name.
                      </label>
                      <textarea name="previous_business_name" value={formData.previous_business_name} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Does your business have more than one business name? If
                        yes, please mention the other associated names
                      </label>
                      <textarea nname="associated_name" value={formData.associated_name} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>

                    <div className="col-12">
                     {loading ? (
                      <button disabled> Sending Request...</button>
                       ) : (
                          <button type="submit">Submit</button>
                       )}
                    </div>

                      <div className="col-12"> {status && <p style={{ color: 'green' }}>{status}</p>}</div>
                      
                  </div>
                </form>
              </div>
    </>
    );
}