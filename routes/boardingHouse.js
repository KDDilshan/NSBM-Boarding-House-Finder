import express from 'express';
import pool from '../config/db.js';
import Product from '../models/descriptionboarding.js';

const router = express.Router();

router.post('/saveProduct', async (req, res) => {
  try {
    const { userID, description } = req.body;

    if (!userID || !description) {
      return res.status(400).json({ error: 'User ID and content are required' });
    }
    const product = new Product({ userID, description });
    const savedProduct = await product.save();
    const mysqlId = savedProduct._id.toString();

    await pool.query('INSERT INTO owners (UserID, Description) VALUES (?, ?)', [userID, mysqlId]);
    res.status(201).json({
      message: 'Product saved successfully!',
      productId: savedProduct._id,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/product/:id', async (req, res) => {
  try {
    const ownerId = req.params.id;
    const [result] = await pool.query(
      'SELECT Description FROM owners WHERE OwnerID = ?',
      [ownerId]
    );
  
    if (result.length > 0) {
      const description = result[0].Description;
      const product = await Product.findById(description);
      res.send(product.content)
      // res.render('productPage', { product });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

export { router as ownerDescription };


