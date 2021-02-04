export const SysPolicySchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "Synchronization Policy": {
            "type": "object",
            "required": ["Version", "Locations"],
            "properties": {
                "Version": {
                    "type": "string",
                    "const": "Version"
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
                            "System": {"type": "string"},
                            "Name": {"type": "string"},
                            "Server": {"type": "string"},
                            "Service Account": {"type": "string"},
                            "Service Password": {"type": "string"},
                            "Urls": {
                                "type": "object",
                                "properties": {
                                    "Browser": {"type": "string"},
                                    "API": {"type": "string"}
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
