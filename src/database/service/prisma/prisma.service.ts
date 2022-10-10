import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    private _customer: any;
    public get customer(): any {
        return this._customer;
    }
    public set customer(value: any) {
        this._customer = value;
    }
    private _buraco: any;
    public get buraco(): any {
        return this._buraco;
    }
    public set buraco(value: any) {
        this._buraco = value;
    }
    private _cadastro: any;
    public get cadastro(): any {
        return this._cadastro;
    }
    public set cadastro(value: any) {
        this._cadastro = value;
    }
    private _trajeto: any;
    public get trajeto(): any {
        return this._trajeto;
    }
    public set trajeto(value: any) {
        this._trajeto = value;
    }
    private _veiculo: any;
    public get veiculo(): any {
        return this._veiculo;
    }
    public set veiculo(value: any) {
        this._veiculo = value;
    }

    async onModuleInit() {
        await this.$connect();
    }

    async enableShutdownHooks(app: INestApplication){
        this.$on('beforeExit', async () => {
            await app.close();
        });
    }

}
