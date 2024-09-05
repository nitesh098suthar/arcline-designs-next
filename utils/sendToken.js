const sendToken = (newUser, message, statusCode, res) => {
  const token = newUser.genToken();
  const tokenOption = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: "none",
    secure: true,
  };

  res.status(Number(statusCode)).cookie("token", token, tokenOption).json({
    success: true,
    message,
    newUser,
  });
};

export default sendToken;
