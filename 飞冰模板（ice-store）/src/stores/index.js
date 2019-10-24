import Icestore from '@ice/store';
import config from './config';

const icestore = new Icestore();
icestore.registerStore('config', config);

export default icestore;