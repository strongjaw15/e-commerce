const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include:[{model: Product}]
  })
  .then((results)=>{res.json(results)})
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findByPk(req.params.id, {
    include:[{model: Product}]
  })
  .then((results)=>{res.json(results)})
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  }).then((results)=>{res.status(200).json(results)}).catch((err)=>{res.status(500).json(err)})
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    tag_name: req.body.tag_name
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then((results)=>{res.status(200).json(results)}).catch((err)=>{res.status(500).json(err)});

});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({where:{id:req.params.id}}).then(res.status(200).json('Success!'))
});

module.exports = router;
