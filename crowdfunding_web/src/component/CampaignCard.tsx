import './CampaignCard.css';

export default function CampaignCard({ title, description, target, collected, owner, image, onDonate }) {
  const progress = Math.min((collected / target) * 100, 100);

  return (
    <div className="campaign-card">
      <img src={image} alt={title} className="campaign-image" />
      <div className="campaign-title">{title}</div>
      <div className="campaign-desc">{description}</div>
      <div className="campaign-progress-bar">
        <div className="campaign-progress" style={{ width: `${progress}%` }} />
      </div>
      <div className="campaign-info">Raised: {collected} / {target} ETH</div>
      <div className="campaign-info">Owner: {owner.slice(0,6)}...{owner.slice(-4)}</div>
      <button className="campaign-donate-btn" onClick={onDonate}>Donate</button>
    </div>
  );
}
