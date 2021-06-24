import AnimalRepository from "../repositorys/animal.repository.js";

class AnimalService {
    async store(animal) {
        return await AnimalRepository.store(animal);
    }

    async update(id, proprietario) {
        return await AnimalRepository.update(id, proprietario);
    }

    async delete(id) {
        await AnimalRepository.delete(id);
    }

    async get() {
        return await AnimalRepository.get();
    }

    async find(id) {
        return await AnimalRepository.find(id);
    }

    async findByPropt(id) {
        return await AnimalRepository.findByPropt(id);
    }
}

export default new AnimalService();