'use client';
import { useState } from 'react';

export default function SeoQuestionnaireForm() {
    const [formData, setFormData] = useState({company_name: "", email_id: "", company_desc: "", product_desc: "", what_trends: "", product_for_promotion: "", target_audience: "", main_competitors: "", usp:"", likes_dislikes_of_competitors:"", customer_desc:"", customer_solutions:"", previous_works:"", referred_photo:"", licenses_details:"", testimonials_data:"", primary_keywords:"", client_interact:"", previous_seo_efforts:"", who_makes_changes:"", any_subdomains:"", is_google_analytics_installed:"" });

    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
    };

     const handleSubmit = async (e) => {
        e.preventDefault();
         const formId = 778; // Replace with your Contact Form 7 form ID
         const url = `https://netfirst.ca/gwebpro_new/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`;

         const body = new FormData();
            body.append("companyName", formData.company_name); // Replace 'your-name' with the actual field name from your form
            body.append("companyEmail", formData.email_id);
            body.append("companyDesc", formData.company_desc);
            body.append("productServicedesc", formData.product_desc);

            body.append("whatTrends", formData.what_trends); 
            body.append("serviceProductforpromotion", formData.product_for_promotion);
            body.append("targetAudience", formData.target_audience);
            body.append("competitorsList", formData.main_competitors);

            body.append("uspDesc", formData.usp); 
            body.append("likeDislikeofCompetitors", formData.likes_dislikes_of_competitors);
            body.append("customerDesc", formData.customer_desc);
            body.append("solutionsforCustomer", formData.customer_solutions);
            body.append("previousWorks", formData.previous_works); 

            body.append("referredPhoto", formData.referred_photo); 
            body.append("livencewarrantyDetails", formData.licenses_details);
            body.append("testimonialData", formData.testimonials_data);
            body.append("primaryKeywords", formData.primary_keywords);

            body.append("clientInteract", formData.client_interact); 
            body.append("seoEfforts", formData.previous_seo_efforts);
            body.append("whoisChanging", formData.who_makes_changes);
            body.append("anysubDomains", formData.any_subdomains);
            body.append("isgoogleAnalyticsinstalled", formData.is_google_analytics_installed);

            body.append("_wpcf7_unit_tag", 778);

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
                    setFormData({ company_name: '', email_id: '', company_desc: '', product_desc: '', what_trends: '', product_for_promotion: '', target_audience: '', main_competitors: '', usp: '', likes_dislikes_of_competitors: '', customer_desc: '', customer_solutions: '', previous_works: '', referred_photo: '', licenses_details: '', testimonials_data: '', primary_keywords: '', client_interact: '', previous_seo_efforts: '', who_makes_changes: '', any_subdomains: '', is_google_analytics_installed:'' });

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
                        This document is a starter questionnaire for us to
                        understand your brand, target market, competitive
                        advantage and more. The more we understand about your
                        business, the better we can develop relevant copy that
                        speaks to your audiences.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="company_name" value={formData.company_name} onChange={handleChange} placeholder="Company Name*" required=""/>
                    </div>
                    <div className="col-md-6">
                      <input type="email" name="email_id" value={formData.email_id} onChange={handleChange} placeholder="Email ID*" required="" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Please provide a description of your company and its
                        history?
                      </label>
                      <textarea name="company_desc" value={formData.company_desc} onChange={handleChange} placeholder="Answer*" required=""></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Please provide a description and the features of all
                        your products/services?
                      </label>
                      <textarea name="product_desc" value={formData.product_desc} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What trends are happening now or could happen in the
                        future that would affect your company and its products
                        and/or services?
                      </label>
                      <textarea name="what_trends" value={formData.what_trends} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What are the specific services or products you would
                        like to promote? Please list them in order of
                        importance.
                      </label>
                      <textarea name="product_for_promotion" value={formData.product_for_promotion} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Who is your demographic target audience (Ex. Age,
                        Gender, Marital Status, etc.)? What are your
                        geographical target markets?
                      </label>
                      <textarea name="target_audience" value={formData.target_audience} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Who are your main competitors? (Provide name and website
                        URL’s)
                      </label>
                      <textarea name="main_competitors" value={formData.main_competitors} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What sets you apart from your competition? What is your
                        unique selling point?
                      </label>
                      <textarea name="usp" value={formData.usp} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What do you like and dislike about the way your
                        competitors present themselves online?
                      </label>
                      <textarea name="likes_dislikes_of_competitors" value={formData.likes_dislikes_of_competitors} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Describe your typical customer and their
                        needs/preferences.
                      </label>
                      <textarea name="customer_desc" value={formData.customer_desc} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What problems do your customers have that your business
                        solves?
                      </label>
                      <textarea name="customer_solutions" value={formData.customer_solutions} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Are there any previous works/projects/awards/events that
                        we should mention?
                      </label>
                      <textarea name="previous_works" value={formData.previous_works} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have any photographs or other images you would
                        like to specifically incorporate into your content? If
                        yes, one of our consultants will contact you for further
                        steps.
                      </label>
                      <textarea name="referred_photo" value={formData.referred_photo} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have licenses/accreditations/memberships with
                        organizations? Do you offer any warranties or guarantees
                        for your products? Any insurance for your services?
                      </label>
                      <textarea name="licenses_details" value={formData.licenses_details} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have testimonials/references? Always try to
                        encourage satisfied customers to leave reviews for you
                        on Google and other review sites.
                      </label>
                      <textarea name="testimonials_data" value={formData.testimonials_data} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What are the primary keywords you would like to target?
                      </label>
                      <textarea name="primary_keywords" value={formData.primary_keywords} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What is the feeling you want your clients or consumers
                        to experience when they interact with your company
                        online?
                      </label>
                      <textarea name="client_interact" value={formData.client_interact} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <p>
                        <strong>
                          The questions below are only applicable to SEO
                          clients.
                        </strong>
                      </p>
                      <label htmlFor="">
                        Have you had any previous SEO efforts implemented on
                        site? If yes, explain details.
                      </label>
                      <textarea name="previous_seo_efforts" value={formData.previous_seo_efforts} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Who makes changes to your website? Do you have someone
                        or will G Web Pro be doing the changes?
                      </label>
                      <textarea name="who_makes_changes" value={formData.who_makes_changes} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have any sub-domains? (Ex. subdomain.domain.com)
                      </label>
                      <textarea name="any_subdomains" value={formData.any_subdomains} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have Google Analytics installed on website? If
                        yes, please give administrative access to
                        analytics@gwebpro.com - if no, we will create an account
                        for you.
                      </label>
                      <textarea name="is_google_analytics_installed" value={formData.is_google_analytics_installed} onChange={handleChange} placeholder="Answer"></textarea>
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