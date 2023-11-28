const express = require('express');
const router = express.Router();
const BookModel = require('../bookmodels');

router.post('/add', async (req, resp) => {
    try {
        const data = req.body;
        const newBook = new BookModel(data);
        await newBook.save();
        resp.status(200).json({ message: "Book Added Successfully" });
    } catch (error) {
        console.log("Error Found", error);
        resp.status(500).json({ message: "Internal Server Error" });
    }
});

router.get('/read', async (req, resp) => {
    try {
        const books = await BookModel.find();
        resp.status(200).json({ books });
    } catch (error) {
        console.log("Error Found", error);
        resp.status(500).json({ message: "Internal Server Error" });
    }
});

router.get('/read/:id', async (req, resp) => {
    const id = req.params.id;
    try {
        const book = await BookModel.findById(id);
        resp.status(200).json({ book });
    } catch (error) {
        console.log("Error Found", error);
        resp.status(500).json({ message: "Internal Server Error" });
    }
});

router.put('/books/:id', async (req, resp) => {
    const id = req.params.id;
    const { bookname, description, author, image, price } = req.body;
    try {
        await BookModel.findByIdAndUpdate(id, { bookname, description, author, image, price });
        resp.status(200).json({ message: "Book Updated" });
    } catch (error) {
        console.log("Error Found", error);
        resp.status(500).json({ message: "Internal Server Error" });
    }
});

router.delete('/delete/:id', async (req, resp) => {
    const id = req.params.id;
    try {
        const deletedBook = await BookModel.findByIdAndDelete(id);
        if (!deletedBook) {
            return resp.status(404).json({ message: 'Book not found' });
        }
        resp.status(200).json({ message: 'Book Deleted', deletedBook });
    } catch (error) {
        console.log("Error Found", error);
        resp.status(500).json({ message: "Internal Server Error" });
    }
});

router.put('/update/:id', async (req, resp) => {
    const id = req.params.id;
    const { bookname, description, author, image, price } = req.body;
    try {
        const updatedBook = await BookModel.findByIdAndUpdate(
            id,
            { bookname, description, author, image, price },
            { new: true } // Return the updated document
        );
        if (!updatedBook) {
            return resp.status(404).json({ message: 'Book not found' });
        }
        resp.status(200).json({ message: 'Book Updated', updatedBook });
    } catch (error) {
        console.log("Error Found", error);
        resp.status(500).json({ message: "Internal Server Error" });
    }
});


module.exports = router;
