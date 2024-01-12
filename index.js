// index.mjs

import express from 'express';
import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'

import mongoose from 'mongoose'
import * as AdminJSMongoose from '@adminjs/mongoose'

import 'dotenv/config'

import Builder from './models/builderModel.js';
import Society from './models/societyModel.js';
import Flat from './models/flatModel.js';
import Member from './models/memberModel.js';
import OwnerFamily from './models/ownerFamilyModel.js';
import Owner from './models/ownerModel.js';
import OwnerPenalty from './models/ownerPenaltyModel.js';
import Penalty from './models/penaltyModel.js';
import Tenant from './models/tenantModel.js';
import TenantFamily from './models/tenantFamilyModel.js';
import Wing from './models/wingModel.js';

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { 
      
     });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

connectDB();


app.get('/', (req, res) => {
  res.send('Hello, Express with ESM!');
});



AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
})



const admin = new AdminJS({
  databases: [mongoose],
  resources:[
    Builder,
    Society,
    Wing,
    Flat,
    Member,
    Owner,
    OwnerFamily,
    
    Tenant,
    TenantFamily,

    Penalty,
    OwnerPenalty,
    
  ]
})

const adminRouter = AdminJSExpress.buildRouter(admin)
app.use(admin.options.rootPath, adminRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
});


