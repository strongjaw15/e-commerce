const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include:[{model: Product}]
  })
  .then((results)=>{res.json(results)})
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findByPk(req.params.id, {
    include:[{model: Product}]
  })
  .then((results)=>{res.json(results)})
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  }).then((results)=>{res.status(200).json(results)}).catch((err)=>{res.status(500).json(err)})
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category_name: req.body.category_name
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then((results)=>{res.status(200).json(results)}).catch((err)=>{res.status(500).json(err)});
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({where:{id:req.params.id}}).then(res.status(200).json('Success!'))
});

module.exports = router;
