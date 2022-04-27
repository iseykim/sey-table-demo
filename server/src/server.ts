import App from '@/app'
import IndexRoute from '@routes/index.route'
import TablesRoute from '@routes/tables.route'

const app = new App([new IndexRoute(), new TablesRoute()])

app.listen()
