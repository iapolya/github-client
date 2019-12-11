import React from "react";

function ShortUserInfo({ user }) {
    return (
        <div>
            <img className="round-img" src={user.avatarUrl} alt="avatar" />
            <h2>{user.name}</h2>
            <p>{user.login}</p>
            <p>{user.email}</p>
            <p>{user.bio}</p>
        </div>
    )
}

export default ShortUserInfo;