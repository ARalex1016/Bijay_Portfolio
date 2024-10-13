import fs from "fs";

let path = "./Data/bijayLama.json";
let bijayDetails = JSON.parse(fs.readFileSync(path, "utf8"));

export const login = async (req, res) => {
  const { userName, password } = req.body;

  try {
    if ((!userName, !password)) {
      return res.status(404).json({
        status: "fail",
        message: "All fields are required!",
        user: null,
      });
    }

    if (
      bijayDetails.userName !== userName ||
      bijayDetails.password !== password
    ) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect username or password",
        user: null,
      });
    }

    return res.status(200).json({
      status: "success",
      user: bijayDetails,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.messages || "Server Error",
      user: null,
    });
  }
};

export const getAll = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      user: bijayDetails,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.messages || "Server Error",
      user: null,
    });
  }
};

export const updateDetail = async (req, res) => {
  try {
    let updatedBijayDetail = await Object.assign(bijayDetails, req.body);

    fs.writeFile(path, JSON.stringify(updatedBijayDetail), (err) => {
      if (err) {
        return res.status(400).json({
          status: "fail",
          message: "Problem updating data!",
          user: null,
        });
      }

      res.status(200).json({
        status: "success",
        user: bijayDetails,
      });
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.messages || "Server Error",
      user: null,
    });
  }
};

export const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  try {
    if (!currentPassword || !newPassword) {
      return res.status(404).json({
        status: "fail",
        message: "All fields are required!",
        user: null,
      });
    }

    if (currentPassword !== bijayDetails.password) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect Password!",
        user: null,
      });
    }

    let newDetail = await Object.assign(bijayDetails, {
      password: newPassword,
    });

    fs.writeFile(path, JSON.stringify(newDetail), (err) => {
      if (err) {
        return res.status(400).json({
          status: "fail",
          message: "Problem updating data!",
          user: null,
        });
      }

      res.status(200).json({
        status: "success",
        user: newDetail,
      });
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.messages || "Server Error",
      user: null,
    });
  }
};
