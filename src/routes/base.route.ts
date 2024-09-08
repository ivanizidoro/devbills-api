import { Router } from 'express';

import packgeJson from '../../package.json';

export const baseRoutes = Router();

baseRoutes.get('/', (_, res) => {
  const { name, version, description, author } = packgeJson;

  res.status(200).json({ name, version, description, author });
});
