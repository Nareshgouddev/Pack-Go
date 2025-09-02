const bcrypt = require("bcryptjs");
const genarateToken = require("../utils/generateToken");

const registerUser = () => async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const hashpassword = await bcrypt.hash(password, 10);
    const user = await new User.create({
      firstName,
      lastName,
      email,
      password: hashpassword,
    });
    const token = genarateToken(user);

    await user.save();
    res.json({ message: "User Created successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = registerUser;
