export const RecordsManagementPolicyUISchema = {
    "Records Management Policy": {
        "ui:order": [
            "Version",
            "Schema",
            "Record Types",
        ],
        "Record Types": {
            "ui:options": {
                orderable: false
            },
            items: {
                "Definitions": {
                    "ui:options": {
                        orderable: false
                    },
                    items: {
                        "Systems": {
                            "ui:options": {
                                orderable: false
                            }
                        },
                        "Aliases": {
                            "ui:options": {
                                orderable: false
                            }
                        },
                        "Item Types": {
                            "ui:options": {
                                orderable: false
                            }
                        },
                    },

                },
                "Fields": {
                        "ui:options": {
                            orderable: false
                        }
                }
            }
        },
    }
}
