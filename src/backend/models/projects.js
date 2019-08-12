import createGuts from '../helpers/model-guts';

const name = 'Project';
const tableName = 'projects';

const selectableProps = [
  'id',
  'user_id',
  'name',
  'description',
  'completed_at',
  'updated_at',
  'created_at',
];

const Project = knex => {
  const guts = createGuts({
    knex,
    name,
    tableName,
    selectableProps,
  });

  return {
    ...guts,
  };
};

export default Project;
