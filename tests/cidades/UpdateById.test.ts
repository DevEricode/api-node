import { StatusCodes } from 'http-status-codes';
import { testServer} from '../jest.setup';

describe('Cidades - UpdateById', () => {

  it('Cidades - Atualiza um registro', async () => {

    const res1 = await testServer.post('/cidades').send({
      nome:  'Rio de Janeiro',
    });
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resAtualiza = await testServer.put(`/cidades/${res1.body}`).send( {nome: 'Minas Gerais'} );
    expect(resAtualiza.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });

  it('Tenta atualizar um registro que não existe',async () => {
    const res1 = await testServer.put('/cidades/9999').send({ nome: 'Maringa' });

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
});