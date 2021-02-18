import * as yup from 'yup'

export const yupSchema = yup.object({
    "Synchronization Policy": yup.object({
        "Version":yup.string().required().required('required'),
        "Locations": yup.array().of(
            yup.object({
                "System": yup.string().required('required'),
                "Name": yup.string().required('required'),
                "Server": yup.string()
                    .url('Enter valid url')
                    .required('required'),
                "Service Account": yup.string().required('required'),
                "Service Password": yup.string().required('required'),
                "Urls": yup.object({
                    "Browser":yup.string()
                        .url('Enter valid url')
                        .required('required'),
                    "API": yup.string()
                        .url('Enter valid url')
                        .required('required'),
                })
            })
        )
    })
})
