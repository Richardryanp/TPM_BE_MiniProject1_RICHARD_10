export const validateCoffee = (req, res, next) => {
  const { name, sugar } = req.body;

  if (!name || !sugar) {
    return res.status(400).json({
      success: false,
      message: "Coffee name and sugar level are required"
    });
  }

  next();
};
