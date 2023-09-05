import { HomepageSectionsCard } from "../UI/HomepageSectionsCard";
import { menuItems } from "../mock-data/data";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Categories.css";

export const Categories = () => {
  return (
    <HomepageSectionsCard>
      <h2> 📚 ОБЕКТИ ПО КАТЕГОРИИ </h2>
      <div className="category-container">
        {menuItems.map((item) => {
          return (
            <Link to={item.link} key={item.id}>
            <Button
              variant="outlined"
              size="medium"
              sx={{ color: "black", width: "270px", margin: "15px" }}
            >
              {item.text}
            </Button>
            </Link>
          );
        })}
      </div>
    </HomepageSectionsCard>
  );
};
