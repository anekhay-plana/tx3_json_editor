export const SynchronizationPolicySchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "Synchronization Policy": {
            "type": "object",
            "required": ["Version", "Locations"],
            "properties": {
                "Version": {
                    "validation": {
                        "type":"string",
                        "maxLength": 25,
                        "minLength": 3,
                    },
                    "type": "string",
                },
                "Locations": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "required": [
                            "System",
                            "Name",
                            "Server",
                            "Service Account",
                            "Service Password",
                            "Urls"
                        ],
                        "properties": {
                            "System": {
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
                            "Server": {
                                "validation": {
                                    "type":"url",
                                    "maxLength": 25,
                                    "minLength": 3,
                                },
                                "type": "string"
                            },
                            "Service Account": {
                                "validation": {
                                    "type":"string",
                                    "maxLength": 25,
                                    "minLength": 3,
                                },
                                "type": "string"
                            },
                            "Service Password": {
                                "validation": {
                                    "type":"string",
                                    "maxLength": 25,
                                    "minLength": 3,
                                },
                                "type": "string"
                            },
                            "Urls": {
                                "type": "object",
                                "properties": {
                                    "Browser": {
                                        "validation": {
                                            "type":"url",
                                            "maxLength": 25,
                                            "minLength": 3,
                                        },
                                        "type": "string"
                                    },
                                    "API": {
                                        "validation": {
                                            "type":"url",
                                            "maxLength": 25,
                                            "minLength": 3,
                                        },
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
