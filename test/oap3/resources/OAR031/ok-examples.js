module.exports = {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Swagger Petstore"
  },
  paths: {
    "/pets": {
      post: {
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/pet"
              },
              examples: {
                pet: {
                  value: {
                    name: "Puppy",
                    type: "dog"
                  }
                }
              }
            }
          }
        },
        responses: {
          201: {
            description: "Pet list",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/pet"
                },
                examples: {
                  pet: {
                    value: {
                      name: "Puppy",
                      type: "dog"
                    }
                  }
                }
              }
            }
          },
          default: {
            $ref: "#/components/responses/server_error_response"
          }
        }
      },
      get: {
        responses: {
          206: {
            description: "Pet created",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/pets"
                },
                examples: {
                  pets: {
                    value: {
                      size: 2,
                      pets: [
                        {
                          name: "Fluffy",
                          type: "cat"
                        },
                        {
                          name: "Sparky",
                          type: "dog"
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          default: {
            $ref: "#/components/responses/server_error_response"
          }
        }
      }
    },
    "/pets/{id}": {
      get: {
        parameters: [
          {
            $ref: "#/components/parameters/id"
          }
        ],
        responses: {
          200: {
            description: "One pet",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/pet"
                },
                examples: {
                  pet: {
                    value: {
                      name: "Fluffy",
                      type: "cat"
                    }
                  }
                }
              }
            }
          },
          default: {
            $ref: "#/components/responses/server_error_response"
          }
        }
      }
    }
  },
  components: {
    parameters: {
      id: {
        in: "path",
        name: "id",
        schema: {
          type: "integer",
          format: "int64",
          maxLength: 22
        },
        description: "Identificador del tipo de centro a obtener, actualizar o eliminar.",
        required: true,
        examples: {
          id: {
            value: 10
          }
        }
      }
    },
    schemas: {
      pet: {
        type: "object",
        properties: {
          name: {
            type: "string"
          },
          type: {
            type: "string"
          }
        }
      },
      pets: {
        type: "object",
        properties: {
          size: {
            type: "integer"
          },
          pets: {
            type: "array",
            items: {
              $ref: "#/components/schemas/pet"
            }
          }
        }
      }
    },
    responses: {
      server_error_response: {
        description: "Default error response",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                error: {
                  type: "string",
                  example: "Server error"
                }
              }
            },
            examples: {
              error: {
                value: {
                  error: "Internal Server error"
                }
              }
            }
          }
        }
      }
    }
  }
};