import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const GoogleLoginButton: React.FC = () => (
  <GoogleOAuthProvider
    clientId={
      "810546057582-dekmu2djvt1n09fom490vbl89buj1n6i.apps.googleusercontent.com"
    }
  >
    <GoogleLogin
      width={"100px"}
      onSuccess={async (credentialResponse) => {
        try {
          console.log(credentialResponse);
          const response = await fetch(
            "http://localhost:5000/api/auth/google",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ token: credentialResponse.credential }),
            }
          );
          const { token } = await response.json();
          localStorage.setItem("token", token);
          // window.location.reload();
        } catch (error) {
          console.error("Login Failed:", error);
        }
      }}
      onError={() => console.log("Login Failed")}
    />
  </GoogleOAuthProvider>
);

export default GoogleLoginButton;
