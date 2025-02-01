const ProfileCard = ({ image, username, link }) => {
    return (
      <div className="profile-card">
        <img src={image} alt="Profile" className="profile-image" />
        <div className="profile-content">
          <p className="profile-username">{username}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="profile-link">
            - Klikk her
          </a>
          <button className="profile-button">Join newsletter</button>
        </div>
      </div>
    );
  };
  
  export default ProfileCard;
  