import { pool } from '../db.js';

export const getMenus = async (req, res) => {
	try {
		const [result] = await pool.query('SELECT * FROM Menus ORDER BY createAt ASC');
		res.json(result);
	} catch (error) {
		return res.status(500).json({
			error: 'Database error',
		});
	}
};
export const getMenu = async (req, res) => {
	try {
		const [result] = await pool.query('SELECT * FROM Menus WHERE id = ?', [req.params.id]);
		if (result.lenght === 0) return res.status(400).json({ message: 'Menu no encontrado' });
		res.json(result[0]);
	} catch (error) {
		return res.status(500).json({
			error: 'Database error',
		});
	}
};
export const createMenu = async (req, res) => {
	const { title, description } = req.body || {};

	if (!title || !description) {
		return res.status(400).json({
			error: 'Titulo o description falta',
		});
	}

	try {
		const [result] = await pool.query('INSERT INTO Menus(title,description) VALUES (?,?)', [title, description]);
		res.json({
			id: result.insertId,
			title,
			description,
		});
	} catch (error) {
		return res.status(500).json({
			error: 'Database error',
		});
	}
};
export const updateMenu = async (req, res) => {
	try {
		const result = await pool.query('UPDATE Menus SET ? WHERE id = ?', [req.body, req.params.id]);
		res.json(result);
	} catch (error) {
		return res.status(500).json({
			error: 'Database error',
		});
	}
};
export const deleteMenu = async (req, res) => {
	try {
		const [result] = await pool.query('DELETE FROM Menus WHERE id = ?', [req.params.id]);
		if (result.affectdRows === 0) {
			return res.status(404).json({ message: 'Menu no encontrado' });
		}
		return res.sendStatus(204);
	} catch (error) {}
};
