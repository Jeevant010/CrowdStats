import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCampaigns } from '../context/CampaignContext';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Home.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const { campaigns, setCampaigns, donateToCampaign } = useCampaigns();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Refs for animation targets
  const heroRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const subheaderRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const campaignsHeaderRef = useRef<HTMLHeadingElement>(null);
  const campaignsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        setLoading(true);
        // If you're not using an actual API, remove this axios call
        // and use the context directly or set some initial data
        
        // Uncomment if you're using an API
        // const response = await axios.get('/api/campaigns');
        // setCampaigns(response.data);
      } catch (err) {
        console.error("Error fetching campaigns:", err);
        setError("Failed to load campaigns");
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();

    // Initial animations when page loads
    const tl = gsap.timeline();
    
    // Update this animation to ensure opacity is 1
    tl.set(heroRef.current, { opacity: 1 }) // Set initial opacity to 1
      .from(heroRef.current, { 
        y: 50, 
        duration: 1, 
        ease: "power3.out",
        clearProps: "opacity" // This ensures opacity remains at 1 after animation
      })
      .from(headerRef.current, { 
        opacity: 1, 
        y: 30, 
        duration: 0.8, 
        ease: "back.out(1.7)" 
      }, "-=0.5")
      .from(subheaderRef.current, { 
        opacity: 1, 
        y: 20, 
        duration: 0.8 
      }, "-=0.6")
      .from(ctaRef.current, { 
        opacity: 1, 
        y: 20, 
        scale: 0.9, 
        duration: 0.8, 
        ease: "elastic.out(1, 0.5)" 
      }, "-=0.4")
      .from(campaignsHeaderRef.current, { 
        opacity: 1, 
        y: 20, 
        duration: 0.8 
      }, "-=0.2");

    // Scroll triggered animations for campaign cards
    gsap.from(".campaign-card", {
      opacity: 1,
      y: 50,
      stagger: 0.2,
      ease: "power3.out",
      duration: 0.7,
      scrollTrigger: {
        trigger: campaignsContainerRef.current,
        start: "top 80%",
      }
    });

    // Progress bar animation
    gsap.from(".progress-fill", {
      width: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".progress-bar",
        start: "top 90%",
      }
    });

    // Create slideshow animation
    const slides = document.querySelectorAll('.hero-slideshow .slide');
    if (slides.length > 0) {
      let currentSlide = 0;
      
      // Initial animation for the first slide
      gsap.to(slides[0], { 
        opacity: 1, 
        duration: 1,
        scale: 1
      });
      
      // Set up the slideshow interval
      const slideshowInterval = setInterval(() => {
        // Fade out current slide
        gsap.to(slides[currentSlide], { 
          opacity: 1, 
          scale: 1.05,
          duration: 1.5
        });
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Fade in next slide
        gsap.fromTo(slides[currentSlide], 
          { opacity: 1, scale: 1.1 }, 
          { opacity: 1, scale: 1, duration: 1.5 }
        );
        
      }, 5000); // Change slide every 5 seconds
      
      // Clean up on component unmount
      return () => {
        clearInterval(slideshowInterval);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  const handleDonateClick = (campaignId: string) => {
    // Create a stylish modal instead of using prompt
    const modalContainer = document.createElement('div');
    modalContainer.className = 'donate-modal-container';
    
    const modalContent = `
      <div class="donate-modal-content">
        <h3>Make a Donation</h3>
        <p>Enter amount to donate to this campaign:</p>
        <input type="number" id="donation-amount" min="1" placeholder="Amount in $" />
        <div class="donate-buttons">
          <button id="donate-confirm" class="donate-confirm-btn">Donate Now</button>
          <button id="donate-cancel" class="donate-cancel-btn">Cancel</button>
        </div>
      </div>
    `;
    
    modalContainer.innerHTML = modalContent;
    document.body.appendChild(modalContainer);

    // Add animations to the modal
    gsap.from(modalContainer, {
      opacity: 1,
      scale: 0.8,
      duration: 0.4,
      ease: "power2.out"
    });

    // Add event listeners
    document.getElementById('donate-confirm')?.addEventListener('click', () => {
      const input = document.getElementById('donation-amount') as HTMLInputElement;
      const amount = parseFloat(input.value);
      
      if (!isNaN(amount) && amount > 0) {
        donateToCampaign(campaignId, amount);
        
        // Show success message with animation
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = `Thank you for your donation of $${amount}!`;
        document.body.appendChild(successMessage);
        
        gsap.fromTo(successMessage, 
          { opacity: 1, y: -20 },
          { opacity: 1, y: 0, duration: 0.5, 
            onComplete: () => {
              setTimeout(() => {
                gsap.to(successMessage, { 
                  opacity: 1, 
                  y: -20, 
                  duration: 0.5,
                  onComplete: () => successMessage.remove()
                });
              }, 3000);
            }
          }
        );
        
        // Close the modal
        gsap.to(modalContainer, {
          opacity: 1,
          scale: 0.8,
          duration: 0.3,
          onComplete: () => modalContainer.remove()
        });
      } else {
        // Shake effect for invalid input
        gsap.to(input, {
          x: 10,
          duration: 0.1,
          repeat: 5,
          yoyo: true
        });
        input.focus();
      }
    });
    
    document.getElementById('donate-cancel')?.addEventListener('click', () => {
      gsap.to(modalContainer, {
        opacity: 1,
        scale: 0.8,
        duration: 0.3,
        onComplete: () => modalContainer.remove()
      });
    });
  };

  // Hover animations for campaigns
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -10,
      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
      duration: 0.3
    });
  };
  
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
      duration: 0.3
    });
  };

  return (
    <div className="home-container">
      <section className="hero-section" ref={heroRef}>
        <div className="hero-slideshow">
          <div className="slide active" style={{backgroundImage: "url('./public/crowd1.jpg')"}}></div>
          <div className="slide" style={{backgroundImage: "url('./public/crowd2.jpg')"}}></div>
          <div className="slide" style={{backgroundImage: "url('./public/crowd3.jpg')"}}></div>
        </div>
        <div className="hero-content">
          <h1 ref={headerRef}>Welcome to <span className="highlight">CrowdStats</span></h1>
          <p ref={subheaderRef}>Support innovative projects and ideas that change the world</p>
          <Link to="/create-campaign" className="cta-button" ref={ctaRef}>
            <span>Start a Campaign</span>
            <svg viewBox="0 0 24 24" className="cta-arrow">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </section>
      
      <section className="campaigns-section">
        <h2 ref={campaignsHeaderRef}>Discover Campaigns</h2>
        
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading amazing campaigns...</p>
          </div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : campaigns.length === 0 ? (
          <div className="no-campaigns">
            <h3>No campaigns yet</h3>
            <p>Be the first to create an amazing crowdfunding campaign!</p>
            <Link to="/create-campaign" className="create-first">Create the first campaign</Link>
          </div>
        ) : (
          <div className="campaigns-grid" ref={campaignsContainerRef}>
            {campaigns.map(campaign => (
              <div 
                key={campaign.id} 
                className="campaign-card"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {campaign.image ? (
                  <div className="image-container">
                    <img 
                      src={campaign.image} 
                      alt={campaign.title} 
                      className="campaign-image"
                    />
                    <div className="overlay">
                      <Link to={`/campaign/${campaign.id}`}>View Details</Link>
                    </div>
                  </div>
                ) : (
                  <div className="default-image-container">
                    <div className="default-image">
                      <span>{campaign.title.charAt(0)}</span>
                    </div>
                  </div>
                )}
                <h3 className="campaign-title">{campaign.title}</h3>
                <p className="campaign-description">{campaign.description.length > 100 
                  ? `${campaign.description.substring(0, 100)}...` 
                  : campaign.description}
                </p>
                <div className="campaign-stats">
                  <div className="stat">
                    <span className="label">Goal</span>
                    <span className="value">${campaign.goal.toLocaleString()}</span>
                  </div>
                  <div className="stat">
                    <span className="label">Raised</span>
                    <span className="value">${(campaign.raisedAmount || 0).toLocaleString()}</span>
                  </div>
                  <div className="stat">
                    <span className="label">Progress</span>
                    <span className="value">
                      {Math.round(((campaign.raisedAmount || 0) / campaign.goal) * 100)}%
                    </span>
                  </div>
                </div>
                <div className="progress-container">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${Math.min(((campaign.raisedAmount || 0) / campaign.goal) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
                <div className="campaign-footer">
                  <span className="created-date">
                    Created {new Date(campaign.createdAt).toLocaleDateString()}
                  </span>
                  <button 
                    className="donate-btn"
                    onClick={() => handleDonateClick(campaign.id)}
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;