const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try { //The try block is used to wrap the code that might throw an error. It allows you to handle errors gracefully without crashing the application.
    const categoryData = await Category.findAll({ //is an option passed to findAll() indicating that when fetching categories, it should also include associated products
    // include Products
    include: [{model: Product}],
  });

  res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err)
  };
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
    include: [{model: Product}],
    });
      if (!categoryData) {
      res.status(404).json({ message: 'No Category found with this id' });
      return;
  }
  res.status(200).json(categoryData);
  } catch (err) {
    res. status(500).json(err);
  }
  });
  
router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
   };  
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
    where: {
        id: req.params.id
      },
    });
   if (!categoryData) {
        res.status(404)({ message: 'No Category found with this id' });
        return;
    }
    res.status (200).json(categoryData);
   } catch(err) {
    console.log(err);
    res.status(500).json(err);
   }
  });


router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
    where: {
      id: req.params.id
    },
  });
    if (!categoryData) {
        res.status(404).json({ message: 'No Category found with this id' });
        return;
    }
    res.status(200).json(categoryData);
    } catch(err) {
    res.status(500).json(err);
  };
});

module.exports = router;
