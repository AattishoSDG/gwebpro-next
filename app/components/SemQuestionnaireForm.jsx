'use client';
import { useState } from 'react';

export default function SemQuestionnaireForm() {
    const [formData, setFormData] = useState({company_name: '', email_id: '', current_advertising: '', google_adwardsid: '', marketing_goals: '', competitors_list: '', usp_desc: '', target_audience: '', demographics_audience: '', target_area: '', seasonal_products: '', bestselling_product: '', primary_keywords: '', promotions_discount: '', specific_keywordforCamp: '', google_analyticsinfo: '', whois_changing: '', google_mapsaccount: ''});

    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
    };

     const handleSubmit = async (e) => {
        e.preventDefault();
         const formId = 779; // Replace with your Contact Form 7 form ID
         const url = `https://netfirst.ca/gwebpro_new/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`;

         const body = new FormData();
            body.append("companyName", formData.company_name); // Replace 'your-name' with the actual field name from your form
            body.append("companyEmail", formData.email_id);
            body.append("currentAdvertising", formData.current_advertising);
            body.append("googleAdwardsid", formData.google_adwardsid);

            body.append("marketingGoals", formData.marketing_goals); 
            body.append("competitorsList", formData.competitors_list);
            body.append("uspDesc", formData.usp_desc);
            body.append("targetAudience", formData.target_audience);

            body.append("demographicsAudience", formData.demographics_audience); 
            body.append("targetArea", formData.target_area);
            body.append("seasonalProducts", formData.seasonal_products);
            body.append("bestsellingProduct", formData.bestselling_product);
            body.append("primaryKeywords", formData.primary_keywords); 

            body.append("promotionsDiscount", formData.promotions_discount); 
            body.append("specifickeywordforCamp", formData.specific_keywordforCamp);
            body.append("googleAnalyticsinfo", formData.google_analyticsinfo);
            body.append("whoisChanging", formData.whois_changing);
            body.append("googleMapsaccount", formData.google_mapsaccount); 

            body.append("_wpcf7_unit_tag", 779);

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
                    setFormData({ company_name: '', email_id: '', current_advertising: '', google_adwardsid: '', marketing_goals: '', competitors_list: '', usp_desc: '', target_audience: '', demographics_audience: '', target_area: '', seasonal_products: '', bestselling_product: '', primary_keywords: '', promotions_discount: '', specific_keywordforCamp: '', google_analyticsinfo: '', whois_changing: '', google_mapsaccount: '' });

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
                        understand your brand, target market, competition,
                        competitive advantage and more. The more we understand
                        about your business, the better we can develop relevant
                        ad copy, test out new strategies and to optimize your ad
                        campaign.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <input  type="text" name="company_name" value={formData.company_name} onChange={handleChange} placeholder="Company Name*" required=""/>
                    </div>
                    <div className="col-md-6">
                      <input type="email" name="email_id" value={formData.email_id} onChange={handleChange} placeholder="Email ID*" required="" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Are you currently doing any advertising for your
                        business? Please provide details.
                      </label>
                      <textarea name="current_advertising" value={formData.current_advertising} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have an existing Google Adwords Account? If yes,
                        please provide your customer ID number?
                      </label>
                      <textarea name="google_adwardsid" value={formData.google_adwardsid} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">What are your marketing goals?</label>
                      <textarea name="marketing_goals" value={formData.marketing_goals} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Who are your direct competitors? (Provide name and
                        website URL’s)
                      </label>
                      <textarea name="competitors_list" value={formData.competitors_list} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        How are you different than the competition? What is your
                        unique selling position?
                      </label>
                      <textarea name="usp_desc" value={formData.usp_desc} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Who is your target audience? Please explain each segment
                        and what aspects of your business are targeted to them.
                      </label>
                      <textarea name="target_audience" value={formData.target_audience} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What are the demographics of your target audience? (Ex.
                        Age, Gender, Marital Status, etc.)
                      </label>
                      <textarea name="demographics_audience" value={formData.demographics_audience} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Which geographical area(s) do you want to target?
                      </label>
                      <textarea name="target_area" value={formData.target_area} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have seasonal products or services? If yes,
                        please provide details.
                      </label>
                      <textarea name="seasonal_products" value={formData.seasonal_products} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What are your best-selling products or services? Please
                        explain in detail.
                      </label>
                      <textarea name="bestselling_product" value={formData.bestselling_product} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        List some keywords that describe your business. Think
                        from a customer’s point of view.
                      </label>
                      <textarea name="primary_keywords" value={formData.primary_keywords} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have any promotions, discounts or incentives that
                        you want to mention in your ad campaign?
                      </label>
                      <textarea name="promotions_discount" value={formData.promotions_discount} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you request any specific keyword phrases to be
                        included in your campaign?
                      </label>
                      <textarea name="specific_keywordforCamp" value={formData.specific_keywordforCamp} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you use Google Analytics? If yes, please give
                        administrative access to analytics@gwebpro.com for us to
                        link your Adwords campaign to your Analytics account.
                      </label>
                      <textarea name="google_analyticsinfo" value={formData.google_analyticsinfo} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Who makes changes to your website, such as editing page
                        copy or adding new pages? Do you have an in-house team,
                        web agency or will G Web Pro be doing the changes?
                      </label>
                      <textarea name="whois_changing" value={formData.whois_changing} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have a Google Maps account? If yes, please give
                        administrative access to cglen30@gmail.com for us to
                        link your Adwords account to your location.
                      </label>
                      <textarea name="google_mapsaccount" value={formData.google_mapsaccount} onChange={handleChange} placeholder="Answer"></textarea>
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