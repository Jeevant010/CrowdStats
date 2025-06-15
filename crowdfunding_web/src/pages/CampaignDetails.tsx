import React from "react";

export default function CampaignDetails() {
  // build a crowdfunding campaign details page
  // including the title, description, funding goal, and current amount raised.
  // It will also include a button to contribute to the campaign.
  // The page will be styled with a simple layout and responsive design.
  // the page section should be attractive and responsive.

  // it should be important that campaign details should be fetched from the backend API.
  // and displayed in a responsive manner.
  // For now, we will use static data for demonstration purposes. but use multiple components to structure the page.

  return (
    <div className="campaign-details">
      <div className="camp_1">
      <h1 className="campaign-title">Campaign Title</h1>
      <p className="campaign-description">
        This is a detailed description of the crowdfunding campaign. It explains the purpose of the campaign, how the funds will be used, and why it is important.
      </p>
      <div className="funding-goal">
        <h2>Funding Goal: $10,000</h2>
        <h3>Current Amount Raised: $5,000</h3>
      </div>
      <button className="contribute-button">Contribute Now</button>
      </div>
      <div className="camp_2">
        <h2>Campaign Updates</h2>
        <p>Stay tuned for updates on the campaign progress and how your contributions are making a difference!</p>
        <ul className="campaign-updates">
          <li>Update 1: We reached 50% of our funding goal!</li>
          <li>Update 2: Thank you to all our contributors!</li>
          <li>Update 3: We're working hard to bring you the best rewards!</li>
        </ul>
      </div>
    </div>
    
      

    


    
  );
}
