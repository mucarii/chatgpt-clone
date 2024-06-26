require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
