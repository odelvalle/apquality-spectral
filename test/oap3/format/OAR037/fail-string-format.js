module.exports = {
  "openapi": "3.0.0",
  "info": {
    "version": "1.0.0",
    "title": "Swagger Petstore"
  },
  "components": {
    "parameters": {
      "paramOne": {
        "in": "header",
        "name": "paramOne",
        "schema": {
          "type": "string",
          "format": "dateTime",
          "maxLength": 100
        }
      }
    }
  },
  "paths": {
    "/invoices": {
      "parameters": [
        {
          "in": "header",
          "name": "paramThree",
          "schema": {
            "type": "boolean",
            "format": "int32"
          }
        }
      ],
      "get": {
        "parameters": [
          {
            "$ref": "#/components/parameters/paramOne"
          }
        ],
        "responses": {
          "200": {
            "description": "A invoice.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "without": {
                      "type": "string"
                    },
                    "date": {
                      "type": "string",
                      "format": "date"
                    },
                    "binary": {
                      "type": "string",
                      "format": "Binari"
                    },
                    "email": {
                      "type": "string",
                      "format": "email"
                    },
                    "uuid": {
                      "type": "string",
                      "format": "uuid"
                    },
                    "uri": {
                      "type": "string",
                      "format": "uri"
                    },
                    "hostname": {
                      "type": "string",
                      "format": "hostname"
                    },
                    "ipv4": {
                      "type": "string",
                      "format": "ipv4"
                    },
                    "ipv6": {
                      "type": "string",
                      "format": "ipv6"
                    },
                    "other": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "parameters": [
          {
            "in": "query",
            "name": "paramFour",
            "schema": {
              "type": "string",
              "pattern": "^\d{3}-\d{2}-\d{4}$",
              "maxLength": 10000000
            }
          },
          {
            "in": "query",
            "name": "paramFive",
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "without": {
                    "type": "string"
                  },
                  "date": {
                    "type": "string",
                    "format": "date"
                  },
                  "date-time": {
                    "type": "string",
                    "format": "date-time"
                  },
                  "password": {
                    "type": "string",
                    "format": "password"
                  },
                  "byte": {
                    "type": "string",
                    "format": "Bite"
                  },
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "A invoice.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "without": {
                      "type": "string"
                    },
                    "date": {
                      "type": "string",
                      "format": "date"
                    },
                    "date-time": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "password": {
                      "type": "string",
                      "format": "password"
                    },
                    "byte": {
                      "type": "string",
                      "format": "Bite"
                    },
                    "binary": {
                      "type": "string",
                      "format": "Binari"
                    },
                    "email": {
                      "type": "string",
                      "format": "email"
                    },
                    "uuid": {
                      "type": "string",
                      "format": "uuid"
                    },
                    "uri": {
                      "type": "string",
                      "format": "uri"
                    },
                    "hostname": {
                      "type": "string",
                      "format": "hostname"
                    },
                    "ipv4": {
                      "type": "string",
                      "format": "ipv4"
                    },
                    "ipv6": {
                      "type": "string",
                      "format": "ipv6"
                    },
                    "other": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "format": "other"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/invoices/{invoiceId}": {
      "get": {
        "parameters": [
          {
            "in": "path",
            "name": "invoiceId",
            "schema": {
              "type": "string",
              "maxLength": 100
            }
          },
          {
            "in": "query",
            "name": "paramFour",
            "schema": {
              "type": "string",
              "pattern": "^\d{3}-\d{2}-\d{4}$",
              "maxLength": 10000000
            }
          },
          {
            "in": "query",
            "name": "paramFive",
            "schema": {
              "type": "string",
              "format": "date"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "A invoice.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "without": {
                      "type": "string"
                    },
                    "date": {
                      "type": "string",
                      "format": "date"
                    },
                    "date-time": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "password": {
                      "type": "string",
                      "format": "password"
                    },
                    "byte": {
                      "type": "string",
                      "format": "Bite"
                    },
                    "binary": {
                      "type": "string",
                      "format": "Binari"
                    },
                    "email": {
                      "type": "string",
                      "format": "email"
                    },
                    "uuid": {
                      "type": "string",
                      "format": "uuid"
                    },
                    "uri": {
                      "type": "string",
                      "format": "uri"
                    },
                    "hostname": {
                      "type": "string",
                      "format": "hostname"
                    },
                    "ipv4": {
                      "type": "string",
                      "format": "ipv4"
                    },
                    "ipv6": {
                      "type": "string",
                      "format": "ipv6"
                    },
                    "other": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}