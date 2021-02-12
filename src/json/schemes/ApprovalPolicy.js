export const ApprovalPolicySchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "Approval Policy": {
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
                "Approval Groups": {
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
                "Route Templates": {
                    "type": "array",
                    "items":
                        {
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
                                "Rank": {
                                    "validation": {
                                        "type":"number",
                                        "maxLength": 1,
                                    },
                                    "type": "string"
                                },
                                "Record Types": {
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
                                "Levels": {
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
                                            "Approvers": {
                                                "type": "array",
                                                "items": {
                                                    "validation": {
                                                        "type":"string",
                                                        "maxLength": 25,
                                                        "minLength": 3,
                                                    },
                                                    "type": "string",
                                                },
                                            }
                                        },
                                        "required": [
                                            "Name",
                                            "Approvers"
                                        ]
                                    },

                                },
                                "Constraints": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "Type": {
                                                "validation": {
                                                    "type":"string",
                                                    "maxLength": 25,
                                                    "minLength": 3,
                                                },
                                                "type": "string"
                                            },
                                            "Name": {
                                                "validation": {
                                                    "type":"string",
                                                    "maxLength": 25,
                                                    "minLength": 3,
                                                },
                                                "type": "string"
                                            },
                                            "Values": {

                                                "type": "array",
                                                "items": {
                                                    "validation": {
                                                        "type":"string",
                                                        "maxLength": 25,
                                                        "minLength": 3,
                                                    },
                                                    "type": "string"
                                                }

                                            }
                                        },
                                        "required": [
                                            "Type",
                                            "Name",
                                            "Values"
                                        ]
                                    }

                                }
                            }
                        }
                }
            },
            "required": [
                "Name",
                "Rank",
                "Record Types",
                "Levels"
            ]
        }
    }
}
