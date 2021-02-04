export const ApprovalPolicySchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "Approval Policy": {
            "type": "object",
            "required": [
                "Version",
                "Schema",
                "Approval Groups"
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
                "Approval Groups": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "Route Templates": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "required": [
                            "Name",
                            "Rank",
                            "Record Types",
                            "Levels",
                            "Constraints"
                        ],
                        "properties": {
                            "Name": {"type": "string"},
                            "Rank": {"type": "string"},
                            "Record Types": {"type": "string"},
                            "Levels": {
                                "type":"array",
                                "item":{
                                    "type":"object",
                                    "properties": {
                                        "Name":{"type": "string"},
                                        "Approvers":{
                                            "type": "array",
                                            "item":{
                                                "type": "string"
                                            }
                                        }
                                    }
                                }
                            },
                            "Constraints":{
                                "type": "array",
                                "items":{
                                    "type": "object",
                                    "properties": {
                                        "Type":{"type": "string"},
                                        "Name":{"type": "string"},
                                        "Values":{
                                            "type": "array",
                                            "item":{
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
}

