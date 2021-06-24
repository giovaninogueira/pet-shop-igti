import ProprietarioService from "../services/proprietario.service.js";
import AnimalService from "../services/animal.service.js";

class ProprietarioController {

    async get(req, res, next) {
        const rows = await ProprietarioService.get();
        return res.status(200).json(rows);
    }

    async find(req, res, next) {
        const id = req.params.id;
        const row = await ProprietarioService.find(id);
        return res.status(200).json(row);
    }

    async store(req, res, next) {
        const body = req.body;
        const notValid = this.validate(body);

        if (notValid) {
            return next(Error(notValid));
        }
        const result = await ProprietarioService.store(body);
        return res.status(201).json(result)
    }

    async update(req, res, next) {
        const body = req.body;
        const id = req.params.id;

        const notValid = this.validate(body);

        if (notValid) {
            return next(Error(notValid));
        }
        
        const result = await ProprietarioService.update(id, body);
        return res.status(200).json(result)
    }


    async delete(req, res, next) {
        const id = req.params.id;
        await ProprietarioService.delete(id);
        return res.status(200).json({
            message: 'Deletado com sucesso!'
        })
    }

    async report(req, res, next) {
        const id = req.params.id;
        const proprietario = await ProprietarioService.find(id);
        proprietario['animais'] = [];
        proprietario['animais'] = await AnimalService.findByPropt(id);
        return res.status(200).json(proprietario);
    }

    validate(body) {
        if (!body.nome || !body.telefone) {
            return 'Informar campos obrigatorios';
        }
        return;
    }
}

export default new ProprietarioController();