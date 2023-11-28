import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - GetAll', () => {

  it('Puxa todas as cidades', async() => {
    const res1 = await testServer.post('/cidades').send( {nome:  'São Paulo'} );
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBusca = await testServer.get('/cidades').send();
    
    expect(Number(resBusca.header['x-total-count'])).toBeGreaterThan(0);
    expect(resBusca.statusCode).toEqual(StatusCodes.OK);
    expect(resBusca.body.length).toBeGreaterThan(0);

  });
});