import {
  Button,
  CircularProgress,
  FormControl,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState, useContext } from "react";
import api from "../config/api";
import { UserContext } from "../context/userContext";

const AuthModal = ({ openModal, handleCloseModal }) => {
  const { setUser } = useContext(UserContext);
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginResponseMessage, setloginResponseMessage] = useState("");
  const [registerResponseMessage, setregisterResponseMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formRegisterData, setFormRegisterData] = useState({
    email: "",
    password: "",
    fullname: "",
  });
  const [error, setError] = useState({
    emailError: false,
    passwordError: false,
    fullnameError: false,
  });
  const [otpCode, setOtpCode] = useState("");
  const [otpError, setOtpError] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(true);

  const regexEmail =
    /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;

  const handleChangeForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeRegisterForm = (e) => {
    setFormRegisterData({
      ...formRegisterData,
      [e.target.name]: e.target.value,
    });
  };

  const emailValidation = () => {
    if (!regexEmail.test(formData.email)) {
      setError({ ...error, emailError: true });
    } else {
      setError({ ...error, emailError: false });
    }
  };

  const passwordValidation = () => {
    if (formData.password.trim() === "") {
      setError({ ...error, passwordError: true });
    } else {
      setError({ ...error, passwordError: false });
    }
  };

  const registerEmailValidation = () => {
    if (!regexEmail.test(formRegisterData.email)) {
      setError({ ...error, emailError: true });
    } else {
      setError({ ...error, emailError: false });
    }
  };
  const registerFullnameValidation = () => {
    if (formRegisterData.fullname.trim() === "") {
      setError({ ...error, fullnameError: true });
    } else {
      setError({ ...error, fullnameError: false });
    }
  };

  const registerPasswordValidation = () => {
    if (formRegisterData.password.trim() === "") {
      setError({ ...error, passwordError: true });
    } else {
      setError({ ...error, passwordError: false });
    }
  };

  const handleSubmit = async () => {
    setloginResponseMessage(false);
    let gotError = false;
    const errorObject = {
      emailError: false,
      passwordError: false,
    };

    if (!regexEmail.test(formData.email)) {
      gotError = true;
      errorObject.emailError = true;
    }
    if (formData.password.trim() === "") {
      gotError = true;
      errorObject.passwordError = true;
    }
    if (gotError) {
      setError({ ...errorObject });
      gotError = false;
      return;
    }
    gotError = false;
    setError({
      ...error,
      emailError: false,
      passwordError: false,
      fullnameError: false,
    });
    setLoading(true);
    api
      .post(
        "/user/login",
        JSON.stringify({ email: formData.email, password: formData.password })
      )
      .then((res) => {
        setLoading(false);
        if (res.success) {
          setUser(res);
        } else {
          setloginResponseMessage(true);
        }
      })
      .catch((err) => console.log("err", err));
  };
  const handleRegisterSubmit = async () => {
    setregisterResponseMessage("");
    let gotError = false;
    const errorObject = {
      emailError: false,
      passwordError: false,
      fullnameError: false,
    };

    if (!regexEmail.test(formRegisterData.email)) {
      gotError = true;
      errorObject.emailError = true;
    }
    if (formRegisterData.password.trim() === "") {
      gotError = true;
      errorObject.passwordError = true;
    }
    if (formRegisterData.fullname === "") {
      gotError = true;
      errorObject.fullnameError = true;
    }

    if (gotError) {
      setError({ ...errorObject });
      gotError = false;
      return;
    }
    gotError = false;
    setError({
      ...error,
      emailError: false,
      passwordError: false,
      fullnameError: false,
    });
    setLoading(true);
    api
      .post(
        "/user/register",
        JSON.stringify({
          fullname: formRegisterData.fullname,
          email: formRegisterData.email,
          password: formRegisterData.password,
        })
      )
      .then((res) => {
        setLoading(false);
        if (res.success) {
          setShowOTPForm(true);
        } else {
          if (res.info === "user already existed.") {
            setregisterResponseMessage("This account is already registered.");
          } else {
            setregisterResponseMessage("Something went wrong.");
          }
        }
      })
      .catch((err) => console.log("err", err));
  };
  const LoginInputs = () => {
    return (
      <>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          align="center"
          fontWeight="bold"
          color="primary"
        >
          Welcome Back
        </Typography>
        {loginResponseMessage && (
          <Typography variant="body2" color="red" align="center">
            You have entered an incorrect email or password. <br />
            Please note that both fields are case-sensitive.
          </Typography>
        )}
        <FormControl fullWidth>
          <Typography variant="subtitle2" mb={0.5}>
            Your E-mail Address
          </Typography>
          <TextField
            name="email"
            error={error.emailError}
            sx={{
              marginBottom: error.emailError ? 1 : 3,
              ".MuiInputBase-input": { fontSize: 14 },
            }}
            helperText={error.emailError && "Enter a valid email"}
            onChange={handleChangeForm}
            onBlur={emailValidation}
            data-testid="form-field-email"
            size="small"
            value={formData.email}
          />
          <Typography variant="subtitle2" mb={0.5}>
            Password
          </Typography>
          <TextField
            name="password"
            onChange={handleChangeForm}
            error={error.passwordError}
            sx={{ ".MuiInputBase-input": { fontSize: 14 } }}
            helperText={error.passwordError && "Required Field."}
            onBlur={passwordValidation}
            data-testid="form-field-url"
            size="small"
            value={formData.password}
            type="password"
          />
          {loading ? (
            <Box display="flex" justifyContent="center" mt={4}>
              <CircularProgress size={24} />
            </Box>
          ) : (
            <Button
              // loading={submit}
              type="submit"
              variant="contained"
              sx={{
                borderRadius: 99999,
                width: "100%",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                fontWeight: 700,
                textTransform: "none",
                fontSize: 16,
                marginTop: 4,
              }}
              onClick={handleSubmit}
            >
              Login
            </Button>
          )}
        </FormControl>
        <Box align="center">
          <Typography
            component="a"
            variant="subtitle2"
            sx={{
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
            onClick={() => {
              setError({
                emailError: false,
                passwordError: false,
                fullnameError: false,
              });
              setFormRegisterData({
                email: "",
                password: "",
                fullname: "",
              });
              setShowLoginForm(false);
            }}
          >
            Don't have an account?
          </Typography>
        </Box>
      </>
    );
  };

  const RegisterInputs = () => {
    return (
      <>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          align="center"
          fontWeight="bold"
          color="primary"
        >
          Create an account
        </Typography>
        {registerResponseMessage && (
          <Typography variant="body2" color="red" align="center">
            {registerResponseMessage}
          </Typography>
        )}
        <FormControl fullWidth>
          <Typography variant="subtitle2" mb={0.5}>
            Full name*
          </Typography>
          <TextField
            name="fullname"
            size="small"
            sx={{
              marginBottom: error.fullnameError ? 1 : 3,
              ".MuiInputBase-input": { fontSize: 14 },
            }}
            onChange={handleChangeRegisterForm}
            onBlur={registerFullnameValidation}
            error={error.fullnameError}
            helperText={error.fullnameError && "Required Field."}
            value={formRegisterData.fullname}
          />
          <Typography variant="subtitle2" mb={0.5}>
            Email Address*
          </Typography>
          <TextField
            name="email"
            size="small"
            sx={{
              marginBottom: error.emailError ? 1 : 3,
              ".MuiInputBase-input": { fontSize: 14 },
            }}
            onChange={handleChangeRegisterForm}
            onBlur={registerEmailValidation}
            error={error.emailError}
            helperText={error.emailError && "Enter a valid email"}
            value={formRegisterData.email}
          />
          <Typography variant="subtitle2" mb={0.5}>
            Password*
          </Typography>
          <TextField
            name="password"
            data-testid="form-field-url"
            size="small"
            onChange={handleChangeRegisterForm}
            onBlur={registerPasswordValidation}
            sx={{
              ".MuiInputBase-input": { fontSize: 14 },
            }}
            error={error.passwordError}
            helperText={error.passwordError && "Required Field."}
            value={formRegisterData.password}
            type="password"
          />
          {loading ? (
            <Box display="flex" justifyContent="center" mt={4}>
              <CircularProgress size={24} />
            </Box>
          ) : (
            <Button
              // loading={submit}
              type="submit"
              variant="contained"
              sx={{
                borderRadius: 99999,
                width: "100%",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                fontWeight: 700,
                textTransform: "none",
                fontSize: 16,
                marginTop: 4,
              }}
              onClick={handleRegisterSubmit}
            >
              Create
            </Button>
          )}
        </FormControl>
        <Box align="center">
          <Typography
            component="a"
            variant="subtitle2"
            sx={{
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
            onClick={() => {
              setError({
                emailError: false,
                passwordError: false,
                fullnameError: false,
              });
              setFormData({
                email: "",
                password: "",
              });
              setShowLoginForm(true);
            }}
          >
            Have an account?
          </Typography>
        </Box>
      </>
    );
  };

  const handleOtp = () => {
    setOtpError("");
    if (otpCode === "") {
      return setOtpError("Required Field.");
    }
    setLoading(true);
    api
      .post(
        "/user/verify_otp",
        JSON.stringify({ otp_code: otpCode, email: formRegisterData.email })
      )
      .then((res) => {
        setLoading(false);
        if (res.success) {
          setUser(res.data);
        } else {
          setOtpError("Something went wrong.");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const otpForm = () => {
    return (
      <>
        <div>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            align="center"
            fontWeight="bold"
            color="primary"
          >
            Verify your account
          </Typography>

          <FormControl fullWidth sx={{ marginTop: 4 }}>
            <Typography variant="subtitle2" mb={0.5}>
              Key in the OTP sent to your email address.
            </Typography>
            <TextField
              name="otp_code"
              data-testid="form-field-url"
              size="small"
              error={otpError}
              sx={{
                ".MuiInputBase-input": { fontSize: 14 },
              }}
              value={otpCode}
              helperText={otpError}
              onChange={(e) => setOtpCode(e.target.value)}
            />
          </FormControl>
        </div>
        {loading ? (
          <Box display="flex" justifyContent="center" mt={4}>
            <CircularProgress size={24} />
          </Box>
        ) : (
          <Button
            // loading={submit}
            type="submit"
            variant="contained"
            sx={{
              borderRadius: 99999,
              width: "100%",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              fontWeight: 700,
              textTransform: "none",
              fontSize: 16,
              marginTop: 4,
            }}
            onClick={handleOtp}
          >
            Done
          </Button>
        )}
      </>
    );
  };

  return (
    <Modal
      open={openModal}
      onClose={() => {
        setError({
          emailError: false,
          passwordError: false,
        });
        handleCloseModal();
        setShowOTPForm(false);
        setloginResponseMessage(false);
        setregisterResponseMessage("");
        setFormData({ email: "", password: "" });
        setFormRegisterData({ email: "", password: "", fullname: "" });
        setShowLoginForm(true);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          height: showLoginForm ? 400 : 450,
          bgcolor: "whiteColor",
          boxShadow: 24,
          p: 4,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: showOTPForm ? "space-between" : "space-around",
        }}
      >
        {showOTPForm
          ? otpForm()
          : showLoginForm
          ? LoginInputs()
          : RegisterInputs()}
      </Box>
    </Modal>
  );
};
export default AuthModal;
