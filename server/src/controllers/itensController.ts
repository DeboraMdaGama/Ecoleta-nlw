import knex from '../database/connection';
import {Request, Response} from 'express';

class ItensController{
    async index(request:Request, response: Response){
        const itens = await knex('itens').select('*');
    
        const serializedItens = itens.map(item =>{
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.1.107:3333/tmp/${item.image}`,
            };
        });
    
        return response.json(serializedItens);
    }
}

export default ItensController;