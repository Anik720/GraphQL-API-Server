# GraphQL API Server

This is a GraphQL API server built with Node.js and Apollo Server. It serves as an endpoint to retrieve and manipulate data related to actions, triggers, responses, resource templates, and node objects. The server supports authentication via Bearer tokens and uses JSON files as data sources.

# TOKEN
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyX2lkIiwiaWF0IjoxNzI4ODMxNDkzLCJleHAiOjE3NjAzODkwOTN9.TDUbB2NWmUhIg6UiesZy31UUQypqNl_muzUU4Ti1Rng

## Features

- Retrieve actions, triggers, responses, resource templates, and node objects.
- Custom scalar type for handling large integers.
- Authentication via Bearer token.
- Built with Apollo Server and Node.js.

## Technologies Used

- Node.js
- Apollo Server
- JSON
- JWT (JSON Web Tokens)
- GraphQL
- graphql-scalars

## Installation
    * Install dependencies:
    - npm install
    * Start the server:
    - npm run dev

## Usage
You can use GraphQL Playground to interact with the GraphQL API. Open your browser and go to the server URL http://localhost:4000 . You'll see a UI where you can write and execute GraphQL queries.

## Queries (YOU CAN MODIFY THE QUERIES)
# Get Node Object
{
  node(nodeId: "someNodeId") {
    _id
    name
    description
    colour
  }
}
# Get Action
{
  action(actionId: "someActionId") {
    _id
    name
    description
    functionString
    resourceTemplate {
      _id
      name
      description
    }
  }
}

# Get Trigger
{
  trigger(triggerId: "someTriggerId") {
    _id
    name
    description
  }
}
# Get Response

{
  response(responseId: "someResponseId") {
    _id
    name
    description
  }
}

# Get Resource Template
{
  resourceTemplate(resourceTemplateId: "someTemplateId") {
    _id
    name
    description
  }
}

       

