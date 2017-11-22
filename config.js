module.exports = {
  Todo: {
    Schema: {
      Todo: `{
          title: {
            type: String,
            required: true
          },
          body: {
            type: String,
            required: true
          },
          owner: {
            type: Types.ObjectId,
            ref: 'User',
            required: true
          },
          complete: {
            type: Boolean,
            default: false
          },
          stage: {
            type: String,
            enum: {
              values: [
                'Not Started',
                'Started',
                'Blocked',
                'Under Review',
                'Testing',
                'Complete'
              ]
            },
            default: 'Not Started'
          }
        }`
    },
    Routes: {
      '/todo': [
        'POST /todo/t/new - *auth - create new todo',
        'POST /todo/t/:id - *auth *admin - update todo by id',
        'GET /todo/t/all - *auth - get all todos owned by authorized user',
        'GET /todo/t/:id - *auth - get todo by id',
        'DELETE /todo/t:id - *auth *admin - delete todo by id'
      ]
    }
  }
};
