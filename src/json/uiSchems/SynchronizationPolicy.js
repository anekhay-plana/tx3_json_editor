import InputWidget from "./InputWidget/InputWidget";

export const SynchronizationPolicyUISchema = {
    "Synchronization Policy": {
        "ui:order": [
            "Version",
            "Locations"
        ],
        "Version": {
            "ui:widget": InputWidget
        },
        "Locations": {
            items:{
                "System":{"ui:widget": InputWidget},
                "Name":{"ui:widget": InputWidget},
                "Server":{"ui:widget": InputWidget},
                "Service Account":{"ui:widget": InputWidget},
                "Service Password":{"ui:widget": InputWidget},
                "Urls":{
                    "Browser":{"ui:widget": InputWidget},
                    "API":{"ui:widget": InputWidget}
                },
            },
            "ui:options": {
                orderable: false
            }
        }
    }
}
