import { getConnection, querys, sql } from "../database";

export const getLogin = async (req, res) => {
    const { usuario, pass } = req.body;

    // validating
    if (usuario == null || pass == null) {
      return res.status(400).json({ msg: "Bad Request. Por favor ingrese todos los datos." });
    }
  
    try {
      const pool = await getConnection();
      const result = await pool
        .request()
        .input("usuario", sql.VarChar, usuario)
        .input("pass", sql.VarChar, pass)
        .query(querys.getLogin);
      res.json({ result });
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};