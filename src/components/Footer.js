function Footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >{`© ${new Date().getFullYear()} Kinjal Raykarmakar`}</div>
  );
}

export default Footer;
