import React from "react";
import Interests from "./Interests";

function Profile({ user, theme }) {
  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      {/* passes theme down to Interest
          this is know as prop-drilling */}
      <Interests interests={user.interests} theme={theme} />
    </div>
  );
}

export default Profile;
