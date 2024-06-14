import { IconButton } from "@mui/material";
import React from "react";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
function CreateGroups() {
  const iconStyle = { color: "royalblue" };
  return (
    <div className="createGroups-container">
      <input placeholder="Enter Group Name" className="search-box" />
      <IconButton>
        <DoneOutlineRoundedIcon sx={iconStyle} />
      </IconButton>
    </div>
  );
}

export default CreateGroups;
