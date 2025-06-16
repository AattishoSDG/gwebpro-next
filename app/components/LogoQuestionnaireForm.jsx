'use client';
import { useState } from 'react';

export default function LogoQuestionnaireForm() {
    const [formData, setFormData] = useState({  companyName: '', companyEmail: '', logoName: '', logoTagline: '', referenceLogos: '', logoDesc: '', logoExamples: '', companyDesc: '', targetMarket: '', directCompetition: '', pointofEmphasis: '', ideaofDesign: '', imageSymbol: '', colorPreferences: '', logoUsage: '', logoTheme: '', ideaofFont: '', additionalServices: '' });

    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
    };

     const handleSubmit = async (e) => {
        e.preventDefault();
         const formId = 782; // Replace with your Contact Form 7 form ID
         const url = `https://netfirst.ca/gwebpro_new/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`;

         const body = new FormData();
            body.append("companyName", formData.companyName); // Replace 'your-name' with the actual field name from your form
            body.append("companyEmail", formData.companyEmail);
            body.append("logoName", formData.logoName);
            body.append("logoTagline", formData.logoTagline);

            body.append("referenceLogos", formData.referenceLogos); 
            body.append("logoDesc", formData.logoDesc);
            body.append("logoExamples", formData.logoExamples);
             body.append("companyDesc", formData.companyDesc);
            body.append("targetMarket", formData.targetMarket);

            body.append("directCompetition", formData.directCompetition); 
            body.append("pointofEmphasis", formData.pointofEmphasis);
            body.append("ideaofDesign", formData.ideaofDesign);
            body.append("imageSymbol", formData.imageSymbol);
            body.append("colorPreferences", formData.colorPreferences); 

            body.append("logoUsage", formData.logoUsage); 
            body.append("logoTheme", formData.logoTheme);
            body.append("ideaofFont", formData.ideaofFont);
            body.append("additionalServices", formData.additionalServices);
           

            body.append("_wpcf7_unit_tag", 782);

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
                    setFormData({ companyName: '', companyEmail: '', logoName: '', logoTagline: '', referenceLogos: '', logoDesc: '', logoExamples: '', targetMarket: '', companyDesc:'', directCompetition: '', pointofEmphasis: '', ideaofDesign: '', imageSymbol: '', colorPreferences: '', logoUsage: '', logoTheme: '', ideaofFont: '', additionalServices: '' });

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
                    {/*<div className="col-12">
                      <p>
                        Please fill out the information below to ensure your
                        business listings online are consistent. This
                        information will help us to ensure every listing we
                        create is correct with no discrepancies.
                      </p>
                    </div>*/}
                     <div className="col-md-6">
                      <input placeholder="Business Name*" required="" type="text" name="companyName" value={formData.companyName} onChange={handleChange}/>
                    </div>
                    <div className="col-md-6">
                      <input placeholder="Business Email*" required="" type="email" name="companyEmail" value={formData.companyEmail} onChange={handleChange}/>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Please write out the logo name exactly as you’d like for
                        it to appear in the design (e.g., Allen & Goel Marketing
                        Company; Allen & Goel Marketing; or just Allen & Goel).
                      </label>
                      <textarea name="logoName" value={formData.logoName} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have a short tag line you will sometimes use,
                        when appropriate, with your logo? If so, we will take
                        this into consideration when designing your logo, but
                        your logo must be able to stand on its own without the
                        tag line as well. (e.g., Allen & Goel Marketing Company
                        &quot;Your Marketing, Sales and Design Partner&quot;)
                      </label>
                      <textarea name="logoTagline" value={formData.logoTagline} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Are there any well known logos that you particularly
                        like? What do you like about them and what aspects, if
                        any, would you like to emulate?
                      </label>
                      <textarea name="referenceLogos" value={formData.referenceLogos} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Please provide some adjectives that describe what you
                        hope to communicate with your logo. (e.g. strong,
                        exciting, warm, welcoming, inventive, humorous,
                        feminine, serene, athletic, etc.) Be sure to take a look
                        at the logo examples we provide at the end of this
                        questionnaire.
                      </label>
                      <textarea name="logoDesc" value={formData.logoDesc} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What sort of style do you envision? What do you want
                        your new logo to communicate about your company or
                        products? (e.g. modern and clean, old world, cutting
                        edge, vintage, sporty, futuristic, etc.) Be sure to take
                        a look at the logo examples we provide at the end of
                        this questionnaire.
                      </label>
                      <textarea name="logoExamples" value={formData.logoExamples} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        How would you describe your company/business to someone
                        who has no knowledge of your existence?
                      </label>
                      <textarea name="companyDesc" value={formData.companyDesc} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Describe your target market, gender, age, geography.
                      </label>
                      <textarea name="targetMarket" value={formData.targetMarket} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Describe your direct competition; provide addresses to
                        their websites if available.
                      </label>
                      <textarea name="directCompetition" value={formData.directCompetition} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have any particular point of emphasis you want to
                        see in the design?
                      </label>
                      <textarea name="pointofEmphasis" value={formData.pointofEmphasis} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have any preconceived ideas about the design of
                        your logo? Are there any elements that you would like to
                        see included in your logo design? What elements from
                        your old identity do you like or dislike?
                      </label>
                      <textarea name="ideaofDesign" value={formData.ideaofDesign} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                  
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have any particular images or symbols you
                        associate with your product or company? (e.g. favorite
                        animal or object, like a lion, ship, mountain or tree.)
                      </label>
                      <input type="file" name="" id="" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        What are your color preferences? How many colors would
                        you like used in your logo? Are there any colors that
                        you DO NOT want to use? List your color preference if
                        you have any.
                      </label>
                      <textarea name="colorPreferences" value={formData.colorPreferences} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Will the logo be used in print, online, signs or other
                        materials? What are the plans for logo usage?
                      </label>
                      <textarea name="logoUsage" value={formData.logoUsage} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you want your logo to include text only, text and
                        graphic/icon, or graphic/icon only? If you would like to
                        use an icon, do you have any specific themes for the
                        icon that you would like us to consider?
                      </label>
                      <textarea name="logoTheme" value={formData.logoTheme} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">
                        Do you have any ideas for the style of text (font) in
                        your logo? (e.g. script, bold, light, hand­drawn, custom
                        lettering, elegant, etc.)
                      </label>
                      <textarea name="ideaofFont" value={formData.ideaofFont} onChange={handleChange} placeholder="Answer"></textarea>
                    </div>

                    <div className="col-12">
                      <label htmlFor="">
                        Would you like any addition design services to be
                        packaged with your new logo? (e.g. website, business
                        cards, envelopes, letterheads, promotional products,
                        etc.)
                      </label>
                      <textarea name="additionalServices" value={formData.additionalServices} onChange={handleChange} placeholder="Answer"></textarea>
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