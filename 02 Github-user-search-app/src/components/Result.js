import React from "react";
import {
  IconCompany,
  IconLocation,
  IconTwitter,
  IconWebsite,
} from "../assets/Icons";
import UserAddress from "./UserAddress";

const Result = ({ userData }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  return (
    <div className="user">
      <div className="user__img">
        <img src={userData.avatar_url} alt="" />
      </div>
      <div className="user__details">
        <div className="user__top">
          <h1>{userData.name || userData.login}</h1>
          <p>Joined {formatDate(userData.created_at)}</p>
          <a href={userData.html_url}>@{userData.login}</a>
        </div>
        <p className={`user__desc ${userData.bio ? "" : "unavailable"}`}>
          {userData.bio || "This profile has no bio"}
        </p>
        <dl className="user__infos">
          <div>
            <dt>Repos</dt>
            <dd>{userData.public_repos}</dd>
          </div>
          <div>
            <dt>Followers</dt>
            <dd>{userData.followers}</dd>
          </div>
          <div>
            <dt>Following</dt>
            <dd>{userData.following}</dd>
          </div>
        </dl>
        <ul className="user__links" role="list">
          <li role="listitem">
            <UserAddress available={userData.location}>
              <IconLocation />
              <span className="sr-only">Location</span>
              <span>{userData.location || "Not Available"}</span>
            </UserAddress>
          </li>
          <li role="listitem">
            <UserAddress available={userData.twitter_username}>
              <IconTwitter />
              <span className="sr-only">Twitter</span>
              <span>{userData.twitter_username || "Not Available"}</span>
            </UserAddress>
          </li>
          <li role="listitem">
            <UserAddress
              available={userData.blog}
              href={userData.blog}
              ariaLable=""
            >
              <IconWebsite />
              <span className="sr-only">Blog</span>
              <span>{userData.blog || "Not Available"}</span>
            </UserAddress>
          </li>
          <li role="listitem">
            <UserAddress available={userData.company}>
              <IconCompany />
              <span className="sr-only">Company</span>
              <span>{userData.company || "Not Available"}</span>
            </UserAddress>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Result;
