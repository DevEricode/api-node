import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - Create', () => {

  it('Cria registro', async() => {
    const res1 = await testServer.post('/cidades').send({ nome: 'Rio de Janeiro' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });

  it('Cria um registro sem informar o nome', async() => {
    const res1 = await testServer.post('/cidades').send({});

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.nome');
  });

  it('Cria um registro com o nome curto', async() => {
    const res1 = await testServer.post('/cidades').send({ nome: 'RJ' });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.nome');
  });


});