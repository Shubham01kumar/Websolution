const pool = require('../config/db');

// 📄 GET all projects
const getAllProjects = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM project ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// ➕ CREATE a new project
const createProject = async (req, res) => {
  const { title, description, tags, color, icon } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO project (title, description, tags, color, icon) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, description, tags, color, icon]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// 📝 UPDATE a project
const updateProject = async (req, res) => {
  const { id } = req.params;
  const { title, description, tags, color, icon } = req.body;
  try {
    const result = await pool.query(
      'UPDATE project SET title=$1, description=$2, tags=$3, color=$4, icon=$5 WHERE id=$6 RETURNING *',
      [title, description, tags, color, icon, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// ❌ DELETE a project
const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM project WHERE id = $1', [id]);
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject
};
