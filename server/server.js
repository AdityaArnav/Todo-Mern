const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const cors  = require('cors');
const app = express();
app.use(express.json());
app.use(cors());