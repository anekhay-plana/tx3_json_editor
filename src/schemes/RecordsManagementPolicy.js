export const ApprovalPolicySchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "Approval Policy": {
            "type": "object",
            "required": [
                "Version",
                "Schema",
                "Record Types"
            ],
            "properties": {
                "Version": {
                    "type": "string",
                },
                "Schema": {
                    "type": "object",
                    "required": ["ID", "Major", "Minor"],
                    "properties": {
                        "ID": {"type": "string"},
                        "Major": {"type": "string"},
                        "Minor": {"type": "string"},

                    }
                },
                "Record Types":{
                    "type": "array",
                    "items":{
                        "type": "object",
                        "properties":{
                            "Name": {"type": "string"},
                            "Definitions": {
                                "type":"array",
                                "items":{
                                    "type": "object",
                                    "properties":{
                                        "Systems":{
                                            "type":"array",
                                            "items":{
                                                "type":"string"
                                            }
                                        },
                                        "Aliases":{
                                            "type":"array",
                                            "items":{
                                                "type":"object",
                                                "properties":{
                                                    "Policy Field":{"type":"string"},
                                                    "System Field":{"type":"string"}
                                                }
                                            }
                                        },
                                        "Item Types": {
                                            "type": "array",
                                            "items": {
                                                "type": "string"
                                            }
                                        },
                                        "Singular Name":{"type":"string"},
                                        "Plural Name":{"type":"string"},
                                        "Ownership Description":{"type":"string"},
                                        "Content Originator":{"type":"string"}
                                    },
                                    "Fields":{
                                        "type":"array",
                                        "items":{
                                            "type": "object",
                                            "properties":{
                                                "Name":{"type":"string"},
                                                "Is Data":{"type":"string"}
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
}
