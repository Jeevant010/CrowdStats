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
    <div className="campaign-details-container">
      <h1>Campaign Title</h1>
      <p className="campaign-description">
        This is a detailed description of the campaign. It explains the purpose, goals, and impact of the project.
      </p>
      <div className="funding-info">
        <p className="funding-goal">Funding Goal: $10,000</p>
        <p className="amount-raised">Amount Raised: $2,500</p>
      </div>
      <button className="contribute-button">Contribute to Campaign</button>
    </div>
   

      

    


    
  );
}
