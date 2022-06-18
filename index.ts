import express from 'express';
import bodyParser from 'body-parser';

import './routes/api';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/', api);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

function api(arg0: string, api: any) {
    throw new Error('Function not implemented.');
}
