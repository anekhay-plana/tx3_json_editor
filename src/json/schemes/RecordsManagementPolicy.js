export const RecordsManagementPolicySchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "Records Management Policy": {
            "type": "object",
            "properties": {
                "Version": {
                    "validation": {
                        "type":"string",
                        "maxLength": 25,
                        "minLength": 3,
                    },
                    "type": "string"
                },
                "Schema": {
                    "type": "object",
                    "properties": {
                        "ID": {
                            "validation": {
                                "type":"url",
                                "maxLength": 25,
                                "minLength": 3,
                            },
                            "type": "string"
                        },
                        "Major": {
                            "validation": {
                                "type":"number",
                                "maxLength": 1,
                            },
                            "type": "string"
                        },
                        "Minor": {
                            "validation": {
                                "type":"number",
                                "maxLength": 1,
                            },
                            "type": "string"
                        }
                    },
                    "required": ["ID", "Major", "Minor"]
                },
                "Record Types": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "Name": {
                                "validation": {
                                    "type":"string",
                                    "maxLength": 25,
                                    "minLength": 3,
                                },
                                "type": "string"
                            },
                            "Definitions": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "Systems": {
                                            "type": "array",
                                            "items": {
                                                "validation": {
                                                    "type":"string",
                                                    "maxLength": 25,
                                                    "minLength": 3,
                                                },
                                                    "type": "string"
                                                }

                                        },
                                        "Aliases": {
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "properties": {
                                                    "Policy Field": {
                                                        "validation": {
                                                            "type":"string",
                                                            "maxLength": 25,
                                                            "minLength": 3,
                                                        },
                                                        "type": "string"
                                                    },
                                                    "System Field": {
                                                        "validation": {
                                                            "type":"string",
                                                            "maxLength": 25,
                                                            "minLength": 3,
                                                        },
                                                        "type": "string"
                                                    }
                                                },
                                                "required": [
                                                    "Policy Field",
                                                    "System Field"
                                                ]
                                            }

                                        },
                                        "Item Types": {
                                            "type": "array",
                                            "items": {
                                                "validation": {
                                                    "type":"string",
                                                    "maxLength": 25,
                                                    "minLength": 3,
                                                },
                                                "type": "string"
                                            }

                                        },
                                        "Singular Name": {
                                            "validation": {
                                                "type":"string",
                                                "maxLength": 25,
                                                "minLength": 3,
                                            },
                                            "type": "string"
                                        },
                                        "Plural Name": {
                                            "validation": {
                                                "type":"string",
                                                "maxLength": 25,
                                                "minLength": 3,
                                            },
                                            "type": "string"
                                        },
                                        "Ownership Description": {
                                            "validation": {
                                                "type":"string",
                                                "maxLength": 25,
                                                "minLength": 3,
                                            },
                                            "type": "string"
                                        },
                                        "Content Originator": {
                                            "validation": {
                                                "type":"string",
                                                "maxLength": 25,
                                                "minLength": 3,
                                            },
                                            "type": "string"
                                        }
                                    },
                                    "required": [
                                        "Systems",
                                        "Aliases",
                                        "Item Types",
                                        "Singular Name",
                                        "Plural Name",
                                        "Ownership Description",
                                        "Content Originator"
                                    ]
                                }

                            },
                            "Fields": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "Name": {
                                            "validation": {
                                                "type":"string",
                                                "maxLength": 25,
                                                "minLength": 3,
                                            },
                                            "type": "string"
                                        },
                                        "Is Data": {
                                            "validation": {
                                                "type":"string",
                                                "maxLength": 25,
                                                "minLength": 3,
                                            },
                                            "type": "string",
                                            "enum":["Yes","No"]
                                        }
                                    },
                                    "required": [
                                        "Name",
                                        "Is Data"
                                    ]
                                },
                            }
                        }
                    },
                    "required": [
                        "Name",
                        "Definitions",
                        "Fields"
                    ]
                },

            }
        },
        "required": [
            "Version",
            "Schema",
            "Record Types"
        ]
    }
}
