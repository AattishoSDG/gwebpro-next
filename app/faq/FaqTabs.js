"use client";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
export default function FaqTabs() {
  return (
    <Tabs defaultActiveKey="0" id="uncontrolled-tab-example" className="">
      <Tab eventKey="0" title="Digital Marketing FAQ">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              What is Internet Marketing? Is it different from Digital
              Marketing?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                A website is the digital equivalent of a brick-and-mortar store.
                Just as you employ various techniques to market, promote and
                brand your products offline, the same goes for your online
                presence. Merely creating a website isn’t enough when there may
                be hundreds of similar sites vying for visitor attention.
                Internet marketing uses various techniques to market, promote
                and brand your products and services online. The different
                techniques G Web Pro applies to brand and promote your website,
                products and services are:
              </p>
              <ul>
                <li>
                  <Link href="/">Search Engine Optimization (SEO)</Link>
                </li>
                <li>
                  <Link href="/">Search Engine Marketing (SEM)</Link>
                </li>
                <li>
                  <Link href="/">Social Media Marketing</Link>
                </li>
                <li>Email Marketing</li>
                <li>Web Analytics</li>
                <li>
                  <Link href="/">Google Local Optimization</Link>
                </li>
              </ul>
              <p>
                <strong>Digital Marketing:</strong>
              </p>
              <p>
                Digital marketing is a holistic marketing approach that aims to
                engage users via different electronic devices and media. This
                includes computers and game consoles as well as mobile handheld
                devices like smartphones and tablets. This is also where email
                marketing, mobile apps, and social media marketing come into
                play.
              </p>
              <p>
                Digital Marketing is a necessity to reach today’s customers. At
                G Web Pro, we provide digital marketing services, including
                online marketing, to take your business where customers are. Our
                proven digital marketing techniques engage and retain customers,
                while our successful digital marketing campaigns generate new
                leads to turn into new customers.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Why does my business need online marketing/digital marketing?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The internet has made research simple, as has the advent of
                smartphones and social media. As mobile phones and tablets
                become omnipresent, the way we make decisions has also changed.
                Purchasing decisions in particular are influenced by social
                media, online customer reviews, and mobile and internet
                advertising.
              </p>
              <p>
                Online marketing helps you instantly connect with your customers
                and, more importantly, reach them effectively. Conventional
                offline marketing techniques only reach a portion of potential
                customers. Online marketing is sure to take your business
                exactly where it needs to be – at your customers’ fingertips.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What is SEO and why do I need it?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                SEO (Search Engine Optimization) is a process for making your
                website rank on the front pages of search engines like Google,
                Bing and Yahoo. SEO is a dynamic process whose techniques are
                constantly evolving. If you are looking for an SEO services
                agency, G Web Pro makes sure to stay abreast of the latest
                techniques, and is constantly learning and developing our
                resources to stay ahead of the curve.
              </p>
              <p>
                Remember: Most internet users don’t scroll beyond the first page
                of results, and SEO is the only way to get your site to rank.
              </p>
              <p>
                <strong>Benefits of SEO:</strong>
              </p>
              <ul>
                <li>You understand better what makes your customers tick.</li>
                <li>
                  A good SEO strategy allows you to stay ahead of your
                  competition.
                </li>
                <li>
                  SEO is the only way for your customers to find you online.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              How do I know that my website is ranking?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                At the end of a mutually agreed upon timeframe, we will send you
                a detailed report of how your website has ranked within that
                time, so you will know how our SEO strategies are working.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              How soon will my website’s rankings increase?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                While some SEO companies may promise a top Google result within
                a month just to win a project, G Web Pro will deal with you
                honestly. Search engines are, after all, unpredictable. But with
                the right strategies, content, design, and on-page/off-page
                optimization, positive results should begin to show early on. We
                also emphasize Local Search so customers find you when looking
                for nearby businesses.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              I hear a lot about Social Media Marketing these days. What is it?
              And does my business need it too?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Social Media Marketing ensures a strong social media presence –
                an important aspect of business marketing these days. Small and
                large businesses alike need to leverage the power of social
                media to engage with their customers. A successful SMM strategy
                helps bring in customers and makes a positive impact on them.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              What is PPC and why does my business need it?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                PPC (Pay Per Click) is a form of advertising your business
                online to attract only quality leads. The advertiser only pays
                when the customer clicks on their link, saving you money from
                your ad budget. PPC ensures quality visits to your site as those
                interested in your services and products are generally the ones
                to click on your advertisements. Businesses that use PPC
                generate quality traffic from these links to maximizes ROI.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Tab>
      <Tab eventKey="1" title="Web Development FAQ">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Why do I need a website?</Accordion.Header>
            <Accordion.Body>
              A website guarantees your business’s global presence and ensures
              communication with customers worldwide. It showcases your brand,
              products, and services, while building your credibility. More than
              three billion people use the internet regularly, and a website is
              the perfect platform to showcase your offerings to the world.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What is the advantage of a professionally-designed website?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                A well designed website attracts and sustains the interest of
                your visitors while reducing your bounce rate.
              </p>

              <p>
                At G Web Pro, we design websites with your target customer in
                mind. We consider your brand colours and business type, as well
                as user experience. A well-designed website should grab a
                visitor’s attention and communicate your message clearly within
                five seconds.
              </p>

              <p>
                Our experienced web designers don’t just create a website. They
                also help establish sustainable communication with your visitor
                in those precious initial moments.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What is User Experience when it comes to a website?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                User Experience (UX) refers to enhancing a website’s ease of use
                by taking into account factors like navigability, page load
                times, search functioning, and the visual prominence of
                important information.
              </p>
              <p>
                Our designers understand what works on a business website and
                what doesn’t, including factors that sustain visitor interest
                and help generate leads.
              </p>

              <p>
                Our designs create fabulous UX and convert visitors into buyers.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              How do I ensure global reach for my website?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                It’s simple. Talk to us! With a seasoned team of skilled
                designers and developers, G Web Pro is ready to help you reach a
                wider customer base and establish a sustainable online presence.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Tab>
      <Tab eventKey="2" title="Mobile Apps FAQ">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What are Mobile Apps?</Accordion.Header>
            <Accordion.Body>
              <p>
                Mobile applications are software applications created to be
                downloaded onto mobile devices like smartphones and tablets. The
                Apple App Store, Google Play, Windows Store and Blackberry App
                World are portals from which users can download the apps,
                depending on their device’s operating system.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Why does my business need a mobile app?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                About two billion mobile users access the internet through their
                smartphones and other handheld devices, and mobile apps help
                them instantly connect with your business. They can book
                tickets, leave feedback, make purchases, or browse your products
                and services, amongst many other options.
              </p>

              <p>
                At G Web Pro, we offer excellent mobile apps and responsive site
                development services to help you reach out to more customers –
                both existing and potential.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How do I get a mobile app for my business?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                It’s simple. Just call our mobile app developers and we will
                help you leverage mobile app marketing to increase your business
                ROI. Our expert developers can create apps for different
                platforms, including iOS, Android, Blackberry and Windows.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Tab>
    </Tabs>
  );
}
