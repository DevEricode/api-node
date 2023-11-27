import { testServer } from '../jest.setup';
import { StatusCodes } from 'http-status-codes';

describe('Cidades - GetById', () => {

  it('Pega uma cidade por id', async () => {
    const res1 = await testServer.get('/cidades/1');
    
    expect(res1.statusCode).toEqual(StatusCodes.OK);
  });

});