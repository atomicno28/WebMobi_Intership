import { useNavigate } from "react-router-dom";
export default function Error() {
  const nav = useNavigate();

  const handleClick = () => {
    nav("/");
  };

  return (
    <>
      <div className="form_content">
        <p>Please Enter the City Name First. </p>
        <button onClick={handleClick}> Go back </button>
      </div>
    </>
  );
}
