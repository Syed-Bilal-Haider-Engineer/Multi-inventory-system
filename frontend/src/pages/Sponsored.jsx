import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  const sponsors = [
    {
      name: "Sony",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png",
    },
    {
      name: "Dell",
      logo: "https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png",
    },
    {
      name: "LG",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png",
    },
    {
      name: "Apple",
      logo: "https://www.vectorlogo.zone/logos/apple/apple-ar21.png",
    },
  ];

  return (
    <div className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}>
      <div className="flex justify-between w-full">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex items-start">
            <img src={sponsor.logo} alt={sponsor.name} style={{ width: "150px", objectFit: "contain" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsored;
