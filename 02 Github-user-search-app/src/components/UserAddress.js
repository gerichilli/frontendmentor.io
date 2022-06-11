import React from "react";

const UserAddress = ({
  children,
  available,
  href = null,
  ariaLable = null,
}) => {
  const elementClass = available ? "" : "unavailable";

  return (
    <>
      {href ? (
        <a className={elementClass} href={href} aria-label={ariaLable || ""}>
          {children}
        </a>
      ) : (
        <p className={elementClass}>{children}</p>
      )}
    </>
  );
};

export default UserAddress;
