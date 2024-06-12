import React, { useState } from 'react';
import './home.scss';
import exploreBG from '../../assets/images/jpg/exploreBG.png';
import marq1 from '../../assets/images/webp/marq1.webp';
import marq2 from '../../assets/images/webp/marq2.webp';
import marq3 from '../../assets/images/webp/marq3.webp';
import marq4 from '../../assets/images/webp/marq4.webp';
import marq5 from '../../assets/images/webp/marq5.webp';
import marq6 from '../../assets/images/webp/marq6.svg';
import analyz1 from '../../assets/images/svg/analyz1.svg';
import analyz2 from '../../assets/images/svg/analyz2.svg';
import analyz3 from '../../assets/images/svg/analyz3.svg';
import scrollUp from '../../assets/images/svg/scrollUp.svg';
import scrollDown from '../../assets/images/svg/scrollDown.svg';
import discover1 from '../../assets/images/svg/discover1.svg';
import discover2 from '../../assets/images/svg/discover2.svg';
import discover3 from '../../assets/images/svg/discover3.svg';
import discover4 from '../../assets/images/svg/discover4.svg';
import discoverImg1 from '../../assets/images/webp/discoverImg1.webp';
import discoverImg2 from '../../assets/images/webp/discoverImg2.webp';
import discoverImg3 from '../../assets/images/webp/discoverImg3.webp';
import discoverImg4 from '../../assets/images/webp/discoverImg4.webp';
import greenUP from '../../assets/images/svg/greenUP.svg';
import person from '../../assets/images/svg/person.svg';
import robot from '../../assets/images/svg/robot.svg';
import askUp from '../../assets/images/svg/askUp.svg';
import ratingImg1 from '../../assets/images/svg/ratingImg1.svg';
import ratingImg2 from '../../assets/images/png/ratingImg2.png';
import ratingImg3 from '../../assets/images/svg/ratingImg3.svg';
import star from '../../assets/images/svg/star.svg';
import starGray from '../../assets/images/svg/starGray.svg';
import readmore from '../../assets/images/svg/readmore.svg';
import blog from '../../assets/images/svg/blog.svg';
import resourceBoy from '../../assets/images/webp/resourceBoy.webp';
import resourceGirl from '../../assets/images/webp/resourceGirl.webp';
import { MdCalendarMonth } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { TbReload } from "react-icons/tb";
import { HiOutlineVolumeUp } from "react-icons/hi";
import { BsCcSquareFill } from "react-icons/bs";
import { FaExpandAlt } from "react-icons/fa";
import Click from '../../assets/images/svg/click';
import Robot from '../../assets/images/svg/robot';

export default function Home() {
  const [isBlurLayerVisible, setIsBlurLayerVisible] = useState(true);

  const handleRemoveBlurLayer = () => {
    setIsBlurLayerVisible(false);
  };

  const [activeContent, setActiveContent] = useState('content1');

  const content = {
    content1: {
      text: "See a bird's-eye view of your entire website traffic and identify the most common user journeys.",
      img: discoverImg1,
    },
    content2: {
      text: "See a comprehensive overview of your visitors' activities and quickly identify their pain points on a large scale within just a few minutes.",
      img: discoverImg2,
    },
    content3: {
      text: "Prioritize the most impactful areas for conversion rate optimization to efficiently allocate resources and boost results.",
      img: discoverImg3,
    },
    content4: {
      text: "Easily measure the return on investment and make data-driven decisions that grow your business.",
      img: discoverImg4,
    },
  };

  return (
    <div>
      <div className="hero-banner">
        <div className="container2">
          <div className="hero-banner-main">
            <div className="hero-banner-head">
              <h2>The workspace <br />for your website</h2>
              <p>AI-powered website intelligence, optimization, and conversion tracking in one place.</p>
              <div className="hero-banner-button">
                <button>Request Demo <MdCalendarMonth className='icon' /></button>
                <button>Start Your Free Trial <BsArrowRight className='icon' /></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="explore">
        <div className="container3">
          <div className="explore-box">
            <div className="explore-box-flex">
              <div className="explore-box-flex1">
                <div className="ebf1-dot"></div>
                <div className="ebf1-dot2"></div>
                <div className="ebf1-dot3"></div>
              </div>
              <div className="explore-box-flex2">
                <h3>Flowpoint</h3>
                <div className="reload-icon">
                  <TbReload className='icones' />
                </div>
              </div>
              <div className="explore-box-flex3">
                <div className="icones-div">
                  <HiOutlineVolumeUp className='icones' />
                </div>
                <div className="icones-div">
                  <BsCcSquareFill className='icones' />
                </div>
                <div className="icones-div">
                  <FaExpandAlt className='icones' />
                </div>
              </div>
            </div>

            <div className="explore-box-cotent">
              <img src={exploreBG} alt="exploreBG" />
              {isBlurLayerVisible && (
                <div className="blur-layer">
                  <div className="blur-layer-div">
                    <div className="blur-layer-div-contant">
                      <h2>Explore the product</h2>
                      <p>See how easy it is to spot where your users are leaving your website and why. <br /> And how everything works in real time. 👇</p>
                      <div className="blur-layer-button">
                        <button onClick={handleRemoveBlurLayer}>See it live</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="last-message">
            <h4>Join over 1,800 satisfied customers today</h4>
          </div>
        </div>
        <div className="marquee">
          <body>
            <div class="logo">
              <div class="logo-slide">
                <div className="logo-slide-div">
                  <img src={marq1} alt="marq1" />
                </div>
                <div className="logo-slide-div">
                  <img src={marq2} alt="marq2" />
                </div>
                <div className="logo-slide-div">
                  <img src={marq3} alt="marq3" />
                </div>
                <div className="logo-slide-div">
                  <img src={marq4} alt="marq4" />
                </div>
                <div className="logo-slide-div">
                  <img src={marq5} alt="marq5" />
                </div>
                <div className="logo-slide-div">
                  <img src={marq6} alt="marq6" />
                </div>
              </div>
              <div class="logo-slide">
                <div className="logo-slide-div">
                  <img src={marq1} alt="marq1" />
                </div>
                <div className="logo-slide-div">
                  <img src={marq2} alt="marq2" />
                </div>
                <div className="logo-slide-div">
                  <img src={marq3} alt="marq3" />
                </div>
                <div className="logo-slide-div">
                  <img src={marq4} alt="marq4" />
                </div>
                <div className="logo-slide-div">
                  <img src={marq5} alt="marq5" />
                </div>
                <div className="logo-slide-div">
                  <img src={marq6} alt="marq6" />
                </div>
              </div>
            </div>
          </body>
        </div>
      </div>

      <div className="analyze">
        <div className="containerR">
          <div className="analyze-head">
            <span>GOALS</span>
            <h2>Analyze, Improve and Grow</h2>
          </div>
          <div className="analyze-grid">
            <div className="analyze-grid-box">
              <img src={analyz1} alt="analyz1" />
              <h3>Funnel Analytics</h3>
              <p>Track where users come from and where they go on your website.</p>
            </div>
            <div className="analyze-grid-box">
              <img src={analyz2} alt="analyz2" />
              <h3>AI-powered recommendations</h3>
              <p>Flowpoint leverages artificial intelligence to provide actionable insights for improving website conversion rates, SEO, UX/UI, and content engagement.</p>
            </div>
            <div className="analyze-grid-box">
              <img src={analyz3} alt="analyz3" />
              <h3>Conversion rate optimisation</h3>
              <p>Discover data-driven recommendations to boost your sales, new registrations or other calls to action.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="capture">
        <div className="container">
          <div className="capture-grid">
            <div className="capture-grid1">
              <span>COLLECT</span>
              <h2>Capture user events</h2>
              <p>Flowpoint automatically captures where your users click, scroll, the time spent on different sections and many more.</p>
              <ul>
                <li>Standard & Advanced event capturing</li>
                <li>Cross-domain tracking</li>
                <li>Lightweight script, optimised for performance</li>
                <li>5-minute installation</li>
                <li>GDPR & CCPA Ready</li>
              </ul>
            </div>
            <div className="capture-grid2">
              <div className="capture-grid2-box">
                <div className="capture-grid2-box-search">
                  🔎 See for yourself by clicking around.
                </div>
                <div className="cgb-main">
                  <div className="cgb-main-flex">
                    <div className="cgb-main-flex1">
                      <h3>Page reload</h3>
                    </div>
                    <div className="cgb-main-flex2">
                      <h3>08 Jun, 16:12</h3>
                    </div>
                  </div>
                  <div className="cgb-main-flex">
                    <div className="cgb-main-flex1">
                      <Click className="click" />
                      <h3>Cross-domain tracking</h3>
                    </div>
                    <div className="cgb-main-flex2">
                      <h3>08 Jun, 16:12</h3>
                    </div>
                  </div>
                  <div className="cgb-main-flex">
                    <div className="cgb-main-flex1">
                      <Click className="click" />
                      <h3>COLLECT Capture user events Flowpo....</h3>
                    </div>
                    <div className="cgb-main-flex2">
                      <h3>08 Jun, 16:12</h3>
                    </div>
                  </div>
                  <div className="cgb-main-flex">
                    <div className="cgb-main-flex1">
                      <Click className="click" />
                      <h3>🔎 See for yourself by clicking aro...</h3>
                    </div>
                    <div className="cgb-main-flex2">
                      <h3>08 Jun, 16:12</h3>
                    </div>
                  </div>
                  <div className="cgb-main-flex">
                    <div className="cgb-main-flex1">
                      <img src={scrollUp} alt="scrollUp" />
                      <h3>Scrolled Up</h3>
                    </div>
                    <div className="cgb-main-flex2">
                      <h3>08 Jun, 16:12</h3>
                    </div>
                  </div>
                  <div className="cgb-main-flex">
                    <div className="cgb-main-flex1">
                      <h3>Focus lost</h3>
                    </div>
                    <div className="cgb-main-flex2">
                      <h3>08 Jun, 16:12</h3>
                    </div>
                  </div>
                  <div className="cgb-main-flex">
                    <div className="cgb-main-flex1">
                      <h3>Focus regained</h3>
                    </div>
                    <div className="cgb-main-flex2">
                      <h3>08 Jun, 16:12</h3>
                    </div>
                  </div>
                  <div className="cgb-main-flex">
                    <div className="cgb-main-flex1">
                      <img src={scrollDown} alt="scrollDown" />
                      <h3>Scrolled Down</h3>
                    </div>
                    <div className="cgb-main-flex2">
                      <h3>08 Jun, 16:12</h3>
                    </div>
                  </div>
                  <div className="cgb-main-flex">
                    <div className="cgb-main-flex1">
                      <h3>Page reload</h3>
                    </div>
                    <div className="cgb-main-flex2">
                      <h3>08 Jun, 16:12</h3>
                    </div>
                  </div>
                  <div className="cgb-main-flex">
                    <div className="cgb-main-flex1">
                      <h3>Page reload</h3>
                    </div>
                    <div className="cgb-main-flex2">
                      <h3>08 Jun, 16:12</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="discover">
        <div className="containerD">
          <div className="discover-grid">
            <div className="discover-grid-div1">
              <div className="dgd1-content">
                <div className="dgd1-content-text">
                  <div className="dgd1-content-text1">
                    <img src={discover1} alt="discover1" />
                    <span>DISCOVER</span>
                  </div>
                  <div className="dgd1-content-text2">
                    <h2>Where do visitors go?</h2>
                    <p>See a bird's-eye view of your entire website traffic and identify the most common user journeys.</p>
                  </div>
                </div>
              </div>
              <div className="dgd1-content">
                <div className="dgd1-content-text">
                  <div className="dgd1-content-text1">
                    <img src={discover2} alt="discover2" />
                    <span>SCALE</span>
                  </div>
                  <div className="dgd1-content-text2">
                    <h2>Identifying issues at scale?</h2>
                    <p>See a comprehensive overview of your visitors' activities and quickly identify their pain points on a large scale within just a few minutes.</p>
                  </div>
                </div>
              </div>
              <div className="dgd1-content">
                <div className="dgd1-content-text">
                  <div className="dgd1-content-text1">
                    <img src={discover3} alt="discover3" />
                    <span>PRIORITISE</span>
                  </div>
                  <div className="dgd1-content-text2">
                    <h2>What issues are impactful?</h2>
                    <p>Prioritize the most impactful areas for conversion rate optimization to efficiently allocate resources and boost results.</p>
                  </div>
                </div>
              </div>
              <div className="dgd1-content">
                <div className="dgd1-content-text">
                  <div className="dgd1-content-text1">
                    <img src={discover4} alt="discover4" />
                    <span>MEASURE</span>
                  </div>
                  <div className="dgd1-content-text2">
                    <h2>What is the ROI?</h2>
                    <p>Easily measure the return on investment and make data-driven decisions that grow your business.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="discover-grid-div2">
              <div className="dgd2-content">
                <div className="dgd2-content-img">
                  <img src={discoverImg1} alt="discoverImg1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="discover-respo">
        <div className="discover-respo-head">
          <span>DISCOVER</span>
          <h2>Understand Users, Improve Conversions</h2>
        </div>
        <div className="discover-respo-div">
          <div className="drd-button">
            <button
              className={activeContent === 'content1' ? 'active' : ''}
              onClick={() => setActiveContent('content1')}
            >
              Where Do Visitors Go?
            </button>
            <button
              className={activeContent === 'content2' ? 'active' : ''}
              onClick={() => setActiveContent('content2')}
            >
              Identifying issues at scale?
            </button>
            <button
              className={activeContent === 'content3' ? 'active' : ''}
              onClick={() => setActiveContent('content3')}
            >
              What issues are impactful?
            </button>
            <button
              className={activeContent === 'content4' ? 'active' : ''}
              onClick={() => setActiveContent('content4')}
            >
              What is the ROI?
            </button>
          </div>
          <div className="drd-content">
            <p>{content[activeContent].text}</p>
            <img src={content[activeContent].img} alt="discoverImg" />
          </div>
        </div>
      </div>

      <div className="action">
        <div className="container4">
          <div className="action-head">
            <span>GROW</span>
            <h2>Turn data into meaningful actions</h2>
          </div>
          <div className="action-flex">
            <div className="action-flex-box">
              <div className="afb-first">
                <h4>Content</h4>
                <div className="afb-first-profit">
                  <img src={greenUP} alt="greenUP" />
                  <span>10.37%</span>
                </div>
              </div>
              <h3>Update "Faq" Call To Action copy</h3>
              <p><b>Findings:</b> Of 2,050 users, 220 (10.73%) clicked the "Faq" call to action. Enhance button appeal to improve conversion.</p>
              <p><b>Recommendation:</b> Replace "Faq" with "Help Center" to suggest a more interactive, supportive space for users to find answers to specific questions and issues.</p>
            </div>
            <div className="action-flex-box" id='action-out'>
              <div className="afb-first">
                <h4>UX/UI</h4>
                <div className="afb-first-profit">
                  <img src={greenUP} alt="greenUP" />
                  <span>4.38%</span>
                </div>
              </div>
              <h3>Fix low contrast text</h3>
              <p><b>Findings:</b> Low-contrast text affects readability on: https://flowpoint.ai/pricing/</p>
              <h5>Examples:</h5>
              <ul>
                <li>CRO technical insights</li>
                <li>CRO UX/Ul insights</li>
                <li>Issue event explorer</li>
              </ul>
              <p><b>Recommendation:</b> Fix contrast issues for the mentioned texts. Benefits Improving contrast may boost conversions by up to 2.17% in the entire flow.</p>
            </div>
            <div className="action-flex-box">
              <div className="afb-first">
                <h4>Technical</h4>
                <div className="afb-first-profit">
                  <img src={greenUP} alt="greenUP" />
                  <span>8.34%</span>
                </div>
              </div>
              <h3>Update "Faq" Call To Action copy</h3>
              <p><b>Findings:</b> 0.05% of users face "Uncaught TypeError" error.</p>
              <p><b>Recommendation:</b> Fix client-side issue to improve user experience. Benefits Resolving this may boost conversions by 0.1% in the entire flow.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ava">
        <div className="container4">
          <div className="ava-flex">
            <div className="ava-flex1">
              <div className="ava-flex1-box">
                <div className="ava-flex1-box-first">
                  <div className="robot-head">
                    <Robot />
                  </div>
                  <h3>Ava ⚡ ChatGPT</h3>
                </div>
                <div className="ava-flex1-box-main">
                  <div className="ava-flex1-box-main-div">
                    <div className="afbm-person">
                      <img src={person} alt="person" />
                      <div className="afbm-person-text">
                        <h4>You</h4>
                        <p>I've noticed a drop in conversions by 15% in the past month. Can you help me pinpoint the issue?</p>
                      </div>
                    </div>
                    <div className="afbm-eva">
                      <img src={robot} alt="robot" />
                      <div className="afbm-eva-text">
                        <h4>Ava</h4>
                        <p>Of course! I looked into the user session data and identified the campaign landing page has a high bounce rate of 65%. It appears that users are leaving the page without engaging further.</p>
                      </div>
                    </div>
                    <div className="afbm-person">
                      <img src={person} alt="person" />
                      <div className="afbm-person-text">
                        <h4>You</h4>
                        <p>Do we know what might be causing this high bounce rate?</p>
                      </div>
                    </div>
                    <div className="afbm-eva">
                      <img src={robot} alt="robot" />
                      <div className="afbm-eva-text">
                        <h4>Ava</h4>
                        <p>Yes, the average page load time is currently at 5 seconds, which is above the ideal 2-second threshold. Improving this could positively impact user retention. Also, the main call-to-action button only has a click-through rate of 1.2%, which is well below the industry average.</p>
                      </div>
                    </div>
                    <div className="afbm-person">
                      <img src={person} alt="person" />
                      <div className="afbm-person-text">
                        <h4>You</h4>
                        <p>What actions do you suggest we take?</p>
                      </div>
                    </div>
                    <div className="afbm-eva">
                      <img src={robot} alt="robot" />
                      <div className="afbm-eva-text">
                        <h4>Ava</h4>
                        <p>I recommend optimizing images and scripts to reduce the page load time by at least 50%. Also, make the call-to-action button more prominent and consider an A/B test with different messaging to increase the click-through rate. Lastly, adding customer success stories can boost your conversion rates by providing social proof.</p>
                      </div>
                    </div>
                  </div>
                  <div className="ava-flex1-box-input">
                    <input type="text" placeholder='Just ask Ava...' />
                    <img src={askUp} alt="askUp" />
                  </div>
                </div>
              </div>
            </div>
            <div className="ava-flex2">
              <h2>Ava Powered by ChatGPT</h2>
              <p>Stuck in data purgatory? Ava's your AI oracle, ready to decode your Flowpoint insights and guide you to conversion heaven.</p>
              <button>Demo Ava</button>
            </div>
          </div>
        </div>
      </div>

      <div className="rating">
        <div className="container4">
          <div className="rating-flex">
            <div className="rating-flex1">
              <div className="rating-flex1-text">
                <span>TESTIMONIALS</span>
                <h2>Who loves<br />Flowpoint?</h2>
                <p>Business owners and marketing professionals are taking their online pressence to the next level.</p>
              </div>
              <div className="rating-flex1-ticket">
                <div className="rating-flex1-ticket-box">
                  <img src={ratingImg1} alt="ratingImg1" />
                  <img src={ratingImg2} alt="ratingImg2" id='white-img' />
                  <img src={ratingImg3} alt="ratingImg3" />
                </div>
              </div>
            </div>
            <div className="read-more">
              <a target='blank' href="https://www.capterra.com/p/282505/Flowpoint/reviews/">Read more testimonials</a>
              <img src={readmore} alt="readmore" />
            </div>
            <div className="rating-flex2">
              <div className="rating-flex2-div1">
                <div className="rating-flex2-div1-content">
                  <div className="rating-flex2-div1-box">
                    <h3>Nina</h3>
                    <span>Founder and CEO, Desyr</span>
                    <div className="five-star">
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={starGray} alt="starGray" />
                    </div>
                    <p>It’s helped me to see where users are dropping out along the conversion funnel, so that I can make improvements to the website and increase our overall conversion rate.</p>
                  </div>
                  <div className="rating-flex2-div1-box">
                    <h3>Lucian N.</h3>
                    <span>Technology Strategist, Growth Linked LLC</span>
                    <div className="five-star">
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                    </div>
                    <p>A Single Pane Of Glass for collecting, analyzing, and taking decisions for actions to be implemented in order to improve the conversions.Flexibility and responsiveness of the team to implement new features to help capture more insights about user behavior.</p>
                  </div>
                  <div className="rating-flex2-div1-box">
                    <h3>Nina</h3>
                    <span>Founder and CEO, Desyr</span>
                    <div className="five-star">
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={starGray} alt="starGray" />
                    </div>
                    <p>Great user behaviour analytics tool.</p>
                  </div>
                </div>
              </div>
              <div className="rating-flex2-div2">
                <div className="rating-flex2-div1">
                  <div className="rating-flex2-div1-content">
                    <div className="rating-flex2-div1-box">
                      <h3>Tori P.</h3>
                      <span>Co-founder, Qube App</span>
                      <div className="five-star">
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={starGray} alt="starGray" />
                      </div>
                      <p>Easy of use. Colors. Insights. The fact that it can show me the bottlenecks in the path to conversion easily. The level of personalization.</p>
                    </div>
                    <div className="rating-flex2-div1-box">
                      <h3>Dhiraj N.</h3>
                      <span>CEO, Opsly Cloud</span>
                      <div className="five-star">
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                      </div>
                      <p>The data generated is very useful to see the website visitor journey and where we can optimise our content and design to improve the score.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="resource">
        <div className="container4">
          <div className="resource-head">
            <div className="resource-head-blog">
              <img src={blog} alt="blog" />
              <span>BLOG</span>
            </div>
            <h2>Resources for growing your product</h2>
          </div>
          <div className="resource-grid">
            <div className="resource-grid-box1">
              <div className="resource-content">
                <div className="resource-content-img">
                  <img src={resourceBoy} alt="resourceBoy" />
                </div>
                <div className="resource-content-text">
                  <p id='biggerp'>How to Easily Run a Website Audit for Free: The Essential Guide for Business Owners and Marketing Experts</p>
                </div>
              </div>
            </div>
            <div className="resource-grid-box2">
              <div className="resource-content">
                <div className="resource-content-img">
                  <img src={resourceBoy} alt="resourceBoy" />
                </div>
                <div className="resource-content-text">
                  <p>Beyond Google Analytics: Simplifying Web Analytics with AI-Based Alternatives</p>
                </div>
              </div>
            </div>
            <div className="resource-grid-box3">
              <div className="resource-content">
                <div className="resource-content-img">
                  <img src={resourceGirl} alt="resourceGirl" />
                </div>
                <div className="resource-content-text">
                  <p>Exploring the Gaps: Beyond Google Analytics and Website Optimizer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="analytics">
        <div className="container4">
          <div className="analytics-div">
            <div className="analytics-div1">
              <h2>Web Analytics.</h2>
              <h2>Actionable, at scale.</h2>
            </div>
            <div className="analytics-div2">
              <p>Our team is committed to offering assistance at each step of the process to ensure your success:</p>
              <ul>
                <li>Installation support</li>
                <li>Set up your website flows</li>
                <li>Analyse and monitor your data</li>
              </ul>
              <div className="analytics-button">
                <button>Request Demo <MdCalendarMonth className='icon-celc' /></button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
