import { useState } from "react";

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownItems = ["STUDIO", "APPROACH", "PROJECTS", "BLOG", "CONTACT"];

  const onPressDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div style={{
        display: "flex",
        alignSelf: "flex-end",
        position: "relative",
        
    }}>
    <div
      style={{
        cursor: "pointer",
        position: "absolute",
        borderWidth: "2px",
        height: isDropdownOpen ? "300px" : "",
        width: isDropdownOpen ? "200px" : ""
      }}
    >
      <div
        onClick={onPressDropdown}
        style={{
          backgroundColor: "#FF620C",
          padding: "12px 28px",
          borderRadius: "18px",
          zIndex: 100,
          position: "absolute",
          right: "10px",
          top: "10px",
        }}
      >
        {isDropdownOpen ? "CLOSE" : "OPEN"}
      </div>

      <div
        className={isDropdownOpen ? "transition" : "collapse"}
        style={{
          position: "absolute",
          display: "flex",
          backgroundColor: "black",
          borderRadius: "16px",
          justifyContent: "center",
          flexDirection: "column",
          gap: "15px",
          overflow: "hidden",
          alignItems: "center"
        }}
      >
        {dropdownItems?.map((item, i) => {
          return (
            <div
              key={i}
              className="drowdown-items"
              style={{ fontSize: "20px" }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Dropdown;
