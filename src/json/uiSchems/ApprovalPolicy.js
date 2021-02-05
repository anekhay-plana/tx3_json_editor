export const ApprovalPolicyUISchema = {
    "Approval Policy": {
        "ui:order": [
            "Version",
            "Schema",
            "Approval Groups",
            "Route Templates",
        ],
        "Approval Groups": {
            "ui:options": {
                orderable: false
            }
        },
        "Route Templates": {
            "ui:options": {
                orderable: false
            },
            items: {
                "Record Types":{
                    "ui:options": {
                        orderable: false
                    }
                },
                "Levels": {
                    "ui:options": {
                        orderable: false
                    },
                    items: {
                        "Approvers": {
                            "ui:options": {
                                orderable: false
                            }
                        }
                    }
                }
            }
        }
    }
}
