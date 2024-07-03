import { Avatar } from "@mui/material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import "./Post.css";

function Post({user, postImg, likes, timestamp}) {
  return (
    <div className="post">
      <div className="post_header">
        <div className="post_header_author">
          <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
          {user} • <span>{timestamp}</span>
        </div>
        <div className="post_header_right">
          <MoreHorizIcon />
        </div>
      </div>
      <div className="post_image">
        <img src={postImg} alt="" />
      </div>

      <div className="post_footer">
        <div className="post_footer_icons">
          <div className="post_footer_main_icons">
            <FavoriteBorderIcon className="post_icon" />
            <ChatBubbleOutlineIcon className="post_icon" />
            <TelegramIcon className="post_icon" />
          </div>
          <div className="post_footer_bookmark">
            <BookmarkBorderIcon className="post_icon" />
          </div>
        </div>
        {likes} likes.
      </div>
    </div>
  );
}

export default Post;
