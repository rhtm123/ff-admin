
import express from 'express';
import AdminJS from 'adminjs'

import AdminJSExpress from '@adminjs/express'

import mongoose from 'mongoose'
import * as AdminJSMongoose from '@adminjs/mongoose'

import 'dotenv/config'

import Builder from "./models/builderModel.js";
import Society from "./models/societyModel.js";
import Wing from "./models/wingModel.js";
import Flat from "./models/flatModel.js";

import Member from "./models/memberModel.js";
import Owner from "./models/ownerModel.js";
import Tenant from "./models/tenantModel.js";
import OwnerFamily from './models/ownerFamilyModel.js';
import TenantFamily from './models/tenantFamilyModel.js';

import Penalty from "./models/penaltyModel.js";
import OwnerPenalty from "./models/ownerPenaltyModel.js";
import Complaint from './models/complaintModel.js';
import Contact from './models/contactModel.js';



async function startServer(){
  const app = express();
  let databaseDB;
  try {
    databaseDB = await mongoose.connect(process.env.MONGODB_URI, { 
     });


     AdminJS.registerAdapter({
      Resource: AdminJSMongoose.Resource,
      Database: AdminJSMongoose.Database,
    })
  
    const admin = new AdminJS({
      databases: [databaseDB],
      resources:[
        Builder,
        Society,
        Wing, 
        Flat, 
        Member, 
        Owner, 
        Tenant, 
        OwnerFamily, 
        TenantFamily,
        Penalty, 
        OwnerPenalty,
        Complaint,
        Contact
      ]
    })
  
    const adminRouter = AdminJSExpress.buildRouter(admin);
    app.use(admin.options.rootPath, adminRouter);


    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }

  app.get('/', (req, res) => {
    res.send('Hello, Express with ESM!');
  });
  

  

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`AdminJS started on http://localhost:${PORT}/admin`)
  });

}

startServer();

