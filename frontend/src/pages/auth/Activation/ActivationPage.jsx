import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFormHook from "../../../customHook/postHook";

const ActivationPage = () => {
  const { activation_token } = useParams();
  const { handleSubmit } = useFormHook();
  useEffect(() => {
    if (activation_token) {
        (function() {
            let formData = activation_token;
            handleSubmit({formData},'json',`${server}/user/activation`);
        })();
    }
  }, [activation_token]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired!</p>
      ) : (
        <p>Your account has been created suceessfully!</p>
      )}
    </div>
  );
};

export default ActivationPage;