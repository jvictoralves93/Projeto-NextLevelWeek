import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';


import { celebrate, Joi } from 'celebrate'

const routes = express.Router();

const upload = multer(multerConfig);


const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index); //Bscar todos os Items
routes.get('/points/:id', pointsController.show); //Buscar Ponto Específico
routes.get('/points', pointsController.index); //Buscar pontos filtrando por cidade/estado




routes.post(
    '/points',
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required(),
            whatsapp: Joi.string().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),
        })
    }, {
        abortEarly: false
    }),
    pointsController.create
); //Criar um ponto


export default routes;