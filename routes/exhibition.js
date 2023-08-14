const express = require('express');
const router = express.Router();

const ExhibitionController = require('../controllers/exhibiton.controller');
const exhibitionController = new ExhibitionController();

router.get('/', exhibitionController)
const path = require('path');
const fs = require('fs');

