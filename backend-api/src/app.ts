import express, {Application} from 'express';
import morgan from 'morgan';
import IndexRoutes from './routes/index';


export class App {

    private app: Application

    constructor(private port: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', this.port || process.env.port || 3000)
    }

    middlewares(){
        this.app.use(morgan('dev'));
    }

    routes(){
        this.app.use(IndexRoutes);
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('listening on port', this.app.get('port'));
    }
}