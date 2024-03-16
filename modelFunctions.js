const { MongoClient } = require("mongodb");
var database = require('./config/database');
var express  = require('express');
let mongoose = require('mongoose');
var Users = require('./models/users');
var Experiences = require('./models/experiences');
var NavLinks = require('./models/navlinks');
var Projects = require('./models/projects');
var Services = require('./models/services');
var Technologies = require('./models/technologies');

mongoose.set('strictQuery', false);

// Replace the uri string with your connection string.
const uri = database.url;

async function initialize(url)
{
  // Database connection
  await mongoose.connect(url)
  .then(() => {
    console.log("Connected to database");
  }).catch(err=> console.log(err));
}

async function getAllExperiences()
{
  try{
    let result = await Experiences.find();
    return result;
  }
  catch(err){
    return "No experiences found";
  }
}

async function getAllNavLinks()
{
  try{
    let result = await NavLinks.find();
    return result;
  }
  catch(err){
    return "No nav links found";
  }
}

async function getAllProjects()
{
  try{
    let result = await Projects.find();
    return result;
  }
  catch(err){
    return "No projects found";
  }
}

async function getAllServices()
{
  try{
    let result = await Services.find();
    return result;
  }
  catch(err){
    return "No services found";
  }
}

async function getAllTechnologies()
{
  try{
    let result = await Technologies.find({});
    return result;
  }
  catch(err){
    console.log(err);
    return "No technologies found";
  }
}

async function getUserById(id)
{
  try {
    let result = await Users.findById(id);
    return result;
  }
  catch(err){
    return "No such user found";
  }
}

module.exports = {initialize,getAllExperiences,getAllNavLinks,getAllProjects,getAllServices,getAllTechnologies,getUserById};