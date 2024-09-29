import { Router } from 'express';

import { createProduct, findAllProducts, findProductById } from '../controllers';

const router = Router();

router.post('/', createProduct);
router.get('/', findAllProducts);
router.get('/:id', findProductById);

export { router as productsRouter };

