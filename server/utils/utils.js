import jwt from "jsonwebtoken";

export const handleGenerateToken = (userID) => {
  const token = jwt.sign({ userID }, process.env.TOKEN_KEY, {
    expiresIn: "30d",
  });
  console.log(token);
  return token;
};
