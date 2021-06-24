import AnimalService from "../services/animal.service.js";

class AnimalController {

    async get(req, res, next) {
        const rows = await AnimalService.get();
        return res.status(200).json(rows);
    }

    async find(req, res, next) {
        const id = req.params.id;
        const row = await AnimalService.find(id);
        return res.status(200).json(row);
    }

    async store(req, res, next) {
        const body = req.body;
        const notValid = this.validate(body);
        if (notValid) {
            return next(Error(notValid));
        }
        const result = await AnimalService.store(body);
        return res.status(201).json(result);
    }

    async update(req, res, next) {
        const body = req.body;
        const id = req.params.id;

        const notValid = this.validate(body);

        if (notValid) {
            return next(Error(notValid));
        }
        
        const result = await AnimalService.update(id, body);
        return res.status(200).json(result)
    }


    async delete(req, res, next) {
        const id = req.params.id;
        await AnimalService.delete(id);
        return res.status(200).json({
            message: 'Deletado com sucesso!'
        })
    }

    validate(body) {
        if (!body.nome || !body.tipo || !body.proprietario_id) {
            return 'Informar campos obrigatorios';
        }
        return;
    }
}

export default new AnimalController();