import InputWidget from "./InputWidget/InputWidget";

export const RecordsManagementPolicyUISchema = {
    "Records Management Policy": {
        "ui:order": [
            "Version",
            "Schema",
            "Record Types",
        ],
        "Version": {"ui:widget": InputWidget},
        "Schema": {
            "ID": {"ui:widget": InputWidget},
            "Major": {"ui:widget": InputWidget},
            "Minor": {"ui:widget": InputWidget}
        },
        "Record Types": {
            "ui:options": {orderable: false},
            items: {
                "Name": {"ui:widget": InputWidget},
                "Definitions": {
                    "ui:options": {orderable: false},
                    items: {
                        "Systems": {
                            items:{"ui:widget": InputWidget},
                            "ui:options": {orderable: false}
                        },
                        "Aliases": {
                            items: {
                                "Policy Field": {"ui:widget": InputWidget},
                                "System Field": {"ui:widget": InputWidget},
                            },
                            "ui:options": {orderable: false}
                        },
                        "Item Types": {
                            items:{"ui:widget": InputWidget},
                            "ui:options": {orderable: false},
                        },
                        "Singular Name": {"ui:widget": InputWidget},
                        "Plural Name": {"ui:widget": InputWidget},
                        "Ownership Description": {"ui:widget": InputWidget},
                        "Content Originator": {"ui:widget": InputWidget},
                    },
                },
                "Fields": {
                    items: {
                        "Name": {"ui:widget": InputWidget},
                        "Is Data": {"ui:widget": InputWidget},
                    },
                    "ui:options": {orderable: false}
                }
            },
        }
    },
}

