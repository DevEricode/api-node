import { StatusCodes } from 'http-status-codes';
import { testServer} from '../jest.setup';

describe('Cidades - GetByID', () => {

  it('Cidades - Busca um Registro pelo ID', async () => {

    const res1 = await testServer.post('/cidades').send({
      nome:  'Rio de Janeiro',
    });
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resPuxa = await testServer.get(`/cidades/${res1.body}`).send();
    expect(resPuxa.statusCode).toEqual(StatusCodes.OK);
    expect(resPuxa.body).toHaveProperty('nome');
  });

  it('Tenta puxar um registro que não existe',async () => {
    const res1 = await testServer.get('/cidades/9999').send();

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
});