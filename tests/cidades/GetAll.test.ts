import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - GetAll', () => {

  it('Puxa todas as cidades', async() => {
    const res1 = await testServer.get('/cidades');

    expect(res1.statusCode).toEqual(StatusCodes.OK);

  });
});