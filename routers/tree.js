const express = require('express');
const router = express.Router();
const models = require('../models'); 
const _ = require('underscore');

/* GET trees listing. */
router.get('/', async (req, res) => {
  const trees = await models.trees.findAll({
    attributes: ['id', 'parent', 'text']
  });
  res.send(trees);
});

//get instant of tree
router.get('/:id', async (req, res) => {
  const tree = await models.trees.findByPk(parseInt(req.params.id), {
    attributes: ['id', 'parent', 'text']
  })
  if(!tree)
    return res.status(404).send('Tree not found!');
  res.send(tree);
})

//delete instant of tree
router.delete('/:id', async (req, res) => {
  const tree = await models.trees.findByPk(parseInt(req.params.id));
  if (!tree)
    return res.status(404).send('Tree not found!');
  await tree.destroy()
  res.send('Ok');
})

router.put('/:id', async (req, res) => {
  const tree = await models.trees.findByPk(parseInt(req.params.id));
  if(!tree)
    res.status(404).send('Tree not found!')
  res.send(_.pick(await tree.update(req.body), 'id', 'parent', 'text'));
})

//create user
router.post('/', async (req, res) => {
  const tree = await models.trees.create(req.body);
  res.send();
})

module.exports = router;