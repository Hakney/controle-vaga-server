import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Apartamento } from "../entity/Apartamento"

export class ApartamentoController {

    private apartamentoRepository = AppDataSource.getRepository(Apartamento)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.apartamentoRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        const apartamento = await this.apartamentoRepository.findOne({
            where: { id }
        })

        if (!apartamento) {
            return "unregistered apartamento"
        }
        return apartamento
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { bloco, apartamento, morador, telefone, email } = request.body;

        const apartamentoModel = Object.assign(new Apartamento(), {
            bloco,
            apartamento,
            morador,
            telefone,
            email
        })

        return this.apartamentoRepository.save(apartamentoModel)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let apartamentoToRemove = await this.apartamentoRepository.findOneBy({ id })

        if (!apartamentoToRemove) {
            return "this apartamento not exist"
        }

        await this.apartamentoRepository.remove(apartamentoToRemove)

        return "apartamento has been removed"
    }

}