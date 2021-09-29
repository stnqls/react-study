import "../FooterSaveButton.css";

const FooterButton = (props) => {
  return (
    <button className="FooterSaveButton" {...props}>
      {props.children}
    </button>
  );
};

export default FooterButton;
