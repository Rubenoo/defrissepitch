const Footer: React.FunctionComponent = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      style={{ background: "#eee", padding: "10px 0", textAlign: "center" }}
    >
      <p>&copy; {currentYear} Your Company Name</p>
    </footer>
  );
};

export default Footer;
