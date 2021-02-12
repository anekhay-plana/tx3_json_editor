import InputWidget from "./InputWidget/InputWidget";

export const ApprovalPolicyUISchema = {
    "Approval Policy": {
        "ui:order": [
            "Version",
            "Schema",
            "Approval Groups",
            "Route Templates",
        ],
        "Version": {
            "ui:widget": InputWidget
        },
        "Schema": {
            "ID": {
                "ui:widget": InputWidget
            },
            "Major": {
                "ui:widget": InputWidget
            },
            "Minor": {
                "ui:widget": InputWidget
            }
        },
        "Approval Groups": {
            items: {
                "ui:widget": InputWidget,
            },
            "ui:options": {
                color: '#f7ebd9',
                orderable: false
            }
        },
        "Route Templates": {
            "ui:options": {
                orderable: false
            },
            items: {
                "Name": {
                    "ui:widget": InputWidget
                },
                "Rank": {
                    "ui:widget": InputWidget
                },
                "Record Types": {
                    items: {
                        "ui:widget": InputWidget,
                    },
                    "ui:options": {
                        orderable: false
                    }
                },
                "Levels": {
                    "ui:options": {
                        orderable: false
                    },
                    items: {
                        "Name": {
                            "ui:widget": InputWidget
                        },
                        "Approvers": {
                            items: {
                                "ui:widget": InputWidget
                            },
                            "ui:options": {
                                orderable: false
                            }
                        }
                    }
                },
                "Constraints": {
                    items: {
                        "Type":{
                            "ui:widget": InputWidget
                        },
                        "Name":{
                            "ui:widget": InputWidget
                        },
                        "Values":{
                            items: {
                                "ui:widget": InputWidget
                            }
                        }
                    },
                }

            }
        }
    }
}
