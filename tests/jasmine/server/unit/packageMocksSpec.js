// goal: read JSON metadata for packages and create the mocks
// DEPENDS ON GLOBAL OBJECT: 'ComponentMocker'

var packageMetadata = {
  "reload": {},
  "json": {},
  "base64": {
    "Base64": {
      "type": "object",
      "members": {
        "encode": {
          "type": "function"
        },
        "newBinary": {
          "type": "function"
        },
        "decode": {
          "type": "function"
        }
      }
    }
  },
  "ejson": {
    "EJSON": {
      "type": "object",
      "members": {
        "addType": {
          "type": "function"
        },
        "toJSONValue": {
          "type": "function"
        },
        "fromJSONValue": {
          "type": "function"
        },
        "stringify": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "isBinary": {
          "type": "function"
        },
        "equals": {
          "type": "function"
        },
        "clone": {
          "type": "function"
        },
        "newBinary": {
          "type": "function"
        }
      }
    },
    "EJSONTest": {
      "type": "object"
    }
  },
  "logging": {
    "Log": {
      "type": "function",
      "members": {
        "outputFormat": {
          "type": "constant",
          "value": "json"
        },
        "debug": {
          "type": "function"
        },
        "info": {
          "type": "function"
        },
        "warn": {
          "type": "function"
        },
        "error": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "format": {
          "type": "function"
        },
        "objFromText": {
          "type": "function"
        }
      }
    }
  },
  "routepolicy": {
    "RoutePolicy": {
      "type": "object",
      "members": {
        "urlPrefixTypes": {
          "type": "object",
          "members": {
            "/sockjs/": {
              "type": "constant",
              "value": "network"
            }
          }
        },
        "urlPrefixMatches": {
          "type": "function"
        },
        "checkType": {
          "type": "function"
        },
        "checkUrlPrefix": {
          "type": "function"
        },
        "checkForConflictWithStatic": {
          "type": "function"
        },
        "declare": {
          "type": "function"
        },
        "isValidUrl": {
          "type": "function"
        },
        "classify": {
          "type": "function"
        },
        "urlPrefixesFor": {
          "type": "function"
        }
      }
    },
    "RoutePolicyTest": {
      "type": "object",
      "members": {
        "Constructor": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "urlPrefixMatches": {
                  "type": "function"
                },
                "checkType": {
                  "type": "function"
                },
                "checkUrlPrefix": {
                  "type": "function"
                },
                "checkForConflictWithStatic": {
                  "type": "function"
                },
                "declare": {
                  "type": "function"
                },
                "isValidUrl": {
                  "type": "function"
                },
                "classify": {
                  "type": "function"
                },
                "urlPrefixesFor": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "tracker": {
    "Tracker": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    },
    "Deps": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    }
  },
  "deps": {
    "Tracker": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    },
    "Deps": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    }
  },
  "htmljs": {
    "HTML": {
      "type": "object",
      "members": {
        "Visitor": {
          "type": "function",
          "members": {
            "def": {
              "type": "function",
              "refID": 2
            },
            "extend": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "visit": {
                  "type": "function",
                  "refID": 7
                },
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "visitFunction": {
                  "type": "function",
                  "refID": 25
                }
              }
            }
          }
        },
        "TransformingVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function",
                  "refID": 29
                },
                "visitPrimitive": {
                  "ref": 29
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "ref": 29
                },
                "visitCharRef": {
                  "ref": 29
                },
                "visitRaw": {
                  "ref": 29
                },
                "visitObject": {
                  "ref": 29
                },
                "visitFunction": {
                  "ref": 29
                },
                "visitTag": {
                  "type": "function"
                },
                "visitChildren": {
                  "type": "function"
                },
                "visitAttributes": {
                  "type": "function"
                },
                "visitAttribute": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                }
              }
            }
          }
        },
        "ToTextVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "toHTML": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                },
                "visitFunction": {
                  "ref": 25
                }
              }
            }
          }
        },
        "ToHTMLVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "toText": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                },
                "visitFunction": {
                  "ref": 25
                }
              }
            }
          }
        },
        "Tag": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 82
            },
            "prototype": {
              "type": "object",
              "members": {
                "tagName": {
                  "type": "constant",
                  "value": ""
                },
                "attrs": {
                  "type": "null",
                  "value": null
                },
                "children": {
                  "type": "array",
                  "refID": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "Attrs": {
          "type": "function"
        },
        "getTag": {
          "type": "function"
        },
        "ensureTag": {
          "type": "function"
        },
        "isTagEnsured": {
          "type": "function"
        },
        "getSymbolName": {
          "type": "function"
        },
        "knownElementNames": {
          "type": "array"
        },
        "knownSVGElementNames": {
          "type": "array"
        },
        "voidElementNames": {
          "type": "array"
        },
        "isKnownElement": {
          "type": "function"
        },
        "isKnownSVGElement": {
          "type": "function"
        },
        "isVoidElement": {
          "type": "function"
        },
        "A": {
          "type": "function",
          "refID": 104,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 104
                },
                "tagName": {
                  "type": "constant",
                  "value": "a"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ABBR": {
          "type": "function",
          "refID": 106,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 106
                },
                "tagName": {
                  "type": "constant",
                  "value": "abbr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ACRONYM": {
          "type": "function",
          "refID": 108,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 108
                },
                "tagName": {
                  "type": "constant",
                  "value": "acronym"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ADDRESS": {
          "type": "function",
          "refID": 110,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 110
                },
                "tagName": {
                  "type": "constant",
                  "value": "address"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "APPLET": {
          "type": "function",
          "refID": 112,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 112
                },
                "tagName": {
                  "type": "constant",
                  "value": "applet"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "AREA": {
          "type": "function",
          "refID": 114,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 114
                },
                "tagName": {
                  "type": "constant",
                  "value": "area"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ARTICLE": {
          "type": "function",
          "refID": 116,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 116
                },
                "tagName": {
                  "type": "constant",
                  "value": "article"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ASIDE": {
          "type": "function",
          "refID": 118,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 118
                },
                "tagName": {
                  "type": "constant",
                  "value": "aside"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "AUDIO": {
          "type": "function",
          "refID": 120,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 120
                },
                "tagName": {
                  "type": "constant",
                  "value": "audio"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "B": {
          "type": "function",
          "refID": 122,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 122
                },
                "tagName": {
                  "type": "constant",
                  "value": "b"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BASE": {
          "type": "function",
          "refID": 124,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 124
                },
                "tagName": {
                  "type": "constant",
                  "value": "base"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BASEFONT": {
          "type": "function",
          "refID": 126,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 126
                },
                "tagName": {
                  "type": "constant",
                  "value": "basefont"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BDI": {
          "type": "function",
          "refID": 128,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 128
                },
                "tagName": {
                  "type": "constant",
                  "value": "bdi"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BDO": {
          "type": "function",
          "refID": 130,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 130
                },
                "tagName": {
                  "type": "constant",
                  "value": "bdo"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BIG": {
          "type": "function",
          "refID": 132,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 132
                },
                "tagName": {
                  "type": "constant",
                  "value": "big"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BLOCKQUOTE": {
          "type": "function",
          "refID": 134,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 134
                },
                "tagName": {
                  "type": "constant",
                  "value": "blockquote"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BODY": {
          "type": "function",
          "refID": 136,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 136
                },
                "tagName": {
                  "type": "constant",
                  "value": "body"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BR": {
          "type": "function",
          "refID": 138,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 138
                },
                "tagName": {
                  "type": "constant",
                  "value": "br"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BUTTON": {
          "type": "function",
          "refID": 140,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 140
                },
                "tagName": {
                  "type": "constant",
                  "value": "button"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CANVAS": {
          "type": "function",
          "refID": 142,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 142
                },
                "tagName": {
                  "type": "constant",
                  "value": "canvas"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CAPTION": {
          "type": "function",
          "refID": 144,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 144
                },
                "tagName": {
                  "type": "constant",
                  "value": "caption"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CENTER": {
          "type": "function",
          "refID": 146,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 146
                },
                "tagName": {
                  "type": "constant",
                  "value": "center"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CITE": {
          "type": "function",
          "refID": 148,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 148
                },
                "tagName": {
                  "type": "constant",
                  "value": "cite"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CODE": {
          "type": "function",
          "refID": 150,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 150
                },
                "tagName": {
                  "type": "constant",
                  "value": "code"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COL": {
          "type": "function",
          "refID": 152,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 152
                },
                "tagName": {
                  "type": "constant",
                  "value": "col"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COLGROUP": {
          "type": "function",
          "refID": 154,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 154
                },
                "tagName": {
                  "type": "constant",
                  "value": "colgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COMMAND": {
          "type": "function",
          "refID": 156,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 156
                },
                "tagName": {
                  "type": "constant",
                  "value": "command"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATA": {
          "type": "function",
          "refID": 158,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 158
                },
                "tagName": {
                  "type": "constant",
                  "value": "data"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATAGRID": {
          "type": "function",
          "refID": 160,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 160
                },
                "tagName": {
                  "type": "constant",
                  "value": "datagrid"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATALIST": {
          "type": "function",
          "refID": 162,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 162
                },
                "tagName": {
                  "type": "constant",
                  "value": "datalist"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DD": {
          "type": "function",
          "refID": 164,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 164
                },
                "tagName": {
                  "type": "constant",
                  "value": "dd"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DEL": {
          "type": "function",
          "refID": 166,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 166
                },
                "tagName": {
                  "type": "constant",
                  "value": "del"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DETAILS": {
          "type": "function",
          "refID": 168,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 168
                },
                "tagName": {
                  "type": "constant",
                  "value": "details"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DFN": {
          "type": "function",
          "refID": 170,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 170
                },
                "tagName": {
                  "type": "constant",
                  "value": "dfn"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DIR": {
          "type": "function",
          "refID": 172,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 172
                },
                "tagName": {
                  "type": "constant",
                  "value": "dir"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DIV": {
          "type": "function",
          "refID": 174,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 174
                },
                "tagName": {
                  "type": "constant",
                  "value": "div"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DL": {
          "type": "function",
          "refID": 176,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 176
                },
                "tagName": {
                  "type": "constant",
                  "value": "dl"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DT": {
          "type": "function",
          "refID": 178,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 178
                },
                "tagName": {
                  "type": "constant",
                  "value": "dt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EM": {
          "type": "function",
          "refID": 180,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 180
                },
                "tagName": {
                  "type": "constant",
                  "value": "em"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EMBED": {
          "type": "function",
          "refID": 182,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 182
                },
                "tagName": {
                  "type": "constant",
                  "value": "embed"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EVENTSOURCE": {
          "type": "function",
          "refID": 184,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 184
                },
                "tagName": {
                  "type": "constant",
                  "value": "eventsource"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIELDSET": {
          "type": "function",
          "refID": 186,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 186
                },
                "tagName": {
                  "type": "constant",
                  "value": "fieldset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIGCAPTION": {
          "type": "function",
          "refID": 188,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 188
                },
                "tagName": {
                  "type": "constant",
                  "value": "figcaption"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIGURE": {
          "type": "function",
          "refID": 190,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 190
                },
                "tagName": {
                  "type": "constant",
                  "value": "figure"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT": {
          "type": "function",
          "refID": 192,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 192
                },
                "tagName": {
                  "type": "constant",
                  "value": "font"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FOOTER": {
          "type": "function",
          "refID": 194,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 194
                },
                "tagName": {
                  "type": "constant",
                  "value": "footer"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FORM": {
          "type": "function",
          "refID": 196,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 196
                },
                "tagName": {
                  "type": "constant",
                  "value": "form"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FRAME": {
          "type": "function",
          "refID": 198,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 198
                },
                "tagName": {
                  "type": "constant",
                  "value": "frame"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FRAMESET": {
          "type": "function",
          "refID": 200,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 200
                },
                "tagName": {
                  "type": "constant",
                  "value": "frameset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H1": {
          "type": "function",
          "refID": 202,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 202
                },
                "tagName": {
                  "type": "constant",
                  "value": "h1"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H2": {
          "type": "function",
          "refID": 204,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 204
                },
                "tagName": {
                  "type": "constant",
                  "value": "h2"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H3": {
          "type": "function",
          "refID": 206,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 206
                },
                "tagName": {
                  "type": "constant",
                  "value": "h3"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H4": {
          "type": "function",
          "refID": 208,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 208
                },
                "tagName": {
                  "type": "constant",
                  "value": "h4"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H5": {
          "type": "function",
          "refID": 210,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 210
                },
                "tagName": {
                  "type": "constant",
                  "value": "h5"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H6": {
          "type": "function",
          "refID": 212,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 212
                },
                "tagName": {
                  "type": "constant",
                  "value": "h6"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HEAD": {
          "type": "function",
          "refID": 214,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 214
                },
                "tagName": {
                  "type": "constant",
                  "value": "head"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HEADER": {
          "type": "function",
          "refID": 216,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 216
                },
                "tagName": {
                  "type": "constant",
                  "value": "header"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HGROUP": {
          "type": "function",
          "refID": 218,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 218
                },
                "tagName": {
                  "type": "constant",
                  "value": "hgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HR": {
          "type": "function",
          "refID": 220,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 220
                },
                "tagName": {
                  "type": "constant",
                  "value": "hr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HTML": {
          "type": "function",
          "refID": 222,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 222
                },
                "tagName": {
                  "type": "constant",
                  "value": "html"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "I": {
          "type": "function",
          "refID": 224,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 224
                },
                "tagName": {
                  "type": "constant",
                  "value": "i"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IFRAME": {
          "type": "function",
          "refID": 226,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 226
                },
                "tagName": {
                  "type": "constant",
                  "value": "iframe"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IMG": {
          "type": "function",
          "refID": 228,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 228
                },
                "tagName": {
                  "type": "constant",
                  "value": "img"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "INPUT": {
          "type": "function",
          "refID": 230,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 230
                },
                "tagName": {
                  "type": "constant",
                  "value": "input"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "INS": {
          "type": "function",
          "refID": 232,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 232
                },
                "tagName": {
                  "type": "constant",
                  "value": "ins"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ISINDEX": {
          "type": "function",
          "refID": 234,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 234
                },
                "tagName": {
                  "type": "constant",
                  "value": "isindex"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "KBD": {
          "type": "function",
          "refID": 236,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 236
                },
                "tagName": {
                  "type": "constant",
                  "value": "kbd"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "KEYGEN": {
          "type": "function",
          "refID": 238,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 238
                },
                "tagName": {
                  "type": "constant",
                  "value": "keygen"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LABEL": {
          "type": "function",
          "refID": 240,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 240
                },
                "tagName": {
                  "type": "constant",
                  "value": "label"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LEGEND": {
          "type": "function",
          "refID": 242,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 242
                },
                "tagName": {
                  "type": "constant",
                  "value": "legend"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LI": {
          "type": "function",
          "refID": 244,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 244
                },
                "tagName": {
                  "type": "constant",
                  "value": "li"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINK": {
          "type": "function",
          "refID": 246,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 246
                },
                "tagName": {
                  "type": "constant",
                  "value": "link"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MAIN": {
          "type": "function",
          "refID": 248,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 248
                },
                "tagName": {
                  "type": "constant",
                  "value": "main"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MAP": {
          "type": "function",
          "refID": 250,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 250
                },
                "tagName": {
                  "type": "constant",
                  "value": "map"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MARK": {
          "type": "function",
          "refID": 252,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 252
                },
                "tagName": {
                  "type": "constant",
                  "value": "mark"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MENU": {
          "type": "function",
          "refID": 254,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 254
                },
                "tagName": {
                  "type": "constant",
                  "value": "menu"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "META": {
          "type": "function",
          "refID": 256,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 256
                },
                "tagName": {
                  "type": "constant",
                  "value": "meta"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "METER": {
          "type": "function",
          "refID": 258,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 258
                },
                "tagName": {
                  "type": "constant",
                  "value": "meter"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NAV": {
          "type": "function",
          "refID": 260,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 260
                },
                "tagName": {
                  "type": "constant",
                  "value": "nav"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NOFRAMES": {
          "type": "function",
          "refID": 262,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 262
                },
                "tagName": {
                  "type": "constant",
                  "value": "noframes"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NOSCRIPT": {
          "type": "function",
          "refID": 264,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 264
                },
                "tagName": {
                  "type": "constant",
                  "value": "noscript"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OBJECT": {
          "type": "function",
          "refID": 266,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 266
                },
                "tagName": {
                  "type": "constant",
                  "value": "object"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OL": {
          "type": "function",
          "refID": 268,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 268
                },
                "tagName": {
                  "type": "constant",
                  "value": "ol"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OPTGROUP": {
          "type": "function",
          "refID": 270,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 270
                },
                "tagName": {
                  "type": "constant",
                  "value": "optgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OPTION": {
          "type": "function",
          "refID": 272,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 272
                },
                "tagName": {
                  "type": "constant",
                  "value": "option"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OUTPUT": {
          "type": "function",
          "refID": 274,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 274
                },
                "tagName": {
                  "type": "constant",
                  "value": "output"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "P": {
          "type": "function",
          "refID": 276,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 276
                },
                "tagName": {
                  "type": "constant",
                  "value": "p"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PARAM": {
          "type": "function",
          "refID": 278,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 278
                },
                "tagName": {
                  "type": "constant",
                  "value": "param"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PRE": {
          "type": "function",
          "refID": 280,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 280
                },
                "tagName": {
                  "type": "constant",
                  "value": "pre"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PROGRESS": {
          "type": "function",
          "refID": 282,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 282
                },
                "tagName": {
                  "type": "constant",
                  "value": "progress"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "Q": {
          "type": "function",
          "refID": 284,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 284
                },
                "tagName": {
                  "type": "constant",
                  "value": "q"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RP": {
          "type": "function",
          "refID": 286,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 286
                },
                "tagName": {
                  "type": "constant",
                  "value": "rp"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RT": {
          "type": "function",
          "refID": 288,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 288
                },
                "tagName": {
                  "type": "constant",
                  "value": "rt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RUBY": {
          "type": "function",
          "refID": 290,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 290
                },
                "tagName": {
                  "type": "constant",
                  "value": "ruby"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "S": {
          "type": "function",
          "refID": 292,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 292
                },
                "tagName": {
                  "type": "constant",
                  "value": "s"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SAMP": {
          "type": "function",
          "refID": 294,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 294
                },
                "tagName": {
                  "type": "constant",
                  "value": "samp"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SCRIPT": {
          "type": "function",
          "refID": 296,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 296
                },
                "tagName": {
                  "type": "constant",
                  "value": "script"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SECTION": {
          "type": "function",
          "refID": 298,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 298
                },
                "tagName": {
                  "type": "constant",
                  "value": "section"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SELECT": {
          "type": "function",
          "refID": 300,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 300
                },
                "tagName": {
                  "type": "constant",
                  "value": "select"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SMALL": {
          "type": "function",
          "refID": 302,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 302
                },
                "tagName": {
                  "type": "constant",
                  "value": "small"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SOURCE": {
          "type": "function",
          "refID": 304,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 304
                },
                "tagName": {
                  "type": "constant",
                  "value": "source"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SPAN": {
          "type": "function",
          "refID": 306,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 306
                },
                "tagName": {
                  "type": "constant",
                  "value": "span"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STRIKE": {
          "type": "function",
          "refID": 308,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 308
                },
                "tagName": {
                  "type": "constant",
                  "value": "strike"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STRONG": {
          "type": "function",
          "refID": 310,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 310
                },
                "tagName": {
                  "type": "constant",
                  "value": "strong"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STYLE": {
          "type": "function",
          "refID": 312,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 312
                },
                "tagName": {
                  "type": "constant",
                  "value": "style"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUB": {
          "type": "function",
          "refID": 314,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 314
                },
                "tagName": {
                  "type": "constant",
                  "value": "sub"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUMMARY": {
          "type": "function",
          "refID": 316,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 316
                },
                "tagName": {
                  "type": "constant",
                  "value": "summary"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUP": {
          "type": "function",
          "refID": 318,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 318
                },
                "tagName": {
                  "type": "constant",
                  "value": "sup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TABLE": {
          "type": "function",
          "refID": 320,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 320
                },
                "tagName": {
                  "type": "constant",
                  "value": "table"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TBODY": {
          "type": "function",
          "refID": 322,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 322
                },
                "tagName": {
                  "type": "constant",
                  "value": "tbody"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TD": {
          "type": "function",
          "refID": 324,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 324
                },
                "tagName": {
                  "type": "constant",
                  "value": "td"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXTAREA": {
          "type": "function",
          "refID": 326,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 326
                },
                "tagName": {
                  "type": "constant",
                  "value": "textarea"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TFOOT": {
          "type": "function",
          "refID": 328,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 328
                },
                "tagName": {
                  "type": "constant",
                  "value": "tfoot"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TH": {
          "type": "function",
          "refID": 330,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 330
                },
                "tagName": {
                  "type": "constant",
                  "value": "th"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "THEAD": {
          "type": "function",
          "refID": 332,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 332
                },
                "tagName": {
                  "type": "constant",
                  "value": "thead"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TIME": {
          "type": "function",
          "refID": 334,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 334
                },
                "tagName": {
                  "type": "constant",
                  "value": "time"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TITLE": {
          "type": "function",
          "refID": 336,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 336
                },
                "tagName": {
                  "type": "constant",
                  "value": "title"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TR": {
          "type": "function",
          "refID": 338,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 338
                },
                "tagName": {
                  "type": "constant",
                  "value": "tr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TRACK": {
          "type": "function",
          "refID": 340,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 340
                },
                "tagName": {
                  "type": "constant",
                  "value": "track"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TT": {
          "type": "function",
          "refID": 342,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 342
                },
                "tagName": {
                  "type": "constant",
                  "value": "tt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "U": {
          "type": "function",
          "refID": 344,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 344
                },
                "tagName": {
                  "type": "constant",
                  "value": "u"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "UL": {
          "type": "function",
          "refID": 346,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 346
                },
                "tagName": {
                  "type": "constant",
                  "value": "ul"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VAR": {
          "type": "function",
          "refID": 348,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 348
                },
                "tagName": {
                  "type": "constant",
                  "value": "var"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VIDEO": {
          "type": "function",
          "refID": 350,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 350
                },
                "tagName": {
                  "type": "constant",
                  "value": "video"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "WBR": {
          "type": "function",
          "refID": 352,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 352
                },
                "tagName": {
                  "type": "constant",
                  "value": "wbr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPH": {
          "type": "function",
          "refID": 354,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 354
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPHDEF": {
          "type": "function",
          "refID": 356,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 356
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyphDef"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPHITEM": {
          "type": "function",
          "refID": 358,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 358
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyphItem"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATE": {
          "type": "function",
          "refID": 360,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 360
                },
                "tagName": {
                  "type": "constant",
                  "value": "animate"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATECOLOR": {
          "type": "function",
          "refID": 362,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 362
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateColor"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATEMOTION": {
          "type": "function",
          "refID": 364,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 364
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateMotion"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATETRANSFORM": {
          "type": "function",
          "refID": 366,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 366
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateTransform"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CIRCLE": {
          "type": "function",
          "refID": 368,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 368
                },
                "tagName": {
                  "type": "constant",
                  "value": "circle"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CLIPPATH": {
          "type": "function",
          "refID": 370,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 370
                },
                "tagName": {
                  "type": "constant",
                  "value": "clipPath"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COLOR_PROFILE": {
          "type": "function",
          "refID": 372,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 372
                },
                "tagName": {
                  "type": "constant",
                  "value": "color-profile"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CURSOR": {
          "type": "function",
          "refID": 374,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 374
                },
                "tagName": {
                  "type": "constant",
                  "value": "cursor"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DEFS": {
          "type": "function",
          "refID": 376,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 376
                },
                "tagName": {
                  "type": "constant",
                  "value": "defs"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DESC": {
          "type": "function",
          "refID": 378,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 378
                },
                "tagName": {
                  "type": "constant",
                  "value": "desc"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ELLIPSE": {
          "type": "function",
          "refID": 380,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 380
                },
                "tagName": {
                  "type": "constant",
                  "value": "ellipse"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEBLEND": {
          "type": "function",
          "refID": 382,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 382
                },
                "tagName": {
                  "type": "constant",
                  "value": "feBlend"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOLORMATRIX": {
          "type": "function",
          "refID": 384,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 384
                },
                "tagName": {
                  "type": "constant",
                  "value": "feColorMatrix"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOMPONENTTRANSFER": {
          "type": "function",
          "refID": 386,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 386
                },
                "tagName": {
                  "type": "constant",
                  "value": "feComponentTransfer"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOMPOSITE": {
          "type": "function",
          "refID": 388,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 388
                },
                "tagName": {
                  "type": "constant",
                  "value": "feComposite"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECONVOLVEMATRIX": {
          "type": "function",
          "refID": 390,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 390
                },
                "tagName": {
                  "type": "constant",
                  "value": "feConvolveMatrix"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDIFFUSELIGHTING": {
          "type": "function",
          "refID": 392,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 392
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDiffuseLighting"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDISPLACEMENTMAP": {
          "type": "function",
          "refID": 394,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 394
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDisplacementMap"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDISTANTLIGHT": {
          "type": "function",
          "refID": 396,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 396
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDistantLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFLOOD": {
          "type": "function",
          "refID": 398,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 398
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFlood"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCA": {
          "type": "function",
          "refID": 400,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 400
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncA"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCB": {
          "type": "function",
          "refID": 402,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 402
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncB"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCG": {
          "type": "function",
          "refID": 404,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 404
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncG"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCR": {
          "type": "function",
          "refID": 406,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 406
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncR"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEGAUSSIANBLUR": {
          "type": "function",
          "refID": 408,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 408
                },
                "tagName": {
                  "type": "constant",
                  "value": "feGaussianBlur"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEIMAGE": {
          "type": "function",
          "refID": 410,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 410
                },
                "tagName": {
                  "type": "constant",
                  "value": "feImage"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMERGE": {
          "type": "function",
          "refID": 412,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 412
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMerge"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMERGENODE": {
          "type": "function",
          "refID": 414,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 414
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMergeNode"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMORPHOLOGY": {
          "type": "function",
          "refID": 416,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 416
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMorphology"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEOFFSET": {
          "type": "function",
          "refID": 418,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 418
                },
                "tagName": {
                  "type": "constant",
                  "value": "feOffset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEPOINTLIGHT": {
          "type": "function",
          "refID": 420,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 420
                },
                "tagName": {
                  "type": "constant",
                  "value": "fePointLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FESPECULARLIGHTING": {
          "type": "function",
          "refID": 422,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 422
                },
                "tagName": {
                  "type": "constant",
                  "value": "feSpecularLighting"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FESPOTLIGHT": {
          "type": "function",
          "refID": 424,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 424
                },
                "tagName": {
                  "type": "constant",
                  "value": "feSpotLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FETILE": {
          "type": "function",
          "refID": 426,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 426
                },
                "tagName": {
                  "type": "constant",
                  "value": "feTile"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FETURBULENCE": {
          "type": "function",
          "refID": 428,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 428
                },
                "tagName": {
                  "type": "constant",
                  "value": "feTurbulence"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FILTER": {
          "type": "function",
          "refID": 430,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 430
                },
                "tagName": {
                  "type": "constant",
                  "value": "filter"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE": {
          "type": "function",
          "refID": 432,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 432
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_FORMAT": {
          "type": "function",
          "refID": 434,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 434
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-format"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_NAME": {
          "type": "function",
          "refID": 436,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 436
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-name"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_SRC": {
          "type": "function",
          "refID": 438,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 438
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-src"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_URI": {
          "type": "function",
          "refID": 440,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 440
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-uri"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FOREIGNOBJECT": {
          "type": "function",
          "refID": 442,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 442
                },
                "tagName": {
                  "type": "constant",
                  "value": "foreignObject"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "G": {
          "type": "function",
          "refID": 444,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 444
                },
                "tagName": {
                  "type": "constant",
                  "value": "g"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "GLYPH": {
          "type": "function",
          "refID": 446,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 446
                },
                "tagName": {
                  "type": "constant",
                  "value": "glyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "GLYPHREF": {
          "type": "function",
          "refID": 448,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 448
                },
                "tagName": {
                  "type": "constant",
                  "value": "glyphRef"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HKERN": {
          "type": "function",
          "refID": 450,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 450
                },
                "tagName": {
                  "type": "constant",
                  "value": "hkern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IMAGE": {
          "type": "function",
          "refID": 452,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 452
                },
                "tagName": {
                  "type": "constant",
                  "value": "image"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINE": {
          "type": "function",
          "refID": 454,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 454
                },
                "tagName": {
                  "type": "constant",
                  "value": "line"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINEARGRADIENT": {
          "type": "function",
          "refID": 456,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 456
                },
                "tagName": {
                  "type": "constant",
                  "value": "linearGradient"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MARKER": {
          "type": "function",
          "refID": 458,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 458
                },
                "tagName": {
                  "type": "constant",
                  "value": "marker"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MASK": {
          "type": "function",
          "refID": 460,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 460
                },
                "tagName": {
                  "type": "constant",
                  "value": "mask"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "METADATA": {
          "type": "function",
          "refID": 462,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 462
                },
                "tagName": {
                  "type": "constant",
                  "value": "metadata"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MISSING_GLYPH": {
          "type": "function",
          "refID": 464,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 464
                },
                "tagName": {
                  "type": "constant",
                  "value": "missing-glyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PATH": {
          "type": "function",
          "refID": 466,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 466
                },
                "tagName": {
                  "type": "constant",
                  "value": "path"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PATTERN": {
          "type": "function",
          "refID": 468,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 468
                },
                "tagName": {
                  "type": "constant",
                  "value": "pattern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "POLYGON": {
          "type": "function",
          "refID": 470,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 470
                },
                "tagName": {
                  "type": "constant",
                  "value": "polygon"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "POLYLINE": {
          "type": "function",
          "refID": 472,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 472
                },
                "tagName": {
                  "type": "constant",
                  "value": "polyline"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RADIALGRADIENT": {
          "type": "function",
          "refID": 474,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 474
                },
                "tagName": {
                  "type": "constant",
                  "value": "radialGradient"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RECT": {
          "type": "function",
          "refID": 476,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 476
                },
                "tagName": {
                  "type": "constant",
                  "value": "rect"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SET": {
          "type": "function",
          "refID": 478,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 478
                },
                "tagName": {
                  "type": "constant",
                  "value": "set"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STOP": {
          "type": "function",
          "refID": 480,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 480
                },
                "tagName": {
                  "type": "constant",
                  "value": "stop"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SVG": {
          "type": "function",
          "refID": 482,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 482
                },
                "tagName": {
                  "type": "constant",
                  "value": "svg"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SWITCH": {
          "type": "function",
          "refID": 484,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 484
                },
                "tagName": {
                  "type": "constant",
                  "value": "switch"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SYMBOL": {
          "type": "function",
          "refID": 486,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 486
                },
                "tagName": {
                  "type": "constant",
                  "value": "symbol"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXT": {
          "type": "function",
          "refID": 488,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 488
                },
                "tagName": {
                  "type": "constant",
                  "value": "text"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXTPATH": {
          "type": "function",
          "refID": 490,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 490
                },
                "tagName": {
                  "type": "constant",
                  "value": "textPath"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TREF": {
          "type": "function",
          "refID": 492,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 492
                },
                "tagName": {
                  "type": "constant",
                  "value": "tref"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TSPAN": {
          "type": "function",
          "refID": 494,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 494
                },
                "tagName": {
                  "type": "constant",
                  "value": "tspan"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "USE": {
          "type": "function",
          "refID": 496,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 496
                },
                "tagName": {
                  "type": "constant",
                  "value": "use"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VIEW": {
          "type": "function",
          "refID": 498,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 498
                },
                "tagName": {
                  "type": "constant",
                  "value": "view"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VKERN": {
          "type": "function",
          "refID": 500,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 500
                },
                "tagName": {
                  "type": "constant",
                  "value": "vkern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CharRef": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 503
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 503
                }
              }
            }
          }
        },
        "Comment": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 506
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 506
                }
              }
            }
          }
        },
        "Raw": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 509
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 509
                }
              }
            }
          }
        },
        "isArray": {
          "type": "function"
        },
        "isConstructedObject": {
          "type": "function"
        },
        "isNully": {
          "type": "function"
        },
        "isValidAttributeName": {
          "type": "function"
        },
        "flattenAttributes": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "TEXTMODE": {
          "type": "object",
          "members": {
            "STRING": {
              "type": "constant",
              "value": 1
            },
            "RCDATA": {
              "type": "constant",
              "value": 2
            },
            "ATTRIBUTE": {
              "type": "constant",
              "value": 3
            }
          }
        },
        "toText": {
          "type": "function"
        }
      }
    }
  },
  "html-tools": {
    "HTMLTools": {
      "type": "object",
      "members": {
        "Parse": {
          "type": "object",
          "members": {
            "getCharacterReference": {
              "type": "function"
            },
            "getComment": {
              "type": "function"
            },
            "getDoctype": {
              "type": "function"
            },
            "getHTMLToken": {
              "type": "function"
            },
            "getTagToken": {
              "type": "function"
            },
            "getContent": {
              "type": "function"
            },
            "getRCData": {
              "type": "function"
            }
          }
        },
        "asciiLowerCase": {
          "type": "function"
        },
        "properCaseTagName": {
          "type": "function"
        },
        "properCaseAttributeName": {
          "type": "function"
        },
        "Scanner": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "rest": {
                  "type": "function"
                },
                "isEOF": {
                  "type": "function"
                },
                "fatal": {
                  "type": "function"
                },
                "peek": {
                  "type": "function"
                }
              }
            }
          }
        },
        "TEMPLATE_TAG_POSITION": {
          "type": "object",
          "members": {
            "ELEMENT": {
              "type": "constant",
              "value": 1
            },
            "IN_START_TAG": {
              "type": "constant",
              "value": 2
            },
            "IN_ATTRIBUTE": {
              "type": "constant",
              "value": 3
            },
            "IN_RCDATA": {
              "type": "constant",
              "value": 4
            },
            "IN_RAWTEXT": {
              "type": "constant",
              "value": 5
            }
          }
        },
        "TemplateTag": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructorName": {
                  "type": "constant",
                  "value": "HTMLTools.TemplateTag"
                },
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "parseFragment": {
          "type": "function"
        },
        "codePointToString": {
          "type": "function"
        }
      }
    }
  },
  "blaze-tools": {
    "BlazeTools": {
      "type": "object",
      "members": {
        "parseNumber": {
          "type": "function"
        },
        "parseIdentifierName": {
          "type": "function"
        },
        "parseStringLiteral": {
          "type": "function"
        },
        "EmitCode": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toJSLiteral": {
          "type": "function"
        },
        "toObjectLiteralKey": {
          "type": "function"
        },
        "ToJSVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "type": "function"
            },
            "def": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "generateCall": {
                  "type": "function"
                },
                "generateAttrsDictionary": {
                  "type": "function"
                },
                "visit": {
                  "type": "function"
                },
                "visitFunction": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toJS": {
          "type": "function"
        }
      }
    }
  },
  "spacebars-compiler": {
    "SpacebarsCompiler": {
      "type": "object",
      "members": {
        "TemplateTag": {
          "type": "function",
          "members": {
            "parse": {
              "type": "function"
            },
            "peek": {
              "type": "function"
            },
            "parseCompleteTag": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructorName": {
                  "type": "constant",
                  "value": "SpacebarsCompiler.TemplateTag"
                },
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "optimize": {
          "type": "function"
        },
        "CodeGen": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "codeGenTemplateTag": {
                  "type": "function"
                },
                "codeGenPath": {
                  "type": "function"
                },
                "codeGenArgValue": {
                  "type": "function"
                },
                "codeGenMustache": {
                  "type": "function"
                },
                "codeGenMustacheArgs": {
                  "type": "function"
                },
                "codeGenBlock": {
                  "type": "function"
                },
                "codeGenInclusionDataFunc": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isReservedName": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "compile": {
          "type": "function"
        },
        "codeGen": {
          "type": "function"
        }
      }
    }
  },
  "jquery": {},
  "id-map": {
    "IdMap": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "ordered-dict": {
    "OrderedDict": {
      "type": "function",
      "members": {
        "BREAK": {
          "type": "object"
        },
        "prototype": {
          "type": "object",
          "members": {
            "empty": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "putBefore": {
              "type": "function"
            },
            "append": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "first": {
              "type": "function"
            },
            "firstValue": {
              "type": "function"
            },
            "last": {
              "type": "function"
            },
            "lastValue": {
              "type": "function"
            },
            "prev": {
              "type": "function"
            },
            "next": {
              "type": "function"
            },
            "moveBefore": {
              "type": "function"
            },
            "indexOf": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "random": {
    "Random": {
      "type": "object",
      "members": {
        "createWithSeeds": {
          "type": "function"
        },
        "fraction": {
          "type": "function"
        },
        "hexString": {
          "type": "function"
        },
        "id": {
          "type": "function"
        },
        "secret": {
          "type": "function"
        },
        "choice": {
          "type": "function"
        }
      }
    }
  },
  "geojson-utils": {
    "GeoJSON": {
      "type": "object",
      "members": {
        "lineStringsIntersect": {
          "type": "function"
        },
        "pointInBoundingBox": {
          "type": "function"
        },
        "pointInPolygon": {
          "type": "function"
        },
        "numberToRadius": {
          "type": "function"
        },
        "numberToDegree": {
          "type": "function"
        },
        "drawCircle": {
          "type": "function"
        },
        "rectangleCentroid": {
          "type": "function"
        },
        "pointDistance": {
          "type": "function"
        },
        "geometryWithinRadius": {
          "type": "function"
        },
        "area": {
          "type": "function"
        },
        "centroid": {
          "type": "function"
        },
        "simplify": {
          "type": "function"
        },
        "destinationPoint": {
          "type": "function"
        }
      }
    }
  },
  "minimongo": {
    "LocalCollection": {
      "type": "function",
      "members": {
        "Cursor": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "rewind": {
                  "type": "function"
                },
                "forEach": {
                  "type": "function"
                },
                "getTransform": {
                  "type": "function"
                },
                "map": {
                  "type": "function"
                },
                "fetch": {
                  "type": "function"
                },
                "count": {
                  "type": "function"
                },
                "observe": {
                  "type": "function"
                },
                "observeChanges": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ObserveHandle": {
          "type": "function"
        },
        "wrapTransform": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            },
            "insert": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "saveOriginals": {
              "type": "function"
            },
            "retrieveOriginals": {
              "type": "function"
            },
            "pauseObservers": {
              "type": "function"
            },
            "resumeObservers": {
              "type": "function"
            }
          }
        }
      }
    },
    "Minimongo": {
      "type": "object",
      "members": {
        "Matcher": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "documentMatches": {
                  "type": "function"
                },
                "hasGeoQuery": {
                  "type": "function"
                },
                "hasWhere": {
                  "type": "function"
                },
                "isSimple": {
                  "type": "function"
                },
                "combineIntoProjection": {
                  "type": "function"
                },
                "affectedByModifier": {
                  "type": "function"
                },
                "canBecomeTrueByModifier": {
                  "type": "function"
                },
                "matchingDocument": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Sorter": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getComparator": {
                  "type": "function"
                },
                "affectedByModifier": {
                  "type": "function"
                },
                "combineIntoProjection": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "MinimongoTest": {
      "type": "object",
      "members": {
        "makeLookupFunction": {
          "type": "function"
        }
      }
    }
  },
  "observe-sequence": {
    "ObserveSequence": {
      "type": "object",
      "members": {
        "observe": {
          "type": "function"
        },
        "fetch": {
          "type": "function"
        }
      }
    }
  },
  "reactive-var": {
    "ReactiveVar": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "toString": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "blaze": {
    "Blaze": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 31
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 47
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 31
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 47
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "UI": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 31
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 47
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 31
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 47
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Handlebars": {
      "type": "object",
      "members": {
        "registerHelper": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "templating": {},
  "spacebars": {
    "Spacebars": {
      "type": "object",
      "members": {
        "include": {
          "type": "function"
        },
        "mustacheImpl": {
          "type": "function"
        },
        "mustache": {
          "type": "function"
        },
        "attrMustache": {
          "type": "function"
        },
        "dataMustache": {
          "type": "function"
        },
        "makeRaw": {
          "type": "function"
        },
        "call": {
          "type": "function"
        },
        "kw": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        },
        "dot": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "TemplateWith": {
          "type": "function"
        }
      }
    }
  },
  "ui": {
    "Blaze": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 31
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 47
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 31
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 47
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "UI": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 31
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 47
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 31
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 47
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Handlebars": {
      "type": "object",
      "members": {
        "registerHelper": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "boilerplate-generator": {
    "Boilerplate": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "toHTML": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "webapp-hashing": {
    "WebAppHashing": {
      "type": "object",
      "members": {
        "calculateClientHash": {
          "type": "function"
        }
      }
    }
  },
  "webapp": {
    "WebApp": {
      "type": "object",
      "members": {
        "defaultArch": {
          "type": "constant",
          "value": "web.browser"
        },
        "clientPrograms": {
          "type": "object",
          "members": {
            "web.browser": {
              "type": "object",
              "members": {
                "manifest": {
                  "type": "array"
                },
                "version": {
                  "type": "constant",
                  "value": "3e5c43398c86dcf05b36366bba038cdb5165164c"
                },
                "PUBLIC_SETTINGS": {
                  "type": "undefined"
                }
              }
            }
          }
        },
        "categorizeRequest": {
          "type": "function"
        },
        "addHtmlAttributeHook": {
          "type": "function"
        },
        "connectHandlers": {
          "type": "function",
          "members": {
            "use": {
              "type": "function",
              "refID": 9
            },
            "handle": {
              "type": "function",
              "refID": 11
            },
            "listen": {
              "type": "function",
              "refID": 13
            },
            "setMaxListeners": {
              "type": "function",
              "refID": 15
            },
            "emit": {
              "type": "function",
              "refID": 17
            },
            "addListener": {
              "type": "function",
              "refID": 19
            },
            "on": {
              "ref": 19
            },
            "once": {
              "type": "function",
              "refID": 21
            },
            "removeListener": {
              "type": "function",
              "refID": 23
            },
            "removeAllListeners": {
              "type": "function",
              "refID": 25
            },
            "listeners": {
              "type": "function",
              "refID": 27
            },
            "route": {
              "type": "constant",
              "value": "/"
            },
            "stack": {
              "type": "array"
            }
          }
        },
        "rawConnectHandlers": {
          "type": "function",
          "members": {
            "use": {
              "ref": 9
            },
            "handle": {
              "ref": 11
            },
            "listen": {
              "ref": 13
            },
            "setMaxListeners": {
              "ref": 15
            },
            "emit": {
              "ref": 17
            },
            "addListener": {
              "ref": 19
            },
            "on": {
              "ref": 19
            },
            "once": {
              "ref": 21
            },
            "removeListener": {
              "ref": 23
            },
            "removeAllListeners": {
              "ref": 25
            },
            "listeners": {
              "ref": 27
            },
            "route": {
              "type": "constant",
              "value": "/"
            },
            "stack": {
              "type": "array"
            }
          }
        },
        "httpServer": {
          "type": "object",
          "members": {
            "domain": {
              "type": "null",
              "value": null
            },
            "connections": {
              "type": "constant",
              "value": 2
            },
            "timeout": {
              "type": "constant",
              "value": 5000
            },
            "setTimeout": {
              "type": "function"
            },
            "listen": {
              "type": "function"
            },
            "address": {
              "type": "function"
            },
            "getConnections": {
              "type": "function"
            },
            "close": {
              "type": "function"
            },
            "listenFD": {
              "type": "function"
            },
            "ref": {
              "type": "function"
            },
            "unref": {
              "type": "function"
            },
            "setMaxListeners": {
              "ref": 15
            },
            "emit": {
              "ref": 17
            },
            "addListener": {
              "ref": 19
            },
            "on": {
              "ref": 19
            },
            "once": {
              "ref": 21
            },
            "removeListener": {
              "ref": 23
            },
            "removeAllListeners": {
              "ref": 25
            },
            "listeners": {
              "ref": 27
            }
          }
        },
        "suppressConnectErrors": {
          "type": "function"
        },
        "onListening": {
          "type": "function"
        },
        "clientHash": {
          "type": "function"
        },
        "calculateClientHashRefreshable": {
          "type": "function"
        },
        "calculateClientHashNonRefreshable": {
          "type": "function"
        },
        "calculateClientHashCordova": {
          "type": "function"
        }
      }
    },
    "main": {
      "type": "function"
    },
    "WebAppInternals": {
      "type": "object",
      "members": {
        "identifyBrowser": {
          "type": "function"
        },
        "generateBoilerplateInstance": {
          "type": "function"
        },
        "staticFilesMiddleware": {
          "type": "function"
        },
        "bindToProxy": {
          "type": "function"
        },
        "addRoute": {
          "type": "function"
        },
        "reloadClientPrograms": {
          "type": "function"
        },
        "generateBoilerplate": {
          "type": "function"
        },
        "staticFiles": {
          "type": "object",
          "members": {
            "/packages/underscore.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/underscore.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/0a80a8623e1b40b5df5a05582f288ddd586eaa18.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/0a80a8623e1b40b5df5a05582f288ddd586eaa18.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/underscore.js.map"
                }
              }
            },
            "/packages/meteor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/meteor.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/81e2f06cff198adaa81b3bc09fc4f3728b7370ec.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/81e2f06cff198adaa81b3bc09fc4f3728b7370ec.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/meteor.js.map"
                }
              }
            },
            "/packages/json.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/json.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e22856eae714c681199eabc5c0710b904b125554.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/e22856eae714c681199eabc5c0710b904b125554.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/json.js.map"
                }
              }
            },
            "/packages/base64.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/base64.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/1a63019243b73298e2964e6d4680f25bca657726.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/1a63019243b73298e2964e6d4680f25bca657726.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/base64.js.map"
                }
              }
            },
            "/packages/ejson.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/ejson.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/71047b64b5196348bdbe5fd5eea9ac97a5a9eb14.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/71047b64b5196348bdbe5fd5eea9ac97a5a9eb14.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/ejson.js.map"
                }
              }
            },
            "/packages/logging.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/logging.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/07e201b648f16be8435a4f666156995eeda0c750.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/07e201b648f16be8435a4f666156995eeda0c750.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/logging.js.map"
                }
              }
            },
            "/packages/reload.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/reload.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/da8974b7231dd8c0caccb5f322dcf97329d486d1.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/da8974b7231dd8c0caccb5f322dcf97329d486d1.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/reload.js.map"
                }
              }
            },
            "/packages/tracker.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/tracker.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/517c8fe8ed6408951a30941e64a5383a7174bcfa.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/517c8fe8ed6408951a30941e64a5383a7174bcfa.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/tracker.js.map"
                }
              }
            },
            "/packages/random.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/random.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/fe7b46080c91ce482acf6fc326afbc5b176f0502.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/fe7b46080c91ce482acf6fc326afbc5b176f0502.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/random.js.map"
                }
              }
            },
            "/packages/retry.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/retry.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/1f1dd2c35d300110fdaba51ce4473583bc3bf031.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/1f1dd2c35d300110fdaba51ce4473583bc3bf031.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/retry.js.map"
                }
              }
            },
            "/packages/check.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/check.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/ac81167b8513b85b926c167bba423981b0c4cf9c.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/ac81167b8513b85b926c167bba423981b0c4cf9c.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/check.js.map"
                }
              }
            },
            "/packages/id-map.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/id-map.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9ea6eaae8d74693ce2505a858d9a5e60cf191298.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9ea6eaae8d74693ce2505a858d9a5e60cf191298.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/id-map.js.map"
                }
              }
            },
            "/packages/ordered-dict.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/ordered-dict.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/ordered-dict.js.map"
                }
              }
            },
            "/packages/geojson-utils.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/geojson-utils.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/81b79d5cf96d00b4b7a28987debcffb665c17526.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/81b79d5cf96d00b4b7a28987debcffb665c17526.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/geojson-utils.js.map"
                }
              }
            },
            "/packages/minimongo.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/minimongo.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e8806aa7782b729b2517ebc0cd10b321667f1427.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/e8806aa7782b729b2517ebc0cd10b321667f1427.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/minimongo.js.map"
                }
              }
            },
            "/packages/ddp.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/ddp.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/41b62dcceb3ce0de6ca79c6aed088cccde6a44d8.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/41b62dcceb3ce0de6ca79c6aed088cccde6a44d8.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/ddp.js.map"
                }
              }
            },
            "/packages/follower-livedata.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/follower-livedata.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/74156c6baa89da861fc4ddb58ef158eac71e58e0.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/74156c6baa89da861fc4ddb58ef158eac71e58e0.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/follower-livedata.js.map"
                }
              }
            },
            "/packages/application-configuration.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/application-configuration.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/application-configuration.js.map"
                }
              }
            },
            "/packages/mongo.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/mongo.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/052f30e968644b2b39a96605ffee73a7684ff37b.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/052f30e968644b2b39a96605ffee73a7684ff37b.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/mongo.js.map"
                }
              }
            },
            "/packages/autoupdate.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/autoupdate.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9a5ea03bf057815385bf569c7acc2c285c005491.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9a5ea03bf057815385bf569c7acc2c285c005491.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/autoupdate.js.map"
                }
              }
            },
            "/packages/meteor-platform.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/meteor-platform.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/499a2f8522e25820b1153c69a92751ccaae507b3.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/499a2f8522e25820b1153c69a92751ccaae507b3.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/meteor-platform.js.map"
                }
              }
            },
            "/packages/deps.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/deps.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/504589e1e9585dec8f9f6094e5a87b22de3783a1.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/504589e1e9585dec8f9f6094e5a87b22de3783a1.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/deps.js.map"
                }
              }
            },
            "/packages/jquery.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/jquery.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/dd8bac56f8fd3666d433d2285ae01e52597cc51a.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/dd8bac56f8fd3666d433d2285ae01e52597cc51a.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/jquery.js.map"
                }
              }
            },
            "/packages/htmljs.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/htmljs.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/567eb96d5d22631c03d6aca6afa4c42f0d1295f2.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/567eb96d5d22631c03d6aca6afa4c42f0d1295f2.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/htmljs.js.map"
                }
              }
            },
            "/packages/observe-sequence.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/observe-sequence.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/2fd807ea171ead273b9e6458607cb226012d9240.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/2fd807ea171ead273b9e6458607cb226012d9240.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/observe-sequence.js.map"
                }
              }
            },
            "/packages/reactive-var.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/reactive-var.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/20335b7b37165980ddd9f23943b2e5b00aae1cc2.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/20335b7b37165980ddd9f23943b2e5b00aae1cc2.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/reactive-var.js.map"
                }
              }
            },
            "/packages/blaze.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/blaze.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/efa68f65e67544b5a05509804bf97e2c91ce75eb.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/efa68f65e67544b5a05509804bf97e2c91ce75eb.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/blaze.js.map"
                }
              }
            },
            "/packages/ui.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/ui.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/5a663333fd30f8fd913f110e0ef779e84f67c4b8.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/5a663333fd30f8fd913f110e0ef779e84f67c4b8.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/ui.js.map"
                }
              }
            },
            "/packages/templating.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/templating.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/599ba307216da826d8b335332ebcc9a497a369a0.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/599ba307216da826d8b335332ebcc9a497a369a0.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/templating.js.map"
                }
              }
            },
            "/packages/iron_core.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/iron_core.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/d966a1f70c94792fd94c8a155bdbef9bec5e0047.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/d966a1f70c94792fd94c8a155bdbef9bec5e0047.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/iron_core.js.map"
                }
              }
            },
            "/packages/iron_dynamic-template.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/iron_dynamic-template.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/d425554c9847e4a80567f8ca55719cd6ae3f2722.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/d425554c9847e4a80567f8ca55719cd6ae3f2722.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/iron_dynamic-template.js.map"
                }
              }
            },
            "/packages/iron_layout.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/iron_layout.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/4e65c46acdaf0ce6a8b1a479d7b9d0b5c0902062.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/4e65c46acdaf0ce6a8b1a479d7b9d0b5c0902062.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/iron_layout.js.map"
                }
              }
            },
            "/packages/iron_url.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/iron_url.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/6979e41649a22dcf609df30fc533e36037c7ae58.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/6979e41649a22dcf609df30fc533e36037c7ae58.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/iron_url.js.map"
                }
              }
            },
            "/packages/iron_middleware-stack.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/iron_middleware-stack.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/0e0f6983a838a6516556b08e62894f89720e2c44.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/0e0f6983a838a6516556b08e62894f89720e2c44.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/iron_middleware-stack.js.map"
                }
              }
            },
            "/packages/iron_location.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/iron_location.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/ca4f0f6672edbfb6cafab6e5c024208d9364eac9.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/ca4f0f6672edbfb6cafab6e5c024208d9364eac9.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/iron_location.js.map"
                }
              }
            },
            "/packages/reactive-dict.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/reactive-dict.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/6b25309b1f0dcf775b44984324878d6f8ad1abc2.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/6b25309b1f0dcf775b44984324878d6f8ad1abc2.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/reactive-dict.js.map"
                }
              }
            },
            "/packages/iron_controller.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/iron_controller.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/b02790701804563eafedb2e68c602154983ade06.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/b02790701804563eafedb2e68c602154983ade06.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/iron_controller.js.map"
                }
              }
            },
            "/packages/iron_router.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/iron_router.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/a427868585af16bb88b7c9996b2449aebb8dbf51.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/a427868585af16bb88b7c9996b2449aebb8dbf51.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/iron_router.js.map"
                }
              }
            },
            "/packages/mizzao_bootstrap-3.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/mizzao_bootstrap-3.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/8d8f544e1328b7a62d76dbbbbf7d1fd5f559c919.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/8d8f544e1328b7a62d76dbbbbf7d1fd5f559c919.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/mizzao_bootstrap-3.js.map"
                }
              }
            },
            "/packages/session.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/session.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e436deefadc999c21b6fd16e8e1ecce55c3c3a55.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/e436deefadc999c21b6fd16e8e1ecce55c3c3a55.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/session.js.map"
                }
              }
            },
            "/packages/handlebars.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/handlebars.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/038145b6256cd6a69c11650ed6bf12b093920095.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/038145b6256cd6a69c11650ed6bf12b093920095.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/handlebars.js.map"
                }
              }
            },
            "/packages/stylus.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/stylus.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/48b7e3e0953c004a73211d7489462e73ed11be2c.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/48b7e3e0953c004a73211d7489462e73ed11be2c.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/stylus.js.map"
                }
              }
            },
            "/packages/localstorage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/localstorage.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/localstorage.js.map"
                }
              }
            },
            "/packages/accounts-base.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/accounts-base.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/88bb0577cebfbd40b522bb337f8ff8af92244c2f.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/88bb0577cebfbd40b522bb337f8ff8af92244c2f.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/accounts-base.js.map"
                }
              }
            },
            "/packages/anti_i18n.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/anti_i18n.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/b753e9e958be5df82d8bdde8dc342a2870ccf372.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/b753e9e958be5df82d8bdde8dc342a2870ccf372.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/anti_i18n.js.map"
                }
              }
            },
            "/packages/sha.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/sha.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/65ef52f7221944768bfc2049d6b7e163c8ae2615.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/65ef52f7221944768bfc2049d6b7e163c8ae2615.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/sha.js.map"
                }
              }
            },
            "/packages/srp.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/srp.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e2e28156e8c912d504a3586351c8a1119f664cfd.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/e2e28156e8c912d504a3586351c8a1119f664cfd.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/srp.js.map"
                }
              }
            },
            "/packages/accounts-password.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/accounts-password.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/3845cc71ad2dc1378b7d8cc4164a78359506dd40.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/3845cc71ad2dc1378b7d8cc4164a78359506dd40.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/accounts-password.js.map"
                }
              }
            },
            "/packages/ian_accounts-ui-bootstrap-3.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/ian_accounts-ui-bootstrap-3.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/360ea128aa966eb3140c86b815f95c3965f8f7b5.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/360ea128aa966eb3140c86b815f95c3965f8f7b5.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/ian_accounts-ui-bootstrap-3.js.map"
                }
              }
            },
            "/packages/sacha_spin.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/sacha_spin.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/6ab6fb94c8dfd98b9fdc1a9831a8051edeec5c04.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/6ab6fb94c8dfd98b9fdc1a9831a8051edeec5c04.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/sacha_spin.js.map"
                }
              }
            },
            "/packages/mizzao_bootboxjs.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/mizzao_bootboxjs.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/086e225df2c7126fed995ad11775fb307c2ce1da.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/086e225df2c7126fed995ad11775fb307c2ce1da.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/mizzao_bootboxjs.js.map"
                }
              }
            },
            "/packages/meteorhacks_kadira-binary-deps.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/meteorhacks_kadira-binary-deps.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/a244ee2e16791a2e0fed6ce317583265afab7c0c.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/a244ee2e16791a2e0fed6ce317583265afab7c0c.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/meteorhacks_kadira-binary-deps.js.map"
                }
              }
            },
            "/packages/meteorhacks_meteorx.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/meteorhacks_meteorx.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/afd5ff95b1c1492f60049925f1f827e2b5817bbb.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/afd5ff95b1c1492f60049925f1f827e2b5817bbb.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/meteorhacks_meteorx.js.map"
                }
              }
            },
            "/packages/meteorhacks_kadira.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/meteorhacks_kadira.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/04eebb1f871e9e705f02984eb3c31670059cb2ec.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/04eebb1f871e9e705f02984eb3c31670059cb2ec.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/meteorhacks_kadira.js.map"
                }
              }
            },
            "/packages/mrt_cookies.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/mrt_cookies.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/2a1fea5e5d64d864a94dced515ccdc633e1c0af4.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/2a1fea5e5d64d864a94dced515ccdc633e1c0af4.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/mrt_cookies.js.map"
                }
              }
            },
            "/packages/chuangbo_cookie.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/chuangbo_cookie.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/06436babb94ec01963deef78f0a86cf163cf06f4.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/06436babb94ec01963deef78f0a86cf163cf06f4.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/chuangbo_cookie.js.map"
                }
              }
            },
            "/packages/url.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/url.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/2312d739008b2ffa52f13c77c5d6fc59c9e17d56.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/2312d739008b2ffa52f13c77c5d6fc59c9e17d56.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/url.js.map"
                }
              }
            },
            "/packages/http.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/http.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9c5d152169ba9a5a57b6b8ec28e64bbd0d308077.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9c5d152169ba9a5a57b6b8ec28e64bbd0d308077.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/http.js.map"
                }
              }
            },
            "/packages/texapi.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/texapi.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/cf3a45ca2fda2e1021ed42ac1091a255a6c86490.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/cf3a45ca2fda2e1021ed42ac1091a255a6c86490.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/texapi.js.map"
                }
              }
            },
            "/packages/coffeescript.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/coffeescript.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/969f68786bbc68e6cad299e74922a53af3d1404b.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/969f68786bbc68e6cad299e74922a53af3d1404b.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/coffeescript.js.map"
                }
              }
            },
            "/packages/spacebars.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/spacebars.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/7f53771c84a2eafac2b561c9796dda0d8af8e7f5.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/7f53771c84a2eafac2b561c9796dda0d8af8e7f5.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/spacebars.js.map"
                }
              }
            },
            "/packages/tmeasday_paginated-subscription.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/tmeasday_paginated-subscription.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/54a134a10c24c94b322c50a6067f50eff20806a8.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/54a134a10c24c94b322c50a6067f50eff20806a8.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/tmeasday_paginated-subscription.js.map"
                }
              }
            },
            "/packages/dburles_mongo-collection-instances.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/dburles_mongo-collection-instances.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/b9b614b1a0363ac70a2d992cde84611979be0d10.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/b9b614b1a0363ac70a2d992cde84611979be0d10.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/dburles_mongo-collection-instances.js.map"
                }
              }
            },
            "/packages/houston_admin.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/houston_admin.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/49d61079f48e51ee45b1e46b6836378297225888.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/49d61079f48e51ee45b1e46b6836378297225888.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/houston_admin.js.map"
                }
              }
            },
            "/packages/alanning_roles.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/alanning_roles.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/79ec06e46df4edfbc286f83d1ad8064d46d44990.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/79ec06e46df4edfbc286f83d1ad8064d46d44990.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/alanning_roles.js.map"
                }
              }
            },
            "/packages/less.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/less.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/7d1bf981a25a449d6270558bcfc983313c40cd26.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/7d1bf981a25a449d6270558bcfc983313c40cd26.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/less.js.map"
                }
              }
            },
            "/packages/meteorhacks_inject-data.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/meteorhacks_inject-data.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/6a83ff8b0ba8bb49f14a4280bfec5d5c7c760b1a.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/6a83ff8b0ba8bb49f14a4280bfec5d5c7c760b1a.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/meteorhacks_inject-data.js.map"
                }
              }
            },
            "/packages/meteorhacks_fast-render.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/meteorhacks_fast-render.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/834952f3d01a6c7bf69749f784905fbf54a4d81d.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/834952f3d01a6c7bf69749f784905fbf54a4d81d.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/meteorhacks_fast-render.js.map"
                }
              }
            },
            "/packages/jeremy_selectize.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/jeremy_selectize.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/a5fda347cc522318c5b4f8693104faaaaa462eaa.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/a5fda347cc522318c5b4f8693104faaaaa462eaa.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/jeremy_selectize.js.map"
                }
              }
            },
            "/packages/djedi_sanitize-html.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/djedi_sanitize-html.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/bdee7bda2ad0671201e63f9cb3180ab6d1a07ad3.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/bdee7bda2ad0671201e63f9cb3180ab6d1a07ad3.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/djedi_sanitize-html.js.map"
                }
              }
            },
            "/packages/chrismbeckett_toastr.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/chrismbeckett_toastr.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/22ac6b3b91d1e2065870c011d4bd9ae92ac88a70.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/22ac6b3b91d1e2065870c011d4bd9ae92ac88a70.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/chrismbeckett_toastr.js.map"
                }
              }
            },
            "/packages/fongandrew_find-and-modify.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/fongandrew_find-and-modify.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/224f29a9db68dde447092fd21eec39495472160d.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/224f29a9db68dde447092fd21eec39495472160d.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/fongandrew_find-and-modify.js.map"
                }
              }
            },
            "/packages/velocity_core.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/velocity_core.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/cecf2443254038195518d507d5fe0ecdc5dce435.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/cecf2443254038195518d507d5fe0ecdc5dce435.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/velocity_core.js.map"
                }
              }
            },
            "/packages/amplify.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/amplify.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/0943ecb804169b991257a319fa92b9e6f34e2d1b.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/0943ecb804169b991257a319fa92b9e6f34e2d1b.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/amplify.js.map"
                }
              }
            },
            "/packages/velocity_html-reporter.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/ce964321f60af6148e18fddaa0ce1ee81926dfec.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/ce964321f60af6148e18fddaa0ce1ee81926dfec.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter.js.map"
                }
              }
            },
            "/packages/velocity_shim.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/velocity_shim.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/14363d085a412115605c41536e4f2867425b89d5.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/14363d085a412115605c41536e4f2867425b89d5.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/velocity_shim.js.map"
                }
              }
            },
            "/packages/mike_mocha.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/mike_mocha.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/81e347a16dc440779b8caa4163b6179df74c6bfc.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/81e347a16dc440779b8caa4163b6179df74c6bfc.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/mike_mocha.js.map"
                }
              }
            },
            "/packages/practicalmeteor_chai.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/practicalmeteor_chai.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/7fbbbec9a13f4adf082b394c5ddd7230d84afc48.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/7fbbbec9a13f4adf082b394c5ddd7230d84afc48.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/practicalmeteor_chai.js.map"
                }
              }
            },
            "/packages/practicalmeteor_loglevel.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/practicalmeteor_loglevel.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9185331dfa11fd235edfbef93838d4ca3244d638.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9185331dfa11fd235edfbef93838d4ca3244d638.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/practicalmeteor_loglevel.js.map"
                }
              }
            },
            "/packages/sanjo_jasmine.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/sanjo_jasmine.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/6c8e0ce3908e66d0de626b7c10139a1ad3351d76.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/6c8e0ce3908e66d0de626b7c10139a1ad3351d76.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/sanjo_jasmine.js.map"
                }
              }
            },
            "/packages/webapp.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/webapp.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e1be090051b82f046484dccc2de7d747e50c7328.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/e1be090051b82f046484dccc2de7d747e50c7328.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/webapp.js.map"
                }
              }
            },
            "/packages/livedata.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/livedata.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/718526445deb4d9baacb6d92c551adea1d36c1e1.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/718526445deb4d9baacb6d92c551adea1d36c1e1.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/livedata.js.map"
                }
              }
            },
            "/packages/launch-screen.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/launch-screen.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/13e1092ebecdb7208762500188f1dc2dea5603e9.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/13e1092ebecdb7208762500188f1dc2dea5603e9.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/launch-screen.js.map"
                }
              }
            },
            "/packages/global-imports.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/global-imports.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/templates/profile/template.profile.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/templates/profile/template.profile.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/application/template.header.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/application/template.header.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/application/template.landing.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/application/template.landing.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/application/template.layout.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/application/template.layout.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/application/template.login.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/application/template.login.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/application/template.not_found.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/application/template.not_found.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/application/template.recovery.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/application/template.recovery.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/application/template.register.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/application/template.register.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/bookmark/template.bookmark_item.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/bookmark/template.bookmark_item.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/bookmark/template.bookmark_page.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/bookmark/template.bookmark_page.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/bookmark/template.bookmark_submit.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/bookmark/template.bookmark_submit.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/bookmark/template.bookmark_view.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/bookmark/template.bookmark_view.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/bookmark/template.bookmarks_list.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/bookmark/template.bookmarks_list.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/favorite/template.favorite.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/favorite/template.favorite.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/group/template.group_item.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/group/template.group_item.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/group/template.group_list.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/group/template.group_list.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/group/template.group_submit.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/group/template.group_submit.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/includes/template.access_denied.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/includes/template.access_denied.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/includes/template.errors.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/includes/template.errors.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/includes/template.loading.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/includes/template.loading.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/notifications/template.notifications.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/notifications/template.notifications.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/settings/template.settings.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/settings/template.settings.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/sort/template.sort.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/sort/template.sort.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/template.about.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/template.about.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/collections/bookmarks.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/lib/collections/bookmarks.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/collections/favorite.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/lib/collections/favorite.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/collections/groups.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/lib/collections/groups.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/collections/member.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/lib/collections/member.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/collections/notifications.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/lib/collections/notifications.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/collections/tags.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/lib/collections/tags.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/permissions.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/lib/permissions.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/router.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/lib/router.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/lib/tag_utils.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/lib/tag_utils.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/templates/profile/profile.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/templates/profile/profile.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/application/header.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/application/header.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/application/landing.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/application/landing.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/application/login.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/application/login.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/application/recovery.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/application/recovery.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/application/register.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/application/register.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/bookmark/bookmark_item.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/bookmark/bookmark_item.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/bookmark/bookmark_page.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/bookmark/bookmark_page.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/bookmark/bookmark_submit.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/bookmark/bookmark_submit.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/bookmark/bookmark_view.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/bookmark/bookmark_view.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/bookmark/bookmarks_list.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/bookmark/bookmarks_list.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/favorite/favorite.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/favorite/favorite.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/group/group_item.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/group/group_item.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/group/group_list.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/group/group_list.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/group/group_submit.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/group/group_submit.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/includes/errors.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/includes/errors.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/notifications/notifications.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/notifications/notifications.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/settings/settings.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/settings/settings.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/views/sort/sort.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/views/sort/sort.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/helpers/config.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/helpers/config.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/helpers/errors.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/helpers/errors.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/helpers/navigate.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/helpers/navigate.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/42favs.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/client/42favs.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/service-configuration.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/service-configuration.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/262da6fb1e9c97be84333c429c9a2929c80f8e3b.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/262da6fb1e9c97be84333c429c9a2929c80f8e3b.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/service-configuration.js.map"
                }
              }
            },
            "/packages/velocity_test-proxy.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/velocity_test-proxy.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/736641e387e34afe49c29d7838d56e5c41d870ef.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/736641e387e34afe49c29d7838d56e5c41d870ef.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/velocity_test-proxy.js.map"
                }
              }
            },
            "/packages/velocity_node-soft-mirror.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/velocity_node-soft-mirror.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/acf27a727fa9aa2f29f237ade3b2046fb9890e36.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/acf27a727fa9aa2f29f237ade3b2046fb9890e36.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/velocity_node-soft-mirror.js.map"
                }
              }
            },
            "/720dacafdf9e30c6f8e6211fbbee3ecf8ed3daa7.css": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/720dacafdf9e30c6f8e6211fbbee3ecf8ed3daa7.css"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/720dacafdf9e30c6f8e6211fbbee3ecf8ed3daa7.map"
                },
                "type": {
                  "type": "constant",
                  "value": "css"
                }
              }
            },
            "/720dacafdf9e30c6f8e6211fbbee3ecf8ed3daa7.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/720dacafdf9e30c6f8e6211fbbee3ecf8ed3daa7.css.map"
                }
              }
            },
            "/packages/mizzao_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.eot": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/mizzao_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.eot"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/mizzao_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.ttf": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/mizzao_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.ttf"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/mizzao_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/mizzao_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/mizzao_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.woff": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/mizzao_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.woff"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/velocity_html-reporter/lib/velocity_logo.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter/lib/velocity_logo.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/velocity_html-reporter/lib/velocity_cog.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter/lib/velocity_cog.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/velocity_html-reporter/lib/icon-time.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter/lib/icon-time.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/default_icon.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/default_icon.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/favicon.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/favicon.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/fonts/futuralt-book-demo.html": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/fonts/futuralt-book-demo.html"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/fonts/futuralt-book-webfont.eot": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/fonts/futuralt-book-webfont.eot"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/fonts/futuralt-book-webfont.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/fonts/futuralt-book-webfont.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/fonts/futuralt-book-webfont.ttf": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/fonts/futuralt-book-webfont.ttf"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/fonts/futuralt-book-webfont.woff": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/fonts/futuralt-book-webfont.woff"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/fonts/futuralt-book-webfont.woff2": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/fonts/futuralt-book-webfont.woff2"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/fonts/futuralt-light-demo.html": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/fonts/futuralt-light-demo.html"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/fonts/futuralt-light-webfont.eot": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/fonts/futuralt-light-webfont.eot"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/fonts/futuralt-light-webfont.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/fonts/futuralt-light-webfont.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/fonts/futuralt-light-webfont.ttf": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/fonts/futuralt-light-webfont.ttf"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/fonts/futuralt-light-webfont.woff": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/fonts/futuralt-light-webfont.woff"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/fonts/futuralt-light-webfont.woff2": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/fonts/futuralt-light-webfont.woff2"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/fonts/generator_config.txt": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/fonts/generator_config.txt"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/fonts/stylesheet.css": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/fonts/stylesheet.css"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/images/landing-background-top.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/images/landing-background-top.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/images/landing-computer.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/images/landing-computer.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/images/landing-logo.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/images/landing-logo.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/images/mascotte.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/images/mascotte.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/images/sprites.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/images/sprites.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/images/sprites.psd": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/images/sprites.psd"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/fonts/specimen_files/easytabs.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/fonts/specimen_files/easytabs.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/fonts/specimen_files/grid_12-825-55-15.css": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/fonts/specimen_files/grid_12-825-55-15.css"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/fonts/specimen_files/specimen_stylesheet.css": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs/.meteor/local/build/programs/web.browser/app/fonts/specimen_files/specimen_stylesheet.css"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "manifest.json": {
              "type": "object",
              "members": {
                "content": {
                  "type": "constant",
                  "value": "{\"manifest\":[{\"path\":\"packages/underscore.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/underscore.js?0a80a8623e1b40b5df5a05582f288ddd586eaa18\",\"sourceMap\":\"packages/underscore.js.map\",\"sourceMapUrl\":\"/packages/0a80a8623e1b40b5df5a05582f288ddd586eaa18.map\",\"size\":150686,\"hash\":\"0a80a8623e1b40b5df5a05582f288ddd586eaa18\"},{\"path\":\"packages/meteor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/meteor.js?81e2f06cff198adaa81b3bc09fc4f3728b7370ec\",\"sourceMap\":\"packages/meteor.js.map\",\"sourceMapUrl\":\"/packages/81e2f06cff198adaa81b3bc09fc4f3728b7370ec.map\",\"size\":109437,\"hash\":\"81e2f06cff198adaa81b3bc09fc4f3728b7370ec\"},{\"path\":\"packages/json.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/json.js?e22856eae714c681199eabc5c0710b904b125554\",\"sourceMap\":\"packages/json.js.map\",\"sourceMapUrl\":\"/packages/e22856eae714c681199eabc5c0710b904b125554.map\",\"size\":58343,\"hash\":\"e22856eae714c681199eabc5c0710b904b125554\"},{\"path\":\"packages/base64.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/base64.js?1a63019243b73298e2964e6d4680f25bca657726\",\"sourceMap\":\"packages/base64.js.map\",\"sourceMapUrl\":\"/packages/1a63019243b73298e2964e6d4680f25bca657726.map\",\"size\":15685,\"hash\":\"1a63019243b73298e2964e6d4680f25bca657726\"},{\"path\":\"packages/ejson.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ejson.js?71047b64b5196348bdbe5fd5eea9ac97a5a9eb14\",\"sourceMap\":\"packages/ejson.js.map\",\"sourceMapUrl\":\"/packages/71047b64b5196348bdbe5fd5eea9ac97a5a9eb14.map\",\"size\":81471,\"hash\":\"71047b64b5196348bdbe5fd5eea9ac97a5a9eb14\"},{\"path\":\"packages/logging.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/logging.js?07e201b648f16be8435a4f666156995eeda0c750\",\"sourceMap\":\"packages/logging.js.map\",\"sourceMapUrl\":\"/packages/07e201b648f16be8435a4f666156995eeda0c750.map\",\"size\":27996,\"hash\":\"07e201b648f16be8435a4f666156995eeda0c750\"},{\"path\":\"packages/reload.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/reload.js?da8974b7231dd8c0caccb5f322dcf97329d486d1\",\"sourceMap\":\"packages/reload.js.map\",\"sourceMapUrl\":\"/packages/da8974b7231dd8c0caccb5f322dcf97329d486d1.map\",\"size\":25926,\"hash\":\"da8974b7231dd8c0caccb5f322dcf97329d486d1\"},{\"path\":\"packages/tracker.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/tracker.js?517c8fe8ed6408951a30941e64a5383a7174bcfa\",\"sourceMap\":\"packages/tracker.js.map\",\"sourceMapUrl\":\"/packages/517c8fe8ed6408951a30941e64a5383a7174bcfa.map\",\"size\":68185,\"hash\":\"517c8fe8ed6408951a30941e64a5383a7174bcfa\"},{\"path\":\"packages/random.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/random.js?fe7b46080c91ce482acf6fc326afbc5b176f0502\",\"sourceMap\":\"packages/random.js.map\",\"sourceMapUrl\":\"/packages/fe7b46080c91ce482acf6fc326afbc5b176f0502.map\",\"size\":24099,\"hash\":\"fe7b46080c91ce482acf6fc326afbc5b176f0502\"},{\"path\":\"packages/retry.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/retry.js?1f1dd2c35d300110fdaba51ce4473583bc3bf031\",\"sourceMap\":\"packages/retry.js.map\",\"sourceMapUrl\":\"/packages/1f1dd2c35d300110fdaba51ce4473583bc3bf031.map\",\"size\":7245,\"hash\":\"1f1dd2c35d300110fdaba51ce4473583bc3bf031\"},{\"path\":\"packages/check.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/check.js?ac81167b8513b85b926c167bba423981b0c4cf9c\",\"sourceMap\":\"packages/check.js.map\",\"sourceMapUrl\":\"/packages/ac81167b8513b85b926c167bba423981b0c4cf9c.map\",\"size\":35647,\"hash\":\"ac81167b8513b85b926c167bba423981b0c4cf9c\"},{\"path\":\"packages/id-map.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/id-map.js?9ea6eaae8d74693ce2505a858d9a5e60cf191298\",\"sourceMap\":\"packages/id-map.js.map\",\"sourceMapUrl\":\"/packages/9ea6eaae8d74693ce2505a858d9a5e60cf191298.map\",\"size\":8584,\"hash\":\"9ea6eaae8d74693ce2505a858d9a5e60cf191298\"},{\"path\":\"packages/ordered-dict.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ordered-dict.js?bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37\",\"sourceMap\":\"packages/ordered-dict.js.map\",\"sourceMapUrl\":\"/packages/bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37.map\",\"size\":20395,\"hash\":\"bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37\"},{\"path\":\"packages/geojson-utils.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/geojson-utils.js?81b79d5cf96d00b4b7a28987debcffb665c17526\",\"sourceMap\":\"packages/geojson-utils.js.map\",\"sourceMapUrl\":\"/packages/81b79d5cf96d00b4b7a28987debcffb665c17526.map\",\"size\":48339,\"hash\":\"81b79d5cf96d00b4b7a28987debcffb665c17526\"},{\"path\":\"packages/minimongo.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/minimongo.js?e8806aa7782b729b2517ebc0cd10b321667f1427\",\"sourceMap\":\"packages/minimongo.js.map\",\"sourceMapUrl\":\"/packages/e8806aa7782b729b2517ebc0cd10b321667f1427.map\",\"size\":455881,\"hash\":\"e8806aa7782b729b2517ebc0cd10b321667f1427\"},{\"path\":\"packages/ddp.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ddp.js?41b62dcceb3ce0de6ca79c6aed088cccde6a44d8\",\"sourceMap\":\"packages/ddp.js.map\",\"sourceMapUrl\":\"/packages/41b62dcceb3ce0de6ca79c6aed088cccde6a44d8.map\",\"size\":617153,\"hash\":\"41b62dcceb3ce0de6ca79c6aed088cccde6a44d8\"},{\"path\":\"packages/follower-livedata.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/follower-livedata.js?74156c6baa89da861fc4ddb58ef158eac71e58e0\",\"sourceMap\":\"packages/follower-livedata.js.map\",\"sourceMapUrl\":\"/packages/74156c6baa89da861fc4ddb58ef158eac71e58e0.map\",\"size\":1490,\"hash\":\"74156c6baa89da861fc4ddb58ef158eac71e58e0\"},{\"path\":\"packages/application-configuration.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/application-configuration.js?dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f\",\"sourceMap\":\"packages/application-configuration.js.map\",\"sourceMapUrl\":\"/packages/dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f.map\",\"size\":1485,\"hash\":\"dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f\"},{\"path\":\"packages/mongo.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/mongo.js?052f30e968644b2b39a96605ffee73a7684ff37b\",\"sourceMap\":\"packages/mongo.js.map\",\"sourceMapUrl\":\"/packages/052f30e968644b2b39a96605ffee73a7684ff37b.map\",\"size\":147662,\"hash\":\"052f30e968644b2b39a96605ffee73a7684ff37b\"},{\"path\":\"packages/autoupdate.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/autoupdate.js?9a5ea03bf057815385bf569c7acc2c285c005491\",\"sourceMap\":\"packages/autoupdate.js.map\",\"sourceMapUrl\":\"/packages/9a5ea03bf057815385bf569c7acc2c285c005491.map\",\"size\":17152,\"hash\":\"9a5ea03bf057815385bf569c7acc2c285c005491\"},{\"path\":\"packages/meteor-platform.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/meteor-platform.js?499a2f8522e25820b1153c69a92751ccaae507b3\",\"sourceMap\":\"packages/meteor-platform.js.map\",\"sourceMapUrl\":\"/packages/499a2f8522e25820b1153c69a92751ccaae507b3.map\",\"size\":1384,\"hash\":\"499a2f8522e25820b1153c69a92751ccaae507b3\"},{\"path\":\"packages/deps.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/deps.js?504589e1e9585dec8f9f6094e5a87b22de3783a1\",\"sourceMap\":\"packages/deps.js.map\",\"sourceMapUrl\":\"/packages/504589e1e9585dec8f9f6094e5a87b22de3783a1.map\",\"size\":1442,\"hash\":\"504589e1e9585dec8f9f6094e5a87b22de3783a1\"},{\"path\":\"packages/jquery.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/jquery.js?dd8bac56f8fd3666d433d2285ae01e52597cc51a\",\"sourceMap\":\"packages/jquery.js.map\",\"sourceMapUrl\":\"/packages/dd8bac56f8fd3666d433d2285ae01e52597cc51a.map\",\"size\":1296513,\"hash\":\"dd8bac56f8fd3666d433d2285ae01e52597cc51a\"},{\"path\":\"packages/htmljs.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/htmljs.js?567eb96d5d22631c03d6aca6afa4c42f0d1295f2\",\"sourceMap\":\"packages/htmljs.js.map\",\"sourceMapUrl\":\"/packages/567eb96d5d22631c03d6aca6afa4c42f0d1295f2.map\",\"size\":60161,\"hash\":\"567eb96d5d22631c03d6aca6afa4c42f0d1295f2\"},{\"path\":\"packages/observe-sequence.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/observe-sequence.js?2fd807ea171ead273b9e6458607cb226012d9240\",\"sourceMap\":\"packages/observe-sequence.js.map\",\"sourceMapUrl\":\"/packages/2fd807ea171ead273b9e6458607cb226012d9240.map\",\"size\":30271,\"hash\":\"2fd807ea171ead273b9e6458607cb226012d9240\"},{\"path\":\"packages/reactive-var.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/reactive-var.js?20335b7b37165980ddd9f23943b2e5b00aae1cc2\",\"sourceMap\":\"packages/reactive-var.js.map\",\"sourceMapUrl\":\"/packages/20335b7b37165980ddd9f23943b2e5b00aae1cc2.map\",\"size\":13963,\"hash\":\"20335b7b37165980ddd9f23943b2e5b00aae1cc2\"},{\"path\":\"packages/blaze.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/blaze.js?efa68f65e67544b5a05509804bf97e2c91ce75eb\",\"sourceMap\":\"packages/blaze.js.map\",\"sourceMapUrl\":\"/packages/efa68f65e67544b5a05509804bf97e2c91ce75eb.map\",\"size\":391530,\"hash\":\"efa68f65e67544b5a05509804bf97e2c91ce75eb\"},{\"path\":\"packages/ui.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ui.js?5a663333fd30f8fd913f110e0ef779e84f67c4b8\",\"sourceMap\":\"packages/ui.js.map\",\"sourceMapUrl\":\"/packages/5a663333fd30f8fd913f110e0ef779e84f67c4b8.map\",\"size\":1529,\"hash\":\"5a663333fd30f8fd913f110e0ef779e84f67c4b8\"},{\"path\":\"packages/templating.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/templating.js?599ba307216da826d8b335332ebcc9a497a369a0\",\"sourceMap\":\"packages/templating.js.map\",\"sourceMapUrl\":\"/packages/599ba307216da826d8b335332ebcc9a497a369a0.map\",\"size\":11910,\"hash\":\"599ba307216da826d8b335332ebcc9a497a369a0\"},{\"path\":\"packages/iron_core.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_core.js?d966a1f70c94792fd94c8a155bdbef9bec5e0047\",\"sourceMap\":\"packages/iron_core.js.map\",\"sourceMapUrl\":\"/packages/d966a1f70c94792fd94c8a155bdbef9bec5e0047.map\",\"size\":32915,\"hash\":\"d966a1f70c94792fd94c8a155bdbef9bec5e0047\"},{\"path\":\"packages/iron_dynamic-template.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_dynamic-template.js?d425554c9847e4a80567f8ca55719cd6ae3f2722\",\"sourceMap\":\"packages/iron_dynamic-template.js.map\",\"sourceMapUrl\":\"/packages/d425554c9847e4a80567f8ca55719cd6ae3f2722.map\",\"size\":86389,\"hash\":\"d425554c9847e4a80567f8ca55719cd6ae3f2722\"},{\"path\":\"packages/iron_layout.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_layout.js?4e65c46acdaf0ce6a8b1a479d7b9d0b5c0902062\",\"sourceMap\":\"packages/iron_layout.js.map\",\"sourceMapUrl\":\"/packages/4e65c46acdaf0ce6a8b1a479d7b9d0b5c0902062.map\",\"size\":62058,\"hash\":\"4e65c46acdaf0ce6a8b1a479d7b9d0b5c0902062\"},{\"path\":\"packages/iron_url.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_url.js?6979e41649a22dcf609df30fc533e36037c7ae58\",\"sourceMap\":\"packages/iron_url.js.map\",\"sourceMapUrl\":\"/packages/6979e41649a22dcf609df30fc533e36037c7ae58.map\",\"size\":69302,\"hash\":\"6979e41649a22dcf609df30fc533e36037c7ae58\"},{\"path\":\"packages/iron_middleware-stack.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_middleware-stack.js?0e0f6983a838a6516556b08e62894f89720e2c44\",\"sourceMap\":\"packages/iron_middleware-stack.js.map\",\"sourceMapUrl\":\"/packages/0e0f6983a838a6516556b08e62894f89720e2c44.map\",\"size\":47239,\"hash\":\"0e0f6983a838a6516556b08e62894f89720e2c44\"},{\"path\":\"packages/iron_location.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_location.js?ca4f0f6672edbfb6cafab6e5c024208d9364eac9\",\"sourceMap\":\"packages/iron_location.js.map\",\"sourceMapUrl\":\"/packages/ca4f0f6672edbfb6cafab6e5c024208d9364eac9.map\",\"size\":52275,\"hash\":\"ca4f0f6672edbfb6cafab6e5c024208d9364eac9\"},{\"path\":\"packages/reactive-dict.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/reactive-dict.js?6b25309b1f0dcf775b44984324878d6f8ad1abc2\",\"sourceMap\":\"packages/reactive-dict.js.map\",\"sourceMapUrl\":\"/packages/6b25309b1f0dcf775b44984324878d6f8ad1abc2.map\",\"size\":19802,\"hash\":\"6b25309b1f0dcf775b44984324878d6f8ad1abc2\"},{\"path\":\"packages/iron_controller.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_controller.js?b02790701804563eafedb2e68c602154983ade06\",\"sourceMap\":\"packages/iron_controller.js.map\",\"sourceMapUrl\":\"/packages/b02790701804563eafedb2e68c602154983ade06.map\",\"size\":41091,\"hash\":\"b02790701804563eafedb2e68c602154983ade06\"},{\"path\":\"packages/iron_router.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_router.js?a427868585af16bb88b7c9996b2449aebb8dbf51\",\"sourceMap\":\"packages/iron_router.js.map\",\"sourceMapUrl\":\"/packages/a427868585af16bb88b7c9996b2449aebb8dbf51.map\",\"size\":216733,\"hash\":\"a427868585af16bb88b7c9996b2449aebb8dbf51\"},{\"path\":\"packages/mizzao_bootstrap-3.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/mizzao_bootstrap-3.js?8d8f544e1328b7a62d76dbbbbf7d1fd5f559c919\",\"sourceMap\":\"packages/mizzao_bootstrap-3.js.map\",\"sourceMapUrl\":\"/packages/8d8f544e1328b7a62d76dbbbbf7d1fd5f559c919.map\",\"size\":295910,\"hash\":\"8d8f544e1328b7a62d76dbbbbf7d1fd5f559c919\"},{\"path\":\"packages/session.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/session.js?e436deefadc999c21b6fd16e8e1ecce55c3c3a55\",\"sourceMap\":\"packages/session.js.map\",\"sourceMapUrl\":\"/packages/e436deefadc999c21b6fd16e8e1ecce55c3c3a55.map\",\"size\":6497,\"hash\":\"e436deefadc999c21b6fd16e8e1ecce55c3c3a55\"},{\"path\":\"packages/handlebars.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/handlebars.js?038145b6256cd6a69c11650ed6bf12b093920095\",\"sourceMap\":\"packages/handlebars.js.map\",\"sourceMapUrl\":\"/packages/038145b6256cd6a69c11650ed6bf12b093920095.map\",\"size\":1292,\"hash\":\"038145b6256cd6a69c11650ed6bf12b093920095\"},{\"path\":\"packages/stylus.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/stylus.js?48b7e3e0953c004a73211d7489462e73ed11be2c\",\"sourceMap\":\"packages/stylus.js.map\",\"sourceMapUrl\":\"/packages/48b7e3e0953c004a73211d7489462e73ed11be2c.map\",\"size\":1288,\"hash\":\"48b7e3e0953c004a73211d7489462e73ed11be2c\"},{\"path\":\"packages/localstorage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/localstorage.js?9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c\",\"sourceMap\":\"packages/localstorage.js.map\",\"sourceMapUrl\":\"/packages/9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c.map\",\"size\":7092,\"hash\":\"9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c\"},{\"path\":\"packages/accounts-base.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/accounts-base.js?88bb0577cebfbd40b522bb337f8ff8af92244c2f\",\"sourceMap\":\"packages/accounts-base.js.map\",\"sourceMapUrl\":\"/packages/88bb0577cebfbd40b522bb337f8ff8af92244c2f.map\",\"size\":109093,\"hash\":\"88bb0577cebfbd40b522bb337f8ff8af92244c2f\"},{\"path\":\"packages/anti_i18n.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/anti_i18n.js?b753e9e958be5df82d8bdde8dc342a2870ccf372\",\"sourceMap\":\"packages/anti_i18n.js.map\",\"sourceMapUrl\":\"/packages/b753e9e958be5df82d8bdde8dc342a2870ccf372.map\",\"size\":11110,\"hash\":\"b753e9e958be5df82d8bdde8dc342a2870ccf372\"},{\"path\":\"packages/sha.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/sha.js?65ef52f7221944768bfc2049d6b7e163c8ae2615\",\"sourceMap\":\"packages/sha.js.map\",\"sourceMapUrl\":\"/packages/65ef52f7221944768bfc2049d6b7e163c8ae2615.map\",\"size\":19584,\"hash\":\"65ef52f7221944768bfc2049d6b7e163c8ae2615\"},{\"path\":\"packages/srp.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/srp.js?e2e28156e8c912d504a3586351c8a1119f664cfd\",\"sourceMap\":\"packages/srp.js.map\",\"sourceMapUrl\":\"/packages/e2e28156e8c912d504a3586351c8a1119f664cfd.map\",\"size\":173470,\"hash\":\"e2e28156e8c912d504a3586351c8a1119f664cfd\"},{\"path\":\"packages/accounts-password.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/accounts-password.js?3845cc71ad2dc1378b7d8cc4164a78359506dd40\",\"sourceMap\":\"packages/accounts-password.js.map\",\"sourceMapUrl\":\"/packages/3845cc71ad2dc1378b7d8cc4164a78359506dd40.map\",\"size\":33170,\"hash\":\"3845cc71ad2dc1378b7d8cc4164a78359506dd40\"},{\"path\":\"packages/ian_accounts-ui-bootstrap-3.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ian_accounts-ui-bootstrap-3.js?360ea128aa966eb3140c86b815f95c3965f8f7b5\",\"sourceMap\":\"packages/ian_accounts-ui-bootstrap-3.js.map\",\"sourceMapUrl\":\"/packages/360ea128aa966eb3140c86b815f95c3965f8f7b5.map\",\"size\":405418,\"hash\":\"360ea128aa966eb3140c86b815f95c3965f8f7b5\"},{\"path\":\"packages/sacha_spin.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/sacha_spin.js?6ab6fb94c8dfd98b9fdc1a9831a8051edeec5c04\",\"sourceMap\":\"packages/sacha_spin.js.map\",\"sourceMapUrl\":\"/packages/6ab6fb94c8dfd98b9fdc1a9831a8051edeec5c04.map\",\"size\":48440,\"hash\":\"6ab6fb94c8dfd98b9fdc1a9831a8051edeec5c04\"},{\"path\":\"packages/mizzao_bootboxjs.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/mizzao_bootboxjs.js?086e225df2c7126fed995ad11775fb307c2ce1da\",\"sourceMap\":\"packages/mizzao_bootboxjs.js.map\",\"sourceMapUrl\":\"/packages/086e225df2c7126fed995ad11775fb307c2ce1da.map\",\"size\":109620,\"hash\":\"086e225df2c7126fed995ad11775fb307c2ce1da\"},{\"path\":\"packages/meteorhacks_kadira-binary-deps.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/meteorhacks_kadira-binary-deps.js?a244ee2e16791a2e0fed6ce317583265afab7c0c\",\"sourceMap\":\"packages/meteorhacks_kadira-binary-deps.js.map\",\"sourceMapUrl\":\"/packages/a244ee2e16791a2e0fed6ce317583265afab7c0c.map\",\"size\":1406,\"hash\":\"a244ee2e16791a2e0fed6ce317583265afab7c0c\"},{\"path\":\"packages/meteorhacks_meteorx.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/meteorhacks_meteorx.js?afd5ff95b1c1492f60049925f1f827e2b5817bbb\",\"sourceMap\":\"packages/meteorhacks_meteorx.js.map\",\"sourceMapUrl\":\"/packages/afd5ff95b1c1492f60049925f1f827e2b5817bbb.map\",\"size\":1368,\"hash\":\"afd5ff95b1c1492f60049925f1f827e2b5817bbb\"},{\"path\":\"packages/meteorhacks_kadira.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/meteorhacks_kadira.js?04eebb1f871e9e705f02984eb3c31670059cb2ec\",\"sourceMap\":\"packages/meteorhacks_kadira.js.map\",\"sourceMapUrl\":\"/packages/04eebb1f871e9e705f02984eb3c31670059cb2ec.map\",\"size\":97690,\"hash\":\"04eebb1f871e9e705f02984eb3c31670059cb2ec\"},{\"path\":\"packages/mrt_cookies.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/mrt_cookies.js?2a1fea5e5d64d864a94dced515ccdc633e1c0af4\",\"sourceMap\":\"packages/mrt_cookies.js.map\",\"sourceMapUrl\":\"/packages/2a1fea5e5d64d864a94dced515ccdc633e1c0af4.map\",\"size\":13844,\"hash\":\"2a1fea5e5d64d864a94dced515ccdc633e1c0af4\"},{\"path\":\"packages/chuangbo_cookie.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/chuangbo_cookie.js?06436babb94ec01963deef78f0a86cf163cf06f4\",\"sourceMap\":\"packages/chuangbo_cookie.js.map\",\"sourceMapUrl\":\"/packages/06436babb94ec01963deef78f0a86cf163cf06f4.map\",\"size\":18681,\"hash\":\"06436babb94ec01963deef78f0a86cf163cf06f4\"},{\"path\":\"packages/url.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/url.js?2312d739008b2ffa52f13c77c5d6fc59c9e17d56\",\"sourceMap\":\"packages/url.js.map\",\"sourceMapUrl\":\"/packages/2312d739008b2ffa52f13c77c5d6fc59c9e17d56.map\",\"size\":6642,\"hash\":\"2312d739008b2ffa52f13c77c5d6fc59c9e17d56\"},{\"path\":\"packages/http.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/http.js?9c5d152169ba9a5a57b6b8ec28e64bbd0d308077\",\"sourceMap\":\"packages/http.js.map\",\"sourceMapUrl\":\"/packages/9c5d152169ba9a5a57b6b8ec28e64bbd0d308077.map\",\"size\":37036,\"hash\":\"9c5d152169ba9a5a57b6b8ec28e64bbd0d308077\"},{\"path\":\"packages/texapi.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/texapi.js?cf3a45ca2fda2e1021ed42ac1091a255a6c86490\",\"sourceMap\":\"packages/texapi.js.map\",\"sourceMapUrl\":\"/packages/cf3a45ca2fda2e1021ed42ac1091a255a6c86490.map\",\"size\":1349,\"hash\":\"cf3a45ca2fda2e1021ed42ac1091a255a6c86490\"},{\"path\":\"packages/coffeescript.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/coffeescript.js?969f68786bbc68e6cad299e74922a53af3d1404b\",\"sourceMap\":\"packages/coffeescript.js.map\",\"sourceMapUrl\":\"/packages/969f68786bbc68e6cad299e74922a53af3d1404b.map\",\"size\":1294,\"hash\":\"969f68786bbc68e6cad299e74922a53af3d1404b\"},{\"path\":\"packages/spacebars.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/spacebars.js?7f53771c84a2eafac2b561c9796dda0d8af8e7f5\",\"sourceMap\":\"packages/spacebars.js.map\",\"sourceMapUrl\":\"/packages/7f53771c84a2eafac2b561c9796dda0d8af8e7f5.map\",\"size\":42206,\"hash\":\"7f53771c84a2eafac2b561c9796dda0d8af8e7f5\"},{\"path\":\"packages/tmeasday_paginated-subscription.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/tmeasday_paginated-subscription.js?54a134a10c24c94b322c50a6067f50eff20806a8\",\"sourceMap\":\"packages/tmeasday_paginated-subscription.js.map\",\"sourceMapUrl\":\"/packages/54a134a10c24c94b322c50a6067f50eff20806a8.map\",\"size\":8692,\"hash\":\"54a134a10c24c94b322c50a6067f50eff20806a8\"},{\"path\":\"packages/dburles_mongo-collection-instances.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/dburles_mongo-collection-instances.js?b9b614b1a0363ac70a2d992cde84611979be0d10\",\"sourceMap\":\"packages/dburles_mongo-collection-instances.js.map\",\"sourceMapUrl\":\"/packages/b9b614b1a0363ac70a2d992cde84611979be0d10.map\",\"size\":7764,\"hash\":\"b9b614b1a0363ac70a2d992cde84611979be0d10\"},{\"path\":\"packages/houston_admin.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/houston_admin.js?49d61079f48e51ee45b1e46b6836378297225888\",\"sourceMap\":\"packages/houston_admin.js.map\",\"sourceMapUrl\":\"/packages/49d61079f48e51ee45b1e46b6836378297225888.map\",\"size\":262892,\"hash\":\"49d61079f48e51ee45b1e46b6836378297225888\"},{\"path\":\"packages/alanning_roles.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/alanning_roles.js?79ec06e46df4edfbc286f83d1ad8064d46d44990\",\"sourceMap\":\"packages/alanning_roles.js.map\",\"sourceMapUrl\":\"/packages/79ec06e46df4edfbc286f83d1ad8064d46d44990.map\",\"size\":94498,\"hash\":\"79ec06e46df4edfbc286f83d1ad8064d46d44990\"},{\"path\":\"packages/less.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/less.js?7d1bf981a25a449d6270558bcfc983313c40cd26\",\"sourceMap\":\"packages/less.js.map\",\"sourceMapUrl\":\"/packages/7d1bf981a25a449d6270558bcfc983313c40cd26.map\",\"size\":1286,\"hash\":\"7d1bf981a25a449d6270558bcfc983313c40cd26\"},{\"path\":\"packages/meteorhacks_inject-data.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/meteorhacks_inject-data.js?6a83ff8b0ba8bb49f14a4280bfec5d5c7c760b1a\",\"sourceMap\":\"packages/meteorhacks_inject-data.js.map\",\"sourceMapUrl\":\"/packages/6a83ff8b0ba8bb49f14a4280bfec5d5c7c760b1a.map\",\"size\":4695,\"hash\":\"6a83ff8b0ba8bb49f14a4280bfec5d5c7c760b1a\"},{\"path\":\"packages/meteorhacks_fast-render.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/meteorhacks_fast-render.js?834952f3d01a6c7bf69749f784905fbf54a4d81d\",\"sourceMap\":\"packages/meteorhacks_fast-render.js.map\",\"sourceMapUrl\":\"/packages/834952f3d01a6c7bf69749f784905fbf54a4d81d.map\",\"size\":54075,\"hash\":\"834952f3d01a6c7bf69749f784905fbf54a4d81d\"},{\"path\":\"packages/jeremy_selectize.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/jeremy_selectize.js?a5fda347cc522318c5b4f8693104faaaaa462eaa\",\"sourceMap\":\"packages/jeremy_selectize.js.map\",\"sourceMapUrl\":\"/packages/a5fda347cc522318c5b4f8693104faaaaa462eaa.map\",\"size\":442547,\"hash\":\"a5fda347cc522318c5b4f8693104faaaaa462eaa\"},{\"path\":\"packages/djedi_sanitize-html.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/djedi_sanitize-html.js?bdee7bda2ad0671201e63f9cb3180ab6d1a07ad3\",\"sourceMap\":\"packages/djedi_sanitize-html.js.map\",\"sourceMapUrl\":\"/packages/bdee7bda2ad0671201e63f9cb3180ab6d1a07ad3.map\",\"size\":1304,\"hash\":\"bdee7bda2ad0671201e63f9cb3180ab6d1a07ad3\"},{\"path\":\"packages/chrismbeckett_toastr.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/chrismbeckett_toastr.js?22ac6b3b91d1e2065870c011d4bd9ae92ac88a70\",\"sourceMap\":\"packages/chrismbeckett_toastr.js.map\",\"sourceMapUrl\":\"/packages/22ac6b3b91d1e2065870c011d4bd9ae92ac88a70.map\",\"size\":49649,\"hash\":\"22ac6b3b91d1e2065870c011d4bd9ae92ac88a70\"},{\"path\":\"packages/fongandrew_find-and-modify.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/fongandrew_find-and-modify.js?224f29a9db68dde447092fd21eec39495472160d\",\"sourceMap\":\"packages/fongandrew_find-and-modify.js.map\",\"sourceMapUrl\":\"/packages/224f29a9db68dde447092fd21eec39495472160d.map\",\"size\":12376,\"hash\":\"224f29a9db68dde447092fd21eec39495472160d\"},{\"path\":\"packages/velocity_core.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_core.js?cecf2443254038195518d507d5fe0ecdc5dce435\",\"sourceMap\":\"packages/velocity_core.js.map\",\"sourceMapUrl\":\"/packages/cecf2443254038195518d507d5fe0ecdc5dce435.map\",\"size\":12238,\"hash\":\"cecf2443254038195518d507d5fe0ecdc5dce435\"},{\"path\":\"packages/amplify.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/amplify.js?0943ecb804169b991257a319fa92b9e6f34e2d1b\",\"sourceMap\":\"packages/amplify.js.map\",\"sourceMapUrl\":\"/packages/0943ecb804169b991257a319fa92b9e6f34e2d1b.map\",\"size\":88428,\"hash\":\"0943ecb804169b991257a319fa92b9e6f34e2d1b\"},{\"path\":\"packages/velocity_html-reporter.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_html-reporter.js?ce964321f60af6148e18fddaa0ce1ee81926dfec\",\"sourceMap\":\"packages/velocity_html-reporter.js.map\",\"sourceMapUrl\":\"/packages/ce964321f60af6148e18fddaa0ce1ee81926dfec.map\",\"size\":85688,\"hash\":\"ce964321f60af6148e18fddaa0ce1ee81926dfec\"},{\"path\":\"packages/velocity_shim.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_shim.js?14363d085a412115605c41536e4f2867425b89d5\",\"sourceMap\":\"packages/velocity_shim.js.map\",\"sourceMapUrl\":\"/packages/14363d085a412115605c41536e4f2867425b89d5.map\",\"size\":2905,\"hash\":\"14363d085a412115605c41536e4f2867425b89d5\"},{\"path\":\"packages/mike_mocha.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/mike_mocha.js?81e347a16dc440779b8caa4163b6179df74c6bfc\",\"sourceMap\":\"packages/mike_mocha.js.map\",\"sourceMapUrl\":\"/packages/81e347a16dc440779b8caa4163b6179df74c6bfc.map\",\"size\":1347056,\"hash\":\"81e347a16dc440779b8caa4163b6179df74c6bfc\"},{\"path\":\"packages/practicalmeteor_chai.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/practicalmeteor_chai.js?7fbbbec9a13f4adf082b394c5ddd7230d84afc48\",\"sourceMap\":\"packages/practicalmeteor_chai.js.map\",\"sourceMapUrl\":\"/packages/7fbbbec9a13f4adf082b394c5ddd7230d84afc48.map\",\"size\":570118,\"hash\":\"7fbbbec9a13f4adf082b394c5ddd7230d84afc48\"},{\"path\":\"packages/practicalmeteor_loglevel.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/practicalmeteor_loglevel.js?9185331dfa11fd235edfbef93838d4ca3244d638\",\"sourceMap\":\"packages/practicalmeteor_loglevel.js.map\",\"sourceMapUrl\":\"/packages/9185331dfa11fd235edfbef93838d4ca3244d638.map\",\"size\":28719,\"hash\":\"9185331dfa11fd235edfbef93838d4ca3244d638\"},{\"path\":\"packages/sanjo_jasmine.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/sanjo_jasmine.js?6c8e0ce3908e66d0de626b7c10139a1ad3351d76\",\"sourceMap\":\"packages/sanjo_jasmine.js.map\",\"sourceMapUrl\":\"/packages/6c8e0ce3908e66d0de626b7c10139a1ad3351d76.map\",\"size\":537001,\"hash\":\"6c8e0ce3908e66d0de626b7c10139a1ad3351d76\"},{\"path\":\"packages/webapp.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/webapp.js?e1be090051b82f046484dccc2de7d747e50c7328\",\"sourceMap\":\"packages/webapp.js.map\",\"sourceMapUrl\":\"/packages/e1be090051b82f046484dccc2de7d747e50c7328.map\",\"size\":3106,\"hash\":\"e1be090051b82f046484dccc2de7d747e50c7328\"},{\"path\":\"packages/livedata.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/livedata.js?718526445deb4d9baacb6d92c551adea1d36c1e1\",\"sourceMap\":\"packages/livedata.js.map\",\"sourceMapUrl\":\"/packages/718526445deb4d9baacb6d92c551adea1d36c1e1.map\",\"size\":1413,\"hash\":\"718526445deb4d9baacb6d92c551adea1d36c1e1\"},{\"path\":\"packages/launch-screen.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/launch-screen.js?13e1092ebecdb7208762500188f1dc2dea5603e9\",\"sourceMap\":\"packages/launch-screen.js.map\",\"sourceMapUrl\":\"/packages/13e1092ebecdb7208762500188f1dc2dea5603e9.map\",\"size\":9707,\"hash\":\"13e1092ebecdb7208762500188f1dc2dea5603e9\"},{\"path\":\"packages/global-imports.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/global-imports.js?5aa23a19d2bb18164d9564c22cecdbfa36536d19\",\"size\":1357,\"hash\":\"5aa23a19d2bb18164d9564c22cecdbfa36536d19\"},{\"path\":\"app/client/templates/profile/template.profile.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/profile/template.profile.js?8537afa6f2278727681b2e7a1cef25659a91f50b\",\"size\":2700,\"hash\":\"8537afa6f2278727681b2e7a1cef25659a91f50b\"},{\"path\":\"app/client/views/application/template.header.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/application/template.header.js?004a54269863b6ad03104016537a4d95104e2012\",\"size\":4703,\"hash\":\"004a54269863b6ad03104016537a4d95104e2012\"},{\"path\":\"app/client/views/application/template.landing.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/application/template.landing.js?f326a672754abe2a00ef4dbd23fffe4c4c082052\",\"size\":1661,\"hash\":\"f326a672754abe2a00ef4dbd23fffe4c4c082052\"},{\"path\":\"app/client/views/application/template.layout.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/application/template.layout.js?30422a6ed8500df47e8399d1136b33209b1830c7\",\"size\":3402,\"hash\":\"30422a6ed8500df47e8399d1136b33209b1830c7\"},{\"path\":\"app/client/views/application/template.login.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/application/template.login.js?63a1bc42d4ed2a1ac36ed3ba90adf65a52edf3b0\",\"size\":1514,\"hash\":\"63a1bc42d4ed2a1ac36ed3ba90adf65a52edf3b0\"},{\"path\":\"app/client/views/application/template.not_found.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/application/template.not_found.js?1a174e2baa794feb1afd3731968363b97d6f1f5a\",\"size\":292,\"hash\":\"1a174e2baa794feb1afd3731968363b97d6f1f5a\"},{\"path\":\"app/client/views/application/template.recovery.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/application/template.recovery.js?b1094a4cbcc88730bd7c5212f28ed2e87ec84830\",\"size\":1649,\"hash\":\"b1094a4cbcc88730bd7c5212f28ed2e87ec84830\"},{\"path\":\"app/client/views/application/template.register.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/application/template.register.js?45675a7fdf43fd1c8d2a1a4482c263c1258b7415\",\"size\":1217,\"hash\":\"45675a7fdf43fd1c8d2a1a4482c263c1258b7415\"},{\"path\":\"app/client/views/bookmark/template.bookmark_item.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/bookmark/template.bookmark_item.js?f083f345a43efa073e44c19577c4153747f4b10b\",\"size\":3779,\"hash\":\"f083f345a43efa073e44c19577c4153747f4b10b\"},{\"path\":\"app/client/views/bookmark/template.bookmark_page.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/bookmark/template.bookmark_page.js?6cf56d64e96df8b78b1e31d0d8e5f667ca8337b0\",\"size\":7077,\"hash\":\"6cf56d64e96df8b78b1e31d0d8e5f667ca8337b0\"},{\"path\":\"app/client/views/bookmark/template.bookmark_submit.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/bookmark/template.bookmark_submit.js?8a3a6eb66be2b2e3f6e94f41b15e6c27e853040e\",\"size\":1653,\"hash\":\"8a3a6eb66be2b2e3f6e94f41b15e6c27e853040e\"},{\"path\":\"app/client/views/bookmark/template.bookmark_view.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/bookmark/template.bookmark_view.js?cee057bb2a19c95b505424674ef4fb269d5e9f5c\",\"size\":3118,\"hash\":\"cee057bb2a19c95b505424674ef4fb269d5e9f5c\"},{\"path\":\"app/client/views/bookmark/template.bookmarks_list.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/bookmark/template.bookmarks_list.js?f8b35bdf79b20a0b6a510ee33537778ade636baa\",\"size\":1360,\"hash\":\"f8b35bdf79b20a0b6a510ee33537778ade636baa\"},{\"path\":\"app/client/views/favorite/template.favorite.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/favorite/template.favorite.js?73e17e4604897e76cd92f61c3a5931b08ab0ca09\",\"size\":826,\"hash\":\"73e17e4604897e76cd92f61c3a5931b08ab0ca09\"},{\"path\":\"app/client/views/group/template.group_item.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/group/template.group_item.js?0f9466a67d3c9fdbb36e1527efdbeeb7a5254203\",\"size\":1893,\"hash\":\"0f9466a67d3c9fdbb36e1527efdbeeb7a5254203\"},{\"path\":\"app/client/views/group/template.group_list.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/group/template.group_list.js?1309944de295af8b6e1a4e05b3696986bf453644\",\"size\":1171,\"hash\":\"1309944de295af8b6e1a4e05b3696986bf453644\"},{\"path\":\"app/client/views/group/template.group_submit.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/group/template.group_submit.js?52fa28a558ced3893546e05d68b19cf24e54a11a\",\"size\":602,\"hash\":\"52fa28a558ced3893546e05d68b19cf24e54a11a\"},{\"path\":\"app/client/views/includes/template.access_denied.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/includes/template.access_denied.js?40acac1d5991b4e213e148368e5b3b06f4ccec43\",\"size\":305,\"hash\":\"40acac1d5991b4e213e148368e5b3b06f4ccec43\"},{\"path\":\"app/client/views/includes/template.errors.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/includes/template.errors.js?d5470bf45f2981dd770880645ab6e38d3aa6322d\",\"size\":779,\"hash\":\"d5470bf45f2981dd770880645ab6e38d3aa6322d\"},{\"path\":\"app/client/views/includes/template.loading.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/includes/template.loading.js?0b820746542c3b65b4fd0c78c00237f88a5c9a3f\",\"size\":206,\"hash\":\"0b820746542c3b65b4fd0c78c00237f88a5c9a3f\"},{\"path\":\"app/client/views/notifications/template.notifications.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/notifications/template.notifications.js?277a080b1d4b4b7d544874f2741f71e1bf220a3f\",\"size\":6966,\"hash\":\"277a080b1d4b4b7d544874f2741f71e1bf220a3f\"},{\"path\":\"app/client/views/settings/template.settings.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/settings/template.settings.js?617de6790d373e5bbc00a0e10a1adad1323e0370\",\"size\":2853,\"hash\":\"617de6790d373e5bbc00a0e10a1adad1323e0370\"},{\"path\":\"app/client/views/sort/template.sort.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/sort/template.sort.js?7b1bc40321d97ffd798e4488985a05aff202c0ff\",\"size\":1489,\"hash\":\"7b1bc40321d97ffd798e4488985a05aff202c0ff\"},{\"path\":\"app/client/views/template.about.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/template.about.js?a2804fe9d59afdde14a28650a98a0781ee27f0e7\",\"size\":844,\"hash\":\"a2804fe9d59afdde14a28650a98a0781ee27f0e7\"},{\"path\":\"app/lib/collections/bookmarks.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/collections/bookmarks.js?9c3eb60244c46b12129a671bb2f4341353413394\",\"size\":4274,\"hash\":\"9c3eb60244c46b12129a671bb2f4341353413394\"},{\"path\":\"app/lib/collections/favorite.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/collections/favorite.js?4a3f11c81e5411b89f1f3d06654608ab2d9a22d1\",\"size\":1430,\"hash\":\"4a3f11c81e5411b89f1f3d06654608ab2d9a22d1\"},{\"path\":\"app/lib/collections/groups.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/collections/groups.js?3f996f997e28a57f6c45fc5bfb6c1eb5c2b1245c\",\"size\":1985,\"hash\":\"3f996f997e28a57f6c45fc5bfb6c1eb5c2b1245c\"},{\"path\":\"app/lib/collections/member.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/collections/member.js?9f1850e441cf7314324df9c031ad3f6059aca8f9\",\"size\":900,\"hash\":\"9f1850e441cf7314324df9c031ad3f6059aca8f9\"},{\"path\":\"app/lib/collections/notifications.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/collections/notifications.js?12139a51d88ab3cb3fb8da58c6ea77096c16ccae\",\"size\":5994,\"hash\":\"12139a51d88ab3cb3fb8da58c6ea77096c16ccae\"},{\"path\":\"app/lib/collections/tags.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/collections/tags.js?ab9ecb0d7d33e40c4cc0916e459ac640a7226d13\",\"size\":1166,\"hash\":\"ab9ecb0d7d33e40c4cc0916e459ac640a7226d13\"},{\"path\":\"app/lib/permissions.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/permissions.js?60ec00338912be5ec8f76b4e6b4ed5a423021bc7\",\"size\":99,\"hash\":\"60ec00338912be5ec8f76b4e6b4ed5a423021bc7\"},{\"path\":\"app/lib/router.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/router.js?a93478b60978b90b40eb074100a10d918e5df426\",\"size\":4900,\"hash\":\"a93478b60978b90b40eb074100a10d918e5df426\"},{\"path\":\"app/lib/tag_utils.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/lib/tag_utils.js?058ce43c2fb5ae46817ecbfafb3e6542938969a4\",\"size\":2742,\"hash\":\"058ce43c2fb5ae46817ecbfafb3e6542938969a4\"},{\"path\":\"app/client/templates/profile/profile.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/templates/profile/profile.js?a4e4512f5f24b00fe4204a25408f5d8511b5573a\",\"size\":909,\"hash\":\"a4e4512f5f24b00fe4204a25408f5d8511b5573a\"},{\"path\":\"app/client/views/application/header.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/application/header.js?7213beee9944491f2d64cf7841c175efa5865bc0\",\"size\":1615,\"hash\":\"7213beee9944491f2d64cf7841c175efa5865bc0\"},{\"path\":\"app/client/views/application/landing.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/application/landing.js?4c17df029ef5f9adad6595d0cf3c5d7bc296a17b\",\"size\":384,\"hash\":\"4c17df029ef5f9adad6595d0cf3c5d7bc296a17b\"},{\"path\":\"app/client/views/application/login.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/application/login.js?22f6cfecfd3194b13ad2aa2fa84e4f56a4127be7\",\"size\":1085,\"hash\":\"22f6cfecfd3194b13ad2aa2fa84e4f56a4127be7\"},{\"path\":\"app/client/views/application/recovery.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/application/recovery.js?eee22b21492d4accda91b968ef73b52231cec9fc\",\"size\":1885,\"hash\":\"eee22b21492d4accda91b968ef73b52231cec9fc\"},{\"path\":\"app/client/views/application/register.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/application/register.js?d0bad05ddbfb9eb8f13ccb4f37da89591f995857\",\"size\":1012,\"hash\":\"d0bad05ddbfb9eb8f13ccb4f37da89591f995857\"},{\"path\":\"app/client/views/bookmark/bookmark_item.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/bookmark/bookmark_item.js?1679ae8936fac3760e236d774d242a5196a03b11\",\"size\":2584,\"hash\":\"1679ae8936fac3760e236d774d242a5196a03b11\"},{\"path\":\"app/client/views/bookmark/bookmark_page.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/bookmark/bookmark_page.js?a73ad87fa56d390a4642e8b52cd24c04e70fc077\",\"size\":6427,\"hash\":\"a73ad87fa56d390a4642e8b52cd24c04e70fc077\"},{\"path\":\"app/client/views/bookmark/bookmark_submit.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/bookmark/bookmark_submit.js?84380e01a8a647e3fc923e45698ab4f1e42ffa0d\",\"size\":2661,\"hash\":\"84380e01a8a647e3fc923e45698ab4f1e42ffa0d\"},{\"path\":\"app/client/views/bookmark/bookmark_view.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/bookmark/bookmark_view.js?929b7a8753df102513ba81cbe74328be77c49a6b\",\"size\":2102,\"hash\":\"929b7a8753df102513ba81cbe74328be77c49a6b\"},{\"path\":\"app/client/views/bookmark/bookmarks_list.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/bookmark/bookmarks_list.js?08bc164972a8202f6154ea1b62f1a69d8632afe3\",\"size\":69,\"hash\":\"08bc164972a8202f6154ea1b62f1a69d8632afe3\"},{\"path\":\"app/client/views/favorite/favorite.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/favorite/favorite.js?4758cd5978c2d1a9899129ed7051de4c6e727b3b\",\"size\":1398,\"hash\":\"4758cd5978c2d1a9899129ed7051de4c6e727b3b\"},{\"path\":\"app/client/views/group/group_item.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/group/group_item.js?f4e261b865ff9fa748612fc9f493ab44774bc703\",\"size\":3963,\"hash\":\"f4e261b865ff9fa748612fc9f493ab44774bc703\"},{\"path\":\"app/client/views/group/group_list.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/group/group_list.js?1a48f3a072e9b5bb9281df58eb07212bf0c612d2\",\"size\":1438,\"hash\":\"1a48f3a072e9b5bb9281df58eb07212bf0c612d2\"},{\"path\":\"app/client/views/group/group_submit.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/group/group_submit.js?453fa39adb3ba657eaeaed77ad5a7ccf601da14d\",\"size\":312,\"hash\":\"453fa39adb3ba657eaeaed77ad5a7ccf601da14d\"},{\"path\":\"app/client/views/includes/errors.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/includes/errors.js?f91ea1f7be6b41c9682ad335a894d73da6c1298b\",\"size\":110,\"hash\":\"f91ea1f7be6b41c9682ad335a894d73da6c1298b\"},{\"path\":\"app/client/views/notifications/notifications.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/notifications/notifications.js?debfa7b5703ecc5292114b1a95f7e89ebf59f6f4\",\"size\":4904,\"hash\":\"debfa7b5703ecc5292114b1a95f7e89ebf59f6f4\"},{\"path\":\"app/client/views/settings/settings.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/settings/settings.js?f9ad3d7826b588cc3b77c169c769fc90d6585173\",\"size\":1395,\"hash\":\"f9ad3d7826b588cc3b77c169c769fc90d6585173\"},{\"path\":\"app/client/views/sort/sort.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/views/sort/sort.js?69231ef4b580eec351d1a1fa75c1e8298fdbfeaa\",\"size\":3362,\"hash\":\"69231ef4b580eec351d1a1fa75c1e8298fdbfeaa\"},{\"path\":\"app/client/helpers/config.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/helpers/config.js?a9947a18726beaf56e1031c56acad57eefd04bbe\",\"size\":83,\"hash\":\"a9947a18726beaf56e1031c56acad57eefd04bbe\"},{\"path\":\"app/client/helpers/errors.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/helpers/errors.js?3becad915eca46463ccac10d001e72058c25a121\",\"size\":283,\"hash\":\"3becad915eca46463ccac10d001e72058c25a121\"},{\"path\":\"app/client/helpers/navigate.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/helpers/navigate.js?80bea3e52293bd34774520e1f287ef65c9fc6b6d\",\"size\":164,\"hash\":\"80bea3e52293bd34774520e1f287ef65c9fc6b6d\"},{\"path\":\"app/client/42favs.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/42favs.js?5eed0d39d5605bbf6fbbddc8055e70cf6b2a307d\",\"size\":328,\"hash\":\"5eed0d39d5605bbf6fbbddc8055e70cf6b2a307d\"},{\"path\":\"packages/service-configuration.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/service-configuration.js?262da6fb1e9c97be84333c429c9a2929c80f8e3b\",\"sourceMap\":\"packages/service-configuration.js.map\",\"sourceMapUrl\":\"/packages/262da6fb1e9c97be84333c429c9a2929c80f8e3b.map\",\"size\":5082,\"hash\":\"262da6fb1e9c97be84333c429c9a2929c80f8e3b\"},{\"path\":\"packages/velocity_test-proxy.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_test-proxy.js?736641e387e34afe49c29d7838d56e5c41d870ef\",\"sourceMap\":\"packages/velocity_test-proxy.js.map\",\"sourceMapUrl\":\"/packages/736641e387e34afe49c29d7838d56e5c41d870ef.map\",\"size\":14223,\"hash\":\"736641e387e34afe49c29d7838d56e5c41d870ef\"},{\"path\":\"packages/velocity_node-soft-mirror.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_node-soft-mirror.js?acf27a727fa9aa2f29f237ade3b2046fb9890e36\",\"sourceMap\":\"packages/velocity_node-soft-mirror.js.map\",\"sourceMapUrl\":\"/packages/acf27a727fa9aa2f29f237ade3b2046fb9890e36.map\",\"size\":11067,\"hash\":\"acf27a727fa9aa2f29f237ade3b2046fb9890e36\"},{\"path\":\"720dacafdf9e30c6f8e6211fbbee3ecf8ed3daa7.css\",\"where\":\"client\",\"type\":\"css\",\"cacheable\":true,\"url\":\"/720dacafdf9e30c6f8e6211fbbee3ecf8ed3daa7.css\",\"sourceMap\":\"720dacafdf9e30c6f8e6211fbbee3ecf8ed3daa7.css.map\",\"sourceMapUrl\":\"/720dacafdf9e30c6f8e6211fbbee3ecf8ed3daa7.map\",\"size\":212057,\"hash\":\"720dacafdf9e30c6f8e6211fbbee3ecf8ed3daa7\"},{\"path\":\"packages/mizzao_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.eot\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/mizzao_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.eot\",\"size\":20335,\"hash\":\"f3a9a3b609133c3d21d6b42abbf7f43bd111df72\"},{\"path\":\"packages/mizzao_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.ttf\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/mizzao_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.ttf\",\"size\":41280,\"hash\":\"aafafdc09404c4aa4447d7e898a2183def9cc1b1\"},{\"path\":\"packages/mizzao_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/mizzao_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.svg\",\"size\":62926,\"hash\":\"66b1fc67e37d01ee45ca75c4eefb144d2dbe98fa\"},{\"path\":\"packages/mizzao_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.woff\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/mizzao_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.woff\",\"size\":23320,\"hash\":\"22037a3455914e5662fa51a596677bdb329e2c5c\"},{\"path\":\"packages/velocity_html-reporter/lib/velocity_logo.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/velocity_html-reporter/lib/velocity_logo.svg\",\"size\":3723,\"hash\":\"bd19ecdc8eb1084f7bb562c298e4ce41f9cdc698\"},{\"path\":\"packages/velocity_html-reporter/lib/velocity_cog.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/velocity_html-reporter/lib/velocity_cog.svg\",\"size\":987,\"hash\":\"6e74acfffcbd2bafdc8a95d9db7762ece07b1e81\"},{\"path\":\"packages/velocity_html-reporter/lib/icon-time.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/velocity_html-reporter/lib/icon-time.png\",\"size\":2834,\"hash\":\"868f492022a4dab0f1522de6aae0773531bc6e85\"},{\"path\":\"app/default_icon.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/default_icon.png\",\"size\":2434,\"hash\":\"b57413995ec1d0106b4b081fac14037426d949c5\"},{\"path\":\"app/favicon.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/favicon.png\",\"size\":20265,\"hash\":\"dc057a32c3cd462c0da1a561d2efaad98d17d2ee\"},{\"path\":\"app/fonts/futuralt-book-demo.html\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/fonts/futuralt-book-demo.html\",\"size\":37629,\"hash\":\"cc297fe56b6f6e1eb7530131eb57e729ba7cc7b1\"},{\"path\":\"app/fonts/futuralt-book-webfont.eot\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/fonts/futuralt-book-webfont.eot\",\"size\":18467,\"hash\":\"010b0a74f6c74a1be0594db19f48aa26da4b8e39\"},{\"path\":\"app/fonts/futuralt-book-webfont.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/fonts/futuralt-book-webfont.svg\",\"size\":55209,\"hash\":\"b40f15107bdf08efb2b382f157218fb933f9519f\"},{\"path\":\"app/fonts/futuralt-book-webfont.ttf\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/fonts/futuralt-book-webfont.ttf\",\"size\":38720,\"hash\":\"7b752660eead20041dbfade65103a491257e5989\"},{\"path\":\"app/fonts/futuralt-book-webfont.woff\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/fonts/futuralt-book-webfont.woff\",\"size\":21712,\"hash\":\"79f766852917dbdd717d9a000e00185a8c62d8c3\"},{\"path\":\"app/fonts/futuralt-book-webfont.woff2\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/fonts/futuralt-book-webfont.woff2\",\"size\":16616,\"hash\":\"2ede9f1cc150b1a51eba1decd1b825b1ce16d456\"},{\"path\":\"app/fonts/futuralt-light-demo.html\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/fonts/futuralt-light-demo.html\",\"size\":37635,\"hash\":\"922bbfa136b4173255139a51c11f7b1a4b320275\"},{\"path\":\"app/fonts/futuralt-light-webfont.eot\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/fonts/futuralt-light-webfont.eot\",\"size\":18520,\"hash\":\"da81347ec6073a1bd190e02a86fcd3f66940352e\"},{\"path\":\"app/fonts/futuralt-light-webfont.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/fonts/futuralt-light-webfont.svg\",\"size\":56484,\"hash\":\"4d9ea41bba349148beb42c30ddd4cd32b5475489\"},{\"path\":\"app/fonts/futuralt-light-webfont.ttf\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/fonts/futuralt-light-webfont.ttf\",\"size\":38980,\"hash\":\"78dafdd821dd1e0c4ef44671051038bb13915d9d\"},{\"path\":\"app/fonts/futuralt-light-webfont.woff\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/fonts/futuralt-light-webfont.woff\",\"size\":21700,\"hash\":\"fb3661d69ae99ba22124d02eb694b66c098f20be\"},{\"path\":\"app/fonts/futuralt-light-webfont.woff2\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/fonts/futuralt-light-webfont.woff2\",\"size\":16604,\"hash\":\"ba4fe6fc321ad473996516da7530cd5c8b2ad622\"},{\"path\":\"app/fonts/generator_config.txt\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/fonts/generator_config.txt\",\"size\":559,\"hash\":\"28fa455c714f2c9cf56344a3cdf3910d732deb89\"},{\"path\":\"app/fonts/stylesheet.css\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/fonts/stylesheet.css\",\"size\":1043,\"hash\":\"85a8c2f088c0f5875c339c23656debdd4da48b1e\"},{\"path\":\"app/images/landing-background-top.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/images/landing-background-top.png\",\"size\":9820,\"hash\":\"8674d7d2c9eef9d6922c004f5ecb6df77d622dba\"},{\"path\":\"app/images/landing-computer.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/images/landing-computer.png\",\"size\":41964,\"hash\":\"06a0ae4e82fb8e03704d83fc4e9b9df08ed3ac0d\"},{\"path\":\"app/images/landing-logo.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/images/landing-logo.png\",\"size\":3010,\"hash\":\"09fbe8996a5130b299189e1ab05c39dfecac3ce6\"},{\"path\":\"app/images/mascotte.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/images/mascotte.png\",\"size\":99494,\"hash\":\"eebdc30c4388d1ad67f049cf9af418c1dda2efc5\"},{\"path\":\"app/images/sprites.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/images/sprites.png\",\"size\":7581,\"hash\":\"c42fca3d9f493405ea258af1ef2ce90ea48977d8\"},{\"path\":\"app/images/sprites.psd\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/images/sprites.psd\",\"size\":10393861,\"hash\":\"9ec520494fa2fbb1c1c591a6498aa7368120e663\"},{\"path\":\"app/fonts/specimen_files/easytabs.js\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/fonts/specimen_files/easytabs.js\",\"size\":1082,\"hash\":\"fde624ee6e7aa7c88f267dde13fc458f4a2471b5\"},{\"path\":\"app/fonts/specimen_files/grid_12-825-55-15.css\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/fonts/specimen_files/grid_12-825-55-15.css\",\"size\":4597,\"hash\":\"870c69535dfe53e0acc9c5d85af5c198afb7550d\"},{\"path\":\"app/fonts/specimen_files/specimen_stylesheet.css\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/fonts/specimen_files/specimen_stylesheet.css\",\"size\":7310,\"hash\":\"7af68f60ed4b6f0e70defea7da3555d83813f564\"},{\"path\":\"head.html\",\"where\":\"internal\",\"type\":\"head\",\"hash\":\"6a52acd9bc3fbf8c367778ac2a94ffaca575f4a5\"}],\"version\":\"3e5c43398c86dcf05b36366bba038cdb5165164c\"}"
                },
                "type": {
                  "type": "constant",
                  "value": "json"
                }
              }
            }
          }
        },
        "inlineScriptsAllowed": {
          "type": "function"
        },
        "setInlineScriptsAllowed": {
          "type": "function"
        },
        "setBundledJsCssPrefix": {
          "type": "function"
        },
        "addStaticJs": {
          "type": "function"
        },
        "getBoilerplate": {
          "type": "function"
        },
        "additionalStaticJs": {
          "type": "object"
        },
        "refreshableAssets": {
          "type": "object",
          "members": {
            "allCss": {
              "type": "array"
            }
          }
        }
      }
    }
  },
  "check": {
    "check": {
      "type": "function"
    },
    "Match": {
      "type": "object",
      "members": {
        "Optional": {
          "type": "function"
        },
        "OneOf": {
          "type": "function"
        },
        "Any": {
          "type": "array"
        },
        "Where": {
          "type": "function"
        },
        "ObjectIncluding": {
          "type": "function"
        },
        "ObjectWithValues": {
          "type": "function"
        },
        "Integer": {
          "type": "array"
        },
        "Error": {
          "type": "function",
          "refID": 13,
          "members": {
            "captureStackTrace": {
              "type": "function"
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 13
                }
              }
            }
          }
        },
        "test": {
          "type": "function"
        }
      }
    }
  },
  "retry": {
    "Retry": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "clear": {
              "type": "function"
            },
            "retryLater": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "callback-hook": {
    "Hook": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "register": {
              "type": "function"
            },
            "each": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "ddp": {
    "DDP": {
      "type": "object",
      "members": {
        "ConnectionError": {
          "type": "function",
          "refID": 1,
          "members": {
            "captureStackTrace": {
              "type": "function",
              "refID": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                }
              }
            }
          }
        },
        "ForcedReconnectError": {
          "type": "function",
          "refID": 7,
          "members": {
            "captureStackTrace": {
              "ref": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "ref": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 7
                }
              }
            }
          }
        },
        "randomStream": {
          "type": "function"
        },
        "connect": {
          "type": "function"
        }
      }
    },
    "DDPServer": {
      "type": "object"
    },
    "LivedataTest": {
      "type": "object",
      "members": {
        "ClientStream": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "send": {
                  "type": "function"
                },
                "on": {
                  "type": "function"
                },
                "reconnect": {
                  "type": "function"
                },
                "disconnect": {
                  "type": "function"
                },
                "status": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toSockjsUrl": {
          "type": "function"
        },
        "SessionCollectionView": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "isEmpty": {
                  "type": "function"
                },
                "diff": {
                  "type": "function"
                },
                "diffDocument": {
                  "type": "function"
                },
                "added": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "removed": {
                  "type": "function"
                }
              }
            }
          }
        },
        "calculateVersion": {
          "type": "function"
        },
        "SUPPORTED_DDP_VERSIONS": {
          "type": "array"
        },
        "Connection": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "registerStore": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "methods": {
                  "type": "function"
                },
                "call": {
                  "type": "function"
                },
                "apply": {
                  "type": "function"
                },
                "status": {
                  "type": "function"
                },
                "reconnect": {
                  "type": "function"
                },
                "disconnect": {
                  "type": "function"
                },
                "close": {
                  "type": "function"
                },
                "userId": {
                  "type": "function"
                },
                "setUserId": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "follower-livedata": {
    "Follower": {
      "type": "object",
      "members": {
        "connect": {
          "type": "function"
        }
      }
    }
  },
  "application-configuration": {
    "AppConfig": {
      "type": "object",
      "members": {
        "findGalaxy": {
          "type": "function"
        },
        "getAppConfig": {
          "type": "function"
        },
        "getStarForThisJob": {
          "type": "function"
        },
        "configurePackage": {
          "type": "function"
        },
        "configureService": {
          "type": "function"
        }
      }
    }
  },
  "binary-heap": {
    "MaxHeap": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            },
            "maxElementId": {
              "type": "function"
            }
          }
        }
      }
    },
    "MinHeap": {
      "type": "function",
      "refID": 0,
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "maxElementId": {
              "type": "function"
            },
            "minElementId": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            }
          }
        }
      }
    },
    "MinMaxHeap": {
      "type": "function",
      "refID": 0,
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            },
            "minElementId": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "maxElementId": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "mongo": {
    "MongoTest": {
      "type": "object",
      "members": {
        "DocFetcher": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "fetch": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Mongo": {
      "type": "object",
      "members": {
        "Collection": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "refID": 2,
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "refID": 20,
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "future": {
              "type": "function"
            },
            "deprecate": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "getAll": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "findAndModify": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                },
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "upsert": {
                  "type": "function"
                },
                "allow": {
                  "type": "function"
                },
                "deny": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ObjectID": {
          "ref": 20
        },
        "Cursor": {
          "ref": 2
        }
      }
    }
  },
  "autoupdate": {
    "Autoupdate": {
      "type": "object",
      "members": {
        "autoupdateVersion": {
          "type": "constant",
          "value": "2pe3233EEzgij67Cr"
        },
        "autoupdateVersionRefreshable": {
          "type": "constant",
          "value": "bb7d146655bc518af63e3423f7b400ab071727c7"
        },
        "autoupdateVersionCordova": {
          "type": "constant",
          "value": "none"
        },
        "appId": {
          "type": "constant",
          "value": "1fyxn7l1k2qxnynw3tjh"
        }
      }
    }
  },
  "meteor-platform": {},
  "iron:core": {
    "Iron": {
      "type": "object",
      "members": {
        "utils": {
          "type": "object",
          "members": {
            "assert": {
              "type": "function"
            },
            "warn": {
              "type": "function"
            },
            "defaultValue": {
              "type": "function"
            },
            "inherits": {
              "type": "function"
            },
            "extend": {
              "type": "function"
            },
            "namespace": {
              "type": "function"
            },
            "resolve": {
              "type": "function"
            },
            "capitalize": {
              "type": "function"
            },
            "classCase": {
              "type": "function"
            },
            "camelCase": {
              "type": "function"
            },
            "notifyDeprecated": {
              "type": "function"
            },
            "withDeprecatedNotice": {
              "type": "function"
            },
            "debug": {
              "type": "function"
            },
            "get": {
              "type": "function"
            }
          }
        },
        "DynamicTemplate": {
          "type": "function",
          "members": {
            "getParentDataContext": {
              "type": "function",
              "refID": 31
            },
            "getDataContext": {
              "type": "function",
              "refID": 33
            },
            "getInclusionArguments": {
              "type": "function",
              "refID": 35
            },
            "args": {
              "type": "function",
              "refID": 37
            },
            "extend": {
              "type": "function",
              "refID": 39
            },
            "findFirstLookupHost": {
              "type": "function",
              "refID": 41
            },
            "findLookupHostWithProperty": {
              "type": "function",
              "refID": 43
            },
            "findLookupHostWithHelper": {
              "type": "function",
              "refID": 45
            },
            "prototype": {
              "type": "object",
              "members": {
                "template": {
                  "type": "function",
                  "refID": 48
                },
                "defaultTemplate": {
                  "type": "function",
                  "refID": 50
                },
                "clear": {
                  "type": "function"
                },
                "data": {
                  "type": "function",
                  "refID": 54
                },
                "create": {
                  "type": "function",
                  "refID": 56
                },
                "renderView": {
                  "type": "function",
                  "refID": 58
                },
                "destroy": {
                  "type": "function",
                  "refID": 60
                },
                "onViewCreated": {
                  "type": "function",
                  "refID": 62
                },
                "onViewReady": {
                  "type": "function",
                  "refID": 64
                },
                "onViewDestroyed": {
                  "type": "function",
                  "refID": 66
                },
                "events": {
                  "type": "function",
                  "refID": 68
                },
                "insert": {
                  "type": "function",
                  "refID": 70
                }
              }
            }
          }
        },
        "Layout": {
          "type": "function",
          "refID": 72,
          "members": {
            "DEFAULT_REGION": {
              "type": "constant",
              "value": "main"
            },
            "getParentDataContext": {
              "ref": 31
            },
            "getDataContext": {
              "ref": 33
            },
            "getInclusionArguments": {
              "ref": 35
            },
            "args": {
              "ref": 37
            },
            "extend": {
              "ref": 39
            },
            "findFirstLookupHost": {
              "ref": 41
            },
            "findLookupHostWithProperty": {
              "ref": 43
            },
            "findLookupHostWithHelper": {
              "ref": 45
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 72
                },
                "region": {
                  "type": "function"
                },
                "destroyRegions": {
                  "type": "function"
                },
                "render": {
                  "type": "function"
                },
                "has": {
                  "type": "function"
                },
                "regionKeys": {
                  "type": "function"
                },
                "clear": {
                  "type": "function"
                },
                "clearAll": {
                  "type": "function"
                },
                "beginRendering": {
                  "type": "function"
                },
                "onRegionCreated": {
                  "type": "function"
                },
                "onRegionRendered": {
                  "type": "function"
                },
                "onRegionDestroyed": {
                  "type": "function"
                },
                "template": {
                  "ref": 48
                },
                "defaultTemplate": {
                  "ref": 50
                },
                "data": {
                  "ref": 54
                },
                "create": {
                  "ref": 56
                },
                "renderView": {
                  "ref": 58
                },
                "destroy": {
                  "ref": 60
                },
                "onViewCreated": {
                  "ref": 62
                },
                "onViewReady": {
                  "ref": 64
                },
                "onViewDestroyed": {
                  "ref": 66
                },
                "events": {
                  "ref": 68
                },
                "insert": {
                  "ref": 70
                }
              }
            }
          }
        },
        "Url": {
          "type": "function",
          "members": {
            "normalize": {
              "type": "function"
            },
            "isSameOrigin": {
              "type": "function"
            },
            "fromQueryString": {
              "type": "function"
            },
            "toQueryString": {
              "type": "function"
            },
            "parse": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "test": {
                  "type": "function"
                },
                "exec": {
                  "type": "function"
                },
                "params": {
                  "type": "function"
                },
                "resolve": {
                  "type": "function"
                }
              }
            }
          }
        },
        "MiddlewareStack": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "findByName": {
                  "type": "function"
                },
                "push": {
                  "type": "function"
                },
                "append": {
                  "type": "function"
                },
                "insertAt": {
                  "type": "function"
                },
                "insertBefore": {
                  "type": "function"
                },
                "insertAfter": {
                  "type": "function"
                },
                "concat": {
                  "type": "function"
                },
                "dispatch": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Controller": {
          "type": "function",
          "members": {
            "extend": {
              "type": "function",
              "refID": 135
            },
            "events": {
              "type": "function",
              "refID": 137
            },
            "helpers": {
              "type": "function",
              "refID": 139
            },
            "prototype": {
              "type": "object",
              "members": {
                "layout": {
                  "type": "function",
                  "refID": 142
                },
                "render": {
                  "type": "function",
                  "refID": 144
                },
                "beginRendering": {
                  "type": "function",
                  "refID": 146
                },
                "init": {
                  "type": "function"
                },
                "wait": {
                  "type": "function",
                  "refID": 150
                },
                "ready": {
                  "type": "function",
                  "refID": 152
                }
              }
            }
          }
        },
        "RouteController": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 135
            },
            "events": {
              "ref": 137
            },
            "helpers": {
              "ref": 139
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "type": "function"
                },
                "lookupOption": {
                  "type": "function"
                },
                "configureFromUrl": {
                  "type": "function"
                },
                "runHooks": {
                  "type": "function"
                },
                "getParams": {
                  "type": "function"
                },
                "setParams": {
                  "type": "function"
                },
                "init": {
                  "type": "function"
                },
                "dispatch": {
                  "type": "function"
                },
                "layout": {
                  "ref": 142
                },
                "render": {
                  "ref": 144
                },
                "beginRendering": {
                  "ref": 146
                },
                "wait": {
                  "ref": 150
                },
                "ready": {
                  "ref": 152
                }
              }
            }
          }
        },
        "Route": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getName": {
                  "type": "function"
                },
                "findControllerConstructor": {
                  "type": "function"
                },
                "createController": {
                  "type": "function"
                },
                "setControllerParams": {
                  "type": "function"
                },
                "dispatch": {
                  "type": "function"
                },
                "path": {
                  "type": "function"
                },
                "url": {
                  "type": "function"
                },
                "params": {
                  "type": "function"
                },
                "get": {
                  "type": "function"
                },
                "post": {
                  "type": "function"
                },
                "put": {
                  "type": "function"
                },
                "delete": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Router": {
          "type": "function",
          "members": {
            "HOOK_TYPES": {
              "type": "array"
            },
            "hooks": {
              "type": "object",
              "members": {
                "loading": {
                  "type": "function"
                },
                "dataNotFound": {
                  "type": "function"
                }
              }
            },
            "plugins": {
              "type": "object",
              "members": {
                "loading": {
                  "type": "function"
                },
                "dataNotFound": {
                  "type": "function"
                }
              }
            },
            "bodyParser": {
              "type": "function",
              "members": {
                "json": {
                  "type": "function"
                },
                "raw": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                },
                "urlencoded": {
                  "type": "function"
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "init": {
                  "type": "function"
                },
                "configure": {
                  "type": "function"
                },
                "map": {
                  "type": "function"
                },
                "route": {
                  "type": "function"
                },
                "findFirstRoute": {
                  "type": "function"
                },
                "path": {
                  "type": "function"
                },
                "url": {
                  "type": "function"
                },
                "createController": {
                  "type": "function"
                },
                "setTemplateNameConverter": {
                  "type": "function"
                },
                "setControllerNameConverter": {
                  "type": "function"
                },
                "toTemplateName": {
                  "type": "function"
                },
                "toControllerName": {
                  "type": "function"
                },
                "addHook": {
                  "type": "function"
                },
                "lookupHook": {
                  "type": "function"
                },
                "getHooks": {
                  "type": "function"
                },
                "onRun": {
                  "type": "function"
                },
                "onRerun": {
                  "type": "function"
                },
                "onBeforeAction": {
                  "type": "function"
                },
                "onAfterAction": {
                  "type": "function"
                },
                "onStop": {
                  "type": "function"
                },
                "waitOn": {
                  "type": "function"
                },
                "subscriptions": {
                  "type": "function"
                },
                "load": {
                  "type": "function"
                },
                "before": {
                  "type": "function"
                },
                "after": {
                  "type": "function"
                },
                "unload": {
                  "type": "function"
                },
                "plugin": {
                  "type": "function"
                },
                "configureBodyParsers": {
                  "type": "function"
                },
                "start": {
                  "type": "function"
                },
                "dispatch": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "iron:dynamic-template": {},
  "iron:layout": {},
  "iron:url": {},
  "iron:middleware-stack": {
    "Handler": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "test": {
              "type": "function"
            },
            "params": {
              "type": "function"
            },
            "resolve": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "iron:location": {},
  "reactive-dict": {
    "ReactiveDict": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "set": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "equals": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "iron:controller": {},
  "iron:router": {
    "Router": {
      "type": "function",
      "members": {
        "routes": {
          "type": "array"
        },
        "options": {
          "type": "object",
          "members": {
            "layoutTemplate": {
              "type": "constant",
              "value": "layout"
            },
            "loadingTemplate": {
              "type": "constant",
              "value": "loading"
            },
            "notFoundTemplate": {
              "type": "constant",
              "value": "notFound"
            }
          }
        },
        "init": {
          "type": "function"
        },
        "configure": {
          "type": "function"
        },
        "map": {
          "type": "function"
        },
        "route": {
          "type": "function"
        },
        "findFirstRoute": {
          "type": "function"
        },
        "path": {
          "type": "function"
        },
        "url": {
          "type": "function"
        },
        "createController": {
          "type": "function"
        },
        "setTemplateNameConverter": {
          "type": "function"
        },
        "setControllerNameConverter": {
          "type": "function"
        },
        "toTemplateName": {
          "type": "function"
        },
        "toControllerName": {
          "type": "function"
        },
        "addHook": {
          "type": "function"
        },
        "lookupHook": {
          "type": "function"
        },
        "getHooks": {
          "type": "function"
        },
        "onRun": {
          "type": "function"
        },
        "onRerun": {
          "type": "function"
        },
        "onBeforeAction": {
          "type": "function"
        },
        "onAfterAction": {
          "type": "function"
        },
        "onStop": {
          "type": "function"
        },
        "waitOn": {
          "type": "function"
        },
        "subscriptions": {
          "type": "function"
        },
        "load": {
          "type": "function"
        },
        "before": {
          "type": "function"
        },
        "after": {
          "type": "function"
        },
        "unload": {
          "type": "function"
        },
        "plugin": {
          "type": "function"
        },
        "configureBodyParsers": {
          "type": "function"
        },
        "start": {
          "type": "function"
        },
        "dispatch": {
          "type": "function"
        }
      }
    },
    "RouteController": {
      "type": "function",
      "members": {
        "extend": {
          "type": "function"
        },
        "events": {
          "type": "function"
        },
        "helpers": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "type": "function"
            },
            "lookupOption": {
              "type": "function"
            },
            "configureFromUrl": {
              "type": "function"
            },
            "runHooks": {
              "type": "function"
            },
            "getParams": {
              "type": "function"
            },
            "setParams": {
              "type": "function"
            },
            "init": {
              "type": "function"
            },
            "dispatch": {
              "type": "function"
            },
            "layout": {
              "type": "function"
            },
            "render": {
              "type": "function"
            },
            "beginRendering": {
              "type": "function"
            },
            "wait": {
              "type": "function"
            },
            "ready": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "mizzao:bootstrap-3": {},
  "npm-bcrypt": {
    "NpmModuleBcrypt": {
      "type": "object",
      "members": {
        "gen_salt_sync": {
          "type": "function"
        },
        "genSaltSync": {
          "type": "function"
        },
        "gen_salt": {
          "type": "function"
        },
        "genSalt": {
          "type": "function"
        },
        "encrypt_sync": {
          "type": "function"
        },
        "hashSync": {
          "type": "function"
        },
        "encrypt": {
          "type": "function"
        },
        "hash": {
          "type": "function"
        },
        "compare_sync": {
          "type": "function"
        },
        "compareSync": {
          "type": "function"
        },
        "compare": {
          "type": "function"
        },
        "get_rounds": {
          "type": "function"
        },
        "getRounds": {
          "type": "function"
        }
      }
    }
  },
  "accounts-base": {
    "Accounts": {
      "type": "object",
      "members": {
        "config": {
          "type": "function"
        },
        "LoginCancelledError": {
          "type": "function",
          "members": {
            "numericError": {
              "type": "constant",
              "value": 145546287
            }
          }
        },
        "validateLoginAttempt": {
          "type": "function"
        },
        "onLogin": {
          "type": "function"
        },
        "onLoginFailure": {
          "type": "function"
        },
        "registerLoginHandler": {
          "type": "function"
        },
        "destroyToken": {
          "type": "function"
        },
        "onCreateUser": {
          "type": "function"
        },
        "insertUserDoc": {
          "type": "function"
        },
        "validateNewUser": {
          "type": "function"
        },
        "updateOrCreateUserFromExternalService": {
          "type": "function"
        },
        "addAutopublishFields": {
          "type": "function"
        },
        "urls": {
          "type": "object",
          "members": {
            "resetPassword": {
              "type": "function"
            },
            "verifyEmail": {
              "type": "function"
            },
            "enrollAccount": {
              "type": "function"
            }
          }
        },
        "emailTemplates": {
          "type": "object",
          "members": {
            "from": {
              "type": "constant",
              "value": "Meteor Accounts <no-reply@meteor.com>"
            },
            "siteName": {
              "type": "constant",
              "value": "localhost:3000"
            },
            "resetPassword": {
              "type": "object",
              "members": {
                "subject": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                }
              }
            },
            "verifyEmail": {
              "type": "object",
              "members": {
                "subject": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                }
              }
            },
            "enrollAccount": {
              "type": "object",
              "members": {
                "subject": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                }
              }
            }
          }
        },
        "setPassword": {
          "type": "function"
        },
        "sendResetPasswordEmail": {
          "type": "function"
        },
        "sendEnrollmentEmail": {
          "type": "function"
        },
        "sendVerificationEmail": {
          "type": "function"
        },
        "createUser": {
          "type": "function"
        },
        "loginServiceConfiguration": {
          "type": "object",
          "members": {
            "constructor": {
              "type": "function",
              "refID": 58,
              "members": {
                "Cursor": {
                  "type": "function",
                  "members": {
                    "prototype": {
                      "type": "object",
                      "members": {
                        "rewind": {
                          "type": "function"
                        },
                        "forEach": {
                          "type": "function"
                        },
                        "getTransform": {
                          "type": "function"
                        },
                        "map": {
                          "type": "function"
                        },
                        "fetch": {
                          "type": "function"
                        },
                        "count": {
                          "type": "function"
                        },
                        "observe": {
                          "type": "function"
                        },
                        "observeChanges": {
                          "type": "function"
                        }
                      }
                    }
                  }
                },
                "ObjectID": {
                  "type": "function",
                  "members": {
                    "prototype": {
                      "type": "object",
                      "members": {
                        "toString": {
                          "type": "function"
                        },
                        "equals": {
                          "type": "function"
                        },
                        "clone": {
                          "type": "function"
                        },
                        "typeName": {
                          "type": "function"
                        },
                        "getTimestamp": {
                          "type": "function"
                        },
                        "toHexString": {
                          "type": "function",
                          "refID": 89
                        },
                        "toJSONValue": {
                          "ref": 89
                        },
                        "valueOf": {
                          "ref": 89
                        }
                      }
                    }
                  }
                },
                "future": {
                  "type": "function"
                },
                "deprecate": {
                  "type": "function"
                },
                "get": {
                  "type": "function"
                },
                "getAll": {
                  "type": "function"
                },
                "prototype": {
                  "type": "object",
                  "members": {
                    "constructor": {
                      "ref": 58
                    },
                    "findAndModify": {
                      "type": "function",
                      "refID": 100
                    },
                    "find": {
                      "type": "function",
                      "refID": 102
                    },
                    "findOne": {
                      "type": "function",
                      "refID": 104
                    },
                    "insert": {
                      "type": "function",
                      "refID": 106
                    },
                    "update": {
                      "type": "function",
                      "refID": 108
                    },
                    "remove": {
                      "type": "function",
                      "refID": 110
                    },
                    "upsert": {
                      "type": "function",
                      "refID": 112
                    },
                    "allow": {
                      "type": "function",
                      "refID": 114
                    },
                    "deny": {
                      "type": "function",
                      "refID": 116
                    }
                  }
                }
              }
            },
            "findAndModify": {
              "ref": 100
            },
            "find": {
              "ref": 102
            },
            "findOne": {
              "ref": 104
            },
            "insert": {
              "ref": 106
            },
            "update": {
              "ref": 108
            },
            "remove": {
              "ref": 110
            },
            "upsert": {
              "ref": 112
            },
            "allow": {
              "ref": 114
            },
            "deny": {
              "ref": 116
            }
          }
        },
        "ConfigError": {
          "type": "function"
        }
      }
    },
    "AccountsTest": {
      "type": "undefined"
    }
  },
  "sha": {
    "SHA256": {
      "type": "function"
    }
  },
  "srp": {
    "SRP": {
      "type": "object",
      "members": {
        "generateVerifier": {
          "type": "function"
        },
        "matchVerifier": {
          "type": "object",
          "members": {
            "identity": {
              "type": "function",
              "refID": 4
            },
            "salt": {
              "ref": 4
            },
            "verifier": {
              "ref": 4
            }
          }
        }
      }
    }
  },
  "email": {
    "Email": {
      "type": "object",
      "members": {
        "send": {
          "type": "function"
        }
      }
    },
    "EmailTest": {
      "type": "object",
      "members": {
        "overrideOutputStream": {
          "type": "function"
        },
        "restoreOutputStream": {
          "type": "function"
        },
        "hookSend": {
          "type": "function"
        }
      }
    }
  },
  "accounts-password": {},
  "ian:accounts-ui-bootstrap-3": {},
  "sacha:spin": {},
  "mizzao:bootboxjs": {},
  "meteorhacks:kadira-binary-deps": {
    "KadiraBinaryDeps": {
      "type": "object",
      "members": {
        "require": {
          "type": "function"
        }
      }
    }
  },
  "mongo-livedata": {},
  "meteorhacks:meteorx": {
    "MeteorX": {
      "type": "object",
      "members": {
        "Server": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onConnection": {
                  "type": "function"
                },
                "publish": {
                  "type": "function"
                },
                "methods": {
                  "type": "function"
                },
                "call": {
                  "type": "function"
                },
                "apply": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Session": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "sendReady": {
                  "type": "function"
                },
                "sendAdded": {
                  "type": "function"
                },
                "sendChanged": {
                  "type": "function"
                },
                "sendRemoved": {
                  "type": "function"
                },
                "getSendCallbacks": {
                  "type": "function"
                },
                "getCollectionView": {
                  "type": "function"
                },
                "added": {
                  "type": "function"
                },
                "removed": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "startUniversalSubs": {
                  "type": "function"
                },
                "close": {
                  "type": "function"
                },
                "send": {
                  "type": "function"
                },
                "sendError": {
                  "type": "function"
                },
                "processMessage": {
                  "type": "function"
                },
                "protocol_handlers": {
                  "type": "object",
                  "members": {
                    "sub": {
                      "type": "function"
                    },
                    "unsub": {
                      "type": "function"
                    },
                    "method": {
                      "type": "function"
                    }
                  }
                }
              }
            }
          }
        },
        "Subscription": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "error": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                },
                "onStop": {
                  "type": "function"
                },
                "added": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "removed": {
                  "type": "function"
                },
                "ready": {
                  "type": "function"
                }
              }
            }
          }
        },
        "SessionCollectionView": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "isEmpty": {
                  "type": "function"
                },
                "diff": {
                  "type": "function"
                },
                "diffDocument": {
                  "type": "function"
                },
                "added": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "removed": {
                  "type": "function"
                }
              }
            }
          }
        },
        "SessionDocumentView": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getFields": {
                  "type": "function"
                },
                "clearField": {
                  "type": "function"
                },
                "changeField": {
                  "type": "function"
                }
              }
            }
          }
        },
        "MongoConnection": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "close": {
                  "type": "function"
                },
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "dropCollection": {
                  "type": "function"
                },
                "upsert": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                },
                "tail": {
                  "type": "function"
                }
              }
            }
          }
        },
        "MongoCursor": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "forEach": {
                  "type": "function"
                },
                "map": {
                  "type": "function"
                },
                "fetch": {
                  "type": "function"
                },
                "count": {
                  "type": "function"
                },
                "rewind": {
                  "type": "function"
                },
                "getTransform": {
                  "type": "function"
                },
                "observe": {
                  "type": "function"
                },
                "observeChanges": {
                  "type": "function"
                }
              }
            }
          }
        },
        "MongoOplogDriver": {
          "type": "function",
          "members": {
            "cursorSupported": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "MongoPollingDriver": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Multiplexer": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "addHandleAndSendInitialAdds": {
                  "type": "function"
                },
                "removeHandle": {
                  "type": "function"
                },
                "ready": {
                  "type": "function"
                },
                "onFlush": {
                  "type": "function"
                },
                "callbackNames": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "livedata": {
    "DDP": {
      "type": "object",
      "members": {
        "ConnectionError": {
          "type": "function",
          "refID": 1,
          "members": {
            "captureStackTrace": {
              "type": "function",
              "refID": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                }
              }
            }
          }
        },
        "ForcedReconnectError": {
          "type": "function",
          "refID": 7,
          "members": {
            "captureStackTrace": {
              "ref": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "ref": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 7
                }
              }
            }
          }
        },
        "randomStream": {
          "type": "function"
        },
        "connect": {
          "type": "function"
        }
      }
    },
    "DDPServer": {
      "type": "object"
    },
    "LivedataTest": {
      "type": "undefined"
    }
  },
  "url": {
    "URL": {
      "type": "object"
    }
  },
  "http": {
    "HTTP": {
      "type": "object",
      "members": {
        "get": {
          "type": "function"
        },
        "post": {
          "type": "function"
        },
        "put": {
          "type": "function"
        },
        "del": {
          "type": "function"
        },
        "call": {
          "type": "function"
        }
      }
    }
  },
  "meteorhacks:kadira": {
    "Kadira": {
      "type": "object",
      "members": {
        "options": {
          "type": "object",
          "members": {
            "appId": {
              "type": "constant",
              "value": "cGPbMSQY6BmwHgqvv"
            },
            "appSecret": {
              "type": "constant",
              "value": "0749090d-2185-427d-81da-ea823265cf1f"
            },
            "payloadTimeout": {
              "type": "constant",
              "value": 20000
            },
            "endpoint": {
              "type": "constant",
              "value": "https://engine.kadira.io"
            },
            "clientEngineSyncDelay": {
              "type": "constant",
              "value": 10000
            },
            "thresholds": {
              "type": "object"
            },
            "hostname": {
              "type": "constant",
              "value": "flavien-GS60-2PC-Ghost"
            },
            "proxy": {
              "type": "null",
              "value": null
            },
            "authHeaders": {
              "type": "object",
              "members": {
                "KADIRA-APP-ID": {
                  "type": "constant",
                  "value": "cGPbMSQY6BmwHgqvv"
                },
                "KADIRA-APP-SECRET": {
                  "type": "constant",
                  "value": "0749090d-2185-427d-81da-ea823265cf1f"
                },
                "Content-Type": {
                  "type": "constant",
                  "value": "application/json"
                }
              }
            }
          }
        },
        "models": {
          "type": "object",
          "members": {
            "methods": {
              "type": "object",
              "members": {
                "methodMetricsByMinute": {
                  "type": "object",
                  "members": {
                    "1425568920000": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1425568927265
                        },
                        "methods": {
                          "type": "object",
                          "members": {
                            "login": {
                              "type": "object",
                              "members": {
                                "count": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 43
                                },
                                "http": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "email": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "async": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 5
                                },
                                "total": {
                                  "type": "constant",
                                  "value": 48
                                }
                              }
                            }
                          }
                        },
                        "endTime": {
                          "type": "undefined"
                        }
                      }
                    }
                  }
                },
                "errorMap": {
                  "type": "object"
                },
                "maxEventTimesForMethods": {
                  "type": "object"
                },
                "tracerStore": {
                  "type": "object",
                  "members": {
                    "maxTotalPoints": {
                      "type": "constant",
                      "value": 30
                    },
                    "interval": {
                      "type": "constant",
                      "value": 60000
                    },
                    "archiveEvery": {
                      "type": "constant",
                      "value": 5
                    },
                    "maxTotals": {
                      "type": "object"
                    },
                    "currentMaxTrace": {
                      "type": "object",
                      "members": {
                        "method::login": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "cAZNb3K9tnt9h9Sjq"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "6"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "method"
                            },
                            "name": {
                              "type": "constant",
                              "value": "login"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1425568927265
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 48
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 43
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 5
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "traceArchive": {
                      "type": "array"
                    },
                    "processedCnt": {
                      "type": "object"
                    },
                    "errorMap": {
                      "type": "object"
                    },
                    "addTrace": {
                      "type": "function",
                      "refID": 21
                    },
                    "collectTraces": {
                      "type": "function",
                      "refID": 23
                    },
                    "start": {
                      "type": "function",
                      "refID": 25
                    },
                    "stop": {
                      "type": "function",
                      "refID": 27
                    },
                    "processTraces": {
                      "type": "function",
                      "refID": 29
                    }
                  }
                },
                "processMethod": {
                  "type": "function"
                },
                "buildPayload": {
                  "type": "function"
                }
              }
            },
            "pubsub": {
              "type": "object",
              "members": {
                "metricsByMinute": {
                  "type": "object",
                  "members": {
                    "1425568920000": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1425568926933
                        },
                        "pubs": {
                          "type": "object",
                          "members": {
                            "null(autopublish)": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesBeforeReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesAddedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesChangedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 20
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "avgDocSize": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "meteor_autoupdate_clientVersions": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 58
                                },
                                "bytesBeforeReady": {
                                  "type": "constant",
                                  "value": 622
                                },
                                "bytesAddedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesChangedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "avgDocSize": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "meteor.loginServiceConfiguration": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 74
                                },
                                "bytesBeforeReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesAddedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesChangedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "avgDocSize": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "VelocityTestFiles": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 132
                                },
                                "bytesBeforeReady": {
                                  "type": "constant",
                                  "value": 1574
                                },
                                "bytesAddedAfterReady": {
                                  "type": "constant",
                                  "value": 6888
                                },
                                "bytesChangedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "avgDocSize": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "VelocityFixtureFiles": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 142
                                },
                                "bytesBeforeReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesAddedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesChangedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "avgDocSize": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "VelocityTestReports": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 159
                                },
                                "bytesBeforeReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesAddedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesChangedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "avgDocSize": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "VelocityAggregateReports": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 163
                                },
                                "bytesBeforeReady": {
                                  "type": "constant",
                                  "value": 967
                                },
                                "bytesAddedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesChangedAfterReady": {
                                  "type": "constant",
                                  "value": 111
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "avgDocSize": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "VelocityLogs": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 166
                                },
                                "bytesBeforeReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesAddedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesChangedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "avgDocSize": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "VelocityMirrors": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 168
                                },
                                "bytesBeforeReady": {
                                  "type": "constant",
                                  "value": 1032
                                },
                                "bytesAddedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesChangedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "avgDocSize": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "tags": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 2
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 496
                                },
                                "bytesBeforeReady": {
                                  "type": "constant",
                                  "value": 192
                                },
                                "bytesAddedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesChangedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 2
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "avgDocSize": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "favorites": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 2
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 488
                                },
                                "bytesBeforeReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesAddedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesChangedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 2
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "avgDocSize": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "bookmarks": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 262
                                },
                                "bytesBeforeReady": {
                                  "type": "constant",
                                  "value": 1330
                                },
                                "bytesAddedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesChangedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "avgDocSize": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "allUser": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 268
                                },
                                "bytesBeforeReady": {
                                  "type": "constant",
                                  "value": 277
                                },
                                "bytesAddedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesChangedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "avgDocSize": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "notifications": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 278
                                },
                                "bytesBeforeReady": {
                                  "type": "constant",
                                  "value": 328
                                },
                                "bytesAddedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesChangedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "avgDocSize": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "groups": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 322
                                },
                                "bytesBeforeReady": {
                                  "type": "constant",
                                  "value": 183
                                },
                                "bytesAddedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesChangedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "avgDocSize": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "members": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 327
                                },
                                "bytesBeforeReady": {
                                  "type": "constant",
                                  "value": 143
                                },
                                "bytesAddedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesChangedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "avgDocSize": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "user-tags": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 350
                                },
                                "bytesBeforeReady": {
                                  "type": "constant",
                                  "value": 262
                                },
                                "bytesAddedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesChangedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "avgDocSize": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "login": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesBeforeReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesAddedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "bytesChangedAfterReady": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 3
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "avgDocSize": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "subscriptions": {
                  "type": "object",
                  "members": {
                    "WYXohwanydHtMgxcm": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1425568927267
                        },
                        "publication": {
                          "type": "constant",
                          "value": "meteor_autoupdate_clientVersions"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "WYXohwanydHtMgxcm"
                        }
                      }
                    },
                    "9LsxXwXcsmcP3zevt": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1425568927267
                        },
                        "publication": {
                          "type": "constant",
                          "value": "meteor.loginServiceConfiguration"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "9LsxXwXcsmcP3zevt"
                        }
                      }
                    },
                    "teEefeYnPu2x3BqxT": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1425568927267
                        },
                        "publication": {
                          "type": "constant",
                          "value": "_houston_collections"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "teEefeYnPu2x3BqxT"
                        }
                      }
                    },
                    "XEDmbmT3shCnJGJSW": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1425568927267
                        },
                        "publication": {
                          "type": "constant",
                          "value": "VelocityTestFiles"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "XEDmbmT3shCnJGJSW"
                        }
                      }
                    },
                    "eXG4mw3j3PbAQmm4w": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1425568927267
                        },
                        "publication": {
                          "type": "constant",
                          "value": "VelocityFixtureFiles"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "eXG4mw3j3PbAQmm4w"
                        }
                      }
                    },
                    "X9ZqyAe7ryJJedruH": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1425568927267
                        },
                        "publication": {
                          "type": "constant",
                          "value": "VelocityTestReports"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "X9ZqyAe7ryJJedruH"
                        }
                      }
                    },
                    "T5HDREQYrQkjyDzjP": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1425568927267
                        },
                        "publication": {
                          "type": "constant",
                          "value": "VelocityAggregateReports"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "T5HDREQYrQkjyDzjP"
                        }
                      }
                    },
                    "E7eQrsuBm4wq6BZCs": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1425568927267
                        },
                        "publication": {
                          "type": "constant",
                          "value": "VelocityLogs"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "E7eQrsuBm4wq6BZCs"
                        }
                      }
                    },
                    "cGTdxx3iqimM86kRM": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1425568927267
                        },
                        "publication": {
                          "type": "constant",
                          "value": "VelocityMirrors"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "cGTdxx3iqimM86kRM"
                        }
                      }
                    },
                    "biBJsiNjYpbheSHqy": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1425568927267
                        },
                        "publication": {
                          "type": "constant",
                          "value": "tags"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "biBJsiNjYpbheSHqy"
                        }
                      }
                    },
                    "L5HAe9yzScv6SNG7R": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1425568927267
                        },
                        "publication": {
                          "type": "constant",
                          "value": "favorites"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "L5HAe9yzScv6SNG7R"
                        }
                      }
                    },
                    "zuMnd4WYvkcxv9qHT": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1425568927267
                        },
                        "publication": {
                          "type": "constant",
                          "value": "bookmarks"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "zuMnd4WYvkcxv9qHT"
                        }
                      }
                    },
                    "63FSpYRkAAm64XaQu": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1425568927268
                        },
                        "publication": {
                          "type": "constant",
                          "value": "favorites"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "63FSpYRkAAm64XaQu"
                        }
                      }
                    },
                    "nyL3ofQBFp2YFphnP": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1425568927268
                        },
                        "publication": {
                          "type": "constant",
                          "value": "allUser"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "nyL3ofQBFp2YFphnP"
                        }
                      }
                    },
                    "F6TctBpX5cj9DvNcW": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1425568927268
                        },
                        "publication": {
                          "type": "constant",
                          "value": "notifications"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "F6TctBpX5cj9DvNcW"
                        }
                      }
                    },
                    "iDbGBWctMAEZHYSYq": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1425568927268
                        },
                        "publication": {
                          "type": "constant",
                          "value": "groups"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "iDbGBWctMAEZHYSYq"
                        }
                      }
                    },
                    "SbdGWWxCzp9fHyELF": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1425568927268
                        },
                        "publication": {
                          "type": "constant",
                          "value": "tags"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "SbdGWWxCzp9fHyELF"
                        }
                      }
                    },
                    "645sKbywwA72GGtFc": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1425568927268
                        },
                        "publication": {
                          "type": "constant",
                          "value": "members"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "645sKbywwA72GGtFc"
                        }
                      }
                    },
                    "XWybwMehNwSAM3cAo": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1425568927268
                        },
                        "publication": {
                          "type": "constant",
                          "value": "user-tags"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "XWybwMehNwSAM3cAo"
                        }
                      }
                    }
                  }
                },
                "tracerStore": {
                  "type": "object",
                  "members": {
                    "maxTotalPoints": {
                      "type": "constant",
                      "value": 30
                    },
                    "interval": {
                      "type": "constant",
                      "value": 60000
                    },
                    "archiveEvery": {
                      "type": "constant",
                      "value": 5
                    },
                    "maxTotals": {
                      "type": "object"
                    },
                    "currentMaxTrace": {
                      "type": "object",
                      "members": {
                        "sub::meteor_autoupdate_clientVersions": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "cAZNb3K9tnt9h9Sjq"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "WYXohwanydHtMgxcm"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "meteor_autoupdate_clientVersions"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1425568927267
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 58
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 44
                                },
                                "async": {
                                  "type": "constant",
                                  "value": 12
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 2
                                }
                              }
                            }
                          }
                        },
                        "sub::meteor.loginServiceConfiguration": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "cAZNb3K9tnt9h9Sjq"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "9LsxXwXcsmcP3zevt"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "meteor.loginServiceConfiguration"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1425568927267
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 74
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 59
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 15
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            }
                          }
                        },
                        "sub::_houston_collections": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "cAZNb3K9tnt9h9Sjq"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "teEefeYnPu2x3BqxT"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "_houston_collections"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1425568927267
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 128
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 75
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 53
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            }
                          }
                        },
                        "sub::VelocityTestFiles": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "cAZNb3K9tnt9h9Sjq"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "XEDmbmT3shCnJGJSW"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "VelocityTestFiles"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1425568927267
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 132
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 129
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 3
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            }
                          }
                        },
                        "sub::VelocityFixtureFiles": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "cAZNb3K9tnt9h9Sjq"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "eXG4mw3j3PbAQmm4w"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "VelocityFixtureFiles"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1425568927267
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 141
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 132
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 9
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            }
                          }
                        },
                        "sub::VelocityTestReports": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "cAZNb3K9tnt9h9Sjq"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "X9ZqyAe7ryJJedruH"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "VelocityTestReports"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1425568927267
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 159
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 142
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 17
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            }
                          }
                        },
                        "sub::VelocityAggregateReports": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "cAZNb3K9tnt9h9Sjq"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "T5HDREQYrQkjyDzjP"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "VelocityAggregateReports"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1425568927267
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 163
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 159
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 4
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            }
                          }
                        },
                        "sub::VelocityLogs": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "cAZNb3K9tnt9h9Sjq"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "E7eQrsuBm4wq6BZCs"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "VelocityLogs"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1425568927267
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 166
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 164
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 2
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            }
                          }
                        },
                        "sub::VelocityMirrors": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "cAZNb3K9tnt9h9Sjq"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "cGTdxx3iqimM86kRM"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "VelocityMirrors"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1425568927267
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 168
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 167
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            }
                          }
                        },
                        "sub::tags": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "cAZNb3K9tnt9h9Sjq"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "SbdGWWxCzp9fHyELF"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "tags"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1425568927268
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 326
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 323
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 3
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            }
                          }
                        },
                        "sub::favorites": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "cAZNb3K9tnt9h9Sjq"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "63FSpYRkAAm64XaQu"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "favorites"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1425568927268
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 262
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 261
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            }
                          }
                        },
                        "sub::bookmarks": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "cAZNb3K9tnt9h9Sjq"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "zuMnd4WYvkcxv9qHT"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "bookmarks"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1425568927267
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 262
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 226
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 36
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            }
                          }
                        },
                        "sub::allUser": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "cAZNb3K9tnt9h9Sjq"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "nyL3ofQBFp2YFphnP"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "allUser"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1425568927268
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 268
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 262
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 5
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 1
                                }
                              }
                            }
                          }
                        },
                        "sub::notifications": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "cAZNb3K9tnt9h9Sjq"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "F6TctBpX5cj9DvNcW"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "notifications"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1425568927268
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 278
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 269
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 9
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            }
                          }
                        },
                        "sub::groups": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "cAZNb3K9tnt9h9Sjq"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "iDbGBWctMAEZHYSYq"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "groups"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1425568927268
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 322
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 279
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 43
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            }
                          }
                        },
                        "sub::members": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "cAZNb3K9tnt9h9Sjq"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "645sKbywwA72GGtFc"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "members"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1425568927268
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 327
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 326
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            }
                          }
                        },
                        "sub::user-tags": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "cAZNb3K9tnt9h9Sjq"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "XWybwMehNwSAM3cAo"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "user-tags"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1425568927268
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 350
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 328
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 21
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 1
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "traceArchive": {
                      "type": "array"
                    },
                    "processedCnt": {
                      "type": "object"
                    },
                    "errorMap": {
                      "type": "object"
                    },
                    "addTrace": {
                      "ref": 21
                    },
                    "collectTraces": {
                      "ref": 23
                    },
                    "start": {
                      "ref": 25
                    },
                    "stop": {
                      "ref": 27
                    },
                    "processTraces": {
                      "ref": 29
                    }
                  }
                },
                "buildPayload": {
                  "type": "function"
                },
                "incrementHandleCount": {
                  "type": "function"
                },
                "trackCreatedObserver": {
                  "type": "function"
                },
                "trackDeletedObserver": {
                  "type": "function"
                }
              }
            },
            "system": {
              "type": "object",
              "members": {
                "startTime": {
                  "type": "constant",
                  "value": 1425568926924
                },
                "newSessions": {
                  "type": "constant",
                  "value": 0
                },
                "sessionTimeout": {
                  "type": "constant",
                  "value": 1800000
                },
                "usageLookup": {
                  "type": "function"
                },
                "buildPayload": {
                  "type": "function"
                },
                "getUsage": {
                  "type": "function"
                },
                "handleSessionActivity": {
                  "type": "function"
                },
                "countNewSession": {
                  "type": "function"
                },
                "isSessionActive": {
                  "type": "function"
                }
              }
            },
            "error": {
              "type": "object",
              "refID": 174,
              "members": {
                "appId": {
                  "type": "constant",
                  "value": "cGPbMSQY6BmwHgqvv"
                },
                "errors": {
                  "type": "object"
                },
                "startTime": {
                  "type": "constant",
                  "value": 1425568926929
                },
                "maxErrors": {
                  "type": "constant",
                  "value": 10
                },
                "addFilter": {
                  "type": "function"
                },
                "removeFilter": {
                  "type": "function"
                },
                "applyFilters": {
                  "type": "function"
                },
                "buildPayload": {
                  "type": "function"
                },
                "errorCount": {
                  "type": "function"
                },
                "trackError": {
                  "type": "function"
                }
              }
            }
          }
        },
        "env": {
          "type": "object",
          "members": {
            "currentSub": {
              "type": "null",
              "value": null
            },
            "kadiraInfo": {
              "type": "object",
              "members": {
                "slot": {
                  "type": "constant",
                  "value": 4
                },
                "get": {
                  "type": "function"
                },
                "getOrNullIfOutsideFiber": {
                  "type": "function"
                },
                "withValue": {
                  "type": "function"
                }
              }
            }
          }
        },
        "waitTimeBuilder": {
          "type": "object",
          "members": {
            "register": {
              "type": "function"
            },
            "build": {
              "type": "function"
            },
            "trackWaitTime": {
              "type": "function"
            }
          }
        },
        "errors": {
          "ref": 174
        },
        "connect": {
          "type": "function"
        },
        "authCheckFailures": {
          "type": "constant",
          "value": 0
        },
        "enableErrorTracking": {
          "type": "function"
        },
        "disableErrorTracking": {
          "type": "function"
        },
        "trackError": {
          "type": "function"
        },
        "ignoreErrorTracking": {
          "type": "function"
        },
        "checkWhyNoOplog": {
          "type": "function"
        },
        "tracer": {
          "type": "object",
          "members": {
            "start": {
              "type": "function",
              "refID": 216
            },
            "event": {
              "type": "function",
              "refID": 218
            },
            "eventEnd": {
              "type": "function",
              "refID": 220
            },
            "getLastEvent": {
              "type": "function",
              "refID": 222
            },
            "endLastEvent": {
              "type": "function",
              "refID": 224
            },
            "buildTrace": {
              "type": "function",
              "refID": 226
            },
            "addFilter": {
              "type": "function",
              "refID": 228
            }
          }
        },
        "Tracer": {
          "type": "function",
          "members": {
            "stripSensitive": {
              "type": "function"
            },
            "stripSelectors": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "start": {
                  "ref": 216
                },
                "event": {
                  "ref": 218
                },
                "eventEnd": {
                  "ref": 220
                },
                "getLastEvent": {
                  "ref": 222
                },
                "endLastEvent": {
                  "ref": 224
                },
                "buildTrace": {
                  "ref": 226
                },
                "addFilter": {
                  "ref": 228
                }
              }
            }
          }
        },
        "errorFilters": {
          "type": "object",
          "members": {
            "filterValidationErrors": {
              "type": "function"
            },
            "filterCommonMeteorErrors": {
              "type": "function"
            }
          }
        },
        "send": {
          "type": "function"
        },
        "syncedDate": {
          "type": "object",
          "members": {
            "endpoint": {
              "type": "constant",
              "value": "https://engine.kadira.io/simplentp/sync"
            },
            "diff": {
              "type": "constant",
              "value": 0
            },
            "reSyncCount": {
              "type": "constant",
              "value": 0
            },
            "reSync": {
              "type": "object",
              "members": {
                "baseTimeout": {
                  "type": "constant",
                  "value": 60000
                },
                "maxTimeout": {
                  "type": "constant",
                  "value": 600000
                },
                "minCount": {
                  "type": "constant",
                  "value": 0
                },
                "exponent": {
                  "type": "constant",
                  "value": 2.2
                },
                "minTimeout": {
                  "type": "constant",
                  "value": 10
                },
                "fuzz": {
                  "type": "constant",
                  "value": 0.5
                },
                "retryTimer": {
                  "type": "null",
                  "value": null
                },
                "clear": {
                  "type": "function"
                },
                "retryLater": {
                  "type": "function"
                }
              }
            },
            "setEndpoint": {
              "type": "function"
            },
            "getTime": {
              "type": "function"
            },
            "syncTime": {
              "type": "function"
            },
            "sync": {
              "type": "function"
            },
            "getServerTime": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "mrt:cookies": {},
  "chuangbo:cookie": {},
  "texapi": {
    "Texapi": {
      "type": "object",
      "members": {
        "analyzeText": {
          "type": "function"
        },
        "getText": {
          "type": "function"
        }
      }
    }
  },
  "coffeescript": {},
  "dburles:mongo-collection-instances": {},
  "houston:admin": {},
  "alanning:roles": {
    "Roles": {
      "type": "object",
      "members": {
        "GLOBAL_GROUP": {
          "type": "constant",
          "value": "__global_roles__"
        },
        "createRole": {
          "type": "function"
        },
        "deleteRole": {
          "type": "function"
        },
        "addUsersToRoles": {
          "type": "function"
        },
        "setUserRoles": {
          "type": "function"
        },
        "removeUsersFromRoles": {
          "type": "function"
        },
        "userIsInRole": {
          "type": "function"
        },
        "getRolesForUser": {
          "type": "function"
        },
        "getAllRoles": {
          "type": "function"
        },
        "getUsersInRole": {
          "type": "function"
        },
        "getGroupsForUser": {
          "type": "function"
        }
      }
    }
  },
  "less": {},
  "meteorhacks:inject-data": {
    "InjectData": {
      "type": "object"
    }
  },
  "meteorhacks:picker": {
    "Picker": {
      "type": "object",
      "members": {
        "filterFunction": {
          "type": "undefined"
        },
        "routes": {
          "type": "array"
        },
        "subRouters": {
          "type": "array"
        },
        "middlewares": {
          "type": "array"
        },
        "middleware": {
          "type": "function"
        },
        "route": {
          "type": "function"
        },
        "filter": {
          "type": "function"
        }
      }
    }
  },
  "meteorhacks:fast-render": {
    "FastRender": {
      "type": "object",
      "members": {
        "route": {
          "type": "function"
        },
        "onAllRoutes": {
          "type": "function"
        }
      }
    }
  },
  "jeremy:selectize": {},
  "djedi:sanitize-html": {
    "sanitizeHtml": {
      "type": "function",
      "members": {
        "defaults": {
          "type": "object",
          "members": {
            "allowedTags": {
              "type": "array"
            },
            "allowedAttributes": {
              "type": "object",
              "members": {
                "a": {
                  "type": "array"
                },
                "img": {
                  "type": "array"
                }
              }
            },
            "selfClosing": {
              "type": "array"
            },
            "allowedSchemes": {
              "type": "array"
            }
          }
        },
        "simpleTransform": {
          "type": "function"
        }
      }
    }
  },
  "chrismbeckett:toastr": {},
  "fongandrew:find-and-modify": {},
  "velocity:core": {
    "Velocity": {
      "type": "object",
      "members": {
        "startup": {
          "type": "function"
        },
        "getAppPath": {
          "type": "function"
        },
        "getTestsPath": {
          "type": "function"
        },
        "postProcessors": {
          "type": "array"
        },
        "addPostProcessor": {
          "type": "function"
        },
        "getReportGithubIssueMessage": {
          "type": "function"
        },
        "registerTestingFramework": {
          "type": "function"
        },
        "onTest": {
          "type": "function"
        },
        "Mirror": {
          "type": "object",
          "members": {
            "start": {
              "type": "function"
            }
          }
        },
        "ProxyPackageSync": {
          "type": "object",
          "members": {
            "regeneratePackageJs": {
              "type": "function"
            }
          }
        }
      }
    },
    "VelocityTestFiles": {
      "type": "object",
      "members": {
        "constructor": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "future": {
              "type": "function"
            },
            "deprecate": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "getAll": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "findAndModify": {
                  "type": "function",
                  "refID": 43
                },
                "find": {
                  "type": "function",
                  "refID": 45
                },
                "findOne": {
                  "type": "function",
                  "refID": 47
                },
                "insert": {
                  "type": "function",
                  "refID": 49
                },
                "update": {
                  "type": "function",
                  "refID": 51
                },
                "remove": {
                  "type": "function",
                  "refID": 53
                },
                "upsert": {
                  "type": "function",
                  "refID": 55
                },
                "allow": {
                  "type": "function",
                  "refID": 57
                },
                "deny": {
                  "type": "function",
                  "refID": 59
                }
              }
            }
          }
        },
        "findAndModify": {
          "ref": 43
        },
        "find": {
          "ref": 45
        },
        "findOne": {
          "ref": 47
        },
        "insert": {
          "ref": 49
        },
        "update": {
          "ref": 51
        },
        "remove": {
          "ref": 53
        },
        "upsert": {
          "ref": 55
        },
        "allow": {
          "ref": 57
        },
        "deny": {
          "ref": 59
        }
      }
    },
    "VelocityFixtureFiles": {
      "type": "object",
      "members": {
        "constructor": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "future": {
              "type": "function"
            },
            "deprecate": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "getAll": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "findAndModify": {
                  "type": "function",
                  "refID": 43
                },
                "find": {
                  "type": "function",
                  "refID": 45
                },
                "findOne": {
                  "type": "function",
                  "refID": 47
                },
                "insert": {
                  "type": "function",
                  "refID": 49
                },
                "update": {
                  "type": "function",
                  "refID": 51
                },
                "remove": {
                  "type": "function",
                  "refID": 53
                },
                "upsert": {
                  "type": "function",
                  "refID": 55
                },
                "allow": {
                  "type": "function",
                  "refID": 57
                },
                "deny": {
                  "type": "function",
                  "refID": 59
                }
              }
            }
          }
        },
        "findAndModify": {
          "ref": 43
        },
        "find": {
          "ref": 45
        },
        "findOne": {
          "ref": 47
        },
        "insert": {
          "ref": 49
        },
        "update": {
          "ref": 51
        },
        "remove": {
          "ref": 53
        },
        "upsert": {
          "ref": 55
        },
        "allow": {
          "ref": 57
        },
        "deny": {
          "ref": 59
        }
      }
    },
    "VelocityTestReports": {
      "type": "object",
      "members": {
        "constructor": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "future": {
              "type": "function"
            },
            "deprecate": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "getAll": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "findAndModify": {
                  "type": "function",
                  "refID": 43
                },
                "find": {
                  "type": "function",
                  "refID": 45
                },
                "findOne": {
                  "type": "function",
                  "refID": 47
                },
                "insert": {
                  "type": "function",
                  "refID": 49
                },
                "update": {
                  "type": "function",
                  "refID": 51
                },
                "remove": {
                  "type": "function",
                  "refID": 53
                },
                "upsert": {
                  "type": "function",
                  "refID": 55
                },
                "allow": {
                  "type": "function",
                  "refID": 57
                },
                "deny": {
                  "type": "function",
                  "refID": 59
                }
              }
            }
          }
        },
        "findAndModify": {
          "ref": 43
        },
        "find": {
          "ref": 45
        },
        "findOne": {
          "ref": 47
        },
        "insert": {
          "ref": 49
        },
        "update": {
          "ref": 51
        },
        "remove": {
          "ref": 53
        },
        "upsert": {
          "ref": 55
        },
        "allow": {
          "ref": 57
        },
        "deny": {
          "ref": 59
        }
      }
    },
    "VelocityAggregateReports": {
      "type": "object",
      "members": {
        "constructor": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "future": {
              "type": "function"
            },
            "deprecate": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "getAll": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "findAndModify": {
                  "type": "function",
                  "refID": 43
                },
                "find": {
                  "type": "function",
                  "refID": 45
                },
                "findOne": {
                  "type": "function",
                  "refID": 47
                },
                "insert": {
                  "type": "function",
                  "refID": 49
                },
                "update": {
                  "type": "function",
                  "refID": 51
                },
                "remove": {
                  "type": "function",
                  "refID": 53
                },
                "upsert": {
                  "type": "function",
                  "refID": 55
                },
                "allow": {
                  "type": "function",
                  "refID": 57
                },
                "deny": {
                  "type": "function",
                  "refID": 59
                }
              }
            }
          }
        },
        "findAndModify": {
          "ref": 43
        },
        "find": {
          "ref": 45
        },
        "findOne": {
          "ref": 47
        },
        "insert": {
          "ref": 49
        },
        "update": {
          "ref": 51
        },
        "remove": {
          "ref": 53
        },
        "upsert": {
          "ref": 55
        },
        "allow": {
          "ref": 57
        },
        "deny": {
          "ref": 59
        }
      }
    },
    "VelocityLogs": {
      "type": "object",
      "members": {
        "constructor": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "future": {
              "type": "function"
            },
            "deprecate": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "getAll": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "findAndModify": {
                  "type": "function",
                  "refID": 43
                },
                "find": {
                  "type": "function",
                  "refID": 45
                },
                "findOne": {
                  "type": "function",
                  "refID": 47
                },
                "insert": {
                  "type": "function",
                  "refID": 49
                },
                "update": {
                  "type": "function",
                  "refID": 51
                },
                "remove": {
                  "type": "function",
                  "refID": 53
                },
                "upsert": {
                  "type": "function",
                  "refID": 55
                },
                "allow": {
                  "type": "function",
                  "refID": 57
                },
                "deny": {
                  "type": "function",
                  "refID": 59
                }
              }
            }
          }
        },
        "findAndModify": {
          "ref": 43
        },
        "find": {
          "ref": 45
        },
        "findOne": {
          "ref": 47
        },
        "insert": {
          "ref": 49
        },
        "update": {
          "ref": 51
        },
        "remove": {
          "ref": 53
        },
        "upsert": {
          "ref": 55
        },
        "allow": {
          "ref": 57
        },
        "deny": {
          "ref": 59
        }
      }
    },
    "VelocityMirrors": {
      "type": "object",
      "members": {
        "constructor": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "future": {
              "type": "function"
            },
            "deprecate": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "getAll": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "findAndModify": {
                  "type": "function",
                  "refID": 43
                },
                "find": {
                  "type": "function",
                  "refID": 45
                },
                "findOne": {
                  "type": "function",
                  "refID": 47
                },
                "insert": {
                  "type": "function",
                  "refID": 49
                },
                "update": {
                  "type": "function",
                  "refID": 51
                },
                "remove": {
                  "type": "function",
                  "refID": 53
                },
                "upsert": {
                  "type": "function",
                  "refID": 55
                },
                "allow": {
                  "type": "function",
                  "refID": 57
                },
                "deny": {
                  "type": "function",
                  "refID": 59
                }
              }
            }
          }
        },
        "findAndModify": {
          "ref": 43
        },
        "find": {
          "ref": 45
        },
        "findOne": {
          "ref": 47
        },
        "insert": {
          "ref": 49
        },
        "update": {
          "ref": 51
        },
        "remove": {
          "ref": 53
        },
        "upsert": {
          "ref": 55
        },
        "allow": {
          "ref": 57
        },
        "deny": {
          "ref": 59
        }
      }
    }
  },
  "velocity:shim": {},
  "mike:mocha": {
    "MochaWeb": {
      "type": "object",
      "members": {
        "MeteorCollectionTestReporter": {
          "type": "function"
        },
        "testOnly": {
          "type": "function"
        }
      }
    },
    "MeteorCollectionTestReporter": {
      "type": "undefined"
    }
  },
  "practicalmeteor:loglevel": {
    "loglevel": {
      "type": "object",
      "members": {
        "createLogger": {
          "type": "function"
        },
        "createPackageLogger": {
          "type": "function"
        },
        "createAppLogger": {
          "type": "function"
        }
      }
    }
  },
  "velocity:meteor-stubs": {
    "MeteorStubs": {
      "type": "object",
      "members": {
        "install": {
          "type": "function"
        },
        "uninstall": {
          "type": "function"
        }
      }
    }
  },
  "alanning:package-stubber": {
    "PackageStubber": {
      "type": "object",
      "members": {
        "functionReplacementStr": {
          "type": "constant",
          "value": "function emptyFn () {}"
        },
        "validate": {
          "type": "object",
          "members": {
            "stubPackages": {
              "type": "function"
            },
            "deepCopyReplaceFn": {
              "type": "function"
            }
          }
        },
        "stubPackages": {
          "type": "function"
        },
        "listTestPackages": {
          "type": "function"
        },
        "listPackages": {
          "type": "function"
        },
        "listPackageExports": {
          "type": "function"
        },
        "deepCopyReplaceFn": {
          "type": "function"
        },
        "shouldIgnorePackage": {
          "type": "function"
        },
        "replaceFnPlaceholders": {
          "type": "function"
        },
        "stubGenerators": {
          "type": "object",
          "members": {
            "function": {
              "type": "function"
            },
            "object": {
              "type": "function"
            },
            "string": {
              "type": "function"
            },
            "number": {
              "type": "function"
            },
            "undefined": {
              "type": "function"
            }
          }
        },
        "generateStubJsCode": {
          "type": "function"
        }
      }
    }
  },
  "sanjo:karma": {
    "Karma": {
      "type": "object",
      "members": {
        "start": {
          "type": "function"
        },
        "setConfig": {
          "type": "function"
        }
      }
    },
    "KarmaInternals": {
      "type": "object",
      "members": {
        "karmaChilds": {
          "type": "object",
          "members": {
            "jasmine-client-unit": {
              "type": "object",
              "members": {
                "taskName": {
                  "type": "constant",
                  "value": "jasmine-client-unit"
                },
                "appPath": {
                  "type": "constant",
                  "value": "/home/flavien/App/42favs-folder/42favs"
                },
                "pid": {
                  "type": "constant",
                  "value": 2001
                },
                "getTaskName": {
                  "type": "function"
                },
                "getChild": {
                  "type": "function"
                },
                "getPid": {
                  "type": "function"
                },
                "isDead": {
                  "type": "function"
                },
                "isRunning": {
                  "type": "function"
                },
                "readPid": {
                  "type": "function"
                },
                "spawn": {
                  "type": "function"
                },
                "kill": {
                  "type": "function"
                }
              }
            }
          }
        },
        "getKarmaChild": {
          "type": "function"
        },
        "setKarmaChild": {
          "type": "function"
        },
        "startKarmaServer": {
          "type": "function"
        },
        "writeKarmaConfig": {
          "type": "function"
        },
        "generateKarmaConfig": {
          "type": "function"
        },
        "readKarmaConfig": {
          "type": "function"
        },
        "getConfigPath": {
          "type": "function"
        },
        "getAppPath": {
          "type": "function"
        },
        "getKarmaPath": {
          "type": "function"
        }
      }
    }
  },
  "sanjo:jasmine": {
    "Jasmine": {
      "type": "object",
      "members": {
        "onTest": {
          "type": "function"
        }
      }
    }
  },
  "velocity:html-reporter": {},
  "session": {},
  "service-configuration": {
    "ServiceConfiguration": {
      "type": "object",
      "members": {
        "configurations": {
          "type": "object",
          "members": {
            "constructor": {
              "type": "function",
              "refID": 2,
              "members": {
                "Cursor": {
                  "type": "function",
                  "members": {
                    "prototype": {
                      "type": "object",
                      "members": {
                        "rewind": {
                          "type": "function"
                        },
                        "forEach": {
                          "type": "function"
                        },
                        "getTransform": {
                          "type": "function"
                        },
                        "map": {
                          "type": "function"
                        },
                        "fetch": {
                          "type": "function"
                        },
                        "count": {
                          "type": "function"
                        },
                        "observe": {
                          "type": "function"
                        },
                        "observeChanges": {
                          "type": "function"
                        }
                      }
                    }
                  }
                },
                "ObjectID": {
                  "type": "function",
                  "members": {
                    "prototype": {
                      "type": "object",
                      "members": {
                        "toString": {
                          "type": "function"
                        },
                        "equals": {
                          "type": "function"
                        },
                        "clone": {
                          "type": "function"
                        },
                        "typeName": {
                          "type": "function"
                        },
                        "getTimestamp": {
                          "type": "function"
                        },
                        "toHexString": {
                          "type": "function",
                          "refID": 33
                        },
                        "toJSONValue": {
                          "ref": 33
                        },
                        "valueOf": {
                          "ref": 33
                        }
                      }
                    }
                  }
                },
                "future": {
                  "type": "function"
                },
                "deprecate": {
                  "type": "function"
                },
                "get": {
                  "type": "function"
                },
                "getAll": {
                  "type": "function"
                },
                "prototype": {
                  "type": "object",
                  "members": {
                    "constructor": {
                      "ref": 2
                    },
                    "findAndModify": {
                      "type": "function",
                      "refID": 44
                    },
                    "find": {
                      "type": "function",
                      "refID": 46
                    },
                    "findOne": {
                      "type": "function",
                      "refID": 48
                    },
                    "insert": {
                      "type": "function",
                      "refID": 50
                    },
                    "update": {
                      "type": "function",
                      "refID": 52
                    },
                    "remove": {
                      "type": "function",
                      "refID": 54
                    },
                    "upsert": {
                      "type": "function",
                      "refID": 56
                    },
                    "allow": {
                      "type": "function",
                      "refID": 58
                    },
                    "deny": {
                      "type": "function",
                      "refID": 60
                    }
                  }
                }
              }
            },
            "findAndModify": {
              "ref": 44
            },
            "find": {
              "ref": 46
            },
            "findOne": {
              "ref": 48
            },
            "insert": {
              "ref": 50
            },
            "update": {
              "ref": 52
            },
            "remove": {
              "ref": 54
            },
            "upsert": {
              "ref": 56
            },
            "allow": {
              "ref": 58
            },
            "deny": {
              "ref": 60
            }
          }
        },
        "ConfigError": {
          "type": "function"
        }
      }
    }
  },
  "velocity:test-proxy": {},
  "velocity:node-soft-mirror": {}
}
var globalContext = (typeof global !== 'undefined') ? global : window
var originalContext = []

/*
originalContext = [
  {
    context: window,
    propertyName: 'Meteor',
    value: {}
  }
]
*/

function _saveOriginal(context, propertyName) {
  originalContext.push({
    context: context,
    propertyName: propertyName,
    value: context[propertyName]
  })
}

function _restoreOriginal(original) {
  original.context[original.propertyName] = original.value
}

function restoreOriginals() {
  originalContext.forEach(_restoreOriginal)
  originalContext = []
}

function loadMocks() {
  for (var packageName in packageMetadata) {
    for (var packageExportName in packageMetadata[packageName]) {
      _saveOriginal(globalContext, packageExportName)
      var packageExport = packageMetadata[packageName][packageExportName]
      globalContext[packageExportName] = ComponentMocker.generateFromMetadata(packageExport)
    }
  }
}

beforeEach(loadMocks)
afterEach(restoreOriginals)
