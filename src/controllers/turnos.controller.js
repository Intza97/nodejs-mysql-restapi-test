import { pool } from "../db.js";

export const getTurnos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Turnos");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo va mal" });
  }
};

export const getTurn = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM Turnos WHERE id = ?", [id]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Turno no encontrado" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo va mal" });
  }
};

export const deleteTurnos = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM Turnos WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Turno no encontrado" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Algo va mal" });
  }
};

export const createTurnos = async (req, res) => {
  try {
    const { nombre, apellido, telefono, hora, fecha } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO Turnos (nombre, apellido, telefono, hora, fecha) VALUES (?, ?, ?, ?, ?)",
      [nombre, apellido, telefono, hora, fecha]
    );
    res
      .status(201)
      .json({ id: rows.insertId, nombre, apellido, telefono, hora, fecha });
  } catch (error) {
    return res.status(500).json({ message: "Algo va mal" });
  }
};

export const updateTurnos = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, telefono, hora, fecha } = req.body;

    const [result] = await pool.query(
      "UPDATE Turnos SET nombre = IFNULL(?, nombre), apellido = IFNULL(?, apellido), telefono = IFNULL(?, telefono), hora = IFNULL(?, hora), fecha = IFNULL(?, fecha) WHERE id = ?",
      [nombre, apellido, telefono, hora, fecha, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Turno no encontrado" });

    const [rows] = await pool.query("SELECT * FROM Turnos WHERE id = ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo va mal" });
  }
};
