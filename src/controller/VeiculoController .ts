import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Veiculo } from "../entity/Veiculo"
import { Apartamento } from "../entity/Apartamento"

export class VeiculoController {

    private veiculoRepository = AppDataSource.getRepository(Veiculo);
    private apartamentoRepository = AppDataSource.getRepository(Apartamento);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.veiculoRepository.find({
            relations: ['apartamento']
        })
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        const veiculo = await this.veiculoRepository.findOne({
            where: { id }
        })

        if (!veiculo) {
            return "unregistered veiculo"
        }
        return veiculo
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { apartamentoId, cor, marca, modelo, placa } = request.body;

        const apartamento = await this.apartamentoRepository.findOneBy({ id: apartamentoId });

        if (!apartamento) {
            return response.status(404).json({ message: 'Apartamento não encontrado' });
        }

        const veiculoModel = new Veiculo();
        veiculoModel.apartamento = apartamento;
        veiculoModel.cor = cor;
        veiculoModel.marca = marca;
        veiculoModel.modelo = modelo;
        veiculoModel.placa = placa;

        return this.veiculoRepository.save(veiculoModel);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id);
        const { apartamento, cor, marca, modelo, placa } = request.body;

        let veiculoToUpdate = await this.veiculoRepository.findOneBy({ id });

        if (!veiculoToUpdate) {
            return response.status(404).send("Veiculo not found");
        }

        veiculoToUpdate.apartamento = apartamento;
        veiculoToUpdate.cor = cor;
        veiculoToUpdate.marca = marca;
        veiculoToUpdate.modelo = modelo;
        veiculoToUpdate.placa = placa;

        return this.veiculoRepository.save(veiculoToUpdate);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let veiculoToRemove = await this.veiculoRepository.findOneBy({ id })

        if (!veiculoToRemove) {
            return "this veiculo not exist"
        }

        return this.veiculoRepository.remove(veiculoToRemove);

    }

}