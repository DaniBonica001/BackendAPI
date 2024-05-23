export default (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ error: err.message });
};