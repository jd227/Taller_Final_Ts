import { Router } from 'express';
import { createPerson, getPerson, updatePerson, deletePerson } from '../controller/person.controller';

const router = Router();

router.post('/', createPerson);
router.get('/:id', getPerson);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);

export default router;
