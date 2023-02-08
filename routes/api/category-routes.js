const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include:[{model: Product}]
  })
  .then((results)=>{res.json(results)})
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id, {
    include:[{model: Product}]
  })
  .then((results)=>{res.json(results)})
});

router.post('/', (req, res) => {
  // create a new category
console.log(req.body)
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
  .then(res.status(200).json());
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  // instance.destroy().then(() => {});
  Category.destroy({where:{id:req.params.id}}).then(res.status(200).json())
});

module.exports = router;
