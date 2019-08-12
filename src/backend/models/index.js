import fs from 'fs';
import path from 'path';
import knex from '../configs/config';
import UserModel from './users';
import ProjectModel from './projects';

/**/
const getModelFiles = dir =>
  fs
    .readdirSync(dir)
    .filter(file => {
      // console.log('file', file);
      // console.log("file.indexOf('.js')", file.indexOf('.js'));
      // console.log('file.length', file.length);
      return (
        file.indexOf('.') !== 0 &&
        file !== 'index.js' &&
        file.indexOf('.js') === file.length - 3
      );
    })
    .map(file => path.join(dir, file));

// Gather up all model files (i.e., any file present in the current directory
// that is not this file) and export them as properties of an object such that
// they may be imported using destructuring like
// `const { MyModel } = require('./models')` where there is a model named
// `MyModel` present in the exported object of gathered models.
const models_array = [UserModel, ProjectModel];
export const models = models_array.reduce((modelsObj, initModel) => {
  const model = initModel(knex);
  if (model) {
    modelsObj[model.name] = model;
  }
  return modelsObj;
}, {});

export const { User, Project } = models;
