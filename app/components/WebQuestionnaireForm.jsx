'use client';
import { useState } from 'react';

export default function WebQuestionnaireForm() {
    const [formData, setFormData] = useState({contact_name: '', company_name: '', company_address: '', company_email: '', company_phone: '', company_fax: '', company_desc: '', website_desc: '', demographics_audience: '', website_logo: '', reference_sites: '', competitors_list: '', typeof_images: '', website_style: '', preferrednav_structure: '', special_requestforgraphics: '', have_contentwritten: '', welcomesection_text: '', particularfeature_desc: '', comments: ''});

    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
    };

     const handleSubmit = async (e) => {
        e.preventDefault();
         const formId = 780; // Replace with your Contact Form 7 form ID
         const url = `https://netfirst.ca/gwebpro_new/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`;

         const body = new FormData();
            body.append("contactName", formData.contact_name); // Replace 'your-name' with the actual field name from your form
            body.append("companyName", formData.company_name);
            body.append("companyAddress", formData.company_address);
            body.append("companyEmail", formData.company_email);

            body.append("companyPhone", formData.company_phone); 
            body.append("companyFax", formData.company_fax);
            body.append("companyDesc", formData.company_desc);
            body.append("websiteDesc", formData.website_desc);

            body.append("demographicsAudience", formData.demographics_audience); 
            body.append("websiteLogo", formData.website_logo);
            body.append("referenceSites", formData.reference_sites);
            body.append("competitorsList", formData.competitors_list);
            body.append("typeofImages", formData.typeof_images); 

            body.append("websiteStyle", formData.website_style); 
            body.append("preferrednavStructure", formData.preferrednav_structure);
            body.append("specialRequestforgraphics", formData.special_requestforgraphics);
            body.append("havecontentwritten", formData.have_contentwritten);
            body.append("welcomesectionText", formData.welcomesection_text); 
            body.append("particularfeatureDesc", formData.particularfeature_desc);
            body.append("comments", formData.comments); 

            body.append("_wpcf7_unit_tag", 780);

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
                    setFormData({ contact_name: '', company_name: '', company_address: '', company_email: '', company_phone: '', company_fax: '', company_desc: '', website_desc: '', demographics_audience: '', website_logo: '', reference_sites: '', competitors_list: '', typeof_images: '', website_style: '', preferrednav_structure: '', special_requestforgraphics: '', have_contentwritten: '', welcomesection_text: '', particularfeature_desc: '', comments: '' });

                } catch(error){
                    setLoading(false);
                    console.error("Error submitting the form:", error);
                    setStatus("An error occurred. Please try again.");
                }
              }

    return(
    <>
         <div className="contact-form form-questionnaires">
                <form onSubmit={handleSubmit} >
                  <div className="row">
                    <div className="col-12">
                      <p>
                        We’re very excited to work with you on your website.
                        This document is a starter questionnaire for us to
                        understand your brand, target market, competition,
                        functions of website and more. The more we understand
                        about your business, the better we can create the best
                        possible design.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <input placeholder="Contact Name*" required="" type="text" name="contact_name" value={formData.contact_name} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                      <input placeholder="Business Name*" required="" type="text" name="company_name" value={formData.company_name} onChange={handleChange}/>
                    </div>
                    <div className="col-md-6">
                    <input placeholder="Business Address*" required="" type="text" name="company_address" value={formData.company_address} onChange={handleChange}/>
                    </div>
                    <div className="col-md-6">
                      <input placeholder="Business Email*" required="" type="email" name="company_email" value={formData.company_email} onChange={handleChange}/>
                    </div>
                    <div className="col-md-6">
                      <input placeholder="Business Phone Number*" required="" type="tel" name="company_phone" value={formData.company_phone} onChange={handleChange}/>
                    </div>
                    <div className="col-md-6">
                      <input placeholder="Business Fax" type="text" name="company_fax" value={formData.company_fax} onChange={handleChange}/>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Briefly describe your company and its products/services?
                      </label>
                      <textarea name="company_desc" value={formData.company_desc} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Please briefly describe the purpose of your website?
                        What are the goals for your website?
                      </label>
                      <textarea name="website_desc" value={formData.website_desc} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Describe the demographics of the visitors who will be
                        visiting your website? Who will be your primary target
                        market?
                      </label>
                      <textarea name="demographics_audience" value={formData.demographics_audience} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have an existing logo or is G Web Pro making your
                        logo? (Note: We don’t begin a design mockup until a logo
                        is received. If you have a logo, please attach it in a
                        transparent high resolution format such as eps, png, or
                        tiff)
                      </label>
                       <textarea name="website_logo" value={formData.website_logo} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Please list 5 websites that you find attractive and
                        describe why you like them. Order them from most
                        favourite to least favourite.
                      </label>
                      <textarea name="reference_sites" value={formData.reference_sites} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Please list 5 local or national competitors in your
                        industry? (Provide names and website URL’s)
                      </label>
                      <textarea name="competitors_list" value={formData.competitors_list} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What type of image do you want your website to portray?
                        When thinking about your company, what images comes to
                        mind?
                      </label>
                      <textarea name="typeof_images" value={formData.typeof_images} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have a specific style in mind for your website?
                      </label>
                      <textarea name="website_style" value={formData.website_style} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What is your preferred navigation structure? Any special
                        requests? (NOTE: Navigation structure refers to the
                        pages that will be available to users from the main
                        navigation menu. For example, Home, About Us, Services,
                        Gallery, News, Etc. Also list any sub-categories for
                        your products/services or a reference website that is
                        similar.)
                      </label>
                      <textarea name="preferrednav_structure" value={formData.preferrednav_structure} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have any special requests for photos or graphics
                        on the home page?
                      </label>
                      <textarea name="special_requestforgraphics" value={formData.special_requestforgraphics} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have content written for your website? What
                        special content should be present on your home page?
                        (NOTE: Special Content refers to the individualized
                        sections that a home page is often broken into. For
                        example, a web design company may have sections for
                        Company News, Industry News, Testimonials, Our Team,
                        etc.)
                      </label>
                      <textarea name="have_contentwritten" value={formData.have_contentwritten} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Please provide the text for the welcome section of your
                        home page. (NOTE: It’s best to supply the home page text
                        before designs are initiated. The designers can then
                        work around the text and know how much space it will
                        require on the home page. If you don’t have the content
                        ready, try to provide a rough estimate on the number of
                        characters.)
                      </label>
                      <textarea name="welcomesection_text" value={formData.welcomesection_text} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Describe in detail any particular features or function
                        for your website? What will clients be able to do and
                        see on certain pages? Do you have any specific
                        requirements for each function? (For example. There
                        should be a gallery for each project or be able to zoom
                        in and out of each image.)
                      </label>
                      <textarea name="particularfeature_desc" value={formData.particularfeature_desc} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">Any other comments or requests?</label>
                      <textarea name="comments" value={formData.comments} onChange={handleChange} placeholder="Answer"></textarea>
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