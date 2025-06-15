import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCampaigns } from '../context/CampaignContext';
import './CreateCampaign.css';

const CreateCampaign: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');
  const [image, setImage] = useState('');
  
  const navigate = useNavigate();
  const { addCampaign } = useCampaigns();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!title || !description || !goal) {
      alert('Please fill in all required fields');
      return;
    }
       // Add campaign to context
    addCampaign({
      title,
      description,
      goal: parseFloat(goal),
      image
    });
    
    // Clear form
    setTitle('');
    setDescription('');
    setGoal('');
    setImage('');
    
    // Navigate to home page to see the new campaign
    navigate('/');
  };
  
  return (
    <div className="create-campaign-container">
      <h1>Create New Campaign</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Campaign Title</label>
          <input
            type="text"
            id="title"
                       value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="goal">Funding Goal ($)</label>
          <input
            type="number"
            id="goal"
            value={goal}
                       onChange={(e) => setGoal(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="image">Campaign Image URL (optional)</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        
        <button type="submit" className="submit-button">Create Campaign</button>
      </form>
    </div>
  );
};

export default CreateCampaign;