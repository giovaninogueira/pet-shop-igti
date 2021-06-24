import ProprietarioRepository from "./../repositorys/proprietario.repository.js";

class ProprietarioService {
    async store(proprietario) {
        return await ProprietarioRepository.store(proprietario);
    }

    async update(id, proprietario) {
        return await ProprietarioRepository.update(id, proprietario);
    }

    async delete(id) {
        await ProprietarioRepository.delete(id);
    }

    async get() {
        return await ProprietarioRepository.get();
    }

    async find(id) {
        return await ProprietarioRepository.find(id);
    }
}

export default new ProprietarioService();