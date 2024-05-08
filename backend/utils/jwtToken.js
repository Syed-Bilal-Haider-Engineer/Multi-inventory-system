const sendToken = (user, statusCode, res) => {
    const token = user.getJwtToken();
  
    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      sameSite: "none",
      secure: true,
    };
  
    res.cookie("token", token, options);
  
    res.status(statusCode).json({
      success: true,
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  };
  
  export default sendToken;
  